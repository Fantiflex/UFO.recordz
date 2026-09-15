import { useState } from "react";
import logo from "./imports/logo.png";
import va003Recto from "./imports/VA003_recto.JPG";
import va003Verso from "./imports/VA003_verso.jpg";

import va005Recto from "./imports/VA005_recto.JPG";
import va005Verso from "./imports/VA005_verso.JPG";

import va001Recto from "./imports/VA001_recto.JPG";
import va001Verso from "./imports/VA001_verso.JPG";

import va006Recto from "./imports/VA006_recto.JPG";
import va006Verso from "./imports/VA006_verso.JPG";

const NAV_LINKS = ["UFO.recordz", "Events", "Label", "Valeurs", "Contact"];

const RELEASES = [
  {
    id: "001",
    title: "SIGNAL DRIFT",
    artist: "VØID SIGNAL",
    format: "12\" VINYL · DIGITAL",
    bpm: "138 BPM",
    key: "A MIN",
    date: "2026-09-05",
    color: "#50e3c2",
  },
  {
    id: "002",
    title: "COLD APPROACH",
    artist: "PROXIMA-7",
    format: "DIGITAL ONLY",
    bpm: "143 BPM",
    key: "D# MIN",
    date: "2026-08-12",
    color: "#8b80f9",
  },
  {
    id: "003",
    title: "PERIHELION",
    artist: "HAUS ARKANA",
    format: "12\" VINYL · DIGITAL",
    bpm: "136 BPM",
    key: "F# MIN",
    date: "2026-07-28",
    color: "#e35095",
  },
  {
    id: "004",
    title: "EXOSPHERE",
    artist: "NULLSPACE",
    format: "12\" VINYL",
    bpm: "140 BPM",
    key: "B MIN",
    date: "2026-07-01",
    color: "#50a3e3",
  },

  {
    id: "004",
    title: "EXOSPHERE",
    artist: "NULLSPACE",
    format: "12\" VINYL",
    bpm: "140 BPM",
    key: "B MIN",
    date: "2026-07-01",
    color: "#50a3e3",
  },
];

const EVENTS = [
  {
    id: "PR26-01",
    name: "PRIDE RADICALE 2026",
    venue: "Paris, France",
    date: "SUN 14 JUN 2026",
    time: "14:00 — 18:00",
    lineup: ["Jadette", "Fantiflex", "HAUS ARKANA"],
    status: "PASSED",
  },
  {
    id: "MF26-01",
    name: "MANIFESTIVE 2026",
    venue: "Paris, France",
    date: "SAT 13 JUN 2026",
    time: "14:00 — 18:00",
    lineup: ["UFORICK", "FANTIFLEX", "YPO", "WIJA"],
    status: "PASSED",
  },
  {
    id: "IF26-01",
    name: "INTERFILIÈRES 2026",
    venue: "91, IDF, France",
    date: "SAT 31 MAY 2026",
    time: "15:00 — 04:30",
    lineup: ["FANTIFLEX", "UFORICK", "MAYA GORA", "CLAUDIEN vs ANNETH", "16 SOUPAPES"],
    status: "SOLD OUT",
  },
  {
    id: "CF26-04",
    name: "SYNDROME",
    venue: "La Cité Fertile, Pantin",
    date: "FRI 15 MAY 2026",
    time: "15:00 — 01:30",
    lineup: ["KOU2TATANE", "HERRSPINLER", "ZAZA", "UFORICK", "LAMBDA23", "KARLFROYE", "FOUSSY", "p3b3"],
    status: "SOLD OUT",
  },
  {
    id: "CF26-03",
    name: "SYMPTOME",
    venue: "La Cité Fertile, Pantin",
    date: "FRI 25 APR 2026",
    time: "15:00 — 01:30",
    lineup: ["CLAUDIEN", "LA VASE", "MIZZ","1FAM", "BAROX", "HELEN THEIA","FLOKON", "LA PESTE NOIRE", "MENTALIS vs HASHINO"],
    status: "SOLD OUT",
  },
  {
    id: "CF26-02",
    name: "INFRAREC",
    venue: "La Cité Fertile, Pantin",
    date: "FRI 07 MAR 2026",
    time: "15:00 — 01:30",
    lineup: ["UFORICK", "SAKAJ", "SAPHIRELEFLEUR", "KOU2TATANE","LE MOUSKET", "SUNNYFLEX","SOUL SENCE","KILU"],
    status: "SOLD OUT",
  },
  {
    id: "CF26-01",
    name: "TERMINUS",
    venue: "La Cité Fertile, Pantin",
    date: "FRI 09 JAN 2026",
    time: "18:00 — 23:30",
    lineup: ["UFORICK", "YPO", "SAPHIRELEFLEUR", "TWOLETTERS","SKORCHSIN"],
    status: "SOLD OUT",
  }

];

const ARTISTS = [
  { name: "VØID SIGNAL", origin: "Berlin, DE", releases: 4, photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&auto=format" },
  { name: "PROXIMA-7", origin: "Tokyo, JP", releases: 2, photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&auto=format" },
  { name: "HAUS ARKANA", origin: "Budapest, HU", releases: 3, photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&auto=format" },
  { name: "NULLSPACE", origin: "Chicago, US", releases: 2, photo: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400&h=400&fit=crop&auto=format" },
  { name: "K.REITER", origin: "Vienna, AT", releases: 1, photo: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop&auto=format" },
  { name: "LUX NOCTEM", origin: "Montréal, CA", releases: 1, photo: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop&auto=format" },
];


/* ── Industrial 3-D UFO — 3/4 perspective, engraving style ─────────────── */

function UFOOrb() {
  const cx = 280, cy = 208;

  const oRx = 240, oRy = 29;       // outer disc rim
  const bCy = 200, bRx = 152, bRy = 18; // chrome band
  const iRx = 92, iRy = 15, iCy = 213;  // inner hull (bowl boundary)
  const dRx = 78, dRy = 12, dCy = 195, dApexY = 108; // dome
  const pCy = 250, pRx = 26, pRy = 9;   // center port

  const rL = cx - oRx, rR = cx + oRx;
  const bL = cx - bRx, bR = cx + bRx;
  const iL = cx - iRx, iR = cx + iRx;
  const dL = cx - dRx, dR = cx + dRx;

  // Dome horizontal hatch lines
  const hatches = Array.from({ length: 9 }, (_, i) => {
    const t = (i + 1) / 10;
    const y = dApexY + t * (dCy - dApexY);
    const w = dRx * Math.sqrt(t) * 0.9;
    return { y, w };
  });

  // Underside radiating lines
  const radials = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x1: cx + pRx * 1.15 * cos,
      y1: pCy + pRy * Math.abs(sin) * 0.5,
      x2: cx + iRx * cos,
      y2: iCy + iRy * Math.abs(sin) * 0.4,
    };
  });

  // Disc top surface vertical hatches
  const discTopHatches = Array.from({ length: 9 }, (_, i) => {
    const t = (i + 1) / 10;
    const x = rL + t * (rR - rL);
    const sinTerm = Math.sqrt(Math.max(0, 1 - Math.pow((x - cx) / oRx, 2)));
    const yTop = cy - oRy * sinTerm;
    return { x, yTop };
  });

  // Band striations
  const bandStripes = Array.from({ length: 22 }, (_, i) => {
    const t = (i + 0.5) / 22;
    const angle = Math.PI * (1 - t);
    const bx = cx + bRx * Math.cos(angle);
    const by = bCy + bRy * Math.sin(angle) * 0.28;
    return { bx, by };
  });

  // Alternating rim panel highlights
  const rimPanels = Array.from({ length: 8 }, (_, i) => {
    const a0 = Math.PI * (i / 8), a1 = Math.PI * ((i + 0.5) / 8);
    return {
      x0: cx + oRx * Math.cos(Math.PI - a0),
      y0: cy - oRy * Math.sin(a0),
      x1: cx + oRx * Math.cos(Math.PI - a1),
      y1: cy - oRy * Math.sin(a1),
      bright: i % 2 === 0,
    };
  });

  return (
    <svg viewBox="0 0 560 370" width={540} height={356} style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id="g-dome" cx="40%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#2e3e3c" />
          <stop offset="42%" stopColor="#121c1b" />
          <stop offset="100%" stopColor="#060d0c" />
        </radialGradient>
        <linearGradient id="g-disc-top" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1c2c2a" />
          <stop offset="100%" stopColor="#060e0c" />
        </linearGradient>
        <linearGradient id="g-band" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(140,255,230,0.22)" />
          <stop offset="22%" stopColor="rgba(215,255,248,0.96)" />
          <stop offset="44%" stopColor="rgba(80,227,194,1)" />
          <stop offset="68%" stopColor="rgba(22,85,72,0.88)" />
          <stop offset="100%" stopColor="rgba(4,18,15,0.45)" />
        </linearGradient>
        <radialGradient id="g-under" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#121e1c" />
          <stop offset="55%" stopColor="#090f0e" />
          <stop offset="100%" stopColor="#040908" />
        </radialGradient>
        <radialGradient id="g-bowl" cx="50%" cy="75%" r="58%">
          <stop offset="0%" stopColor="#0c1514" />
          <stop offset="100%" stopColor="#040908" />
        </radialGradient>
        <radialGradient id="g-port" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(180,255,238,1)" />
          <stop offset="38%" stopColor="rgba(80,227,194,0.85)" />
          <stop offset="75%" stopColor="rgba(28,108,88,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="g-rim-tip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(80,227,194,0.6)" />
          <stop offset="100%" stopColor="rgba(80,227,194,0)" />
        </radialGradient>
        <filter id="f-ambient" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="f-port-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="f-rim-tip" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* AMBIENT UNDERBELLY GLOW */}
      <ellipse cx={cx} cy={272} rx={118} ry={26}
        fill="rgba(80,227,194,0.25)" filter="url(#f-ambient)"
        className="animate-pulse-glow" />

      {/* DISC UNDERSIDE RING — outer rim front arc to inner hull */}
      <path d={`
        M ${rL} ${cy}
        A ${oRx} ${oRy} 0 0 0 ${rR} ${cy}
        L ${iR} ${iCy}
        A ${iRx} ${iRy} 0 0 1 ${iL} ${iCy}
        Z`}
        fill="url(#g-under)" />

      {/* CONCAVE BOWL — inner hull down to center port */}
      <path d={`
        M ${iL} ${iCy}
        A ${iRx} ${iRy} 0 0 0 ${iR} ${iCy}
        Q ${cx + 66} ${pCy + 6} ${cx + pRx} ${pCy}
        A ${pRx} ${pRy} 0 0 1 ${cx - pRx} ${pCy}
        Q ${cx - 66} ${pCy + 6} ${iL} ${iCy}
        Z`}
        fill="url(#g-bowl)" />

      {/* Underside radiating lines */}
      {radials.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke="rgba(80,227,194,0.09)" strokeWidth={0.75} />
      ))}

      {/* Underside concentric arcs */}
      {[0.36, 0.62, 0.86].map((s, i) => (
        <path key={i}
          d={`M ${cx - iRx * s} ${iCy + 3} A ${iRx * s} ${iRy * s * 0.45} 0 0 0 ${cx + iRx * s} ${iCy + 3}`}
          fill="none" stroke={`rgba(80,227,194,${0.06 + i * 0.025})`} strokeWidth={0.8} />
      ))}

      {/* Inner hull outline */}
      <path d={`M ${iL} ${iCy} A ${iRx} ${iRy} 0 0 0 ${iR} ${iCy}`}
        fill="none" stroke="rgba(80,227,194,0.2)" strokeWidth={0.9} />
      <path d={`M ${iL} ${iCy} A ${iRx} ${iRy} 0 0 1 ${iR} ${iCy}`}
        fill="none" stroke="rgba(80,227,194,0.07)" strokeWidth={0.6} />

      {/* CENTER PORT glow */}
      <ellipse cx={cx} cy={pCy} rx={52} ry={24}
        fill="url(#g-port)" filter="url(#f-port-glow)" opacity={0.65}
        className="animate-pulse-glow" />
      <ellipse cx={cx} cy={pCy} rx={pRx + 3} ry={pRy + 2}
        fill="rgba(24,44,40,0.9)" stroke="rgba(80,227,194,0.45)" strokeWidth={1} />
      <ellipse cx={cx} cy={pCy} rx={pRx} ry={pRy} fill="url(#g-port)" />

      {/* DISC TOP SURFACE — outer rim top arc to chrome band */}
      <path d={`
        M ${rL} ${cy}
        A ${oRx} ${oRy} 0 0 1 ${rR} ${cy}
        L ${bR} ${bCy}
        A ${bRx} ${bRy} 0 0 1 ${bL} ${bCy}
        Z`}
        fill="url(#g-disc-top)" />

      {/* Disc top hatching */}
      {discTopHatches.map((h, i) => (
        <line key={i} x1={h.x} y1={h.yTop} x2={h.x} y2={bCy + 2}
          stroke="rgba(80,227,194,0.04)" strokeWidth={0.65} />
      ))}

      {/* Rim panel highlights */}
      {rimPanels.map((p, i) => (
        <line key={i} x1={p.x0} y1={p.y0} x2={p.x1} y2={p.y1}
          stroke={p.bright ? "rgba(80,227,194,0.22)" : "rgba(80,227,194,0.06)"}
          strokeWidth={p.bright ? 2.5 : 1} />
      ))}

      {/* CHROME EQUATORIAL BAND */}
      <path d={`
        M ${bL} ${bCy}
        A ${bRx} ${bRy} 0 0 1 ${bR} ${bCy}
        A ${bRx} ${bRy} 0 0 1 ${bL} ${bCy}
        Z`}
        fill="url(#g-band)" />
      <path d={`M ${bL} ${bCy} A ${bRx} ${bRy} 0 0 1 ${bR} ${bCy}`}
        fill="none" stroke="rgba(180,255,240,0.2)" strokeWidth={0.8} />
      {bandStripes.map((s, i) => (
        <line key={i} x1={s.bx} y1={s.by - 5} x2={s.bx} y2={s.by + 8}
          stroke="rgba(80,227,194,0.12)" strokeWidth={0.7} />
      ))}

      {/* DOME — main fill */}
      <path d={`
        M ${dL} ${dCy}
        Q ${dL - 5} ${(dApexY + dCy) / 2 + 8} ${cx} ${dApexY}
        Q ${dR + 5} ${(dApexY + dCy) / 2 + 8} ${dR} ${dCy}
        A ${dRx} ${dRy} 0 0 1 ${dL} ${dCy}
        Z`}
        fill="url(#g-dome)" />

      {/* Dome hatch lines */}
      {hatches.map((h, i) => (
        <line key={i} x1={cx - h.w} y1={h.y} x2={cx + h.w} y2={h.y}
          stroke="rgba(80,227,194,0.055)" strokeWidth={0.75} />
      ))}

      {/* Dome left reflection */}
      <path d={`
        M ${cx - 20} ${dApexY + 16}
        Q ${cx - 58} ${(dApexY + dCy) / 2 + 4} ${cx - 62} ${dCy - 7}
        Q ${cx - 36} ${(dApexY + dCy) / 2 - 5} ${cx - 9} ${dApexY + 20}
        Z`}
        fill="rgba(80,227,194,0.065)" opacity={0.85} />

      {/* Dome outline */}
      <path d={`
        M ${dL} ${dCy}
        Q ${dL - 5} ${(dApexY + dCy) / 2 + 8} ${cx} ${dApexY}
        Q ${dR + 5} ${(dApexY + dCy) / 2 + 8} ${dR} ${dCy}`}
        fill="none" stroke="rgba(80,227,194,0.32)" strokeWidth={1} />
      <ellipse cx={cx} cy={dCy} rx={dRx} ry={dRy}
        fill="none" stroke="rgba(80,227,194,0.22)" strokeWidth={0.9} />

      {/* OUTER RIM outlines */}
      <path d={`M ${rL} ${cy} A ${oRx} ${oRy} 0 0 1 ${rR} ${cy}`}
        fill="none" stroke="rgba(80,227,194,0.32)" strokeWidth={1.2} />
      <path d={`M ${rL} ${cy} A ${oRx} ${oRy} 0 0 0 ${rR} ${cy}`}
        fill="none" stroke="rgba(80,227,194,0.14)" strokeWidth={0.8} />

      {/* Rim tip glows */}
      <ellipse cx={rL + 6} cy={cy} rx={9} ry={7}
        fill="url(#g-rim-tip)" filter="url(#f-rim-tip)" />
      <ellipse cx={rR - 6} cy={cy} rx={9} ry={7}
        fill="url(#g-rim-tip)" filter="url(#f-rim-tip)" />

      {/* HUD labels */}
      <text x={rL + 16} y={cy - 40} fontFamily="DM Mono, monospace" fontSize={8}
        fill="rgba(80,227,194,0.35)" letterSpacing="0.1em">TRCK-09</text>
      <text x={rR - 116} y={cy - 40} fontFamily="DM Mono, monospace" fontSize={8}
        fill="rgba(80,227,194,0.3)" letterSpacing="0.1em">51°32'N · 07°28'E</text>
      <text x={cx - 38} y={pCy + 30} fontFamily="DM Mono, monospace" fontSize={8}
        fill="rgba(80,227,194,0.28)" letterSpacing="0.1em">ALT 00.00 KM</text>
    </svg>
  );
}

function Hero({ setActive }: { setActive: (s: string) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(80,227,194,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,227,194,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #020203 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* UFO */}
        <div className="animate-fade-in-up">
          <UFOOrb />
        </div>

        {/* Label identifier */}
        <div className="animate-fade-in-up delay-200 flex items-center gap-3">
          <div style={{ width: 28, height: 1, background: "rgba(80,227,194,0.5)" }} />
          <span className="font-mono text-xs" style={{ color: "#50e3c2", letterSpacing: "0.3em" }}>Par nous, pour vous</span>
          <div style={{ width: 28, height: 1, background: "rgba(80,227,194,0.5)" }} />
        </div>

        {/* Main heading */}
        <h1
          className="font-condensed animate-fade-in-up delay-300"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 0.88, letterSpacing: "-0.02em", fontWeight: 800, color: "#e2e2e4" }}
        >
          UFO<br />
          <span style={{ color: "rgba(226,226,228,0.18)", WebkitTextStroke: "1px rgba(226,226,228,0.28)" }}>.recordz</span><br />
          
        </h1>

        <p className="animate-fade-in-up delay-500 text-sm font-light" style={{ color: "rgba(226,226,228,0.38)", letterSpacing: "0.14em" }}>
          TEKNO LABEL & EVENTS 
        </p>

        <div className="animate-fade-in-up delay-700 flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => setActive("releases")}
            className="font-condensed text-xs tracking-widest px-8 py-3.5 transition-all duration-300 hover:brightness-90"
            style={{ background: "#50e3c2", color: "#020203", letterSpacing: "0.2em", fontWeight: 600 }}
          >
            NEW RELEASES
          </button>
          <button
            onClick={() => setActive("events")}
            className="font-condensed text-xs tracking-widest px-8 py-3.5 border transition-all duration-300 hover:border-[#50e3c2] hover:text-[#50e3c2]"
            style={{ borderColor: "rgba(226,226,228,0.15)", color: "rgba(226,226,228,0.5)", letterSpacing: "0.2em" }}
          >
            UPCOMING EVENTS
          </button>
        </div>
      </div>

      {/* Bottom scan line */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(80,227,194,0.12), transparent)" }}
      />
      <div className="absolute bottom-8 font-mono text-xs" style={{ color: "rgba(80,227,194,0.3)", letterSpacing: "0.2em" }}>
        
      </div>
    </section>
  );
}


function Nav({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "linear-gradient(180deg, rgba(2,2,3,0.98) 0%, transparent 100%)", backdropFilter: "blur(12px)" }}
    >
      <button onClick={() => setActive("home")}>
      <img
        src={logo}
        alt="UFO.recordz"
        className="h-10 w-auto"
      />
    </button>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link.toLowerCase())}
            className="font-condensed text-xs tracking-widest transition-colors duration-200"
            style={{ color: active === link.toLowerCase() ? "#50e3c2" : "rgba(226,226,228,0.45)", letterSpacing: "0.2em" }}
          >
            {link.toUpperCase()}
          </button>
        ))}
        <button
          className="font-condensed text-xs tracking-widest border px-4 py-2 transition-all duration-200 hover:bg-[#50e3c2] hover:text-black"
          style={{ borderColor: "rgba(80,227,194,0.4)", color: "#50e3c2", letterSpacing: "0.2em" }}
        >
          LISTEN
        </button>
      </div>
      <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
        {[0, 1, 2].map((i) => (
          <span key={i} className="block"
            style={{ width: i === 1 ? 16 : 22, height: 1, background: "#50e3c2", opacity: i === 1 ? 0.5 : 1 }} />
        ))}
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 flex flex-col p-8 gap-6 md:hidden"
          style={{ background: "rgba(2,2,3,0.98)", borderBottom: "1px solid rgba(80,227,194,0.1)" }}>
          {NAV_LINKS.map((link) => (
            <button key={link}
              onClick={() => { setActive(link.toLowerCase()); setMenuOpen(false); }}
              className="font-condensed text-sm tracking-widest text-left"
              style={{ color: active === link.toLowerCase() ? "#f4f445" : "rgba(226,226,228,0.45)", letterSpacing: "0.2em" }}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
function Valeurs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="UFO.recordz" title="NOS VALEURS" />

      <ConductCharter />

      <div
        className="mt-16 pt-8"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          className="font-mono text-xs mb-5"
          style={{
            color: "rgba(226,226,228,0.35)",
            letterSpacing: "0.15em",
          }}
        >
          CHARTE DE BONNE CONDUITE · VERSION PDF
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/documents/charte-ufo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-5 py-3"
            style={{
              color: "rgba(226,226,228,0.6)",
              border: "1px solid rgba(255,255,255,0.12)",
              letterSpacing: "0.15em",
            }}
          >
            LIRE ↗
          </a>

          <a
            href="/documents/charte-ufo.pdf"
            download
            className="font-mono text-xs px-5 py-3 transition-all duration-300 hover:bg-[#50e3c2] hover:text-black"
            style={{
              color: "#50e3c2",
              border: "1px solid rgba(80,227,194,0.35)",
              letterSpacing: "0.15em",
            }}
          >
            TÉLÉCHARGER ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="À PROPOS" title="QUI SOMMES-NOUS ?" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left statement */}
        <div>
          <p
            className="font-condensed uppercase"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#e2e2e4",
            }}
          >
            PAR NOUS,
            <br />
            <span style={{ color: "#f4f445" }}>
              POUR VOUS.
            </span>
          </p>

          <div
            className="mt-8"
            style={{
              width: 60,
              height: 1,
              background: "rgba(80,227,194,0.45)",
            }}
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-8">
          <p
            className="text-base md:text-lg font-light"
            style={{
              color: "rgba(226,226,228,0.68)",
              lineHeight: 1.85,
            }}
          >
            UFO.recordz est une association loi 1901, un collectif et un label
            indépendant basé à Paris, dédié à la musique tekno, à la fête libre
            et à la création d’espaces où artistes et publics peuvent se
            rencontrer autrement.
          </p>

          <p
            className="text-base font-light"
            style={{
              color: "rgba(226,226,228,0.42)",
              lineHeight: 1.85,
            }}
          >
            Nous organisons des événements, accompagnons des artistes et
            développons des projets autour de la tekno et de ses cultures,
            avec une approche communautaire, indépendante et collaborative.
            Notre objectif est de mettre en avant la culture free party et les
            artistes qui la font vivre.
          </p>

          {/* Small tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["TEKNO", "FREE PARTY", "EVENTS", "LABEL", "COLLECTIF"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5"
                style={{
                  color: "#f4f445",
                  border: "1px solid rgba(80,227,194,0.16)",
                  background: "rgba(80,227,194,0.035)",
                  letterSpacing: "0.12em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <p className="font-mono text-xs mb-1" style={{ color: "rgba(226,226,228,0.35)", letterSpacing: "0.15em" }}>
                {r.artist}
              </p>
              <h3
                className="font-condensed text-2xl font-700 mb-4"
                style={{ fontWeight: 700, letterSpacing: "0.04em", color: "#e2e2e4" }}
              >
                {r.title}
              </h3>
              <div className="flex items-center gap-4">
                <Tag>{r.bpm}</Tag>
                <Tag>{r.key}</Tag>
                <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.25)", letterSpacing: "0.08em" }}>
                  {r.format}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.2)", letterSpacing: "0.1em" }}>
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

function ConductCharter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="SAFE SPACE" title="CHARTE DE BONNE CONDUITE" />

      <div
        className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-12 lg:gap-20"
      >
        {/* Colonne gauche */}
        <div>
          <p
            className="font-condensed uppercase"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#e2e2e4",
            }}
          >
            PRENDRE SOIN
            <br />
            <span style={{ color: "#f4f445" }}>DE TOUSTES.</span>
          </p>

          <div
            className="mt-8"
            style={{
              width: 60,
              height: 1,
              background: "rgba(80,227,194,0.45)",
            }}
          />

          <p
            className="mt-8 font-mono text-xs"
            style={{
              color: "rgba(226,226,228,0.35)",
              letterSpacing: "0.12em",
              lineHeight: 1.8,
            }}
          >
            UFO.recordz défend des espaces de fête libres, inclusifs et sûrs.
          </p>
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-8">
          <CharterParagraph>
            Les événements UFO sont pensés comme des espaces de fête, de liberté
            et de respect. Toute personne présente (public, artistes, bénévoles,
            équipe ou partenaires) s’engage à respecter les autres et à contribuer
            à un environnement sûr pour tous-tes.
          </CharterParagraph>

          <CharterParagraph>
            Aucune discrimination ne sera tolérée, notamment en raison de
            l’origine, de la couleur de peau, du genre, de l’identité ou de
            l’expression de genre, de l’orientation sexuelle, du handicap, de
            l’âge, de la religion, de l’apparence physique ou de la situation
            sociale.
          </CharterParagraph>

          <CharterParagraph>
            Les violences sexistes et sexuelles, le harcèlement, les comportements
            intimidants, les attouchements non consentis, les remarques déplacées,
            les gestes insistants ou toute forme de pression sont interdits.
          </CharterParagraph>

          <CharterParagraph>
            Avant toute initiative, vous devez obtenir un consentement libre,
            clair, enthousiaste et réversible. L’absence de refus ne signifie pas
            un consentement. Une personne alcoolisée, endormie, inconsciente ou
            dans un état ne lui permettant pas de décider librement ne peut pas
            consentir.
          </CharterParagraph>

          <CharterParagraph>
            Respectez l’espace personnel de chacun-e. Ne touchez pas, ne
            photographiez pas et ne filmez pas quelqu’un sans son accord.
          </CharterParagraph>

          <CharterParagraph>
            Si vous êtes témoin ou victime d’un comportement problématique,
            adressez-vous à un membre de l’équipe UFO ou au dispositif de
            prévention présent sur place. Les signalements seront pris au sérieux
            et traités avec discrétion.
          </CharterParagraph>

          <CharterParagraph>
            Selon la situation, l’équipe se réserve le droit d’intervenir,
            d’éloigner une personne, de lui demander de quitter l’événement ou de
            lui refuser l’accès à de futurs événements.
          </CharterParagraph>

          <div
            className="p-6"
            style={{
              background: "rgba(80,227,194,0.035)",
              border: "1px solid rgba(80,227,194,0.14)",
            }}
          >
            <p
              className="font-condensed text-xl md:text-2xl"
              style={{
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#e2e2e4",
              }}
            >
              Prendre soin de la fête, c’est aussi prendre soin des personnes qui
              la font vivre.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "PAS DE RACISME",
              "PAS DE SEXISME",
              "PAS DE LGBTQIA+PHOBIE",
              "PAS DE VALIDISME",
              "PAS DE HARCÈLEMENT",
              "PAS DE VIOLENCES",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-3 py-2"
                style={{
                  color: "rgba(226,226,228,0.55)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  letterSpacing: "0.08em",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <p
            className="font-condensed text-2xl md:text-3xl"
            style={{
              fontWeight: 700,
              color: "#50e3c2",
              letterSpacing: "0.03em",
            }}
          >
            CONSENTEMENT · RESPECT · ATTENTION AUX AUTRES
          </p>

          <div
            className="pt-8 mt-2"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="font-mono text-xs md:text-sm"
              style={{
                color: "rgba(226,226,228,0.6)",
                lineHeight: 1.8,
                letterSpacing: "0.05em",
              }}
            >
              En participant à toute forme d’évènement organisé par UFO.recordz,
              vous vous engagez à respecter la charte ci-dessus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CharterParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base font-light"
      style={{
        color: "rgba(226,226,228,0.58)",
        lineHeight: 1.9,
      }}
    >
      {children}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-xs px-2 py-0.5"
      style={{
        color: "rgba(80,227,194,0.7)",
        background: "rgba(80,227,194,0.07)",
        border: "1px solid rgba(80,227,194,0.12)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}

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
              <span className="font-mono text-xs" style={{ color: "rgba(80,227,194,0.3)", letterSpacing: "0.15em" }}>
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
              <p className="text-sm font-light" style={{ color: "rgba(226,226,228,0.4)" }}>
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
                      color: "rgba(226,226,228,0.35)",
                      border: "1px solid rgba(255,255,255,0.06)",
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
              <p className="font-condensed text-sm mb-1" style={{ letterSpacing: "0.1em", color: "rgba(226,226,228,0.7)" }}>
                {ev.date}
              </p>
              <p className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.3)", letterSpacing: "0.08em" }}>
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
                    ? "rgba(139,128,249,0.1)"
                    : "rgba(80,227,194,0.1)",
                  color: ev.status === "SOLD OUT"
                    ? "rgba(226,226,228,0.25)"
                    : ev.status === "PRESALE"
                    ? "#8b80f9"
                    : "#50e3c2",
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
              style={{ background: "linear-gradient(180deg, transparent 40%, rgba(2,2,3,0.9) 100%)" }}
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
                <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.35)", letterSpacing: "0.1em" }}>
                  {artist.origin}
                </span>
                <span className="font-mono text-xs" style={{ color: "rgba(80,227,194,0.5)", letterSpacing: "0.1em" }}>
                  {artist.releases} REL
                </span>
              </div>
            </div>

            {/* Hover scan line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(80,227,194,0.5)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Label() {
  const labelVisuals = [
    [va003Recto, va003Verso],
    [va005Recto, va005Verso],
    [va001Recto, va001Verso],
    [va006Recto, va006Verso],
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="ABOUT" title="THE LABEL" />

      {/* Texte + contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p
            className="text-base font-light leading-relaxed mb-6"
            style={{
              color: "rgba(226,226,228,0.6)",
              lineHeight: 1.8,
            }}
          >
            Nous proposons un accompagnement artistique professionnel et gratuit
            (Ingé son, graphiste, DA…).
            <br />
            <br />
            À destination des producteur-ices issu-es de la scène free party
            souhaitant développer leur projet musical. N'hésite pas à nous
            contacter pour plus d'informations.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              ["81", "SINGLE RELEASES"],
              ["6", "VA RELEASES"],
              ["5", "EPs RELEASES"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  className="font-condensed text-4xl font-800 mb-1"
                  style={{
                    fontWeight: 800,
                    color: "#50e3c2",
                  }}
                >
                  {num}
                </div>

                <div
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(226,226,228,0.3)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div
          className="flex flex-col gap-px"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            ["BOOKING", "contact@uforecordz.fr"],
            ["DEMOS", "https://forms.gle/GU8uJ4fi4ypd4mKYA"],
            ["PRESS", "fantine@uforecordz.fr"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between p-5"
              style={{
                background: "var(--card)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="font-mono text-xs"
                style={{
                  color: "rgba(226,226,228,0.3)",
                  letterSpacing: "0.15em",
                }}
              >
                {label}
              </span>

              {value.startsWith("https://") ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-colors hover:text-[#50e3c2]"
                  style={{
                    color: "rgba(80,227,194,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label === "DEMOS" ? "FORMULAIRE" : value}
                </a>
              ) : value.includes("@") ? (
                <a
                  href={`mailto:${value}`}
                  className="font-mono text-xs transition-colors hover:text-[#50e3c2]"
                  style={{
                    color: "rgba(80,227,194,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {value}
                </a>
              ) : (
                <span
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(80,227,194,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Galerie des releases */}
      <div className="mt-24">
        <div
          className="mb-8 flex items-center gap-4"
          style={{ color: "rgba(226,226,228,0.35)" }}
        >
          <span
            className="font-mono text-xs"
            style={{ letterSpacing: "0.2em" }}
          >
            SELECTED RELEASES
          </span>

          <div
            className="flex-1"
            style={{
              height: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          />
        </div>

        <div className="flex flex-col gap-10">
          {labelVisuals.map(([recto, verso], index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div
                className="overflow-hidden group"
                style={{
                  aspectRatio: "1 / 1",
                  background: "#080808",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src={recto}
                  alt={`UFO release ${index + 1} recto`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div
                className="overflow-hidden group"
                style={{
                  aspectRatio: "1 / 1",
                  background: "#080808",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src={verso}
                  alt={`UFO release ${index + 1} verso`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between border-b pb-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div>
        <p className="font-mono text-xs mb-3" style={{ color: "rgba(80,227,194,0.5)", letterSpacing: "0.3em" }}>
          {label}
        </p>
        <h2
          className="font-condensed"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "0.02em", lineHeight: 1 }}
        >
          {title}
        </h2>
      </div>
      <div style={{ width: 40, height: 1, background: "rgba(80,227,194,0.3)" }} />
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-condensed tracking-widest text-sm" style={{ color: "#50e3c2", letterSpacing: "0.3em" }}>
          SECTOR-9 ◈
        </span>
        <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.2)", letterSpacing: "0.1em" }}>
          © 2026 SECTOR-9 RECORDS · BERLIN, DE · ALL RIGHTS RESERVED
        </span>
        <div className="flex gap-6">
          {["SOUNDCLOUD", "RA", "BANDCAMP"].map((s) => (
            <span
              key={s}
              className="font-mono text-xs cursor-pointer transition-colors duration-200 hover:text-[#50e3c2]"
              style={{ color: "rgba(226,226,228,0.25)", letterSpacing: "0.1em" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Nav active={active} setActive={setActive} />

      {active === "home" && (
        <>
          <Hero setActive={setActive} />
          <WhoWeAre />
          <ConductCharter />
          <Releases />
          <Events />
          <Artists />
        </>
      )}
      {active === "releases" && (
        <div className="pt-24">
          <Releases />
        </div>
      )}
      {active === "events" && (
        <div className="pt-24">
          <Events />
        </div>
      )}
      {active === "artists" && (
        <div className="pt-24">
          <Artists />
        </div>
      )}
      {active === "label" && (
        <div className="pt-24">
          <Label />
        </div>
      )}
      {active === "valeurs" && (
        <div className="pt-24">
          <Valeurs />
        </div>
      )}

      <Footer />
    </div>
  );
}
