
import SoundManifestive from "../data/images/ufo-recordz/SoundManifestive.jpg";
import SDRAVEfoule from "../data/images/ufo-recordz/SDRAVEfoule.jpg";
import SDRAVEfoule2 from "../data/images/ufo-recordz/SDRAVEfoule2.JPG";
import TerminusFoule from "../data/images/ufo-recordz/TerminusFoule.JPG";


const photos = [
  SoundManifestive,
  SDRAVEfoule,
  SDRAVEfoule2,
  TerminusFoule,
];


export default function UFORecordzPage() {
  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">

        {/* Intro */}
        <div className="mb-16">
        <p
            className="font-mono text-xs uppercase mb-5"
            style={{
            color: "rgba(240, 255, 76, 0.55)",
            letterSpacing: "0.3em",
            }}
        >
            UFO.recordz
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span
            className="font-condensed text-5xl md:text-7xl uppercase"
            style={{ color: "#e4e4e2" }}
            >
            Collectif.
            </span>

            <span
            className="font-condensed text-5xl md:text-7xl uppercase"
            style={{ color: "#e3de50" }}
            >
            Label.
            </span>

            <span
            className="font-condensed text-5xl md:text-7xl uppercase"
            style={{ color: "#e4e4e2" }}
            >
            Soundsystem.
            </span>
        </div>

        <div
            className="mt-6 w-16 h-px"
            style={{ background: "#e3e050" }}
        />

        <p
            className="mt-8 max-w-2xl font-mono text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(228, 228, 226, 0.5)" }}
        >
            UFO.recordz réunit artistes, organisateur·ices et passionné·es autour
            d'une même vision : créer des espaces de fête pour toustes, produire de la musique
            et faire vivre une culture électronique libre, collective et indépendante.
        </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="md:col-span-2">
            <img
              src={photos[0]}
              alt="UFO.recordz Manifestive"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <img
              src={photos[1]}
              alt="UFO.recordz crowd"
              className="w-full object-cover"
            />

            <img
              src={photos[3]}
              alt="UFO.recordz Terminus"
              className="w-full object-cover"
            />

            <img
              src={photos[2]}
              alt="UFO.recordz crowd 2"
              className="w-full object-cover"
            />
          </div>

        </div>
        <section className="mt-24 border-t border-white/10 pt-12">
            <p
                className="font-mono text-xs uppercase mb-6"
                style={{
                color: "rgba(220, 227, 80, 0.95)",
                letterSpacing: "0.3em",
                }}
            >
                Mentions légales
            </p>

            <div
                className="max-w-3xl font-mono text-sm leading-relaxed"
                style={{ color: "rgba(226, 226, 228, 0.6)" }}
            >
                <p className="mb-6">
                Le site uforecordz.fr est opéré par l'association UFO6TEM
                (opérant sous le nom d'usage et label{" "}
                <span style={{ color: "#c8e35094" }}>UFO.recordz</span>).
                </p>

                <ul className="space-y-3">
                <li>
                    <span style={{ color: "#e2e2e4" }}>Statut juridique :</span>{" "}
                    Association loi 1901 à but non lucratif
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>Numéro RNA :</span>{" "}
                    W784011328
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>SIREN :</span>{" "}
                    928 192 129
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>SIRET du siège :</span>{" "}
                    928 192 129 00015
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>Adresse du siège social :</span>{" "}
                    17 rue Pierre Bonnard, 78370 Plaisir
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>Courriel :</span>{" "}
                    <a
                    href="mailto:contact@uforecordz.fr"
                    className="transition-colors duration-200 hover:text-[#50e3c2]"
                    style={{ color: "#c8e350" }}
                    >
                    contact@uforecordz.fr
                    </a>
                </li>

                <li>
                    <span style={{ color: "#e2e2e4" }}>Objet :</span>{" "}
                    Promotion et diffusion de la culture free party, organisation
                    d'événements culturels inclusifs, mise à disposition de matériel
                    scénique et accompagnement artistique gratuit pour les producteurs
                    émergents.
                </li>
                </ul>
            </div>
            </section>
      </section>
    </main>
  );
}