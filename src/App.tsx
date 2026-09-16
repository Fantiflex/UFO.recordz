import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";

import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";
import ConductCharter from "./sections/ConductCharter";
import Releases from "./sections/Releases";
import Events from "./sections/Events";
import Artists from "./sections/Artists";

import LabelPage from "./pages/LabelPage";
import ValeursPage from "./pages/ValeursPage";

import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen">
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

      {active === "releases" && <Releases />}
      {active === "artists" && <Artists />}
      {active === "label" && <LabelPage />}
      {active === "valeurs" && <ValeursPage />}
      {active === "events" && <EventsPage />}
      {active === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}