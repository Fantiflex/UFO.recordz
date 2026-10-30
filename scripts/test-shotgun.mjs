
const organizerId = process.env.SHOTGUN_ORGANIZER_ID;
const apiKey = process.env.SHOTGUN_API_TOKEN;

if (!organizerId || !apiKey) {
  throw new Error("Missing Shotgun environment variables");
}

const BASE_URL =
  `https://smartboard-api.shotgun.live/api/shotgun/organizers/${encodeURIComponent(organizerId)}/events`;

async function fetchEvents(past = false) {
  const url = new URL(BASE_URL);

  url.searchParams.set("key", apiKey);

  if (past) {
    url.searchParams.set("past_events", "true");
    url.searchParams.set("page", "0");
    url.searchParams.set("limit", "20");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Shotgun API returned HTTP ${response.status}`);
  }

  const json = await response.json();

  if (!Array.isArray(json.data)) {
    throw new Error("Unexpected Shotgun API response");
  }

  return json.data;
}

function summarize(event) {
  return {
    id: event.id,
    name: event.name,
    date: event.startTime,
    cover_image: event.coverUrl,
    link_shotgun: event.url,
    published: Boolean(event.publishedAt),
  };
}

async function main() {
  const upcoming = await fetchEvents(false);
  const past = await fetchEvents(true);

  console.log("Upcoming events:", upcoming.length);
  console.table(upcoming.map(summarize));

  console.log("Past events (first page):", past.length);
  console.table(past.map(summarize));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
