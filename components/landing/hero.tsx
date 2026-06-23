"use client";

import { motion } from "motion/react";
import posthog from "posthog-js";
import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    posthog.capture("landing_view", { source: "lp5-arth" });
  }, []);
  return null;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-32 pt-40 md:pb-44 md:pt-52">
      <AnalyticsEvents />

      <div className="orb -left-40 top-32 h-[520px] w-[520px]" />
      <div className="orb -right-48 top-64 h-[620px] w-[620px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[1200px] px-6 text-center md:px-10"
      >
        <p className="eyebrow mb-10">Signal-Led Content Intelligence</p>

        <h1 className="display-xl text-[clamp(3rem,9vw,9.5rem)]">
          Stop Posting. <br /> Start Signaling.
        </h1>

        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          The Arth listens for the buyer signals already hiding in your market
          - and turns them into content only your future customers could have
          written.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href="#waitlist" className="btn-primary btn-primary-hover">
            Join Early Access <span aria-hidden>→</span>
          </a>
          <a href="#how" className="btn-ghost">
            How It Works
          </a>
        </div>
      </motion.div>
    </section>
  );
}