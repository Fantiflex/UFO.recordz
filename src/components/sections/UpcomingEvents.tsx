import { EVENTS } from "../../data/events";
import SectionHeader from "../ui/SectionHeader";
import EventCard from "./EventCard";

function UpcomingEvents() {
  const now = new Date();

  const upcomingEvents = EVENTS
    .filter((event) => new Date(event.startsAt) >= now)
    .sort(
      (a, b) =>
        new Date(a.startsAt).getTime() -
        new Date(b.startsAt).getTime()
    );

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader
        label="LIVE OPERATIONS"
        title="UPCOMING EVENTS"
      />

      {upcomingEvents.length > 0 ? (
        <div
          className="flex flex-col gap-px"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      ) : (
        <div
            className="p-8 md:p-10"
            style={{
                background: "var(--card)",
                border: "1px solid rgba(255,255,255,0.06)",
            }}
            >
            <p
                className="font-condensed text-xl md:text-2xl"
                style={{
                color: "#e3e4e2",
                fontWeight: 700,
                letterSpacing: "0.04em",
                }}
            >
                AUCUNE DATE ANNONCÉE POUR L’INSTANT.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
                <p
                className="font-mono text-xs"
                style={{
                    color: "rgba(228,228,226,0.4)",
                    letterSpacing: "0.08em",
                    lineHeight: 1.7,
                }}
                >
                LA SUITE ARRIVE.
                </p>

                <a
                href="https://www.instagram.com/TON_COMPTE/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs transition-opacity duration-300 hover:opacity-100"
                style={{
                    color: "#c8e350",
                    opacity: 0.65,
                    letterSpacing: "0.12em",
                }}
                >
                INSTAGRAM ↗
                </a>
            </div>
            </div>
      )}
    </section>
  );
}

export default UpcomingEvents;