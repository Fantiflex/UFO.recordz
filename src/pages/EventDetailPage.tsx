import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="min-h-screen px-6 pt-32 pb-20 md:px-12 lg:px-24">
      <Link
        to="/events"
        className="text-sm uppercase text-[#f8ff33] hover:underline"
      >
        ← Tous les événements
      </Link>

      <section className="mt-12">
        <p className="mb-4 text-sm uppercase text-[#f8ff33]">
          UFO.recordz — Event
        </p>

        <h1 className="text-4xl font-black uppercase md:text-7xl">
          {slug}
        </h1>

        <p className="mt-6 text-neutral-400">
          Page événement en construction.
        </p>
      </section>
    </main>
  );
}