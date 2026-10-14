import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputStyle =
  "w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-white " +
  "placeholder:text-white/30 outline-none transition-colors " +
  "focus:border-[#f8ff33] focus:bg-white/10";

const labelStyle =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-white/70";

export default function SoundSystemQuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ef4fdd6c59dce9f445eac0cd933369c6",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (
        !response.ok ||
        data.success === false ||
        data.success === "false"
      ) {
        throw new Error(data.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("SoundSystem form error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="demander-un-devis" className="mt-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold uppercase md:text-5xl">
          DEMANDER <span className="text-[#f8ff33]">UN DEVIS.</span>
        </h2>
        <p className="mt-4 text-white/50">
          Vous organisez un événement ? Parlez-nous de votre projet.
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border border-white/15 bg-[#0a0a0a] p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="hidden"
            name="_subject"
            value="Demande de location Sound System"
          />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="quote-email" className={labelStyle}>
              Adresse mail *
            </label>
            <input
              id="quote-email"
              name="email"
              type="email"
              required
              placeholder="contact@exemple.com"
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="quote-event" className={labelStyle}>
              Type d'événement *
            </label>
            <input
              id="quote-event"
              name="eventType"
              type="text"
              required
              placeholder="Soirée club, warehouse, festival..."
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="quote-capacity" className={labelStyle}>
                Personnes attendues *
              </label>
              <input
                id="quote-capacity"
                name="capacity"
                type="number"
                min="1"
                required
                placeholder="Ex. : 300"
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="quote-price" className={labelStyle}>
                Prix des billets (€) *
              </label>
              <input
                id="quote-price"
                name="ticketPrice"
                type="text"
                required
                placeholder="Gratuit ou 10 €"
                className={inputStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-location" className={labelStyle}>
              Localisation *
            </label>
            <input
              id="quote-location"
              name="location"
              type="text"
              required
              placeholder="Ville, lieu ou région"
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="quote-notes" className={labelStyle}>
              Autre chose à savoir
              <span className="ml-2 text-[10px] font-normal normal-case text-white/40">
                (optionnel)
              </span>
            </label>
            <textarea
              id="quote-notes"
              name="notes"
              rows={4}
              placeholder="Horaires, line-up, contraintes techniques..."
              className={`${inputStyle} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded bg-[#f8ff33] px-6 py-4 font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "ENVOI EN COURS..." : "ENVOYER"}
          </button>

          <div role="status" aria-live="polite" className="text-center text-sm">
            {status === "success" && (
              <p className="text-[#f8ff33]">
                Demande envoyée avec succès !
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400">
                Une erreur est survenue lors de l'envoi.
                Veuillez réessayer.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}