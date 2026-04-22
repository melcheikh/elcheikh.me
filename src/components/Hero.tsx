"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-transparent text-white px-6">
      {/* Background Grid for a "tech/engineering" feel with a subtle blue tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-800/30 text-sm text-blue-200 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        >
          <Terminal size={14} />
          <span>AI Developer & Product Researcher</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Building AI tooling for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            structured data extraction
          </span> & developer workflows.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
        >
          I build LLM-powered pipelines that turn messy unstructured inputs into clean, usable outputs. Python, OpenAI API, llama-index. Background in Psychology and a decade of operational process work.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="mailto:martinelcheikh@gmail.com" className="inline-flex justify-center items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-400 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Get in touch
            <ArrowRight size={18} />
          </a>
          <a href="#case-study" className="inline-flex justify-center items-center gap-2 bg-slate-900/50 border border-slate-700/50 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800/50 transition-colors backdrop-blur-sm">
            See my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
