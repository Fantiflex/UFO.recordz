import SoundSystemModel from "../components/ufo/SoundSystemModel";
import SoundSystemQuoteForm from "../components/ufo/SoundSystemQuoteForm";
import { useState } from "react";

const images = [
  "/models/TEST FULL STACK.png",
  "/models/TEST FULL STACK-2.png",
  "/models/TEST FULL STACK-3.png",
];

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
  const [activeIndex, setActiveIndex] = useState(0); 

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

        {/* SOUNDSYSTEM CONFIGURATIONS CAROUSEL */}
        <section className="mt-24">

          {/* HEADER */}
          <div className="mb-10">

            <h2 className="mt-4 text-3xl font-bold uppercase md:text-5xl">
              UNE CONFIGURATION POUR
              <span className="text-[#f8ff33]"> CHAQUE OCCASION : </span>
            </h2>
          </div>

          {/* CAROUSEL */}
          <div className="relative border border-white/10 bg-[#0a0a0a]">

            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

              <span className="font-mono text-xs uppercase tracking-widest text-[#f8ff33]">
                CONFIGURATION {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="font-mono text-xs tracking-widest text-white/40">
                {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>

            </div>

            {/* IMAGE */}
            <div className="flex h-[320px] items-center justify-center p-6 md:h-[550px] md:p-12">

              <img
                key={images[activeIndex]}
                src={encodeURI(images[activeIndex])}
                alt={`Disposition ${activeIndex + 1} du soundsystem UFO`}
                className="h-full w-full object-contain"
              />

            </div>

            {/* BOTTOM CONTROLS */}
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-5">

              {/* INDICATORS */}
              <div className="flex items-center gap-3">

                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Afficher la configuration ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-[3px] transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-[#f8ff33]"
                        : "w-5 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                ))}

              </div>

              {/* ARROWS */}
              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Configuration précédente"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#f8ff33] hover:bg-[#f8ff33] hover:text-black"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Configuration suivante"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#f8ff33] hover:bg-[#f8ff33] hover:text-black"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </section>

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