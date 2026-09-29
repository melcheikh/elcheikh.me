import Reveal from "./Reveal";

interface Entry {
  when: string;
  what: string;
  where: string;
  detail: string;
}

const entries: Entry[] = [
  {
    when: "2024 — now",
    what: "Independent AI & systems engineer",
    where: "remote",
    detail:
      "Evaluation fixes upstream, inference on consumer Blackwell, and two products of my own: The Ledger (2026) and Verlet Studio (2026).",
  },
  {
    when: "2012 — 2024",
    what: "Process operations & quality systems",
    where: "Laboratorios Roemmers · pharmaceutical manufacturing",
    detail:
      "Twelve years under cGMP: batch records, deviation investigations, daily reconciliations. Where I learned that a record is wrong until it has been checked against its source.",
  },
  {
    when: "in progress",
    what: "Psychology — final courses",
    where: "Universidad de Buenos Aires",
    detail:
      "Experimental design and construct validity: the question of whether a test measures what it says it measures, which is the question behind every eval.",
  },
  {
    when: "in progress",
    what: "Philosophy",
    where: "Universidad de Buenos Aires",
    detail: "Logic and argument analysis. Plus three years of seminars at the Escuela de la Orientación Lacaniana.",
  },
];

export default function Background() {
  return (
    <section id="background" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">background</p>
          <h2 className="display mb-6 max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
            Measurement, three ways.
          </h2>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-fog">
            A pharmaceutical batch, a psychological test and a model benchmark
            fail the same way: the number looks fine and the instrument is
            broken. I&apos;ve spent my working life on the instrument.
          </p>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {entries.map((entry, index) => (
            <Reveal key={entry.what} delay={index * 0.05}>
              <div className="grid gap-2 py-6 md:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10">
                <p className="font-mono text-[0.78rem] text-amber md:pt-1">{entry.when}</p>
                <div>
                  <h3 className="font-bold">{entry.what}</h3>
                  <p className="font-mono text-[0.75rem] text-fog">{entry.where}</p>
                </div>
                <p className="leading-relaxed text-fog">{entry.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[0.75rem] leading-relaxed text-fog">
            <span className="text-aqua">$</span> spanish (native, rioplatense) ·
            english (C1/C2) · based in buenos aires, working worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
