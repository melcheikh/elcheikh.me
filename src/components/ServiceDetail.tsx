"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string[];
  features: Feature[];
  id?: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  features,
  id
}: ServiceDetailProps) {
  return (
    <section id={id} className="section-padding bg-surf-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-orb top-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal opacity-5" />
      <div className="glow-orb bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Sticky Overview */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <AnimatedSection>
              <div className="text-teal font-bold text-sm uppercase tracking-widest mb-4 inline-block bg-teal/10 px-4 py-2 rounded-lg">
                The Solution
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-8 tracking-tighter leading-tight">
                {title}
              </h2>
              <p className="text-gray-neutral text-xl font-medium leading-relaxed mb-8">
                {subtitle}
              </p>

              <div className="flex flex-col gap-4">
                {description.map((p, i) => (
                  <p key={i} className="text-gray-neutral/80 text-lg leading-relaxed italic border-l-4 border-gold/30 pl-6">
                    {p}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Technical Features */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-navy-dark flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-navy/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-navy mb-4 group-hover:text-teal transition-colors tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-neutral font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Service Footnote */}
            <AnimatedSection delay={0.4} className="mt-16 p-8 bg-navy-dark rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="glow-orb top-0 right-0 w-32 h-32 bg-gold opacity-10" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center md:text-left">
                  <div className="text-white font-bold text-xl mb-2">Ready to outperform?</div>
                  <div className="text-white/50 text-sm font-medium">Standard development timeline: 2-4 weeks.</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gold text-navy font-bold rounded-2xl shadow-xl shadow-gold/20"
                >
                  Request Technical Brief
                </motion.button>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
