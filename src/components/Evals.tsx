import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import {
  AS_OF,
  evals,
  hfDownloads,
  prUrl,
  systems,
  type Contribution,
  type PrState,
} from "@/data/contributions";

const stateStyle: Record<PrState, string> = {
  merged: "border-aqua/40 bg-aqua/10 text-aqua",
  approved: "border-amber/40 bg-amber/10 text-amber",
  "in review": "border-line bg-panel text-fog",
};

function PrRow({ pr }: { pr: Contribution }) {
  return (
    <a
      href={prUrl(pr)}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-3 py-6 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-10"
    >
      <div className="flex flex-wrap items-center gap-2.5 md:flex-col md:items-start">
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] ${stateStyle[pr.state]}`}>
          {pr.state}
        </span>
        <span className="font-mono text-[0.75rem] text-fog">
          {pr.repo.split("/")[1]} #{pr.number}
        </span>
      </div>
      <div>
        <h3 className="mb-1.5 flex items-start gap-1.5 font-bold transition-colors group-hover:text-amber">
          {pr.title}
          <ArrowUpRight size={15} className="mt-1 shrink-0 text-fog transition-colors group-hover:text-amber" />
        </h3>
        <p className="leading-relaxed text-fog">{pr.impact}</p>
      </div>
    </a>
  );
}

export default function Evals() {
  return (
    <section id="evals" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">ai evaluation — uk ai security institute</p>
          <h2 className="display mb-6 max-w-4xl text-[clamp(2rem,5vw,3.6rem)]">
            Fixing the instruments.
          </h2>
          <p className="mb-5 max-w-2xl text-lg leading-relaxed text-fog">
            Governments and labs decide how safe a frontier model is by running
            benchmarks — and benchmarks are code. When a scorer misreads its
            judge or quietly drops a sample, the published number changes and
            nobody notices.
          </p>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-fog">
            I read the scorers of{" "}
            <a
              href="https://github.com/UKGovernmentBEIS/inspect_evals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper underline decoration-line underline-offset-4 hover:decoration-amber"
            >
              Inspect
            </a>
            , the UK AI Security Institute&apos;s open evaluation suite, the way
            a psychometrician reads a test: does this measure what it claims?
            When it doesn&apos;t, I send the fix.
          </p>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {evals.map((pr, index) => (
            <Reveal key={pr.number} delay={Math.min(index, 4) * 0.04}>
              <PrRow pr={pr} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="eyebrow mt-24 mb-4">inference &amp; infrastructure</p>
          <h2 className="display mb-6 max-w-4xl text-[clamp(1.8rem,4vw,2.8rem)]">
            Running models on new silicon.
          </h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-fog">
            I run frontier-size models on a consumer Blackwell GPU (RTX 5090,
            SM120) — hardware the big projects&apos; CI doesn&apos;t cover — and
            fix what breaks upstream.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="https://huggingface.co/melcheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 flex flex-col gap-5 rounded-xl border border-line bg-surface p-7 transition-colors hover:border-amber/40 md:flex-row md:items-center md:justify-between md:p-9"
          >
            <div className="max-w-2xl">
              <h3 className="mb-2 text-xl font-bold">Gemma 4 31B, quantized to NVFP4 for Blackwell</h3>
              <p className="leading-relaxed text-fog">
                Four 4-bit checkpoints (QAT and MSE-calibrated, plus their
                multi-token-prediction draft models for speculative decoding),
                published on Hugging Face so the model fits and runs on a single
                consumer card.
              </p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="display text-3xl text-amber">{hfDownloads}</p>
              <p className="mt-1 inline-flex items-center gap-1 font-mono text-[0.75rem] text-fog group-hover:text-paper">
                downloads · huggingface.co/melcheikh <ArrowUpRight size={13} />
              </p>
            </div>
          </a>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {systems.map((pr, index) => (
            <Reveal key={pr.number} delay={index * 0.04}>
              <PrRow pr={pr} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[0.75rem] leading-relaxed text-fog">
            <span className="text-aqua">$</span> states as of {AS_OF} · every
            row links to the pull request ·{" "}
            <a
              href="https://github.com/search?q=is%3Apr+author%3Amelcheikh+-user%3Amelcheikh&type=pullrequests"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4 hover:text-paper"
            >
              full list on github
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
