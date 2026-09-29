import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface Note {
  title: string;
  detail: string;
  href?: string;
}

const notes: Note[] = [
  {
    title: "A model that read all of Lacan",
    detail:
      "I trained a language model on the complete works of Lacan and Freud, and built it a memory and a retraining loop — it keeps studying on its own.",
  },
  {
    title: "A thousand pages a day, tamed",
    detail:
      "The Argentine market publishes its daily numbers as a phone-book-sized PDF. I turned it into a clean, queryable database — every evening, automatically.",
  },
  {
    title: "Four speakers, and knowing when to stop",
    detail:
      "This laptop's four speakers didn't work properly on Linux. I shipped a userspace workaround, then found the proper fix already in the kernel driver — and marked my own repo as superseded, with a clean uninstall.",
    href: "https://github.com/melcheikh/AudioLegion",
  },
  {
    title: "A coach inside the game",
    detail:
      "A real-time Counter-Strike assistant that watches the match state and talks tactics while you play.",
  },
];

export default function Lab() {
  return (
    <section id="lab" className="scroll-mt-24 border-t border-line bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">lab notes</p>
          <h2 className="display mb-6 max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
            The curiosity that feeds it all.
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 0.05}>
              <div className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                <h3 className="font-bold">
                  {note.href ? (
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 transition-colors hover:text-amber"
                    >
                      {note.title} <ArrowUpRight size={15} className="mt-1 shrink-0 text-fog" />
                    </a>
                  ) : (
                    note.title
                  )}
                </h3>
                <p className="leading-relaxed text-fog">{note.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
