function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-xs px-2 py-0.5"
      style={{
        color: "rgba(202, 227, 80, 0.7)",
        background: "rgba(173, 227, 80, 0.07)",
        border: "1px solid rgba(205, 227, 80, 0.12)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}

export default Tag;