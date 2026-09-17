import va003Recto from "../imports/VA003_recto.JPG";
import va003Verso from "../imports/VA003_verso.JPG";
import va005Recto from "../imports/VA005_recto.JPG";
import va005Verso from "../imports/VA005_verso.JPG";
import va001Recto from "../imports/VA001_recto.JPG";
import va001Verso from "../imports/VA001_verso.JPG";
import va006Recto from "../imports/VA006_recto.JPG";
import va006Verso from "../imports/VA006_verso.JPG";

import SectionHeader from "../components/ui/SectionHeader";

function LabelPage() {
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
              color: "rgba(228, 228, 226, 0.6)",
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
                    color: "#dee350",
                  }}
                >
                  {num}
                </div>

                <div
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(228, 228, 226, 0.3)",
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
                    color: "rgba(227, 224, 80, 0.7)",
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
                    color: "rgba(227, 207, 80, 0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {value}
                </a>
              ) : (
                <span
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(188, 227, 80, 0.7)",
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
          style={{ color: "rgba(228, 228, 226, 0.35)" }}
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

export default LabelPage;