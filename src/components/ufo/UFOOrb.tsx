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

export default UFOOrb;