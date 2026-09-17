
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
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-lime-300/60 mb-5">
            UFO.recordz
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-condensed text-5xl md:text-7xl uppercase tracking-tight text-white">
              Collectif.
            </span>

            <span className="font-condensed text-5xl md:text-7xl uppercase tracking-tight text-lime-300">
              Label.
            </span>

            <span className="font-condensed text-5xl md:text-7xl uppercase tracking-tight text-white">
              Soundsystem.
            </span>
          </div>

          <p className="mt-8 max-w-2xl font-mono text-sm md:text-base leading-relaxed text-white/50">
            UFO.recordz réunit artistes, organisateur·ices et passionné·es autour
            d'une même vision : créer des espaces de fête, produire de la musique
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
      </section>
    </main>
  );
}