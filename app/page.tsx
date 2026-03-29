import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import HowIBuild from "@/components/HowIBuild";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <TechMarquee />
      <HowIBuild />
      <Work />
      <Footer />
    </main>
  );
}
