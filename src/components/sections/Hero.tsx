import UFOOrb from "../ufo/UFOOrb";
import { Link } from "react-router-dom";


function Hero() {
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


       {/* Main heading — illuminated by UFO beam */}
        <div className="relative z-10 -mt-40">
          <h1
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              fontWeight: 800,
              color: "#e4e4e2",
              fontFamily: "'Barlow Condensed', sans-serif",
              textShadow: "0 0 35px rgba(248, 255, 51, 0.12)",
            }}
          >
            UFO
            <br />
            <span
              style={{
                color: "rgba(228, 228, 226, 0.18)",
                WebkitTextStroke: "1px rgba(228, 228, 226, 0.28)",
                textShadow: "0 0 25px rgba(248, 255, 51, 0.08)",
              }}
            >
              .recordz
            </span>
          </h1>
        </div>

        <p className="animate-fade-in-up delay-500 text-sm font-light" style={{ color: "rgba(228, 228, 226, 0.38)", letterSpacing: "0.14em" }}>
          TEKNO LABEL & EVENTS 
        </p>

        <div className="animate-fade-in-up delay-700 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          to="/label"
          className="
            flex w-52 items-center justify-center
            border border-[#f8ff33bb]
            bg-transparent px-8 py-3.5
            font-condensed text-xs font-semibold uppercase
            tracking-[0.2em] text-[#f8ff33bb]
            transition-all duration-300
            hover:bg-[#f8ff33bb] hover:text-[#030302]
          "
        >
          NEW RELEASES
        </Link>

        <Link
          to="/events"
          className="
            flex w-52 items-center justify-center
            border border-[#f8ff33bb]
            bg-transparent px-8 py-3.5
            font-condensed text-xs font-semibold uppercase
            tracking-[0.2em] text-[#f8ff33bb]
            transition-all duration-300
            hover:bg-[#f8ff33bb] hover:text-[#030302]
          "
        >
          UPCOMING EVENTS
        </Link>
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