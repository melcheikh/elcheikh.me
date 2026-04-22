'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts (seconds) */
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

/**
 * TextReveal — Splits text children into words and staggers them in
 * with a blur-to-clear + slide-up animation.
 *
 * Accepts a mix of text and JSX children (like <span> with gradient).
 */
export default function TextReveal({
  children,
  className = '',
  delay = 0,
}: TextRevealProps) {
  // Extract text content and process it
  const processChildren = (child: ReactNode): ReactNode[] => {
    if (typeof child === 'string') {
      return child.split(' ').map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ));
    }

    // For JSX elements (like gradient spans), wrap the whole element
    return [
      <motion.span
        key="jsx-child"
        variants={wordVariants}
        className="inline-block"
      >
        {child}
      </motion.span>,
    ];
  };

  const flatChildren = Array.isArray(children) ? children : [children];
  const animatedContent = flatChildren.flatMap(processChildren);

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {animatedContent}
    </motion.span>
  );
}
