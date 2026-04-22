'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  mainImage: string;
  featureImages: { src: string; title: string; span?: string }[];
  results: string[];
}

export default function CaseStudy({
  title,
  category,
  description,
  mainImage,
  featureImages,
  results
}: CaseStudyProps) {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="font-label text-[10px] uppercase tracking-widest text-teal">{category}</span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">{title}</h3>
          <p className="font-body text-lg text-tertiary-fixed-dim leading-relaxed">{description}</p>
        </div>
        
        <div className="flex flex-wrap lg:justify-end gap-3 max-w-md">
          {results.map((result, i) => {
            // Split by first space to make the number pop
            const parts = result.split(' ');
            const metric = parts[0];
            const label = parts.slice(1).join(' ');
            
            return (
              <div key={i} className="px-4 py-3 bg-navy-dark/50 border border-white/5 rounded-xl backdrop-blur-md shadow-lg">
                <span className="font-black text-gold text-2xl block mb-1">{metric}</span>
                <span className="font-label text-[9px] uppercase tracking-[0.2em] text-white/50">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-navy-dark/80 group aspect-[16/9] md:aspect-[21/9] bg-navy-dark"
      >
        <Image 
          src={mainImage} 
          alt={`${title} Main Experience`} 
          fill 
          className="object-cover object-top transition-transform duration-[3s] group-hover:scale-105" 
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-6 left-6 px-4 py-2 bg-navy/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl">
          <span className="font-label text-[10px] uppercase tracking-widest text-white">Full Experience Showcase</span>
        </div>
      </motion.div>

      {/* Bento Grid for Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureImages.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className={`relative rounded-2xl overflow-hidden border border-white/10 group bg-navy aspect-square sm:aspect-video md:aspect-auto md:h-[300px] ${feature.span || ''}`}
          >
            <Image 
              src={feature.src} 
              alt={feature.title} 
              fill 
              className="object-cover object-top transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
              <span className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">{feature.title}</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-gold group-hover:text-navy transition-all duration-300 transform group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
