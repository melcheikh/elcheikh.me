"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

/**
 * AnimatedCounter — Animates a number from 0 to target when in view.
 */
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  // Extract numeric part and prefix/suffix
  const match = value.match(/^([<>≤≥]?\s*)(\d+\.?\d*)(.*)/);
  const prefix = match?.[1] || '';
  const numericTarget = parseFloat(match?.[2] || '0');
  const valueSuffix = match?.[3] || '';

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = Date.now();
    const isDecimal = value.includes('.');

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericTarget * eased;

      setDisplay(isDecimal ? current.toFixed(1) : Math.round(current).toString());

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, numericTarget, value]);

  return (
    <div ref={ref} className="text-5xl font-display font-black text-white mb-2 tracking-tighter tabular-nums">
      {prefix}{display}{valueSuffix}{suffix}
    </div>
  );
}

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
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
    <section id="about" className="theme-abyssal section-padding relative overflow-hidden">
      <div className="noise-overlay" />

      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              The Elcheikh Protocol
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-10 tracking-tighter leading-[1] scale-105 origin-left">
              Elite Engineering. <br />
              <span className="text-gold italic drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">Global Reach.</span>
            </h2>

            <div className="space-y-8 text-tertiary-fixed-dim text-xl font-body leading-relaxed max-w-xl">
              <p>
                &quot;I translate deep technical insights into high-performance digital engines.
                My independent model guarantees premium, specialized engineering tailored for
                businesses seeking to dominate their digital space.&quot;
              </p>
              <p className="text-white/20 text-lg italic border-l-2 border-gold/20 pl-8">
                Empowering businesses to break free from high-commission platforms with custom-engineered
                digital assets that convert competitive advantage into dominance.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-12 mt-16 pt-10 border-t border-white/5">
              <div>
                <AnimatedCounter value="99.9%" />
                <div className="text-teal font-black text-[11px] uppercase tracking-[0.3em] opacity-70">Uptime SLA</div>
              </div>
              <div>
                <AnimatedCounter value="< 1.5s" />
                <div className="text-gold font-black text-[11px] uppercase tracking-[0.3em] opacity-70">LCP Perf</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Visual — 3D Perspective Tilt */}
          <AnimatedSection delay={0.2} className="relative">
            <motion.div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] aspect-square md:aspect-video lg:aspect-square group cursor-default"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Elite workspace"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent opacity-80" />

              {/* Hover glow rim */}
              <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                style={{ boxShadow: 'inset 0 0 40px rgba(0,255,198,0.08)' }} 
              />

              {/* Badge Overlay */}
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-[2rem] border-white/20 flex items-center gap-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shadow-3xl">
                <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center text-white text-2xl shadow-2xl shadow-gold/30 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">🏆</div>
                <div>
                  <div className="text-white font-black text-lg tracking-tight">Market Leader</div>
                  <div className="text-gold-light text-sm font-bold opacity-80 uppercase tracking-widest">Built to Outperform</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal/10 rounded-full filter blur-[80px] opacity-40 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 rounded-full filter blur-[80px] opacity-20" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
