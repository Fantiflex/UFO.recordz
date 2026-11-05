import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";



export default {
  fetch: withSupabase(
    { auth: ["secret"] },

    async (req, ctx) => {
      try {
        
        if (req.method !== "POST") {
          return Response.json(
            { error: "Method not allowed" },
            { status: 405 }
          );
        }

        const body = await req.json().catch(() => ({}));
        const apply = body.mode === "apply";

        if (apply && body.confirm !== "SYNC_SOUNDCLOUD") {
          return Response.json(
            { error: "Explicit confirmation required" },
            { status: 400 }
          );
        }
        // =========================
        // 1. Load SoundCloud secrets
        // =========================

        const soundcloudClientId =
          Deno.env.get("SOUNDCLOUD_CLIENT_ID")?.trim();

        const soundcloudClientSecret =
          Deno.env.get("SOUNDCLOUD_CLIENT_SECRET")?.trim();

        if (!soundcloudClientId || !soundcloudClientSecret) {
          return Response.json(
            {
              error: "Missing SoundCloud credentials",
            },
            { status: 500 }
          );
        }

        // =========================
        // 2. Get SoundCloud OAuth token
        // =========================

        const credentials = btoa(
          `${soundcloudClientId}:${soundcloudClientSecret}`
        );

        const tokenResponse = await fetch(
          "https://secure.soundcloud.com/oauth/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
              Authorization: `Basic ${credentials}`,
            },
            body: new URLSearchParams({
              grant_type: "client_credentials",
            }),
          }
        );

        if (!tokenResponse.ok) {
          const details = await tokenResponse.text();

          return Response.json(
            {
              error: "Could not get SoundCloud token",
              details,
            },
            { status: tokenResponse.status }
          );
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        if (!accessToken) {
          return Response.json(
            {
              error: "SoundCloud returned no access token",
            },
            { status: 500 }
          );
        }

        // =========================
        // 3. Resolve UFO.recordz profile
        // =========================

        const soundcloudProfileUrl =
          "https://soundcloud.com/uforecordz";

        const resolveUrl =
          "https://api.soundcloud.com/resolve?url=" +
          encodeURIComponent(soundcloudProfileUrl);

        const userResponse = await fetch(resolveUrl, {
          headers: {
            Accept: "application/json; charset=utf-8",
            Authorization: `OAuth ${accessToken}`,
          },
        });

        if (!userResponse.ok) {
          const details = await userResponse.text();

          return Response.json(
            {
              error: "Could not resolve UFO.recordz SoundCloud profile",
              details,
            },
            { status: userResponse.status }
          );
        }

        const user = await userResponse.json();

        if (!user.urn) {
          return Response.json(
            {
              error: "SoundCloud profile has no URN",
            },
            { status: 500 }
          );
        }

        // =========================
        // 4. Fetch ALL tracks
        // =========================

        const tracks: any[] = [];

        let nextUrl: string | null =
          `https://api.soundcloud.com/users/${encodeURIComponent(
            user.urn
          )}/tracks?limit=100&linked_partitioning=true`;

        while (nextUrl) {
          const tracksResponse = await fetch(nextUrl, {
            headers: {
              Accept: "application/json; charset=utf-8",
              Authorization: `OAuth ${accessToken}`,
            },
          });

          if (!tracksResponse.ok) {
            const details = await tracksResponse.text();

            return Response.json(
              {
                error: "Could not fetch SoundCloud tracks",
                details,
              },
              { status: tracksResponse.status }
            );
          }

          const tracksData = await tracksResponse.json();

          if (Array.isArray(tracksData)) {
            tracks.push(...tracksData);

            // Non-paginated response
            nextUrl = null;
          } else {
            tracks.push(...(tracksData.collection ?? []));

            // Follow SoundCloud pagination
            nextUrl = tracksData.next_href ?? null;
          }
        }

        // =========================
        // 5. Transform SoundCloud data
        // =========================

        const releases = tracks
          .filter((track: any) => track.urn)
          .map((track: any) => {
            const artist =
              track.publisher_metadata?.artist ??
              track.user?.username ??
              "UFO.recordz";

            const releaseDate =
              track.release_date ??
              track.created_at?.split("T")[0] ??
              null;
            const catalogMatch = track.title?.match(/\[UFO(\d{3})\]/i);

            const catalogNumber = catalogMatch
              ? Number(catalogMatch[1])
              : null;

            const catalogCode = catalogMatch
              ? `UFO${catalogMatch[1]}`
              : null;
            return {
              "Track ID": track.urn,
              
              "catalog_code": catalogCode,
              "catalog_number": catalogNumber,
              "Artist": artist,

              "Track Name": track.title ?? "Untitled",

              "Track Link": track.permalink_url ?? null,

              "Release Date": releaseDate,

              // SoundCloud duration is in milliseconds.
              // Store length in seconds.
              "Length":
                typeof track.duration === "number"
                  ? track.duration / 1000
                  : null,

              "Link Soundcloud": track.permalink_url ?? null,
              

              // Artwork from SoundCloud.
              // Fallback to the profile image if no track artwork exists.
              "Artwork URL":
                track.artwork_url ??
                track.user?.avatar_url ??
                null,

              // Manual fields
            };
          });

        
        // =========================
        // 6. Synchronize releases
        // =========================

        type Release = (typeof releases)[number];

        const { data: existing, error: readError } =
          await ctx.supabaseAdmin
            .from("releases")
            .select('"Track ID"');

        if (readError) throw readError;

        const existingIds = new Set(
          (existing ?? []).map((row) => row["Track ID"])
        );

        const toInsert: Release[] = [];
        const toUpdate: Release[] = [];

        for (const release of releases) {
          if (existingIds.has(release["Track ID"])) {
            toUpdate.push(release);
          } else {
            toInsert.push(release);
          }
        }
        const missingCatalog = releases
          .filter((release) => release.catalog_number === null)
          .map((release) => release["Track Name"]);
        // Preview only — no database writes
        if (!apply) {
          return Response.json({
            success: true,
            mode: "dry_run",
            tracks_found: tracks.length,
            to_insert: toInsert.length,
            to_update: toUpdate.length,
            missing_catalog_count: missingCatalog.length,
            missing_catalog: missingCatalog,  
            sample: releases.slice(0, 5).map((release) => ({
              title: release["Track Name"],
              catalog_code: release.catalog_code,
              catalog_number: release.catalog_number,
            })),
          });
        }

        // Insert new releases
        if (toInsert.length > 0) {
          const { error } = await ctx.supabaseAdmin
            .from("releases")
            .insert(toInsert);

          if (error) throw error;
        }

        // Update existing releases without touching manual fields
        for (const release of toUpdate) {
          const { "Track ID": trackId, ...updates } = release;

          const { error } = await ctx.supabaseAdmin
            .from("releases")
            .update(updates)
            .eq("Track ID", trackId);

          if (error) throw error;
        }

        // =========================
        // 7. Success
        // =========================

        return Response.json({
          success: true,
          mode: "apply",
          soundcloud_user: user.username,
          tracks_found: tracks.length,
          inserted: toInsert.length,
          updated: toUpdate.length,
        });

      } catch (error) {
        console.error("SoundCloud sync error:", error);

        return Response.json(
          {
            error: "Unexpected error",
            details:
              error instanceof Error
                ? error.message
                : String(error),
          },
          { status: 500 }
        );
      }
    }
  ),
};