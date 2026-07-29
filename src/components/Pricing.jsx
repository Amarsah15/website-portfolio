"use client";

import { useScrollReveal, useMultiReveal } from "../hooks/useScrollReveal";

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="text-accent shrink-0"
  >
    <path
      d="M3 8L6.5 11.5L13 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Clock = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 4V7L9 9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const plans = [
  {
    label: "Essentials",
    tagline:
      "Perfect for startups and small businesses getting started online.",
    original: "₹9,990",
    current: "₹4,999",
    period: "one-time",
    timeline: "1-2 weeks delivery",
    features: [
      "1-3 pages",
      "Basic branding setup",
      "Mobile responsive design",
      "Simple animations",
      "Contact form integration",
      "Basic SEO setup",
    ],
    cta: "Get Essentials →",
    btnStyle:
      "border-[1.5px] border-ink/20 text-ink hover:border-accent hover:text-accent",
  },
  {
    label: "Standard",
    tagline: "For growing businesses ready to make a serious impact online.",
    original: "₹19,999",
    current: "₹9,999",
    period: "one-time",
    timeline: "2-3 weeks delivery",
    popular: true,
    features: [
      "4-8 pages",
      "Full responsive design",
      "CMS integration",
      "Custom animations",
      "Advanced SEO",
      "Analytics dashboard",
      "1 month post-launch support",
    ],
    cta: "Get Standard →",
    btnStyle:
      "bg-ink text-white hover:bg-accent hover:shadow-[0_8px_24px_rgba(252,54,55,0.25)]",
  },
  {
    label: "Advanced",
    tagline: "Enterprise-grade solutions for brands that demand excellence.",
    original: "₹49,999",
    current: "₹19,999",
    period: "one-time",
    timeline: "4-8 weeks delivery",
    features: [
      "10+ pages",
      "Advanced CMS architecture",
      "Custom components & interactions",
      "Multilingual support (optional)",
      "Strategy sessions included",
      "Complete design system",
      "3 months post-launch support",
      "Priority communication",
    ],
    cta: "Get Advanced →",
    btnStyle:
      "border-[1.5px] border-ink/20 text-ink hover:border-accent hover:text-accent",
  },
];

export default function Pricing() {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const setCardRef = useMultiReveal(plans.length);

  return (
    <section id="pricing" className="py-16 lg:py-30 bg-cream-light">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div ref={labelRef} className="flex items-center gap-3 mb-10">
          <span className="font-serif italic text-lg text-accent font-medium">
            /007/
          </span>
          <span className="text-lg font-medium uppercase tracking-[0.08em] text-ink/60">
            Pricing
          </span>
        </div>

        <h2
          ref={titleRef}
          className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.2] tracking-[-0.03em] text-ink max-w-[800px] text-center mx-auto"
        >
          Transparent <em className="font-serif italic font-medium">pricing</em>{" "}
          for every stage
        </h2>
        <p className="text-[17px] text-ink/60 max-w-[600px] mt-4 leading-[1.7] text-center mx-auto">
          No hidden fees. No long-term contracts. Just honest pricing that
          scales with your needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {plans.map((p, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className={`bg-card rounded-2xl p-8 lg:p-10 border relative flex flex-col hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all ${p.popular ? "border-accent shadow-[0_8px_32px_rgba(252,54,55,0.1)]" : "border-ink/10"}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.06em] px-5 py-1.5 bg-accent text-white rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <span className="text-xl font-semibold tracking-[-0.02em] block mb-2">
                  {p.label}
                </span>
                <p className="text-sm text-ink/60 leading-[1.5]">{p.tagline}</p>
              </div>
              <div className="flex items-baseline gap-3 flex-wrap mb-4">
                <span className="text-base text-ink/40 line-through">
                  {p.original}
                </span>
                <span className="text-[42px] font-bold tracking-[-0.04em] text-ink leading-none">
                  {p.current}
                </span>
                <span className="text-[13px] text-ink/40 font-medium">
                  {p.period}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-ink/60 font-medium mb-7 pb-7 border-b border-ink/10">
                <Clock />
                <span>{p.timeline}</span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-8 grow">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-ink font-[450]"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full text-center inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full transition-all mt-auto ${p.btnStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
