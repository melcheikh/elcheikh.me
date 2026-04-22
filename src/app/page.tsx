import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import CaseStudy from '@/components/CaseStudy';

const featuredCaseStudy = {
  title: "Mikka Tattoo Studio",
  category: "Premium E-Commerce & Booking",
  description: "A complete digital transformation for a high-end tattoo studio. I replaced their commission-heavy platform with a custom-engineered booking and management engine.",
  beforeImg: "/mikka/booking flow.png",
  afterImg: "/mikka/admin analytics.png",
  results: ["+145% Direct Bookings", "Zero Platform Fees", "Automated Admin Dashboard", "Integrated Analytics"]
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section className="theme-abyssal section-padding relative overflow-hidden">
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
    </>
  );
}
