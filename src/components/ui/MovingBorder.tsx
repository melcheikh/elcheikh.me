'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MovingBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}

/**
 * MovingBorder — A container with a continuously rotating conic-gradient
 * border that creates a premium "energy flow" effect. GPU-accelerated.
 */
export default function MovingBorder({
  children,
  className = '',
  containerClassName = '',
  duration = 3,
}: MovingBorderProps) {
  return (
    <div className={cn('relative group', containerClassName)}>
      {/* Rotating gradient border */}
      <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `conic-gradient(from 0deg, #00FFC6, #E9C349, #00E1AE, #00FFC6)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Glow effect */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
        style={{
          background: `conic-gradient(from 0deg, rgba(0,255,198,0.3), rgba(233,195,73,0.3), rgba(0,225,174,0.3), rgba(0,255,198,0.3))`,
        }}
      />

      {/* Inner content */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'relative z-10 rounded-xl bg-navy',
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
