import { useState } from "react";
import logo from "./imports/logo.png";
import va003Recto from "./imports/VA003_recto.JPG";
import va003Verso from "./imports/VA003_verso.jpg";

import va005Recto from "./imports/VA005_recto.JPG";
import va005Verso from "./imports/VA005_verso.JPG";

import va001Recto from "./imports/VA001_recto.JPG";
import va001Verso from "./imports/VA001_verso.JPG";

import va006Recto from "./imports/VA006_recto.JPG";
import va006Verso from "./imports/VA006_verso.JPG";


import { EVENTS } from "./data/events";
import { ARTISTS } from "./data/artists";
import { RELEASES } from "./data/releases";
import { NAV_LINKS } from "./data/navigation";

import UFOOrb from "./components/ufo/UFOOrb";
import Hero from "./sections/Hero";
import Navbar from "./components/layout/Navbar";

import SectionHeader from "./components/ui/SectionHeader";
import Tag from "./components/ui/Tag";
import CharterParagraph from "./components/ui/CharterParagraph";

import WhoWeAre from "./sections/WhoWeAre";
import ConductCharter from "./sections/ConductCharter";
import Events from "./sections/Events";
import Releases from "./sections/Releases";


function Valeurs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="UFO.recordz" title="NOS VALEURS" />

      <ConductCharter />

      <div
        className="mt-16 pt-8"
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
  );
}




function Artists() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="ROSTER" title="ARTISTS" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {ARTISTS.map((artist) => (
          <div
            key={artist.name}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "1", background: "#080808", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Photo */}
            <img
              src={artist.photo}
              alt={artist.name}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
              style={{ filter: "grayscale(100%) contrast(1.1)" }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 40%, rgba(2,2,3,0.9) 100%)" }}
            />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="font-condensed text-lg font-700 mb-1"
                style={{ fontWeight: 700, letterSpacing: "0.08em" }}
              >
                {artist.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.35)", letterSpacing: "0.1em" }}>
                  {artist.origin}
                </span>
                <span className="font-mono text-xs" style={{ color: "rgba(80,227,194,0.5)", letterSpacing: "0.1em" }}>
                  {artist.releases} REL
                </span>
              </div>
            </div>

            {/* Hover scan line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(80,227,194,0.5)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Label() {
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
              color: "rgba(226,226,228,0.6)",
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
                    color: "#50e3c2",
                  }}
                >
                  {num}
                </div>

                <div
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(226,226,228,0.3)",
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
                    color: "rgba(80,227,194,0.7)",
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
                    color: "rgba(80,227,194,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {value}
                </a>
              ) : (
                <span
                  className="font-mono text-xs"
                  style={{
                    color: "rgba(80,227,194,0.7)",
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
          style={{ color: "rgba(226,226,228,0.35)" }}
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

function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-condensed tracking-widest text-sm" style={{ color: "#50e3c2", letterSpacing: "0.3em" }}>
          SECTOR-9 ◈
        </span>
        <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.2)", letterSpacing: "0.1em" }}>
          © 2026 SECTOR-9 RECORDS · BERLIN, DE · ALL RIGHTS RESERVED
        </span>
        <div className="flex gap-6">
          {["SOUNDCLOUD", "RA", "BANDCAMP"].map((s) => (
            <span
              key={s}
              className="font-mono text-xs cursor-pointer transition-colors duration-200 hover:text-[#50e3c2]"
              style={{ color: "rgba(226,226,228,0.25)", letterSpacing: "0.1em" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar active={active} setActive={setActive} />

      {active === "home" && (
        <>
          <Hero setActive={setActive} />
          <WhoWeAre />
          <ConductCharter />
          <Releases />
          <Events />
          <Artists />
        </>
      )}
      {active === "releases" && (
        <div className="pt-24">
          <Releases />
        </div>
      )}
      {active === "events" && (
        <div className="pt-24">
          <Events />
        </div>
      )}
      {active === "artists" && (
        <div className="pt-24">
          <Artists />
        </div>
      )}
      {active === "label" && (
        <div className="pt-24">
          <Label />
        </div>
      )}
      {active === "valeurs" && (
        <div className="pt-24">
          <Valeurs />
        </div>
      )}

      <Footer />
    </div>
  );
}
