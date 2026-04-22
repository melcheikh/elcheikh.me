import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="contact" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 border-t border-slate-800/50 pt-24">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's talk.</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I'm Martín El Cheikh, an AI Developer and Product Researcher based in Buenos Aires. I spend my time building LLM-powered tooling — extraction pipelines, semantic classification, AI-assisted workflows — and figuring out what developers actually need from them.
          </p>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            My background in Psychology (UBA) trained me to listen for what people mean rather than what they say. That's the core skill in product research, and it shapes how I build.
          </p>
          
          <div className="flex items-center gap-2 text-slate-300 mb-8 font-medium">
            <MapPin className="text-cyan-400" size={20} />
            Argentina &rarr; Serving Clients Worldwide
          </div>
        </div>

        <div className="bg-[#050b14]/80 backdrop-blur-md border border-slate-800/60 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
          
          <div className="space-y-6">
            <a href="mailto:martinelcheikh@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/40 transition-all border border-transparent hover:border-slate-700/50 group">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg group-hover:bg-blue-900/30 group-hover:border-blue-800/50 group-hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-slate-400">martinelcheikh@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/melcheikh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/40 transition-all border border-transparent hover:border-slate-700/50 group">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg group-hover:bg-slate-800/80 transition-colors">
                <Github size={24} />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-slate-400">@melcheikh</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/martin-el-cheikh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/40 transition-all border border-transparent hover:border-slate-700/50 group">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg group-hover:bg-blue-900/30 group-hover:border-blue-800/50 group-hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-slate-400">martin-el-cheikh</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
