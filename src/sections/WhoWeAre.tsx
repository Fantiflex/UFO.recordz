import { RELEASES } from "../data/releases";
import SectionHeader from "../components/ui/SectionHeader";
import Tag from "../components/ui/Tag";


function WhoWeAre() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="À PROPOS" title="QUI SOMMES-NOUS ?" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left statement */}
        <div>
          <p
            className="font-condensed uppercase"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#e4e4e2",
            }}
          >
            PAR NOUS,
            <br />
            <span style={{ color: "#f4f445" }}>
              POUR VOUS.
            </span>
          </p>

          <div
            className="mt-8"
            style={{
              width: 60,
              height: 1,
              background: "rgba(188, 227, 80, 0.45)",
            }}
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-8">
          <p
            className="text-base md:text-lg font-light"
            style={{
              color: "rgba(228, 228, 226, 0.68)",
              lineHeight: 1.85,
            }}
          >
            UFO.recordz est une association loi 1901, un collectif et un label
            indépendant basé à Paris, dédié à la musique tekno, à la fête libre
            et à la création d’espaces où artistes et publics peuvent se
            rencontrer autrement.
          </p>

          <p
            className="text-base font-light"
            style={{
              color: "rgba(228, 228, 226, 0.42)",
              lineHeight: 1.85,
            }}
          >
            Nous organisons des événements, accompagnons des artistes et
            développons des projets autour de la tekno et de ses cultures,
            avec une approche communautaire, indépendante et collaborative.
            Notre objectif est de mettre en avant la culture free party et les
            artistes qui la font vivre.
          </p>

          {/* Small tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["TEKNO", "FREE PARTY", "EVENTS", "LABEL", "COLLECTIF"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5"
                style={{
                  color: "#f4f445",
                  border: "1px solid rgba(227, 227, 80, 0.16)",
                  background: "rgba(80,227,194,0.035)",
                  letterSpacing: "0.12em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;