import Link from 'next/link';

const ecosystemLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const solutionLinks = [
  { href: '/services#web-design', label: 'Web Design' },
  { href: '/services#seo', label: 'SEO Services' },
  { href: '/services#ecommerce', label: 'E-commerce Solutions' },
  { href: '/services#marketing', label: 'Digital Marketing' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/process', label: 'Our Process' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/careers', label: 'Careers' },
];

const socialLinks = [
  { href: 'https://linkedin.com/company/ocean-web-solutions', label: 'LinkedIn', icon: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' },
  { href: 'https://instagram.com/oceanwebsolutions', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
];

export default function Footer() {
  return (
    <footer className="theme-abyssal relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-navy opacity-95 z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none z-0" />
      <div className="max-w-[1280px] mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group">
              <span className="text-xl font-display font-bold text-white tracking-widest uppercase">
                Ocean<span className="text-teal group-hover:text-gold transition-colors duration-500">Web</span>
              </span>
            </Link>
            <p className="font-body text-sm text-tertiary-fixed-dim leading-relaxed max-w-sm mb-10">
              Ocean Web Solutions is a sophisticated Australian agency engineering high-performance digital artistry for corporate innovators.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-teal hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h4 className="font-label text-[10px] tracking-[0.3em] text-teal uppercase mb-8">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-tertiary-fixed-dim hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-label text-[10px] tracking-[0.3em] text-teal uppercase mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-tertiary-fixed-dim hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4">
            <h4 className="font-label text-[10px] tracking-[0.3em] text-teal uppercase mb-8">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs text-white mb-1">Australia HQ</p>
                <p className="font-body text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">
                  Level 2, 123 Moorabool Street, Geelong VIC 3220
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="tel:1300OCEANWEB" className="font-body text-xs text-white hover:text-teal transition-colors">1300 OCEAN WEB</a>
                <a href="mailto:hello@oceanwebsolutions.com.au" className="font-body text-xs text-teal hover:text-white transition-colors">hello@oceanwebsolutions.com.au</a>
              </div>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 rounded-full border border-teal/30 text-[10px] text-teal uppercase tracking-widest hover:bg-teal hover:text-navy transition-all duration-300"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[9px] text-white/40 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Ocean Web Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="font-label text-[9px] text-white/40 hover:text-gold tracking-[0.3em] uppercase transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-label text-[9px] text-white/40 hover:text-gold tracking-[0.3em] uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
