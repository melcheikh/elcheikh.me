import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Evals from "@/components/Evals";
import Ledger from "@/components/Ledger";
import Studio from "@/components/Studio";
import Clients from "@/components/Clients";
import Lab from "@/components/Lab";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Evals />
        <Ledger />
        <Studio />
        <Clients />
        <Lab />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
