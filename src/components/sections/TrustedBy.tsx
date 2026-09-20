const partners = [
  { name: "La Scène de Recherche", image: "/SDR.png" },
  { name: "La Cité Fertile", image: "/CF.jpeg" },
  { name: "Panic Room", image: "/PanicRoom.webp" },
  { name: "Versailles", image: "/Versailles.jpeg" },
  { name: "Gif-sur-Yvette", image: "/GifSurYvette.png" },
  { name: "Pride Radicale", image: "/PrideRadicale.png" },
  { name: "Manifestive", image: "/Manifestive.jpg" },
  { name: "Interfilieres", image: "/Interfilieres.png" },
  { name: "LeChinois", image: "/LeChinois.jpg" },
];

export default function TrustedBy() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="overflow-hidden py-20">
      <div className="px-6 md:px-12 lg:px-24 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          Ils nous font confiance :
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="trusted-ticker flex w-max items-center gap-12">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-32 w-52 shrink-0 items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="
                  max-h-24
                  max-w-44
                  object-contain
                  opacity-70
                  grayscale
                  transition
                  duration-300
                  hover:opacity-100
                  hover:grayscale-0
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}