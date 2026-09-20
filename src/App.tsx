import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import WhoWeAre from "./components/sections/WhoWeAre";
import ConductCharter from "./components/sections/ConductCharter";
import Releases from "./components/sections/Releases";
import Events from "./components/sections/Events";
import Artists from "./components/sections/Artists";
import TrustedBy from "./components/sections/TrustedBy";

import LabelPage from "./pages/LabelPage";
import ValeursPage from "./pages/ValeursPage";
import UFORecordzPage from "./pages/UFORecordzPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhoWeAre />
      <Releases />
      <Events />
      <Artists />
      
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/ufo-recordz" element={<UFORecordzPage />} />

          <Route path="/events" element={<EventsPage />} />

          <Route path="/label" element={<LabelPage />} />

          <Route path="/valeurs" element={<ValeursPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}