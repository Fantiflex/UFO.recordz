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
              color: "#e2e2e4",
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
              background: "rgba(80,227,194,0.45)",
            }}
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-8">
          <p
            className="text-base md:text-lg font-light"
            style={{
              color: "rgba(226,226,228,0.68)",
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
              color: "rgba(226,226,228,0.42)",
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
                  border: "1px solid rgba(80,227,194,0.16)",
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

function Releases() {
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="CATALOGUE" title="LATEST RELEASES" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {RELEASES.map((r) => (
          <div
            key={r.id}
            className="group relative p-8 transition-all duration-300 cursor-pointer"
            style={{ background: "var(--card)", borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Hover accent bar */}
            <div
              className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: r.color }}
            />

            <div className="flex items-start justify-between mb-8">
              {/* Record visual */}
              <div className="relative flex items-center justify-center" style={{ width: 64, height: 64 }}>
                <div className="absolute inset-0 rounded-full" style={{ background: "#080808", border: `1px solid ${r.color}22` }} />
                {[0.85, 0.65, 0.45].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${scale * 64}px`,
                      height: `${scale * 64}px`,
                      border: `1px solid ${r.color}${i === 0 ? "30" : i === 1 ? "18" : "0c"}`,
                    }}
                  />
                ))}
                <div className="rounded-full" style={{ width: 8, height: 8, background: r.color + "60" }} />
              </div>

              <span
                className="font-mono text-xs"
                style={{ color: r.color, opacity: 0.6, letterSpacing: "0.15em" }}
              >
                S9-{r.id}
              </span>
            </div>

            <div>
              <p className="font-mono text-xs mb-1" style={{ color: "rgba(226,226,228,0.35)", letterSpacing: "0.15em" }}>
                {r.artist}
              </p>
              <h3
                className="font-condensed text-2xl font-700 mb-4"
                style={{ fontWeight: 700, letterSpacing: "0.04em", color: "#e2e2e4" }}
              >
                {r.title}
              </h3>
              <div className="flex items-center gap-4">
                <Tag>{r.bpm}</Tag>
                <Tag>{r.key}</Tag>
                <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.25)", letterSpacing: "0.08em" }}>
                  {r.format}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.2)", letterSpacing: "0.1em" }}>
                {r.date}
              </span>
              <span
                className="font-condensed text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: r.color, letterSpacing: "0.2em" }}
              >
                LISTEN →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
              background: "rgba(80,227,194,0.45)",
            }}
          />

          <p
            className="mt-8 font-mono text-xs"
            style={{
              color: "rgba(226,226,228,0.35)",
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
              background: "rgba(80,227,194,0.035)",
              border: "1px solid rgba(80,227,194,0.14)",
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
              color: "#50e3c2",
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
                color: "rgba(226,226,228,0.6)",
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

function CharterParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base font-light"
      style={{
        color: "rgba(226,226,228,0.58)",
        lineHeight: 1.9,
      }}
    >
      {children}
    </p>
  );
}


function Events() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <SectionHeader label="LIVE OPERATIONS" title="PASSED EVENTS" />
      <div className="flex flex-col gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {EVENTS.map((ev, idx) => (
          <div
            key={ev.id}
            className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 transition-all duration-300 cursor-pointer hover:bg-[rgba(80,227,194,0.02)]"
            style={{ background: "var(--card)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex-none">
              <span className="font-mono text-xs" style={{ color: "rgba(80,227,194,0.3)", letterSpacing: "0.15em" }}>
                {ev.id}
              </span>
            </div>

            <div className="flex-1 min-w-[220px]">
              <h3
                className="font-condensed text-2xl font-700 mb-1"
                style={{ fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {ev.name}
              </h3>
              <p className="text-sm font-light" style={{ color: "rgba(226,226,228,0.4)" }}>
                {ev.venue}
              </p>
            </div>

            <div className="hidden lg:block max-w-md">
              <div className="flex flex-wrap gap-2">
                {ev.lineup.map((a) => (
                  <span
                    key={a}
                    className="font-mono text-xs px-2 py-0.5"
                    style={{
                      color: "rgba(226,226,228,0.35)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-none text-right">
              <p className="font-condensed text-sm mb-1" style={{ letterSpacing: "0.1em", color: "rgba(226,226,228,0.7)" }}>
                {ev.date}
              </p>
              <p className="font-mono text-xs" style={{ color: "rgba(226,226,228,0.3)", letterSpacing: "0.08em" }}>
                {ev.time}
              </p>
            </div>

            <div className="flex-none">
              <span
                className="font-condensed text-xs px-3 py-1.5 tracking-widest"
                style={{
                  letterSpacing: "0.15em",
                  background: ev.status === "SOLD OUT"
                    ? "rgba(255,255,255,0.04)"
                    : ev.status === "PRESALE"
                    ? "rgba(139,128,249,0.1)"
                    : "rgba(80,227,194,0.1)",
                  color: ev.status === "SOLD OUT"
                    ? "rgba(226,226,228,0.25)"
                    : ev.status === "PRESALE"
                    ? "#8b80f9"
                    : "#50e3c2",
                  border: `1px solid ${ev.status === "SOLD OUT" ? "rgba(255,255,255,0.06)" : ev.status === "PRESALE" ? "rgba(139,128,249,0.25)" : "rgba(80,227,194,0.2)"}`,
                }}
              >
                {ev.status}
              </span>
            </div>
          </div>
        ))}
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
