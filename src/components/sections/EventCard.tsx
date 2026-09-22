import type { Event } from "../../data/events";

type EventCardProps = {
  event: Event;
};

function formatEventDate(startsAt: string) {
  return new Date(startsAt)
    .toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

function formatTimeRange(
  startsAt: string,
  endsAt: string
) {
  const start = new Date(startsAt).toLocaleTimeString(
    "fr-FR",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
  );

  const end = new Date(endsAt).toLocaleTimeString(
    "fr-FR",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
  );

  return `${start} — ${end}`;
}

function EventCard({ event: ev }: EventCardProps) {
  const date = formatEventDate(ev.startsAt);
  const time = formatTimeRange(
    ev.startsAt,
    ev.endsAt
  );

  return (
    <div
      className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 transition-all duration-300 cursor-pointer hover:bg-[rgba(80,227,194,0.02)]"
      style={{
        background: "var(--card)",
        borderBottom:
          "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Event ID */}
      <div className="flex-none">
        <span
          className="font-mono text-xs"
          style={{
            color: "rgba(227, 222, 80, 0.3)",
            letterSpacing: "0.15em",
          }}
        >
          {ev.id}
        </span>
      </div>

      {/* Event name + venue */}
      <div className="flex-1 min-w-[220px]">
        <h3
          className="font-condensed text-2xl mb-1"
          style={{
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {ev.name}
        </h3>

        <p
          className="text-sm font-light"
          style={{
            color:
              "rgba(228, 228, 226, 0.4)",
          }}
        >
          {ev.venue}
        </p>
      </div>

      {/* Lineup */}
      <div className="hidden lg:block max-w-md">
        <div className="flex flex-wrap gap-2">
          {ev.lineup.map((artist) => (
            <span
              key={artist}
              className="font-mono text-xs px-2 py-0.5"
              style={{
                color:
                  "rgba(227, 228, 226, 0.35)",
                border:
                  "1px solid rgba(255, 255, 255, 0.06)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              {artist}
            </span>
          ))}
        </div>
      </div>

      {/* Date + time */}
      <div className="flex-none text-right">
        <p
          className="font-condensed text-sm mb-1"
          style={{
            letterSpacing: "0.1em",
            color:
              "rgba(228, 228, 226, 0.7)",
          }}
        >
          {date}
        </p>

        <p
          className="font-mono text-xs"
          style={{
            color:
              "rgba(228, 228, 226, 0.3)",
            letterSpacing: "0.08em",
          }}
        >
          {time}
        </p>
      </div>

      {/* Status */}
      <div className="flex-none">
        <span
          className="font-condensed text-xs px-3 py-1.5 tracking-widest"
          style={{
            letterSpacing: "0.15em",

            background:
              ev.status === "SOLD OUT"
                ? "rgba(255,255,255,0.04)"
                : ev.status === "PRESALE"
                ? "rgba(243,249,128,0.1)"
                : "rgba(200, 227, 80, 0.1)",

            color:
              ev.status === "SOLD OUT"
                ? "rgba(228,228,226,0.25)"
                : ev.status === "PRESALE"
                ? "#f9db80"
                : "#f9db80",

            border: `1px solid ${
              ev.status === "SOLD OUT"
                ? "rgba(255,255,255,0.06)"
                : ev.status === "PRESALE"
                ? "rgba(239, 249, 128, 0.25)"
                : "rgba(227, 224, 80, 0.2)"
            }`,
          }}
        >
          {ev.status}
        </span>
      </div>
    </div>
  );
}

export default EventCard;