"use client";
import { Package, Code2, Server } from "lucide-react";

const services = [
  {
    icon: <Package className="text-cyan-400" size={32} />,
    title: "SaaS in a Box (White-Label)",
    description: "I install, rebrand, and deploy my proprietary Booking & Payment engine for your business in less than 7 days. Ideal for Tattoo Studios, Salons, and Clinics.",
    price: "Custom Quote",
    features: ["Google Calendar Sync", "Stripe Checkout", "Loyalty Ledger", "Admin Dashboard"]
  },
  {
    icon: <Code2 className="text-emerald-400" size={32} />,
    title: "Custom SaaS Development",
    description: "You have a unique operational problem. I architect and build a bespoke, production-ready web application to solve it from scratch.",
    price: "Custom Quote",
    features: ["Next.js Architecture", "PostgreSQL Design", "3rd Party API Integrations", "Global Edge Deployment"]
  },
  {
    icon: <Server className="text-purple-400" size={32} />,
    title: "Technical Audits & Rescue",
    description: "Is your current agency's code failing? I audit your architecture, fix the critical bugs, and migrate you to a modern, scalable stack.",
    price: "Hourly or Fixed",
    features: ["Codebase Review", "Performance Profiling", "Security Patching", "Cloud Migration"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent text-white px-6 relative">
      <div className="absolute inset-0 bg-blue-950/10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I don't just build websites; I engineer solutions that automate operations and increase revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#08101e]/80 backdrop-blur-sm border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-all hover:-translate-y-1 flex flex-col h-full shadow-lg">
              <div className="mb-6 bg-slate-900/80 w-14 h-14 rounded-lg flex items-center justify-center border border-slate-700/50">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-900/50 text-cyan-200 text-sm font-medium rounded-md mb-4">
                  {service.price}
                </span>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#contact" className="mt-auto block w-full text-center py-3 rounded-lg bg-blue-950/30 hover:bg-blue-900/50 text-sm font-medium transition-colors border border-blue-900/30 text-blue-200">
                Inquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
