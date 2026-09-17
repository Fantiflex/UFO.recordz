function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between border-b pb-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div>
        <p className="font-mono text-xs mb-3" style={{ color: "rgba(227, 200, 80, 0.5)", letterSpacing: "0.3em" }}>
          {label}
        </p>
        <h2
          className="font-condensed"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "0.02em", lineHeight: 1 }}
        >
          {title}
        </h2>
      </div>
      <div style={{ width: 40, height: 1, background: "rgba(183, 213, 66, 0.3)" }} />
    </div>
  );
}

export default SectionHeader;