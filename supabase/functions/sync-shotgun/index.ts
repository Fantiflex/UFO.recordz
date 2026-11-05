
import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

type ShotgunEvent = {
  id: string | number;
  name?: string;
  startTime?: string;
  endTime?: string;
  timezone?: string;
  coverUrl?: string;
  description?: string;
  url?: string;
};

type ExistingEvent = {
  id: number;
  Name: string;
  shotgun_id: string | null;
  cover_image: string | null;
  description: string | null;
  link_shotgun: string | null;
  Date: string | null;
  Horaires: string | null;
  end_time: string | null;
};

const PAGE_SIZE = 20;
const MAX_PAGES = 100;

function localDateTime(
  iso?: string,
  timezone = "Europe/Paris"
) {
  if (!iso) return { date: null, time: null };

  const parsed = new Date(iso);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error("Invalid event date");
  }

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(parsed);

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value;

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}:${get("second")}`,
  };
}

function eventUpdates(event: ShotgunEvent) {
  const { date, time } = localDateTime(
    event.startTime,
    event.timezone
  );

  return {
    cover_image: event.coverUrl ?? null,
    description: event.description ?? null,
    link_shotgun: event.url ?? null,
    Date: date,
    Horaires: time,
    end_time: event.endTime ?? null,
  };
}

async function fetchShotgunEvents(
  organizerId: string,
  apiToken: string
): Promise<ShotgunEvent[]> {
  const baseUrl =
    `https://smartboard-api.shotgun.live/api/shotgun/organizers/` +
    `${encodeURIComponent(organizerId)}/events`;

  async function fetchPage(past = false, page = 0) {
    const url = new URL(baseUrl);

    url.searchParams.set("key", apiToken);

    if (past) {
      url.searchParams.set("past_events", "true");
      url.searchParams.set("page", String(page));
      url.searchParams.set("limit", String(PAGE_SIZE));
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Shotgun API returned HTTP ${response.status}`
      );
    }

    const json = await response.json();

    if (!Array.isArray(json.data)) {
      throw new Error("Unexpected Shotgun response");
    }

    return json.data as ShotgunEvent[];
  }

  const upcoming = await fetchPage();
  const past: ShotgunEvent[] = [];

  let completed = false;

  for (let page = 0; page < MAX_PAGES; page++) {
    const batch = await fetchPage(true, page);

    past.push(...batch);

    if (batch.length < PAGE_SIZE) {
      completed = true;
      break;
    }
  }

  if (!completed) {
    throw new Error("Shotgun pagination limit reached");
  }

  const unique = new Map<string, ShotgunEvent>();

  for (const event of [...upcoming, ...past]) {
    unique.set(String(event.id), event);
  }

  return [...unique.values()];
}

export default {
  fetch: withSupabase(
    { auth: ["secret"] },

    async (req, ctx) => {
      if (req.method !== "POST") {
        return Response.json(
          { error: "Method not allowed" },
          { status: 405 }
        );
      }

      try {
        const body = await req.json().catch(() => ({}));

        const apply = body.mode === "apply";

        if (apply && body.confirm !== "SYNC_MATCHED_EVENTS") {
        return Response.json(
            { error: "Explicit confirmation required" },
            { status: 400 }
        );
        }
        const organizerId =
          Deno.env.get("SHOTGUN_ORGANIZER_ID")?.trim();

        const apiToken =
          Deno.env.get("SHOTGUN_API_TOKEN")?.trim();

        if (!organizerId || !apiToken) {
          return Response.json(
            { error: "Missing Shotgun credentials" },
            { status: 500 }
          );
        }

        // DRY RUN ONLY: no database writes.
        const events = await fetchShotgunEvents(
          organizerId,
          apiToken
        );

        const { data: existing, error } =
          await ctx.supabaseAdmin
            .from("events")
            .select(`
                id,
                Name,
                shotgun_id,
                cover_image,
                description,
                link_shotgun,
                Date,
                Horaires,
                end_time
            `);

        if (error) throw error;

        const byShotgunId = new Map(
          ((existing ?? []) as ExistingEvent[])
            .filter((event) => event.shotgun_id != null)
            .map((event) => [
              String(event.shotgun_id),
              event,
            ])
        );

        
        const matched = [];
        const unmatched = [];
        let updatedCount = 0;
        let unchangedCount = 0;

        for (const event of events) {
        const record = byShotgunId.get(String(event.id));

        if (!record) {
            unmatched.push({
            shotgun_id: String(event.id),
            name: event.name ?? null,
            });
            continue;
        }

        const proposed = eventUpdates(event);

        const changes: Record<
            string,
            { before: unknown; after: unknown }
        > = {};

        const updates: Record<string, string> = {};

        for (const [key, newValue] of Object.entries(proposed)) {
            // Do not erase existing data when Shotgun omits a field.
            if (newValue === null || newValue === undefined) {
            continue;
            }

            const oldValue =
            record[key as keyof ExistingEvent];

            // Normalize timestamps before comparison.
            const normalize = (value: unknown) => {
            if (key === "end_time" && typeof value === "string") {
                const timestamp = Date.parse(value);
                return Number.isNaN(timestamp)
                ? value
                : new Date(timestamp).toISOString();
            }
            return value;
            };

            if (normalize(oldValue) !== normalize(newValue)) {
            changes[key] = {
                before: oldValue ?? null,
                after: newValue,
            };

            updates[key] = newValue;
            }
        }

        const hasChanges = Object.keys(changes).length > 0;

        matched.push({
            supabase_id: record.id,
            shotgun_id: String(event.id),
            name: record.Name,
            status: hasChanges ? "changes_detected" : "unchanged",
            changes,
        });

        if (!hasChanges) {
            unchangedCount++;
            continue;
        }

        if (apply) {
            const { error: updateError } = await ctx.supabaseAdmin
            .from("events")
            .update({
                ...updates,
                last_synced_at: new Date().toISOString(),
            })
            .eq("id", record.id)
            .eq("shotgun_id", String(event.id))
            .select("id")
            .single();

            if (updateError) {
            throw new Error(
                `Failed to update event ${record.id}: ${updateError.message}`
            );
            }

            updatedCount++;
        }
        }

        return Response.json({
        success: true,
        mode: apply ? "apply" : "dry_run",
        fetched: events.length,
        matched_count: matched.length,
        unmatched_count: unmatched.length,
        updated_count: updatedCount,
        unchanged_count: unchangedCount,
        matched,
        unmatched,
        });

      } catch (error) {
        console.error("Shotgun sync failed:", error);

        return Response.json(
          { error: "Shotgun synchronization failed" },
          { status: 500 }
        );
      }
    }
  ),
};
