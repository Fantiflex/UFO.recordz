import { EVENTS } from "../../data/events";
import SectionHeader from "../ui/SectionHeader";
import EventCard from "./EventCard";

function PastEvents() {
  const now = new Date();

  const pastEvents = EVENTS
    .filter((event) => new Date(event.startsAt) < now)
    .sort(
      (a, b) =>
        new Date(b.startsAt).getTime() -
        new Date(a.startsAt).getTime()
    );

  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader
        label="LIVE OPERATIONS"
        title="PASSED EVENTS"
      />

      <div
        className="flex flex-col gap-px"
        style={{
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {pastEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </section>
  );
}

export default PastEvents;