"use client";

import { useState } from "react";
import { motion } from "motion/react";
import posthog from "posthog-js";

const items = [
  "I stare at a blank screen wondering what to post",
  "My content calendar is based on gut feeling",
  "I write what I think matters, not what buyers need right now",
  "My best-performing posts never generate pipeline",
  "I don't know what's happening in my market this week",
];

export function PainPoints() {
  const [active, setActive] = useState<number[]>([]);

  const toggle = (i: number) => {
    setActive((a) => {
      const next = a.includes(i) ? a.filter((x) => x !== i) : [...a, i];
      if (!a.includes(i)) {
        posthog.capture("pain_point_selected", {
          item: items[i],
          total: next.length,
          source: "lp5-arth",
        });
      }
      return next;
    });
  };

  return (
    <section className="relative border-t border-border/60 py-32 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-lg max-w-3xl text-[clamp(1.75rem,4.5vw,3.5rem)]"
        >
          Does any of this feel familiar?
        </motion.h2>

        <div className="mt-14 flex flex-wrap gap-3">
          {items.map((t, i) => {
            const on = active.includes(i);
            return (
              <motion.button
                key={i}
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={
                  "rounded-full border px-5 py-3 text-[0.95rem] tracking-tight transition-all md:text-base " +
                  (on
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:border-foreground/40")
                }
              >
                {t}
              </motion.button>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-2xl text-2xl font-light tracking-tight md:text-3xl"
        >
          You don&rsquo;t need more content ideas.{" "}
          <span className="font-semibold text-foreground">You need market signals.</span>
        </motion.p>
      </div>
    </section>
  );
}