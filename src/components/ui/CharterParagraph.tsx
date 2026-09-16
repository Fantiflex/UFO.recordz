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

export default CharterParagraph;