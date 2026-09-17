import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <SectionHeader label="CONTACT" title="NOUS CONTACTER" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p
            className="text-base font-light"
            style={{
              color: "rgba(227, 228, 226, 0.6)",
              lineHeight: 1.8,
            }}
          >
            Une question, une proposition, un booking ou envie de travailler
            avec UFO.recordz ? Contacte-nous.
          </p>
        </div>

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
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <span
                className="font-mono text-xs"
                style={{
                  color: "rgba(228, 228, 226, 0.3)",
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
                  style={{ color: "rgba(200, 227, 80, 0.7)" }}
                >
                  FORMULAIRE
                </a>
              ) : (
                <a
                  href={`mailto:${value}`}
                  className="font-mono text-xs transition-colors hover:text-[#50e3c2]"
                  style={{ color: "rgba(190, 227, 80, 0.7)" }}
                >
                  {value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}