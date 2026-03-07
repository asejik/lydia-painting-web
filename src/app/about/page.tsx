import PageHeader from "@/components/layout/PageHeader";
import TrustIndicators from "@/components/sections/TrustIndicators";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Commercial Painting Contractors | Lydia Painting",
  description: "Learn about Lydia Painting's leadership team, our veteran-owned heritage, and our commitment to safety and commercial construction excellence in DFW.",
};

const leadershipTeam = [
  { name: "John Doe", role: "President / CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
  { name: "Jane Smith", role: "Operations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  { name: "Mike Johnson", role: "Estimating Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { name: "David Chen", role: "Senior Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="About Lydia Painting"
        description="A veteran and minority-owned gold standard commercial painting company dedicated to diversity, community, and unmatched craftsmanship."
        bgImage="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Our Story & Capacity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3">Company Profile</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Built on Discipline. Driven by Excellence.</h3>
              <p className="font-sans text-slate-600 leading-relaxed mb-6">
                Founded in 2019, Lydia Painting Company LLC was built on the core values instilled through military service: discipline, precision, and unwavering reliability. We recognized a critical gap in the Dallas-Fort Worth commercial construction market for a painting subcontractor that could handle massive scale while maintaining rigorous safety and quality standards.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed mb-8">
                Today, with a highly trained workforce of 25-50 dedicated professionals, we partner with the region's top General Contractors to deliver multi-million dollar institutional, industrial, and commercial projects on time and strictly within budget.
              </p>
              <ul className="space-y-3 font-sans text-brand-navy font-semibold">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Fully Licensed, Bonded, and Insured</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Certified MBE / HUB / Veteran-Owned Business</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Zero-Incident Safety Culture & Low EMR Rating</li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/about-img.jpeg" alt="Commercial Construction Site" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-navy/10" />
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Our Leadership Team</h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto mb-16">
            Our management team brings decades of combined commercial construction and estimating experience, ensuring your project is handled with elite precision from the blueprint to the final walkthrough.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden bg-slate-200">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-xl text-brand-navy mb-1">{leader.name}</h4>
                  <p className="font-sans text-sm text-brand-orange font-semibold uppercase tracking-wider">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}