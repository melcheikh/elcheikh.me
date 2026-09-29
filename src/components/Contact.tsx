import Image from "next/image";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import Reveal from "./Reveal";

const profiles = [
  { href: "https://huggingface.co/melcheikh", label: "hugging face" },
  { href: "https://www.linkedin.com/in/martin-el-cheikh", label: "linkedin" },
  { href: "https://orcid.org/0009-0009-4896-2018", label: "orcid" },
  { href: "https://www.youtube.com/@howworldsaremade", label: "youtube" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Reveal>
          <p className="eyebrow mb-4">contact</p>
          <h2 className="display mb-6 text-[clamp(2rem,5vw,3.6rem)]">
            Talk to me.
          </h2>
          <p className="mb-4 max-w-xl text-lg leading-relaxed text-fog">
            Eval and research-engineering roles, a benchmark whose numbers you
            don&apos;t quite trust, software that has to ship, or a machine that
            needs explaining on screen — write me. I answer.
          </p>
          <p className="mb-10 max-w-xl leading-relaxed text-fog">
            I&apos;m Martín. I build from Argentina for wherever the work is. I
            surf, I paddle va&apos;a, and I read Lacan — all of which somehow
            ended up in the work above.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:martinelcheikh@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-amber px-7 py-3.5 font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
              <Mail size={18} className="relative" />
              <span className="relative">martinelcheikh@gmail.com</span>
            </a>
            <a
              href="https://github.com/melcheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-line bg-surface px-7 py-3.5 font-medium text-paper transition-colors hover:border-fog/50"
            >
              <Github size={18} />
              @melcheikh
              <ArrowUpRight size={15} className="text-fog" />
            </a>
          </div>

          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.8rem] text-fog">
            {profiles.map((profile) => (
              <a
                key={profile.href}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-paper"
              >
                {profile.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-xs md:max-w-sm">
          <figure className="overflow-hidden rounded-xl border border-line">
            <div className="relative aspect-[9/14]">
              <Image
                src="/renders/surf.webp"
                alt="Martín surfing a small wave at golden hour, shot on a 360 camera."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <figcaption className="border-t border-line bg-surface px-5 py-3 font-mono text-[0.75rem] text-fog">
              <span className="text-aqua">$</span> status: offline · in the water
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
