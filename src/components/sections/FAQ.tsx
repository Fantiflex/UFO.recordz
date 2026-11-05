
import { useState } from "react";

const faqs = [
  {
  question: "Comment accéder aux tarifs solidaires ?",
  answer:
    "Quand nos événements le permettent, l'entrée est gratuite. " +
    "Sinon, nous nous engageons à vous proposer des tarifs solidaires. " +
    "Consultez ici les instructions.",
  },
  {
    question: "Comment rejoindre UFO.recordz ?",
    answer:
      "Tu peux nous contacter via la page Contact ou directement sur Instagram.",
  },
{
    question: "Comment UFO.recordz se finance ?",
    answer:
      "L'association est financée par les revenus générés par les évènements, les streams du label, et les dons de généreux-ses auditeur-ices. Nous ne recevons aucune subvention.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      <h2 className="text-3xl md:text-5xl font-bold uppercase mb-10">
        Questions fréquentes : 
      </h2>

      <div className="w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-white/20"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="
                  w-full py-6
                  flex items-center justify-between gap-6
                  text-left
                  text-base md:text-xl font-semibold
                  uppercase
                  transition-colors duration-200
                  hover:text-[#f8ff33]
                  cursor-pointer
                "
              >
                <span>{faq.question}</span>
                <span className="text-[#f8ff33] text-2xl shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                hidden={!isOpen}
                className="pb-6 text-white/65 leading-relaxed max-w-3xl"
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
