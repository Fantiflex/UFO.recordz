import UpcomingEvents from "../components/sections/UpcomingEvents";
import PlayedWithUs from "../components/sections/PlayedWithUs";
import PastEvents from "../components/sections/PastEvents";

export default function EventsPage() {
  return (
    <main className="pt-15">
      <UpcomingEvents />
      <PlayedWithUs />
      <PastEvents />
    </main>
  );
}