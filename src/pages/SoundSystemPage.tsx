import SoundSystemModel from "../components/ufo/SoundSystemModel";
import SoundSystemQuoteForm from "../components/ufo/SoundSystemQuoteForm";


const configurations = [
  {
    range: "50 à 150",
    equipment: [
      "2 ESW",
      "1 BBC BR",
      "2 YAMAHA",
    ],
  },
  {
    range: "150 à 400",
    equipment: [
      "4 ESW",
      "1 BBC BR",
      "2 T24N",
    ],
  },
  {
    range: "400 à 700",
    equipment: [
      "8 ESW",
      "2 BBC BR",
      "2 T24N",
      "2 YAMAHA",
    ],
  },
];



export default function SoundSystemPage() {
  return (
    <main className="min-h-screen bg-[#020203] pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">

        {/* PAGE TITLE */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Notre soundsystem,<span className="text-[#f8ff33]"> pour vous.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Conçu pour faire vibrer les espaces
            et les publics.
          </p>
        </div>

        {/* 3D MODEL */}
        <div className="relative">
          <SoundSystemModel />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

            <span className="font-mono text-xs uppercase tracking-widest text-[#f8ff33]">
              Drag to rotate / Scroll to zoom
            </span>
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS */}
        <section className="mt-20">
        <div className="mb-10">
            <h2 className="text-3xl font-bold uppercase md:text-5xl">
            FICHE TECHNIQUE
            </h2>

            <p className="mt-4 text-white/50">
            Une configuration adaptée à la taille de chaque événement.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {configurations.map((config) => (
            <div
                key={config.range}
                className="border border-white/10 bg-[#111111] p-8 transition-colors duration-300 hover:border-[#f8ff33]/60"
            >
                <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    CAPACITÉ
                </span>

                <h3 className="mt-3 text-3xl font-bold text-[#f8ff33]">
                    {config.range}
                </h3>

                <span className="text-sm uppercase tracking-widest text-white/60">
                    Personnes
                </span>
                </div>

                <div className="border-t border-white/10 pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    CONFIGURATION
                </span>

                <ul className="mt-5 space-y-3">
                    {config.equipment.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-3 text-lg font-medium"
                    >
                        <span className="h-1.5 w-1.5 bg-[#f8ff33]" />
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            ))}
        </div>
        </section>


        {/* QUOTE REQUEST FORM */}
        <SoundSystemQuoteForm />
        {/* DESCRIPTION */}
        <div className="mt-24 grid grid-cols-1 gap-12 ">

          
        </div>

      </section>
    </main>
  );
}