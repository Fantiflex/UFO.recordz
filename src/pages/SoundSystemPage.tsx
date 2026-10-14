import SoundSystemModel from "../components/ufo/SoundSystemModel";

export default function SoundSystemPage() {
  return (
    <main className="min-h-screen bg-[#020203] pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">

        {/* PAGE TITLE */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold uppercase tracking-tight md:text-7xl">
            SOUND<span className="text-[#c8e350]">SYSTEM</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Notre système son, conçu pour faire vibrer les espaces
            et partager notre passion pour la culture soundsystem.
          </p>
        </div>

        {/* 3D MODEL */}
        <div className="relative">
          <SoundSystemModel />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              UFO.recordz — Soundsystem
            </span>

            <span className="font-mono text-xs uppercase tracking-widest text-[#c8e350]">
              Drag to rotate / Scroll to zoom
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold uppercase md:text-5xl">
              OUR SOUND.
              <br />
              OUR IDENTITY.
            </h2>
          </div>

          <div className="space-y-6 text-white/65">
            <p>
              Le soundsystem est au cœur de notre identité.
              Plus qu'un équipement technique, il représente
              notre volonté de faire vivre une culture musicale
              libre, collective et accessible.
            </p>

            <p>
              Pensé pour accompagner nos événements, il évolue
              avec notre collectif et nos ambitions.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}