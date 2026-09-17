import { EVENTS } from "../../data/events";
import SectionHeader from "../ui/SectionHeader";



function Events() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="LIVE OPERATIONS" title="PASSED EVENTS" />
      <div className="flex flex-col gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {EVENTS.map((ev, idx) => (
          <div
            key={ev.id}
            className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 transition-all duration-300 cursor-pointer hover:bg-[rgba(80,227,194,0.02)]"
            style={{ background: "var(--card)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex-none">
              <span className="font-mono text-xs" style={{ color: "rgba(193, 227, 80, 0.3)", letterSpacing: "0.15em" }}>
                {ev.id}
              </span>
            </div>

            <div className="flex-1 min-w-[220px]">
              <h3
                className="font-condensed text-2xl font-700 mb-1"
                style={{ fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {ev.name}
              </h3>
              <p className="text-sm font-light" style={{ color: "rgba(228, 228, 226, 0.4)" }}>
                {ev.venue}
              </p>
            </div>

            <div className="hidden lg:block max-w-md">
              <div className="flex flex-wrap gap-2">
                {ev.lineup.map((a) => (
                  <span
                    key={a}
                    className="font-mono text-xs px-2 py-0.5"
                    style={{
                      color: "rgba(227, 228, 226, 0.35)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-none text-right">
              <p className="font-condensed text-sm mb-1" style={{ letterSpacing: "0.1em", color: "rgba(228, 228, 226, 0.7)" }}>
                {ev.date}
              </p>
              <p className="font-mono text-xs" style={{ color: "rgba(228, 228, 226, 0.3)", letterSpacing: "0.08em" }}>
                {ev.time}
              </p>
            </div>

            <div className="flex-none">
              <span
                className="font-condensed text-xs px-3 py-1.5 tracking-widest"
                style={{
                  letterSpacing: "0.15em",
                  background: ev.status === "SOLD OUT"
                    ? "rgba(255,255,255,0.04)"
                    : ev.status === "PRESALE"
                    ? "rgba(243, 249, 128, 0.1)"
                    : "rgba(80,227,194,0.1)",
                  color: ev.status === "SOLD OUT"
                    ? "rgba(228, 228, 226, 0.25)"
                    : ev.status === "PRESALE"
                    ? "#d3f980"
                    : "#b7e350",
                  border: `1px solid ${ev.status === "SOLD OUT" ? "rgba(255,255,255,0.06)" : ev.status === "PRESALE" ? "rgba(139,128,249,0.25)" : "rgba(80,227,194,0.2)"}`,
                }}
              >
                {ev.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;