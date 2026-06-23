"use client";

import { motion } from "motion/react";

const items = [
  {
    n: "01",
    t: "Detect",
    d: "We continuously scan how your ICP talks about their problem - the words they use, the questions they repeat, the silences in between.",
  },
  {
    n: "02",
    t: "Decode",
    d: "Every signal is scored for intent, recency, and proximity to revenue. You see what matters this week, not what trended last quarter.",
  },
  {
    n: "03",
    t: "Direct",
    d: "Each signal becomes a content brief written for one buyer in mind. No more posting into the void - every piece has a job.",
  },
];

export function SignalSection() {
  return (
    <section id="how" className="relative border-t border-border/60 bg-muted/40 py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-8">Signal-Led Content</p>
          <h2 className="display-lg text-[clamp(2rem,5.5vw,4.5rem)]">
            Content that starts from a signal, not a calendar.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div
              key={i.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background p-8 md:p-10"
            >
              <div className="mb-10 flex items-baseline justify-between">
                <span className="text-[0.72rem] font-medium tracking-[0.2em] text-muted-foreground">
                  {i.n}
                </span>
                <span className="h-px w-12 bg-border" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">{i.t}</h3>
              <p className="text-[0.97rem] leading-relaxed text-muted-foreground">{i.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}