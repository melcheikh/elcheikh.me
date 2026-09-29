import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetmono",
});

const SITE_URL = "https://elcheikh.me";
const TITLE = "Martín El Cheikh — AI evaluation & systems engineer";
const DESCRIPTION =
  "I fix the scorers inside AI-safety benchmarks (UK AI Security Institute's Inspect), run frontier models on consumer Blackwell GPUs, and build products end to end — The Ledger and Verlet Studio. Buenos Aires.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "elcheikh.me",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "A star system rendered by code — frame from a Python-generated Blender scene." }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martín El Cheikh",
  url: SITE_URL,
  email: "mailto:martinelcheikh@gmail.com",
  jobTitle: "AI Evaluation & Systems Engineer",
  address: { "@type": "PostalAddress", addressCountry: "AR" },
  sameAs: [
    "https://github.com/melcheikh",
    "https://huggingface.co/melcheikh",
    "https://www.linkedin.com/in/martin-el-cheikh",
    "https://orcid.org/0009-0009-4896-2018",
    "https://www.youtube.com/@howworldsaremade",
  ],
  knowsAbout: [
    "AI model evaluation",
    "Measurement validity",
    "LLM inference and quantization",
    "Deterministic 3D animation",
    "Full-stack product engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jetMono.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
