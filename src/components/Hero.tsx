"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import SpotlightBackground from "./ui/SpotlightBackground";
import TextReveal from "./ui/TextReveal";
import MovingBorder from "./ui/MovingBorder";
import GridPattern from "./ui/GridPattern";
import Image from "next/image";

export default function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="theme-abyssal min-h-screen pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center">
      {/* Living Aurora Background */}
      <SpotlightBackground />

      {/* Dot Grid Pattern — depth layer */}
      <GridPattern className="-z-5 opacity-[0.4]" cellSize={50} dotRadius={0.8} dotColor="rgba(0,255,198,0.08)" />

      {/* Hero Content */}
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center flex flex-col items-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_rgba(0,255,198,0.8)] animate-pulse"></span>
            <span className="font-label text-[10px] text-white tracking-[0.2em] uppercase">Premium Web Engineer</span>
          </div>

          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] text-white max-w-4xl mx-auto mb-6 leading-[1.05] tracking-[-0.05em]">
            <TextReveal delay={0.2}>
              {"Websites That "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal via-gold to-teal text-gradient-animated">
                Outperform
              </span>
            </TextReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-lg md:text-xl text-tertiary-fixed-dim max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I engineer high-performance digital artistry for brands and innovators.
            Experience a fusion of reliable architecture and mesmerizing aesthetics
            that converts at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
          >
            {/* Primary CTA — Moving Border */}
            <MovingBorder
              containerClassName="inline-flex"
              className="bg-navy px-8 py-4 font-bold text-white cursor-pointer inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              <a href="#contact" className="flex items-center gap-2">
                Start Your Evolution
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </MovingBorder>

            {/* Secondary CTA — Glow hover */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(233,195,73,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-gold/50 text-gold font-bold px-8 py-4 rounded-xl backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </AnimatedSection>

        {/* Dashboard Mockup — 3D Parallax Tilt */}
        <AnimatedSection delay={0.3} className="w-full max-w-5xl mx-auto">
          <motion.div
            ref={mockupRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl relative group cursor-default"
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10" />

            {/* Hover glow rim */}
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-teal/20 via-transparent to-gold/20 pointer-events-none z-20" />

            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8R2f7odSD1t33YAVa9Y1c33vqKWsn8zRWov6cvPJobEk4XXoqE3GqOwHvMW4qh5MDc_YZtxfHqf0R22tOqkw47ucI34M8tqJuLR63FFLpVw-oKpCxjWVonMY8sxGH2VkudSi3eyT-fbL28S3LgBOmR0pVFt4hwLk0iHBd34UF70RD4YSZYCLoyE1gnflPY6HEeFtJKpUbDPFMQ-Jo0GIyEnGZS4wJICFpgQ7NP9DyCMr9XOUWy1U03zTmmvIz2tF7FLGJKN2R44"
                alt="High-performance digital dashboard"
                fill
                className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                unoptimized
              />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto w-full px-12 mt-32 hidden lg:block z-20"
      >
        <div className="flex justify-between items-center text-white/20 text-[11px] font-black tracking-[0.5em] uppercase border-t border-white/10 pt-12">
          <div className="flex items-center gap-20">
            <span className="hover:text-gold transition-colors duration-500 cursor-default">High-Performance Architecture</span>
            <span className="w-2 h-2 rounded-full bg-teal/40" />
            <span className="hover:text-gold transition-colors duration-500 cursor-default">SEO Optimized Core</span>
          </div>
          <div className="flex items-center gap-8 text-gold-light/40">
            <span className="text-[14px]">🇦🇷</span>
            <span className="hover:text-gold transition-colors">Based in Argentina</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
