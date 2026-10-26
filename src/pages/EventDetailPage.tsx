import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  fetchEventBySlug,
  type EventDetail,
} from "../data/supabaseEvents";

export default function EventDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [event, setEvent] = useState<EventDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    if (!slug) {
        setEvent(null);
        setLoading(false);
        return;
    }

    let cancelled = false;

    setLoading(true);
    setError(null);
    setEvent(null);

    fetchEventBySlug(slug)
        .then((data) => {
        if (!cancelled) {
            setEvent(data);
        }
        })
        .catch((err) => {
        if (!cancelled) {
            setError(
            err instanceof Error
                ? err.message
                : "Impossible de charger l'événement."
            );
        }
        })
        .finally(() => {
        if (!cancelled) {
            setLoading(false);
        }
        });

    return () => {
        cancelled = true;
    };
    }, [slug]);
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 md:px-12 lg:px-24">
      <Link
        to="/events"
        className="text-sm uppercase text-[#f8ff33] hover:underline"
      >
        ← Tous les événements
      </Link>

      <section className="mt-12">

        {loading ? (
            <p className="text-neutral-400">
            Chargement de l'événement...
            </p>

        ) : error ? (
            <p role="alert" className="text-red-400">
            {error}
            </p>

        ) : !event ? (
            <h1 className="text-3xl font-bold uppercase">
            Événement introuvable
            </h1>

        ) : (
            <>
            {/* AFFICHE */}
            {event.coverImage && (
                <div className="mb-12">
                <img
                    src={event.coverImage}
                    alt={`Affiche de ${event.name}`}
                    className="max-h-[650px] w-full object-contain"
                />
                </div>
            )}

            {/* TITRE */}
            <p className="mb-4 text-sm uppercase tracking-widest text-[#f8ff33]">
                UFO.recordz — Event
            </p>

            <h1 className="font-condensed text-5xl font-black uppercase md:text-8xl">
                {event.name}
            </h1>

            {/* INFORMATIONS */}
            <div className="mt-8 flex flex-wrap gap-8 text-neutral-400">
                {event.date && <span>{event.date}</span>}
                {event.venue && <span>{event.venue}</span>}
                {event.time && <span>{event.time}</span>}
            </div>

            {/* DESCRIPTION */}
            {event.description && (
                <p className="mt-12 max-w-3xl whitespace-pre-line text-lg leading-relaxed text-neutral-300">
                {event.description}
                </p>
            )}

            {/* LINEUP */}
            {event.lineup.length > 0 && (
                <section className="mt-20">
                <h2 className="mb-8 font-condensed text-4xl font-bold uppercase">
                    LINEUP
                </h2>

                <div className="flex flex-wrap gap-4">
                    {event.lineup.map((artist) => (
                    <Link
                        key={artist.slug}
                        to={`/artists/${artist.slug}`}
                        className="border border-neutral-700 px-6 py-4 font-condensed text-xl uppercase transition-colors hover:border-[#f8ff33] hover:text-[#f8ff33]"
                    >
                        {artist.name} ↗
                    </Link>
                    ))}
                </div>
                </section>
            )}

            {/* LIENS */}
            <div className="mt-16 flex flex-wrap gap-4">

                {event.linkShotgun && (
                <a
                    href={event.linkShotgun}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f8ff33] px-8 py-4 font-bold uppercase text-black transition-opacity hover:opacity-80"
                >
                    BILLETTERIE ↗
                </a>
                )}

                {event.linkInstagram && (
                <a
                    href={event.linkInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#f8ff33] px-8 py-4 font-bold uppercase text-[#f8ff33] transition-colors hover:bg-[#f8ff33] hover:text-black"
                >
                    INSTAGRAM ↗
                </a>
                )}

            </div>
            </>
        )}
        </section>
    </main>
  );
}