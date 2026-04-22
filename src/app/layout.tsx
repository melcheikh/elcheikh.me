import type { Metadata } from "next";
import { Epilogue, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ 
  subsets: ["latin"],
  variable: '--font-epilogue',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Martin Elcheikh | Premium Web Engineer",
  description: "I engineer high-performance digital artistry and reliable architecture for brands and innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${epilogue.variable} ${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-navy text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
