import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import SectionHeader from "../ui/SectionHeader";

type Artist = {
  "Artist Name": string;
  SoundCloud: string | null;
  Instagram: string | null;
};

function PlayedWithUs() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtists() {
      const { data, error } = await supabase
        .from("artists_events")
        .select('"Artist Name", SoundCloud, Instagram')
        .order("Artist Name", {
          ascending: true,
        });

      if (error) {
        console.error(
          "SUPABASE ARTISTS ERROR:",
          JSON.stringify(error, null, 2)
        );

        setLoading(false);
        return;
      }

      setArtists(data ?? []);
      setLoading(false);
    }

    fetchArtists();
  }, []);

  if (loading || artists.length === 0) {
    return null;
  }

  const repeatedArtists = [...artists, ...artists];

  return (
    <section className="py-16">
      <div className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <SectionHeader
          label=""
          title="IELLES ONT JOUÉ CHEZ NOUS"
        />
      </div>

      <div
        className="overflow-hidden border-y"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "var(--card)",
        }}
      >
        <div className="artist-marquee flex w-max items-center">
          {repeatedArtists.map((artist, index) => (
            <div
              key={`${artist["Artist Name"]}-${index}`}
              className="group flex shrink-0 items-center gap-4 px-8 py-5"
            >
              <span
                className="font-condensed text-xl md:text-2xl uppercase whitespace-nowrap transition-colors duration-300"
                style={{
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#e3e4e2",
                }}
              >
                {artist["Artist Name"]}
              </span>

              <span
                className="font-mono text-xs"
                style={{
                  color: "#c8e350",
                  opacity: 0.7,
                }}
              >
                ✦
              </span>

              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {artist.SoundCloud && (
                  <a
                    href={artist.SoundCloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px]"
                    style={{
                      color: "#c8e350",
                      letterSpacing: "0.12em",
                    }}
                  >
                    SC ↗
                  </a>
                )}

                {artist.Instagram && (
                  <a
                    href={artist.Instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px]"
                    style={{
                      color: "#c8e350",
                      letterSpacing: "0.12em",
                    }}
                  >
                    IG ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlayedWithUs;