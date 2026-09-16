import { useState } from "react";
import logo from "./imports/logo.png";



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
import Artists from "./sections/Artists";

import LabelPage from "./pages/LabelPage";
import Valeurs from "./pages/ValeursPage";
import Footer from "./components/layout/footer";

function App() {
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
          <LabelPage />
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

export default App;





