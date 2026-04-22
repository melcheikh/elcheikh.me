'use client';

import { motion } from 'framer-motion';

/**
 * SpotlightBackground — An aurora-like animated background with 3 radial
 * gradients drifting on offset sine paths. Pure GPU-accelerated transforms.
 */
export default function SpotlightBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Primary Aurora — Teal */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[180px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,198,0.4) 0%, transparent 70%)',
          top: '-15%',
          left: '-10%',
        }}
        animate={{
          x: [0, 120, -40, 80, 0],
          y: [0, -80, 60, -40, 0],
          scale: [1, 1.3, 1.1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Aurora — Gold */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(233,195,73,0.35) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-8%',
        }}
        animate={{
          x: [0, -100, 50, -60, 0],
          y: [0, 70, -50, 30, 0],
          scale: [1, 1.2, 1.35, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Tertiary Aurora — Cyan accent */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(0,225,174,0.3) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, -60, 80, -30, 0],
          y: [0, 50, -70, 40, 0],
          scale: [1, 1.15, 1.3, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />

      {/* Noise texture layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
    </div>
  );
}
