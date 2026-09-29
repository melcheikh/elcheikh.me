"use client";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { counts, hfDownloads } from "@/data/contributions";

const stats = [
  { value: String(counts.aisi), label: "fixes to UK AISI's Inspect evals" },
  { value: hfDownloads, label: "downloads of my Blackwell quants" },
  { value: "12 yrs", label: "in regulated pharma manufacturing" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6">
      {/* Real frame from a Python-generated Blender scene, rendered in-house */}
      <div className="absolute inset-0">
        <Image
          src="/renders/galaxia.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-24 pb-16">
        <motion.p {...fadeUp(0)} className="eyebrow mb-7">
          martín el cheikh — ai evaluation &amp; systems engineer · buenos aires
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="display mb-8 max-w-6xl text-[clamp(2.1rem,5.6vw,4.2rem)]"
        >
          A score is only as good
          <br />
          <span className="text-amber">as its instrument.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mb-10 max-w-xl text-lg leading-relaxed text-fog md:text-xl"
        >
          I fix the scorers inside AI-safety benchmarks, run frontier models on
          brand-new silicon, and build products end to end. Twelve years in
          regulated pharmaceutical manufacturing and a psychology training in
          measurement taught me the same lesson twice.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="mb-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="#evals"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-amber px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
            <span className="relative">see the fixes</span>
            <ArrowDown size={17} className="relative" />
          </a>
          <a
            href="https://github.com/melcheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface/70 px-6 py-3 font-mono text-[0.85rem] text-paper backdrop-blur-sm transition-colors hover:border-fog/50"
          >
            github.com/melcheikh <ArrowUpRight size={15} className="text-fog" />
          </a>
        </motion.div>

        <motion.dl {...fadeUp(0.32)} className="flex flex-wrap gap-x-12 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="display text-3xl text-paper">{stat.value}</dd>
              <dd className="mt-1 font-mono text-[0.75rem] text-fog">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
    </MotionConfig>
  );
}
