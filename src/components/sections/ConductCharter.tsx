import { RELEASES } from "../../data/releases";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import CharterParagraph from "@/components/ui/CharterParagraph";

function ConductCharter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="SAFE SPACE" title="CHARTE DE BONNE CONDUITE" />

      <div
        className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-12 lg:gap-20"
      >
        {/* Colonne gauche */}
        <div>
          <p
            className="font-condensed uppercase"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#e2e2e4",
            }}
          >
            PRENDRE SOIN
            <br />
            <span style={{ color: "#f4f445" }}>DE TOUSTES.</span>
          </p>

          <div
            className="mt-8"
            style={{
              width: 60,
              height: 1,
              background: "rgba(207, 227, 80, 0.45)",
            }}
          />

          <p
            className="mt-8 font-mono text-xs"
            style={{
              color: "rgba(228, 228, 226, 0.35)",
              letterSpacing: "0.12em",
              lineHeight: 1.8,
            }}
          >
            UFO.recordz défend des espaces de fête libres, inclusifs et sûrs.
          </p>
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-8">
          <CharterParagraph>
            Les événements UFO sont pensés comme des espaces de fête, de liberté
            et de respect. Toute personne présente (public, artistes, bénévoles,
            équipe ou partenaires) s’engage à respecter les autres et à contribuer
            à un environnement sûr pour tous-tes.
          </CharterParagraph>

          <CharterParagraph>
            Aucune discrimination ne sera tolérée, notamment en raison de
            l’origine, de la couleur de peau, du genre, de l’identité ou de
            l’expression de genre, de l’orientation sexuelle, du handicap, de
            l’âge, de la religion, de l’apparence physique ou de la situation
            sociale.
          </CharterParagraph>

          <CharterParagraph>
            Les violences sexistes et sexuelles, le harcèlement, les comportements
            intimidants, les attouchements non consentis, les remarques déplacées,
            les gestes insistants ou toute forme de pression sont interdits.
          </CharterParagraph>

          <CharterParagraph>
            Avant toute initiative, vous devez obtenir un consentement libre,
            clair, enthousiaste et réversible. L’absence de refus ne signifie pas
            un consentement. Une personne alcoolisée, endormie, inconsciente ou
            dans un état ne lui permettant pas de décider librement ne peut pas
            consentir.
          </CharterParagraph>

          <CharterParagraph>
            Respectez l’espace personnel de chacun-e. Ne touchez pas, ne
            photographiez pas et ne filmez pas quelqu’un sans son accord.
          </CharterParagraph>

          <CharterParagraph>
            Si vous êtes témoin ou victime d’un comportement problématique,
            adressez-vous à un membre de l’équipe UFO ou au dispositif de
            prévention présent sur place. Les signalements seront pris au sérieux
            et traités avec discrétion.
          </CharterParagraph>

          <CharterParagraph>
            Selon la situation, l’équipe se réserve le droit d’intervenir,
            d’éloigner une personne, de lui demander de quitter l’événement ou de
            lui refuser l’accès à de futurs événements.
          </CharterParagraph>

          <div
            className="p-6"
            style={{
              background: "rgba(222, 227, 80, 0.04)",
              border: "1px solid rgba(210, 227, 80, 0.14)",
            }}
          >
            <p
              className="font-condensed text-xl md:text-2xl"
              style={{
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#e2e2e4",
              }}
            >
              Prendre soin de la fête, c’est aussi prendre soin des personnes qui
              la font vivre.
            </p>
          </div>

          

          <p
            className="font-condensed text-2xl md:text-3xl"
            style={{
              fontWeight: 700,
              color: "#c1e350",
              letterSpacing: "0.03em",
            }}
          >
            CONSENTEMENT · RESPECT · ATTENTION AUX AUTRES
          </p>

          <div
            className="pt-8 mt-2"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="font-mono text-xs md:text-sm"
              style={{
                color: "rgba(227, 228, 226, 0.6)",
                lineHeight: 1.8,
                letterSpacing: "0.05em",
              }}
            >
              En participant à toute forme d’évènement organisé par UFO.recordz,
              vous vous engagez à respecter la charte ci-dessus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConductCharter;