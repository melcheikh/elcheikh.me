"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface CaseStudyProps {
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  results: string[];
  description: string;
}

const resultVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function CaseStudy({
  title,
  category,
  beforeImg,
  afterImg,
  results,
  description
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white/[0.03] rounded-2xl border border-white/[0.08] shadow-2xl transition-all duration-700 overflow-hidden backdrop-blur-xl hover:border-white/[0.15] hover:shadow-[0_0_60px_rgba(0,255,198,0.06)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Transformation Visual */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden bg-navy">
          <div className="absolute inset-0 flex">
            {/* Before */}
            <div className="relative w-1/2 h-full grayscale opacity-40 group-hover:opacity-20 transition-all duration-1000 border-r border-white/10">
              <Image src={beforeImg} alt="Before" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute top-6 left-6 px-3 py-1 bg-navy/80 backdrop-blur-md border border-white/10 rounded-md text-[9px] uppercase font-label text-white/50 tracking-widest z-20">
                Legacy
              </div>
            </div>
            {/* After */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image src={afterImg} alt="After" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute top-6 right-6 px-3 py-1 bg-teal rounded-md text-[9px] uppercase font-black text-navy tracking-widest z-20 shadow-lg shadow-teal/20">
                Elcheikh Engineered
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-navy/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Comparison Slider Aid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl flex items-center justify-center z-30 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            <div className="flex gap-1">
              <div className="w-[2px] h-4 bg-teal rounded-full" />
              <div className="w-[2px] h-4 bg-teal rounded-full" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-10 lg:p-16 flex flex-col justify-center relative bg-navy/40 overflow-hidden">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal/20 bg-teal/5 mb-6">
              <span className="font-label text-[10px] text-teal tracking-widest uppercase">{category}</span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl text-white mb-6 leading-tight group-hover:text-teal transition-colors duration-300">
              {title}
            </h3>

            <p className="font-body text-body-md text-tertiary-fixed-dim leading-relaxed mb-10">
              {description}
            </p>

            {/* Stagger-animated result badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={resultVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass-card flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-teal/20 transition-colors duration-300 cursor-default"
                >
                  <div className="w-6 h-6 rounded-md bg-teal/10 flex items-center justify-center text-teal text-xs font-bold">
                    ↑
                  </div>
                  <span className="font-body text-xs text-[var(--on-surface)] font-bold tracking-tight">{result}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-3 text-gold font-label tracking-widest text-[10px] group/btn transition-all cursor-pointer"
            >
              Case Analysis
              <span className="w-10 h-px bg-gold/30 group-hover/btn:bg-gold group-hover/btn:w-16 transition-all" />
            </motion.button>
          </AnimatedSection>
        </div>
      </div>
    </motion.div>
  );
}
