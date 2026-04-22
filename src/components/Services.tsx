import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';
import { Compass, PenTool, ShoppingBag, BarChart3, Video, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Digital Strategy',
    description: 'Data-driven insights to chart your path to digital success in the global market.',
    icon: <Compass className="w-8 h-8" />,
    href: '#contact',
  },
  {
    title: 'Custom Web Design',
    description: 'Bespoke website designs tailored to engage audiences and drive high-value conversions.',
    icon: <PenTool className="w-8 h-8" />,
    href: '#contact',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Seamless online stores built for scalability and optimized user journeys.',
    icon: <ShoppingBag className="w-8 h-8" />,
    href: '#contact',
  },
  {
    title: 'Performance Marketing',
    description: 'Targeted campaigns designed for high ROI and measurable enterprise growth.',
    icon: <BarChart3 className="w-8 h-8" />,
    href: '#contact',
  },
  {
    title: 'Content Production',
    description: 'Engaging content strategies that tell your unique brand story effectively.',
    icon: <Video className="w-8 h-8" />,
    href: '#contact',
  },
  {
    title: 'SEO & Optimization',
    description: 'Improving your visibility and ranking with comprehensive search engine optimization.',
    icon: <Rocket className="w-8 h-8" />,
    href: '#contact',
  },
];

export default function Services() {
  return (
    <section id="services" className="theme-abyssal py-32 relative overflow-hidden">
      {/* Visual Enhancers */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-20" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_rgba(0,255,198,0.8)] animate-pulse"></span>
            <span className="font-label text-[10px] text-white tracking-[0.2em] uppercase">Comprehensive Services</span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white mb-6 leading-tight tracking-tight">
            My <span className="text-teal">Expertise</span>
          </h2>

          <p className="font-body text-lg text-tertiary-fixed-dim max-w-2xl mx-auto leading-relaxed">
            Architecting the future of your digital presence with engineering precision.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <ServiceCard
                {...service}
                index={i}
                variant={i % 2 === 0 ? 'teal' : 'dark'}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
