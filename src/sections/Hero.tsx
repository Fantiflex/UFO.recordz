import UFOOrb from "../components/ufo/UFOOrb";

function Hero({ setActive }: { setActive: (s: string) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(222, 227, 80, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(188, 227, 80, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #030302 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* UFO */}
        <div className="animate-fade-in-up">
          <UFOOrb />
        </div>

        {/* Label identifier */}
        <div className="animate-fade-in-up delay-200 flex items-center gap-3">
          <div style={{ width: 28, height: 1, background: "rgba(222, 227, 80, 0.5)" }} />
          <span className="font-mono text-xs" style={{ color: "#d9e350", letterSpacing: "0.3em" }}>Par nous, pour vous</span>
          <div style={{ width: 28, height: 1, background: "rgba(202, 227, 80, 0.5)" }} />
        </div>

        {/* Main heading */}
        <h1
          className="font-condensed animate-fade-in-up delay-300"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 0.88, letterSpacing: "-0.02em", fontWeight: 800, color: "#e4e4e2" }}
        >
          UFO<br />
          <span style={{ color: "rgba(228, 228, 226, 0.18)", WebkitTextStroke: "1px rgba(228, 228, 226, 0.28)" }}>.recordz</span><br />
          
        </h1>

        <p className="animate-fade-in-up delay-500 text-sm font-light" style={{ color: "rgba(228, 228, 226, 0.38)", letterSpacing: "0.14em" }}>
          TEKNO LABEL & EVENTS 
        </p>

        <div className="animate-fade-in-up delay-700 flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => setActive("releases")}
            className="font-condensed text-xs tracking-widest px-8 py-3.5 transition-all duration-300 hover:brightness-90"
            style={{ background: "#d4e350", color: "#030302", letterSpacing: "0.2em", fontWeight: 600 }}
          >
            NEW RELEASES
          </button>
          <button
            onClick={() => setActive("events")}
            className="font-condensed text-xs tracking-widest px-8 py-3.5 border transition-all duration-300 hover:border-[#50e3c2] hover:text-[#50e3c2]"
            style={{ borderColor: "rgba(228, 228, 226, 0.15)", color: "rgba(228, 228, 226, 0.5)", letterSpacing: "0.2em" }}
          >
            UPCOMING EVENTS
          </button>
        </div>
      </div>

      {/* Bottom scan line */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(195, 227, 80, 0.12), transparent)" }}
      />
      <div className="absolute bottom-8 font-mono text-xs" style={{ color: "rgba(207, 227, 80, 0.3)", letterSpacing: "0.2em" }}>
        
      </div>
    </section>
  );
}

export default Hero;