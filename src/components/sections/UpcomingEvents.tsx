import { useEvents } from "../../hooks/useEvents";
import SectionHeader from "../ui/SectionHeader";
import EventCard from "./EventCard";

function getTodayInParis() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")!.value;
  const month = parts.find((part) => part.type === "month")!.value;
  const day = parts.find((part) => part.type === "day")!.value;

  return `${year}-${month}-${day}`;
}

export default function UpcomingEvents() {
  const { events, loading, error } = useEvents();
  const today = getTodayInParis();

  const upcomingEvents = events
    .filter((event) => event.date !== null && event.date >= today)
    .sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));

  return (
    <section
      className="py-15 px-6 md:px-12 lg:px-10 max-w-6xl mx-auto"
      aria-busy={loading}
    >
      <SectionHeader
        label="LIVE OPERATIONS"
        title="UPCOMING EVENTS"
      />

      {loading ? (
        <p className="font-mono text-xs text-white/50" role="status">
          CHARGEMENT DES ÉVÉNEMENTS…
        </p>
      ) : error ? (
        <p className="font-mono text-xs text-red-400" role="alert">
          Impossible de charger les événements. Réessaie plus tard.
        </p>
      ) : upcomingEvents.length > 0 ? (
        <div
          className="flex flex-col gap-px"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
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

          <p
            className="mt-4 font-mono text-xs"
            style={{
              color: "rgba(228,228,226,0.4)",
              letterSpacing: "0.08em",
            }}
          >
            LA SUITE ARRIVE.
          </p>
        </div>
      )}
    </section>
  );
}