"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-t border-border/60 py-36 md:py-48"
    >
      <div className="orb left-1/2 top-10 h-[460px] w-[460px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-[900px] px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-8"
        >
          Founding Cohort - Limited
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl text-[clamp(2.25rem,7vw,6rem)]"
        >
          Build from <br /> the signal.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground"
        >
          We&rsquo;re onboarding 30 founders into the first Signal Index cohort.
          Drop your email - we&rsquo;ll send your baseline audit within a week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <WaitlistForm source="lp5-arth" />
        </motion.div>
      </div>
    </section>
  );
}