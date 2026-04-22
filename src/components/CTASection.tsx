'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MovingBorder from './ui/MovingBorder';
import GridPattern from './ui/GridPattern';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Grow Your Business Online?",
  subtitle = "Get a free consultation and discover how a custom website can save you money and bring in more clients.",
  buttonText = "Get a Free Quote",
  buttonHref = "mailto:martin@elcheikh.me",
}: CTASectionProps) {
  // Split title into words for stagger reveal
  const words = title.split(' ');

  return (
    <section id="contact" className="theme-abyssal relative overflow-hidden py-32 px-6 md:py-48">
      {/* Premium Gradient Background & Noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark opacity-95 z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none z-0" />

      {/* Grid Pattern depth layer */}
      <GridPattern className="z-[1] opacity-60" cellSize={60} dotRadius={0.6} dotColor="rgba(233,195,73,0.05)" />

      {/* Intensified Glow Orbs */}
      <motion.div
        className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          y: [0, -40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block px-6 py-2 mb-10 text-[10px] font-black tracking-[0.5em] text-gold uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
            Scale Your Strategy
          </span>

          {/* Stagger-revealed title */}
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold text-white mb-10 tracking-tighter leading-none drop-shadow-2xl">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              }}
              className="inline-flex flex-wrap justify-center"
            >
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                    },
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </h2>

          <p className="text-tertiary-fixed-dim text-xl md:text-2xl font-body mb-16 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {/* Moving Border CTA */}
            <MovingBorder
              containerClassName="inline-flex"
              className="bg-gold text-navy-dark px-14 py-6 text-xl font-black cursor-pointer inline-flex items-center gap-4 hover:bg-gold/90 transition-colors duration-300"
            >
              <Link href={buttonHref} className="flex items-center gap-4">
                {buttonText}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </MovingBorder>

            <Link
              href="#work"
              className="text-white/40 hover:text-white font-black tracking-[0.3em] uppercase text-xs transition-all border-b-2 border-white/5 hover:border-gold pb-2"
            >
              Audit My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
