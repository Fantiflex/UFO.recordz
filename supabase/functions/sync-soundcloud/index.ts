import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

export default {
  fetch: withSupabase(
    { auth: ["secret"] },

    async (_req, ctx) => {
      try {
        const soundcloudClientId = Deno.env.get("SOUNDCLOUD_CLIENT_ID");
        const soundcloudClientSecret = Deno.env.get(
          "SOUNDCLOUD_CLIENT_SECRET"
        );

        if (!soundcloudClientId || !soundcloudClientSecret) {
          return Response.json(
            {
              error: "Missing SoundCloud credentials",
            },
            { status: 500 }
          );
        }

        // 1. Get SoundCloud OAuth token
        const tokenResponse = await fetch(
          "https://secure.soundcloud.com/oauth/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "client_credentials",
              client_id: soundcloudClientId,
              client_secret: soundcloudClientSecret,
            }),
          }
        );

        if (!tokenResponse.ok) {
          const errorText = await tokenResponse.text();

          return Response.json(
            {
              error: "Could not get SoundCloud token",
              details: errorText,
            },
            { status: tokenResponse.status }
          );
        }

        const tokenData = await tokenResponse.json();

        return Response.json({
          success: true,
          message: "Connected successfully to SoundCloud",
          token_type: tokenData.token_type,
        });
      } catch (error) {
        console.error(error);

        return Response.json(
          {
            error: "Unexpected error",
          },
          { status: 500 }
        );
      }
    }
  ),
};