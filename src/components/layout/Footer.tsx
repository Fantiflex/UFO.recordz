const socials = [
  {
    name: "SOUNDCLOUD",
    href: "https://soundcloud.com/uforecordz",
  },
  {
    name: "SHOTGUN",
    href: "https://shotgun.live/fr/venues/ufo-recordz",
  },
  {
    name: "BANDCAMP",
    href: "https://uforecordz.bandcamp.com/",
  },
];

function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="font-condensed tracking-widest text-sm"
          style={{
            color: "#c8e350",
            letterSpacing: "0.3em",
          }}
        >
          RAVE ON ◈
        </span>

        <span
          className="font-mono text-xs"
          style={{
            color: "rgba(228, 227, 226, 0.2)",
            letterSpacing: "0.1em",
          }}
        >
          © UFO6TEM · PARIS, FR · ALL RIGHTS RESERVED
        </span>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-200 hover:text-[#50e3c2]"
              style={{
                color: "rgba(227, 228, 226, 0.25)",
                letterSpacing: "0.1em",
              }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;