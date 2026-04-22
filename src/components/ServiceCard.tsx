'use client';

import { ReactNode, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  index: number;
  variant?: 'teal' | 'dark';
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = '/services',
  index,
  variant = 'dark'
}: ServiceCardProps) {
  const isTeal = variant === 'teal';
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={href} className="block group h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className={cn(
            "relative p-10 rounded-[2rem] transition-all duration-500 h-full overflow-hidden border cursor-pointer",
            isTeal
              ? "bg-gradient-to-br from-[#00FFC6] to-[#009D80] border-transparent shadow-[0_0_40px_rgba(0,255,198,0.15)]"
              : "bg-white/[0.03] backdrop-blur-xl border-white/[0.08] shadow-2xl hover:shadow-[0_0_50px_rgba(0,255,198,0.08)] hover:border-white/[0.15]"
          )}
        >
          {/* Cursor-tracking radial glow — dark cards only */}
          {!isTeal && (
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,198,0.06), transparent 60%)`,
              }}
            />
          )}

          {/* Visual Overlay for Dark Cards */}
          {!isTeal && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}

          <div className="relative z-10 flex flex-col h-full items-center text-center">
            <motion.div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500",
                isTeal ? "text-navy opacity-90" : "text-teal bg-teal/10 group-hover:bg-teal/15 group-hover:shadow-[0_0_20px_rgba(0,255,198,0.15)]"
              )}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {icon}
            </motion.div>

            <h3 className={cn(
              "font-display text-2xl mb-4 transition-colors duration-300",
              isTeal ? "text-navy font-bold" : "text-white"
            )}>
              {title}
            </h3>

            <p className={cn(
              "font-body text-lg leading-relaxed mb-8",
              isTeal ? "text-navy/80" : "text-tertiary-fixed-dim"
            )}>
              {description}
            </p>

            <div className={cn(
              "mt-auto pt-6 border-t flex items-center justify-center w-full",
              isTeal ? "border-navy/10" : "border-white/10"
            )}>
              <span className={cn(
                "font-label text-[10px] tracking-widest uppercase transition-colors duration-300",
                isTeal ? "text-navy" : "text-teal group-hover:text-white"
              )}>
                Explore Service
              </span>
              <svg
                className={cn(
                  "ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                  isTeal ? "text-navy" : "text-teal group-hover:text-white"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
