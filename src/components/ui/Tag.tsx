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

export default Tag;