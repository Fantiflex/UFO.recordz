import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";

type Release = {
  "Track ID": string;
  Artist: string | null;
  "Track Name": string | null;
  "Track Link": string | null;
  "Release Date": string | null;
  Length: number | null;
  "Link Soundcloud": string | null;
  "Link Bandcamp": string | null;
  "Artwork URL": string | null;
  Graphist: string | null;
};

const COLORS = [
  "#c8e350",
  "#70d6ff",
  "#ff70a6",
  "#ffd670",
];

function formatDuration(seconds: number | null) {
  if (seconds == null) {
    return "—";
  }

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function formatDate(date: string | null) {
  if (!date) {
    return "—";
  }

  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getHighResArtwork(url: string | null) {
  if (!url) {
    return null;
  }

  return url.replace("-large.", "-t500x500.");
}

function Releases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReleases() {
      const { data, error } = await supabase
        .from("releases")
        .select("*")
        .order("Release Date", {
          ascending: false,
        })
        .limit(6);

      if (error) {
        console.error(
          "SUPABASE ERROR:",
          JSON.stringify(error, null, 2)
        );

        setError(error.message);
        setLoading(false);
        return;
      }

      setReleases(data ?? []);
      setLoading(false);
    }

    fetchReleases();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <SectionHeader
          label="CATALOGUE"
          title="LATEST RELEASES"
        />

        <p
          className="font-mono text-xs"
          style={{
            color: "rgba(228, 228, 226, 0.35)",
          }}
        >
          LOADING RELEASES...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <SectionHeader
          label="CATALOGUE"
          title="LATEST RELEASES"
        />

        <p
          className="font-mono text-xs"
          style={{
            color: "#ff7070",
          }}
        >
          Unable to load releases.
        </p>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader
        label="CATALOGUE"
        title="LATEST RELEASES"
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {releases.map((release, index) => {
          const color =
            COLORS[index % COLORS.length];

          const listenUrl =
            release["Link Soundcloud"] ??
            release["Track Link"];

          const artworkUrl =
            getHighResArtwork(
              release["Artwork URL"]
            );

          return (
            <a
              key={release["Track ID"]}
              href={listenUrl ?? undefined}
              target="_blank"
              rel="noreferrer"
              className="group relative p-8 transition-all duration-300 cursor-pointer block"
              style={{
                background: "var(--card)",
                borderRight:
                  "1px solid rgba(255,255,255,0.06)",
                borderBottom:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Hover accent */}
              <div
                className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: color,
                }}
              />

              <div className="flex items-start justify-between mb-8">
                {/* Artwork */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 112,
                    height: 112,
                    background: "#080808",
                    border: `1px solid ${color}22`,
                  }}
                >
                  {artworkUrl ? (
                    <img
                      src={artworkUrl}
                      alt={
                        release["Track Name"] ??
                        "Release artwork"
                      }
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-mono text-xs"
                      style={{
                        color:
                          "rgba(228,228,226,0.25)",
                      }}
                    >
                      UFO
                    </div>
                  )}
                </div>

                <span
                  className="font-mono text-xs"
                  style={{
                    color,
                    opacity: 0.6,
                    letterSpacing: "0.15em",
                  }}
                >
                  UFO
                </span>
              </div>

              <div>
                <p
                  className="font-mono text-xs mb-1"
                  style={{
                    color:
                      "rgba(228, 228, 226, 0.35)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {release.Artist ??
                    "UFO.recordz"}
                </p>

                <h3
                  className="font-condensed text-2xl mb-4"
                  style={{
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#e3e4e2",
                  }}
                >
                  {release["Track Name"] ??
                    "UNTITLED"}
                </h3>

                <div className="flex flex-wrap items-center gap-4">
                  <Tag>
                    {formatDuration(
                      release.Length
                    )}
                  </Tag>

                  <Tag>
                    SOUNDCLOUD
                  </Tag>

                  {release["Link Bandcamp"] && (
                    <span
                      className="font-mono text-xs"
                      style={{
                        color:
                          "rgba(228, 228, 226, 0.25)",
                        letterSpacing:
                          "0.08em",
                      }}
                    >
                      BANDCAMP
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className="font-mono text-xs"
                  style={{
                    color:
                      "rgba(228, 228, 226, 0.2)",
                    letterSpacing:
                      "0.1em",
                  }}
                >
                  {formatDate(
                    release["Release Date"]
                  )}
                </span>

                <span
                  className="font-condensed text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    color,
                    letterSpacing: "0.2em",
                  }}
                >
                  LISTEN →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Releases;