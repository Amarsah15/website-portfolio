import { useScrollReveal, useMultiReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    text: '"Customers can now see our services and just tap to book instead of me explaining everything over the phone every time. Simple, and it actually works."',
    name: "Owner",
    role: "Auto Detailing Car Wash, Siliguri",
  },
  {
    text: '"Our regulars check the menu on the site before they even walk in now. It finally feels like a proper restaurant online, not something copy-pasted."',
    name: "Owner",
    role: "Cheesy Classics, Barasat",
  },
  {
    text: '"Table bookings used to be all phone calls and back-and-forth. Now a good chunk of our reservations come straight from the website itself."',
    name: "Owner",
    role: "D Dine Kitchen, Salugara",
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
            "We just wanted people to see our work and message us on WhatsApp
            - that's it. GrowOwl built exactly that, nothing extra. We've been
            getting{" "}
            <em className="text-accent italic">real enquiries</em> every week
            since it went live."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full bg-white/10 border-2 border-white/15 flex items-center justify-center text-white font-semibold text-lg">
              AF
            </div>
            <div>
              <span className="block text-[15px] font-semibold text-white">
                Owner
              </span>
              <span className="text-[13px] text-white/60">
                Arhan Fabricators, Lucknow
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
