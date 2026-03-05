import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Capabilities from "@/components/sections/Capabilities";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIndicators />
      <Capabilities />
      <Services />
      <Projects limitDisplay={3} />
      <Contact />
    </div>
  );
}