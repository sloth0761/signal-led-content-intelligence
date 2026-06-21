"use client";

import { motion } from "motion/react";

const metrics = [
  { label: "Content-ICP Fit", status: "LOW", width: 15 },
  { label: "Audience Composition", status: "MISALIGNED", width: 20 },
  { label: "Pipeline Signal Capture", status: "NONE", width: 5 },
  { label: "Revenue Attribution", status: "ZERO", width: 0 },
];

export function ScoreSection() {
  return (
    <section id="score" className="relative border-t border-border/60 bg-muted/40 py-32 md:py-40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-8">Signal Index — Sample Audit</p>
          <h2 className="display-lg text-[clamp(2rem,5vw,4rem)]">
            See what your content <em className="font-light">misses</em>.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Every early access founder gets a baseline Signal Index — the four
            numbers that explain why content isn&rsquo;t converting, and where to
            point it next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border bg-card p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] md:p-10"
        >
          <div className="border-b border-border pb-6">
            <p className="eyebrow mb-4">BRAND ALIGNMENT SCORE</p>
            <p className="text-5xl font-bold tracking-tight">
              38<span className="text-xl font-normal text-muted-foreground">/100</span>
            </p>
          </div>

          <ul className="mt-2 divide-y divide-border">
            {metrics.map((m, i) => (
              <li key={m.label} className="py-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[0.95rem]">{m.label}</span>
                  <span className="rounded-full bg-foreground px-2 py-1 text-[0.65rem] font-medium tracking-[0.18em] text-background">
                    {m.status}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-border pt-6">
            <p className="mb-2 text-[0.65rem] font-medium tracking-[0.18em] text-muted-foreground">
              INSIGHT
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your content generates attention.{" "}
              <em className="text-foreground">
                But not from the people who buy. The gap between engagement
                and pipeline is where revenue dies.
              </em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}