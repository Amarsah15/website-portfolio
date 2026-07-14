import { useScrollReveal, useMultiReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    number: "/001/",
    title: "Discovery",
    desc: "We listen first - no jargon. This phase sets the foundation by uncovering your goals, audience, and competitive landscape through workshops and research.",
  },
  {
    number: "/002/",
    title: "Strategy",
    desc: "We create a comprehensive roadmap that aligns business objectives with user needs. Every decision is backed by data and driven by insight.",
  },
  {
    number: "/003/",
    title: "Creation",
    desc: "We build your digital assets with precision. Our design and development teams bring the strategy to life with beautiful, functional solutions.",
  },
  {
    number: "/004/",
    title: "Launch",
    desc: "We ensure a smooth deployment. From performance optimization to cross-browser testing, every detail is polished before going live.",
  },
  {
    number: "/005/",
    title: "Growth",
    desc: "We continuously optimize performance. After launch, we shift into a growth mindset - tracking metrics, iterating on design, and scaling impact.",
  },
];

export default function Process() {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const setStepRef = useMultiReveal(steps.length);

  return (
    <section id="process" className="py-16 lg:py-30">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div ref={labelRef} className="flex items-center gap-3 mb-10">
          <span className="font-serif italic text-lg text-accent font-medium">
            /006/
          </span>
          <span className="text-lg font-medium uppercase tracking-[0.08em] text-ink/60">
            The Process
          </span>
        </div>

        <h2
          ref={titleRef}
          className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.2] tracking-[-0.03em] text-ink max-w-[800px] text-center mx-auto"
        >
          How we guide every project to the{" "}
          <em className="font-serif italic font-medium">finish line</em>
        </h2>
        <p className="text-[17px] text-ink/60 max-w-[600px] mt-4 leading-[1.7] text-center mx-auto">
          Each phase is handled by specialists who obsess over the details so
          you don't have to.
        </p>

        <div className="mt-14 flex flex-col">
          {steps.map((s, i) => (
            <div
              key={i}
              ref={setStepRef(i)}
              className="grid grid-cols-[60px_1fr] lg:grid-cols-[120px_1fr] gap-5 lg:gap-10 py-7 lg:py-10 border-t border-ink/10 last:border-b items-start hover:pl-2 transition-all"
            >
              <span className="font-serif italic text-base text-accent font-medium pt-0.5">
                {s.number}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3">
                  {s.title}
                </h3>
                <p className="text-[15px] text-ink/60 leading-[1.7] max-w-[600px]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
