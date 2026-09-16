import SectionHeader from "../components/ui/SectionHeader";
import ConductCharter from "../sections/ConductCharter";


export default function ValeursPage() {
  return (
    <main className="pt-24">
      <ConductCharter />

      <section className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto pb-24">
        <div
          className="pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="font-mono text-xs mb-5"
            style={{
              color: "rgba(226,226,228,0.35)",
              letterSpacing: "0.15em",
            }}
          >
            CHARTE DE BONNE CONDUITE · VERSION PDF
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/documents/charte-ufo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-5 py-3"
              style={{
                color: "rgba(226,226,228,0.6)",
                border: "1px solid rgba(255,255,255,0.12)",
                letterSpacing: "0.15em",
              }}
            >
              LIRE ↗
            </a>

            <a
              href="/documents/charte-ufo.pdf"
              download
              className="font-mono text-xs px-5 py-3 transition-all duration-300 hover:bg-[#50e3c2] hover:text-black"
              style={{
                color: "#50e3c2",
                border: "1px solid rgba(80,227,194,0.35)",
                letterSpacing: "0.15em",
              }}
            >
              TÉLÉCHARGER ↓
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}