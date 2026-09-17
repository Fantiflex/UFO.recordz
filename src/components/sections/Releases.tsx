import { RELEASES } from "../../data/releases";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";


function Releases() {
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="CATALOGUE" title="LATEST RELEASES" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {RELEASES.map((r) => (
          <div
            key={r.id}
            className="group relative p-8 transition-all duration-300 cursor-pointer"
            style={{ background: "var(--card)", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Hover accent bar */}
            <div
              className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: r.color }}
            />

            <div className="flex items-start justify-between mb-8">
              {/* Record visual */}
              <div className="relative flex items-center justify-center" style={{ width: 64, height: 64 }}>
                <div className="absolute inset-0 rounded-full" style={{ background: "#080808", border: `1px solid ${r.color}22` }} />
                {[0.85, 0.65, 0.45].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${scale * 64}px`,
                      height: `${scale * 64}px`,
                      border: `1px solid ${r.color}${i === 0 ? "30" : i === 1 ? "18" : "0c"}`,
                    }}
                  />
                ))}
                <div className="rounded-full" style={{ width: 8, height: 8, background: r.color + "60" }} />
              </div>

              <span
                className="font-mono text-xs"
                style={{ color: r.color, opacity: 0.6, letterSpacing: "0.15em" }}
              >
                S9-{r.id}
              </span>
            </div>

            <div>
              <p className="font-mono text-xs mb-1" style={{ color: "rgba(228, 228, 226, 0.35)", letterSpacing: "0.15em" }}>
                {r.artist}
              </p>
              <h3
                className="font-condensed text-2xl font-700 mb-4"
                style={{ fontWeight: 700, letterSpacing: "0.04em", color: "#e3e4e2" }}
              >
                {r.title}
              </h3>
              <div className="flex items-center gap-4">
                <Tag>{r.bpm}</Tag>
                <Tag>{r.key}</Tag>
                <span className="font-mono text-xs" style={{ color: "rgba(228, 228, 226, 0.25)", letterSpacing: "0.08em" }}>
                  {r.format}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: "rgba(228, 228, 226, 0.2)", letterSpacing: "0.1em" }}>
                {r.date}
              </span>
              <span
                className="font-condensed text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: r.color, letterSpacing: "0.2em" }}
              >
                LISTEN →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Releases;


