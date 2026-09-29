import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface Client {
  name: string;
  place: string;
  detail: string;
  href?: string;
}

const clients: Client[] = [
  {
    name: "Matema",
    place: "argentina · es",
    detail: "Online store for a mate & thermos brand — catalog, stock and checkout the way people actually buy here.",
    href: "https://matema.shop",
  },
  {
    name: "Base Jurema",
    place: "brasil · pt",
    detail: "Canoe tours in Vitória — an instant quote engine that turns visitors into booked paddlers over WhatsApp.",
  },
  {
    name: "Ohana O Ke Kai",
    place: "argentina · es",
    detail: "A va'a club's full home on the web — activities, store and a back office the club runs on its own.",
  },
  {
    name: "Muebles Taty",
    place: "argentina · es",
    detail: "A furniture factory's catalog where you build your own couch and talk straight to the maker.",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">client work</p>
          <h2 className="display mb-6 max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
            Real businesses, three countries.
          </h2>
        </Reveal>

        {/* Feature: Mikka Tattoo */}
        <Reveal>
          <a
            href="https://mikkatattoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-6 block rounded-xl border border-line bg-surface p-8 transition-colors hover:border-aqua/40 md:p-10"
          >
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="text-2xl font-bold">Mikka Tattoo</h3>
              <span className="font-mono text-[0.75rem] text-aqua">
                melbourne, australia · en
              </span>
            </div>
            <p className="mb-5 max-w-2xl text-lg leading-relaxed text-fog">
              A tattoo studio that used to lose clients to double-bookings now
              runs its whole day — appointments, payments, loyalty — on a
              platform I built for them. Live and earning for eight months
              straight.
            </p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.8rem] text-aqua transition-colors group-hover:text-paper">
              mikkatattoo.com <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={(index % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-7 transition-colors hover:border-aqua/30">
                <div className="mb-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold">{client.name}</h3>
                  <span className="font-mono text-[0.72rem] text-fog">{client.place}</span>
                </div>
                <p className="leading-relaxed text-fog">{client.detail}</p>
                {client.href && (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.8rem] text-aqua transition-colors hover:text-paper"
                  >
                    visit <ArrowUpRight size={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
