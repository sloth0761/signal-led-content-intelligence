"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href="#top" className="text-[0.78rem] font-medium uppercase tracking-[0.22em]">
          The Arth
        </Link>
        <Link
          href="#waitlist"
          className="text-[0.78rem] font-medium tracking-[0.05em] transition-opacity hover:opacity-70"
        >
          Early Access <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.header>
  );
}