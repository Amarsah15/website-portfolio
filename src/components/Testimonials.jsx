import { useScrollReveal, useMultiReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    text: '"The team at Hopper360 completely exceeded our expectations. Our site traffic doubled within 3 months of launch."',
    name: "Rahul Mehta",
    role: "Founder, Nrgy Inc.",
  },
  {
    text: '"Professional, creative, and incredibly responsive. They turned our vision into a stunning digital reality in record time."',
    name: "Priya Sharma",
    role: "Marketing Director, Medora",
  },
  {
    text: '"Working with Hopper360 felt like having an in-house team. They truly understood our brand and brought it to life beautifully."',
    name: "David Patel",
    role: "CTO, CloudWatch",
  },
];

export default function Testimonials() {
  const labelRef = useScrollReveal();
  const quoteRef = useScrollReveal();
  const setCardRef = useMultiReveal(cards.length);

  return (
    <section id="testimonials" className="py-16 lg:py-30 bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div ref={labelRef} className="flex items-center gap-3 mb-10">
          <span className="font-serif italic text-lg text-accent font-medium">
            /005/
          </span>
          <span className="text-lg font-medium uppercase tracking-[0.08em] text-white/60">
            Testimonials
          </span>
        </div>

        <div ref={quoteRef} className="mt-10 mb-14">
          <blockquote className="font-serif text-[clamp(24px,3vw,36px)] font-normal leading-[1.4] tracking-[-0.02em] text-white max-w-[900px] mb-9">
            "Choosing a digital partner isn't just about capabilities or
            portfolios - it's about trust. Hopper360 didn't just deliver a
            website; they delivered a{" "}
            <em className="text-accent italic">transformation</em>."
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="/images/avatar.png"
              alt="Sarah Collins"
              className="w-[52px] h-[52px] rounded-full object-cover border-2 border-white/15"
              loading="lazy"
            />
            <div>
              <span className="block text-[15px] font-semibold text-white">
                Sarah Collins
              </span>
              <span className="text-[13px] text-white/60">
                CEO, InnovateHealth
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className="p-8 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/8 hover:border-white/15 hover:-translate-y-1 transition-all"
            >
              <div className="text-amber text-sm tracking-[3px] mb-4">
                ★★★★★
              </div>
              <p className="text-[15px] leading-[1.7] text-white/80 mb-6">
                {c.text}
              </p>
              <div>
                <span className="block text-sm font-semibold text-white mb-1">
                  {c.name}
                </span>
                <span className="text-[13px] text-white/60">{c.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
