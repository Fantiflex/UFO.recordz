
import SoundManifestive from "../data/images/ufo-recordz/SoundManifestive.jpg";
import SDRAVEfoule from "../data/images/ufo-recordz/SDRAVEfoule.jpg";
import SDRAVEfoule2 from "../data/images/ufo-recordz/SDRAVEfoule2.jpg";
import TerminusFoule from "../data/images/ufo-recordz/TerminusFoule.jpg";


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
          </div>
        </div>
      </section>
    </main>
  );
}