import type { SupabaseEvent } from "../../data/supabaseEvents";
import { Link } from "react-router-dom";

type EventCardProps = {
  event: SupabaseEvent;
};

function formatDate(date: string | null) {
  if (!date) return "DATE À CONFIRMER";

  return new Date(`${date}T12:00:00Z`)
    .toLocaleDateString("en-GB", {
      timeZone: "Europe/Paris",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      className="flex flex-col gap-6 p-8 md:flex-row md:items-center"
      style={{
        background: "var(--card)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        className="flex-none font-mono text-xs"
        style={{
          color: "rgba(227,222,80,0.3)",
          letterSpacing: "0.15em",
        }}
      >
        {event.id}
      </span>

      <div className="min-w-0 flex-1">
        <h3
          className="mb-1 font-condensed text-2xl"
          style={{
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {event.name}
        </h3>

        {event.venue && (
          <p
            className="text-sm font-light"
            style={{ color: "rgba(228,228,226,0.4)" }}
          >
            {event.venue}
          </p>
        )}

        {(event.linkShotgun || event.linkInstagram) && (
          <div className="mt-3 flex flex-wrap gap-4">
            {event.linkShotgun && (
              <a
                href={event.linkShotgun}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: "#c8e350" }}
              >
                SHOTGUN ↗
              </a>
            )}

            {event.linkInstagram && (
              <a
                href={event.linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: "#c8e350" }}
              >
                INSTAGRAM ↗
              </a>
            )}
          </div>
        )}
      </div>

      {event.lineup.length > 0 && (
        <div className="max-w-md">
          <div className="flex flex-wrap gap-2">
            {event.lineup.map((artist, index) => {
              const slug = artist
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

              return (
                <Link
                  key={`${artist}-${index}`}
                  to={`/artists/${slug}`}
                  className="px-2 py-0.5 font-mono text-xs hover:underline"
                  style={{
                    color: "rgba(227,228,226,0.35)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {artist}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex-none md:text-right">
        <p
          className="mb-1 font-condensed text-sm"
          style={{
            letterSpacing: "0.1em",
            color: "rgba(228,228,226,0.7)",
          }}
        >
          {formatDate(event.date)}
        </p>

        {event.time && (
          <p
            className="font-mono text-xs"
            style={{
              color: "rgba(228,228,226,0.3)",
              letterSpacing: "0.08em",
            }}
          >
            {event.time.slice(0, 5)}
          </p>
        )}
      </div>
    </div>
  );
}