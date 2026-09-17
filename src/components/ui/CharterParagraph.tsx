function CharterParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base font-light"
      style={{
        color: "rgba(228, 228, 226, 0.58)",
        lineHeight: 1.9,
      }}
    >
      {children}
    </p>
  );
}

export default CharterParagraph;