'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "py-4 bg-navy/95 backdrop-blur-xl border-white/10 shadow-2xl"
          : "py-6 bg-navy/80 backdrop-blur-md border-white/5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between h-10 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <span className="text-xl font-display font-bold text-white tracking-widest uppercase">
              Ocean<span className="text-teal group-hover:text-gold transition-colors duration-500">Web</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white px-4 py-2 font-label text-[10px] tracking-[0.2em] uppercase transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-teal shadow-[0_0_8px_rgba(0,255,198,0.8)] group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-gold text-navy px-6 py-2 rounded-lg text-[11px] font-label font-bold uppercase tracking-widest transition-all shadow-lg shadow-gold/10 hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Start Project
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-px bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-px bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-px bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-teal font-label text-[12px] tracking-[0.3em] uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-gold text-navy px-4 py-4 rounded-xl font-label text-[12px] font-bold text-center mt-4 tracking-widest uppercase"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
