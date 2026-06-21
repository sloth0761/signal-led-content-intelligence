"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function GalleryBanner() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden md:h-[80vh]">
      <Image
        src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2274"
        alt="People in a gallery looking at blank white frames"
        fill
        className="object-cover"
        loading="lazy"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-lg max-w-3xl text-[clamp(1.5rem,4.2vw,3.25rem)] text-white"
        >
          Content calendars. Editorial instinct. Gut feeling.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="display-lg mt-1 max-w-3xl text-[clamp(1.5rem,4.2vw,3.25rem)] text-white/55"
        >
          None of it is based on what the market needs.
        </motion.p>
      </div>
    </section>
  );
}