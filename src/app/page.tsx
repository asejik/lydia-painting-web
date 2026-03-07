import Hero from "@/components/sections/Hero";
import Vendors from "@/components/sections/Vendors";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Capabilities from "@/components/sections/Capabilities";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Vendors />
      <TrustIndicators />
      <Capabilities />
      <Services />
      <Industries />
      <Projects limitDisplay={3} />
      <Testimonials />
      <Contact />
    </main>
  );
}