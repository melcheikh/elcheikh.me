// Types for Ocean Web Solutions Agency Website
// Based on data-model.md from specs/001-agency-website-v1

export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

export interface Metric {
  label: string;
  value: string;
  context?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: ProcessStep[];
  priceRange?: string;
  icon: string;
  cta: CTA;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  heroImage: string;
  problem: string;
  solution: string;
  results: Metric[];
  testimonial?: Testimonial;
  gallery?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  photo: string;
  bio: string;
  linkedIn?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  message: string;
  honeypot?: string;
}
