
const tarifs = [
  {
    name: "Tarif solidaire",
    description:
      "Pour les personnes disposant d'un budget plus limité. Attention, 1 demande = 1 billet. Si vous prévoyez de venir en groupe, chaque personne doit faire une demande individuelle.",
    email: true,
  },
  {
    name: "Tarif classique",
    description: "Le tarif standard pour profiter de nos événements et permettre à UFO d'en organiser d'autres.",
  },
  
  {
    name: "Tarif coup de pouce",
    description:
      "Pour celleux qui souhaitent participer davantage et soutenir l'accès à la fête. Le supplément du tarif coup de pouce finance directement les places à tarif solidaire pour d'autres teufeur·euses.",
  },
];

export default function BilletterieSolidairePage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Introduction */}
        <div className="mb-16">

          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8">
            Billetterie solidaire
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl">
            Chez UFO.recordz, nous défendons une fête libre, responsable, et accessible à toustes, indépendamment des moyens financiers de chacun·e.
          </p>
        </div>

        {/* Tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {tarifs.map((tarif) => (
            <div
              key={tarif.name}
              className="
                border border-white/20
                p-8
                flex flex-col
                min-h-72
                transition-colors duration-300
                hover:border-[#f8ff33]
              "
            >
              <h2 className="text-xl font-bold uppercase mb-8">
                {tarif.name}
              </h2>


              <p className="text-white/60 leading-relaxed">
                {tarif.description}
              </p>

              {tarif.email && (
                <a
                  href="mailto:contact@uforecordz.fr?subject=Demande%20de%20tarif%20solidaire"
                  className="
                    mt-6
                    text-[#f8ff33]
                    underline underline-offset-4
                    hover:text-white
                    transition-colors
                    break-words
                  "
                >
                  Demander par mail
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Principe de solidarité */}
        <section className="border-t border-white/20 pt-16 text-center">

          <div className="flex flex-col items-center gap-6">
            <p className="text-2xl md:text-4xl font-black uppercase text-[#f8ff33]">
              1 billet coup de pouce acheté
            </p>

            <span className="text-5xl md:text-7xl font-black text-white">
              =
            </span>

            <p className="text-2xl md:text-4xl font-black uppercase">
              1 billet solidaire ajouté
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
