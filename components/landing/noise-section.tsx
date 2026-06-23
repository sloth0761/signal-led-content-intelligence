"use client";

import { motion } from "motion/react";

export function NoiseSection() {
  return (
    <section className="relative border-t border-border/60 py-32 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-8">The Noise</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-lg max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)]"
        >
          Every founder is writing. <br />
          <span className="text-muted-foreground">Almost none are listening.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          The feeds are saturated with frameworks, hot takes, and carousel
          decks. The signal - what a real buyer is actually trying to solve
          this quarter - is buried under it. So founders publish more,
          optimize for the algorithm, and wonder why pipeline doesn&rsquo;t move.
        </motion.p>
      </div>
    </section>
  );
}