import { useScrollReveal, useMultiReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    id: "car-wash",
    image: "/images/work-car-wash.png",
    number: "/001/",
    year: "2026",
    tag: "Featured",
    name: "Auto Detailing Car Wash",
    desc: "Booking-focused site for a car detailing studio in Siliguri, showcasing services and one-tap slot booking.",
    link: "https://car-washing-website-psi.vercel.app/",
    large: true,
  },
  {
    id: "cheesy-classics",
    image: "/images/work-cheesy-classics.png",
    number: "/002/",
    year: "2026",
    name: "Cheesy Classics",
    desc: "Warm, appetite-driving landing page for a cosy cafe in Barasat, built around its signature dishes and menu.",
    link: "https://classic-cheesy.vercel.app/",
  },
  {
    id: "arhan-fabricators",
    image: "/images/work-arhan-fabricators.png",
    number: "/003/",
    year: "2026",
    name: "Arhan Fabricators",
    desc: "Business website for a steel & iron fabrication workshop in Lucknow, built to drive WhatsApp and call enquiries.",
    link: "https://arhan-fabricators.vercel.app/",
  },
  {
    id: "ddine-kitchen",
    image: "/images/work-ddine-kitchen.png",
    number: "/004/",
    year: "2026",
    name: "D Dine Kitchen",
    desc: "Bold restaurant website with online ordering, table reservations, and a punchy brand look for D Dine Kitchen Salugara.",
    link: "https://ddinekitchen.shop",
    large: true,
  },
];

export default function Work() {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const setCardRef = useMultiReveal(projects.length);

  return (
    <section id="work" className="py-16 lg:py-30 bg-cream-light">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div ref={labelRef} className="flex items-center gap-3 mb-10">
          <span className="font-serif italic text-lg text-accent font-medium">
            /003/
          </span>
          <span className="text-lg font-medium uppercase tracking-[0.08em] text-ink/60">
            Featured Work
          </span>
        </div>

        <h2
          ref={titleRef}
          className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.2] tracking-[-0.03em] text-ink max-w-[800px] text-center mx-auto"
        >
          Projects that <em className="font-serif italic font-medium">speak</em>{" "}
          for themselves
        </h2>
        <p className="text-[17px] text-ink/60 max-w-[600px] mt-4 leading-[1.7] text-center mx-auto">
          A selection of our most impactful work across web design, branding,
          and digital strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {projects.map((p, i) => (
            <a
              key={p.id}
              ref={setCardRef(i)}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)] ${p.large ? "md:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden group ${p.large ? "aspect-[21/9]" : "aspect-[16/10]"}`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold text-white px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full border border-white/20">
                    Visit Website →
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif italic text-base text-accent">
                    {p.number}
                  </span>
                  <span className="text-xs text-ink/40 font-medium">
                    {p.year}
                  </span>
                  {p.tag && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-ink/60 leading-[1.6]">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
