import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import CaseStudy from '@/components/CaseStudy';

const featuredCaseStudy = {
  title: "Mikka Tattoo Studio",
  category: "Premium E-Commerce & Booking",
  description: "A complete digital transformation for a high-end tattoo studio. I replaced their commission-heavy platform with a custom-engineered booking and merchandise engine.",
  beforeImg: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
  afterImg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
  results: ["+145% Direct Bookings", "Zero Platform Fees", "2.1s Mobile Load Speed", "Custom Merchandise Store"]
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
