const links = [
  { href: "#evals", label: "evals" },
  { href: "#ledger", label: "ledger" },
  { href: "#studio", label: "studio" },
  { href: "#clients", label: "clients" },
  { href: "#lab", label: "lab" },
  { href: "#background", label: "background" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
      >
        <a href="#top" className="font-mono text-sm text-paper">
          <span className="text-amber">~</span>/elcheikh.me
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.8rem] text-fog transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:martinelcheikh@gmail.com"
          className="rounded-md border border-amber/40 bg-amber/10 px-3.5 py-1.5 font-mono text-[0.8rem] text-amber transition-colors hover:bg-amber/20"
        >
          write me
        </a>
      </nav>
    </header>
  );
}
