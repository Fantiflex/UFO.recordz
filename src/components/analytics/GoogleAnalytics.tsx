
import { useEffect, useState } from "react";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

type Consent = "accepted" | "rejected" | null;

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<Consent>(() => {
    const stored = localStorage.getItem("analytics-consent");
    return stored === "accepted" || stored === "rejected"
      ? stored
      : null;
  });

  useEffect(() => {
    if (consent !== "accepted" || !GA_ID) return;

    if (document.getElementById("ga-script")) return;

    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    document.head.appendChild(script);
  }, [consent]);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem("analytics-consent", value);
    setConsent(value);
  }

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-lg border border-white/20 bg-black p-5 text-white shadow-xl">
      <p className="mb-4 text-sm">
        Nous utilisons Google Analytics pour comprendre
        la fréquentation de UFO.recordz.
        Tu peux accepter ou refuser ces statistiques.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => choose("rejected")}
          className="flex-1 border border-white/40 px-4 py-2 text-xs uppercase"
        >
          Refuser
        </button>

        <button
          onClick={() => choose("accepted")}
          className="flex-1 bg-[#f8ff33] px-4 py-2 text-xs font-bold uppercase text-black"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
