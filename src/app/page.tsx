import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import CaseStudy from '@/components/CaseStudy';
import Footer from '@/components/Footer';

const featuredCaseStudy = {
  title: "Mikka Tattoo Studio",
  category: "Premium E-Commerce & Booking",
  description: "A complete digital transformation for a high-end tattoo studio. I replaced their commission-heavy platform with a custom-engineered booking and management engine that reflects their premium artistry.",
  mainImage: "/mikka/main.png",
  featureImages: [
    { src: "/mikka/booking flow.png", title: "Custom Booking Flow", span: "lg:col-span-2" },
    { src: "/mikka/admin analytics.png", title: "Management Engine", span: "lg:col-span-1" },
    { src: "/mikka/admin clients.png", title: "Client CRM Dashboard", span: "lg:col-span-1" },
    { src: "/mikka/hamb menu main.png", title: "Immersive Navigation", span: "lg:col-span-2" }
  ],
  results: ["+145% Direct Bookings", "Zero Platform Fees", "Automated Workflows", "Integrated Analytics"]
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section id="work" className="theme-abyssal section-padding relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Transformation Gallery</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Featured <span className="text-gradient">Case Studies</span></h2>
          </div>
          <CaseStudy {...featuredCaseStudy} />
        </div>
      </section>
      <About />
      <CTASection />
      <Footer />
    </>
  );
}
