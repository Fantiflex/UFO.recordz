import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

export default {
  fetch: withSupabase(
    { auth: ["secret"] },

    async (_req, ctx) => {
      try {
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

        let tracks: any[] = [];

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

            // Old/non-paginated response
            nextUrl = null;
          } else {
            tracks.push(...(tracksData.collection ?? []));

            // Follow SoundCloud pagination
            nextUrl = tracksData.next_href ?? null;
          }
        }
        // =========================
        // 5. Transform SoundCloud data
        //    to match YOUR table columns
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

            return {
              "Track ID": track.urn,

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

              // Not provided reliably by SoundCloud,
              // so we leave these empty for manual editing.
              "Link Bandcamp": null,

              "Graphist": null,
            };
          });

        // =========================
        // 6. Save to Supabase
        // =========================

        if (releases.length === 0) {
          return Response.json({
            success: true,
            soundcloud_user: user.username,
            tracks_found: 0,
            releases_saved: 0,
            message: "No SoundCloud tracks found",
          });
        }

        const { error: dbError } = await ctx.supabaseAdmin
          .from("releases")
          .upsert(releases, {
            onConflict: "Track ID",
          });

        if (dbError) {
          return Response.json(
            {
              error: "Could not save releases to Supabase",
              details: dbError.message,
            },
            { status: 500 }
          );
        }

        // =========================
        // 7. Success
        // =========================

        return Response.json({
          success: true,
          soundcloud_user: user.username,
          tracks_found: tracks.length,
          releases_saved: releases.length,
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