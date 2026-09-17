import SectionHeader from "../components/ui/SectionHeader";
import Tag from "../components/ui/Tag";
import { ARTISTS } from "../data/artists";



function Artists() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="ROSTER" title="ARTISTS" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {ARTISTS.map((artist) => (
          <div
            key={artist.name}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "1", background: "#080808", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Photo */}
            <img
              src={artist.photo}
              alt={artist.name}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{ filter: "grayscale(100%) contrast(1.1)" }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 40%, rgba(3, 3, 2, 0.9) 100%)" }}
            />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="font-condensed text-lg font-700 mb-1"
                style={{ fontWeight: 700, letterSpacing: "0.08em" }}
              >
                {artist.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: "rgba(228, 228, 226, 0.35)", letterSpacing: "0.1em" }}>
                  {artist.origin}
                </span>
                <span className="font-mono text-xs" style={{ color: "rgba(205, 227, 80, 0.5)", letterSpacing: "0.1em" }}>
                  {artist.releases} REL
                </span>
              </div>
            </div>

            {/* Hover scan line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(207, 227, 80, 0.5)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artists;