import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  fetchArtistBySlug,
  type SupabaseArtist,
} from "../data/supabaseArtists";

export default function ArtistPage() {
  const { slug } = useParams<{ slug: string }>();

  const [artist, setArtist] = useState<SupabaseArtist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError(true);
      return;
    }

    async function loadArtist() {
      try {
        const data = await fetchArtistBySlug(slug!);
        setArtist(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadArtist();
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-24 px-6 md:px-12 lg:px-24">
        <p>Chargement...</p>
      </main>
    );
  }

  if (error || !artist) {
    return (
      <main className="pt-24 px-6 md:px-12 lg:px-24">
        <p>Artiste introuvable.</p>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-bold uppercase">
          {artist.name}
        </h1>

        <div className="mt-10 flex flex-wrap gap-6">
          {artist.soundcloud && (
            <a
              href={artist.soundcloud}
              target="_blank"
              rel="noreferrer"
              className="uppercase underline"
            >
              SoundCloud
            </a>
          )}

          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noreferrer"
              className="uppercase underline"
            >
              Instagram
            </a>
          )}
            {artist.events.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold uppercase">
                    Played at UFO
                    </h2>

                    <div className="mt-6 space-y-4">
                    {artist.events.map((event) => (
                        <div key={event.id}>
                        <p className="font-condensed text-xl">
                            {event.name}
                        </p>

                        <p className="font-mono text-xs opacity-50">
                            {event.date ?? "Date à confirmer"}
                            {event.venue ? ` · ${event.venue}` : ""}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>
                )}

        </div>
      </section>
    </main>
  );
}
