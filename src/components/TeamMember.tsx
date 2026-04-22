"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  locationFlag: string;
  photo: string;
  bio: string;
  linkedIn: string;
}

export default function TeamMember({
  name,
  role,
  location,
  locationFlag,
  photo,
  bio,
  linkedIn
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:border-gold/30 transition-all duration-500 shadow-2xl overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Location Badge */}
              <div className="absolute -bottom-3 -right-3 bg-navy-dark border border-white/20 rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-xl z-20">
                <span className="text-xl">{locationFlag}</span>
                <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest hidden md:block">
                  {location}
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-gold transition-colors">{name}</h3>
              <p className="text-teal-light font-bold text-sm uppercase tracking-widest mb-6">{role}</p>

              <p className="text-tertiary-fixed-dim text-lg leading-relaxed font-medium mb-8 italic">
                &quot;{bio}&quot;
              </p>

              <div className="flex items-center justify-center md:justify-between gap-6 overflow-hidden">
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <div className="hidden md:flex items-center gap-2 text-white/20">
                  <span className="w-8 h-px bg-white/10" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Verified Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
