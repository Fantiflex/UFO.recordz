
import { createClient } from "@supabase/supabase-js";

const APPLY = process.argv.includes("--apply");

const organizerId = process.env.SHOTGUN_ORGANIZER_ID;
const shotgunKey = process.env.SHOTGUN_API_TOKEN;
const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

if (!organizerId || !shotgunKey || !supabaseUrl || !supabaseKey) {
  throw new Error("Missing Shotgun or Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const baseUrl =
  `https://smartboard-api.shotgun.live/api/shotgun/organizers/${encodeURIComponent(organizerId)}/events`;

async function fetchShotgunPage(past = false, page = 0) {
  const url = new URL(baseUrl);
  url.searchParams.set("key", shotgunKey);

  if (past) {
    url.searchParams.set("past_events", "true");
    url.searchParams.set("page", String(page));
    url.searchParams.set("limit", "20");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Shotgun API HTTP ${response.status}`);
  }

  const json = await response.json();

  if (!Array.isArray(json.data)) {
    throw new Error("Unexpected Shotgun API response");
  }

  return json.data;
}

async function fetchAllEvents() {
  const upcoming = await fetchShotgunPage();
  const past = [];

  let page = 0;

  while (true) {
    const batch = await fetchShotgunPage(true, page);
    past.push(...batch);

    if (batch.length < 20) break;
    page++;
  }

  const unique = new Map();

  for (const event of [...upcoming, ...past]) {
    unique.set(String(event.id), event);
  }

  return [...unique.values()];
}

function localDateTime(iso, timezone) {
  if (!iso) return { date: null, time: null };

  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone || "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type) =>
    parts.find((part) => part.type === type)?.value;

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}:${get("second")}`,
  };
}

function eventUpdates(event) {
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

async function main() {
  console.log(APPLY ? "MODE: APPLY" : "MODE: DRY RUN");

  const events = await fetchAllEvents();
  console.log(`Shotgun events found: ${events.length}`);

  const { data: existing, error } = await supabase
    .from("events")
    .select("id, Name, shotgun_id");

  if (error) throw error;

  const byShotgunId = new Map(
    existing
      .filter((event) => event.shotgun_id != null)
      .map((event) => [String(event.shotgun_id), event])
  );

  let updated = 0;
  let previewed = 0;
  const unmatched = [];

  for (const event of events) {
    const record = byShotgunId.get(String(event.id));

    if (!record) {
      unmatched.push({
        shotgun_id: event.id,
        name: event.name,
      });
      continue;
    }

    const updates = eventUpdates(event);

    console.log(`\n${record.Name} (Supabase ${record.id})`);
    console.log(updates);

    if (!APPLY) {
      previewed++;
      continue;
    }

    const { error: updateError } = await supabase
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
        `Failed to update ${record.Name}: ${updateError.message}`
      );
    }

    updated++;
  }

  console.log("\nUnmatched Shotgun events:");
  console.table(unmatched);

  console.log("\nSummary:", {
    fetched: events.length,
    matched: updated + previewed,
    updated,
    previewed,
    unmatched: unmatched.length,
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
