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

export default function PastEvents() {
  const { events, loading, error } = useEvents();
  const today = getTodayInParis();

  const pastEvents = events
    .filter((event) => event.date !== null && event.date < today)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return (
    <section
      className="py-15 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
      aria-busy={loading}
    >
      <SectionHeader
        label="LIVE OPERATIONS"
        title="PAST EVENTS"
      />

      {loading ? (
        <p className="font-mono text-xs text-white/50" role="status">
          CHARGEMENT DES ÉVÉNEMENTS…
        </p>
      ) : error ? (
        <p className="font-mono text-xs text-red-400" role="alert">
          Impossible de charger les événements. Réessaie plus tard.
        </p>
      ) : pastEvents.length > 0 ? (
        <div
          className="flex flex-col gap-px"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="font-mono text-xs text-white/50">
          AUCUN ÉVÉNEMENT PASSÉ POUR L’INSTANT.
        </p>
      )}
    </section>
  );
}