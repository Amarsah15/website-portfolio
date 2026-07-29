"use client";

import { useEffect, useRef } from "react";

const items = [
  "Web Design",
  "Development",
  "Branding",
  "Strategy",
  "Marketing",
  "UI/UX",
];

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const content = track.querySelector(".marquee-inner");
    if (content && track.children.length < 2) {
      track.appendChild(content.cloneNode(true));
    }
  }, []);

  return (
    <div className="py-10 border-t border-b border-ink/10 overflow-hidden">
      <div ref={trackRef} className="flex w-max animate-marquee">
        <div className="marquee-inner flex items-center gap-10 pr-10">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.04em] text-ink whitespace-nowrap opacity-15">
                {item}
              </span>
              <span className="text-xs text-accent/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
