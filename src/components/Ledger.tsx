import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    name: "it reads",
    detail: "regulatory filings, the moment they drop — thousands of pages nobody has time for.",
  },
  {
    name: "it checks",
    detail: "every number in every piece is verified against the original source before anything goes out.",
  },
  {
    name: "it publishes",
    detail: "written analysis on the site, short market videos, and full documentaries on YouTube.",
  },
];

export default function Ledger() {
  return (
    <section id="ledger" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">flagship — the ledger</p>
          <h2 className="display mb-6 max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
            A newsroom that runs itself.
          </h2>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-fog">
            The Ledger turns dense financial paperwork into analysis people
            actually read and watch. I built the whole operation — the product,
            the pipeline behind it, and the infrastructure that keeps it cheap —
            and it publishes daily, mostly without me touching it.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.name} delay={index * 0.08}>
              <div className="h-full rounded-xl border border-line bg-surface p-7 transition-colors hover:border-amber/30">
                <h3 className="mb-3 font-mono text-sm text-amber">{step.name}</h3>
                <p className="leading-relaxed text-fog">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href="https://theledger.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-lg border border-amber/40 bg-amber/10 px-7 py-3.5 font-medium text-amber transition-colors hover:bg-amber/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
            <span className="relative flex items-center gap-2">
              theledger.pro <ArrowUpRight size={17} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
