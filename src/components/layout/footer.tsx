function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-condensed tracking-widest text-sm" style={{ color: "#50e3c2", letterSpacing: "0.3em" }}>
          RAVE ON ◈
        </span>
        <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.2)", letterSpacing: "0.1em" }}>
          © UFO6TEM · PARIS, FR · ALL RIGHTS RESERVED
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

export default Footer;