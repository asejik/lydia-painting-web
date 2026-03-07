import PageHeader from "@/components/layout/PageHeader";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Service Area | Dallas-Fort Worth Commercial Painters | Lydia Painting",
  description: "Lydia Painting provides commercial and industrial painting services across the entire DFW Metroplex including Dallas, Fort Worth, Plano, Frisco, and Arlington.",
};

const cities = [
  "Dallas", "Fort Worth", "Plano", "Frisco",
  "Irving", "Arlington", "McKinney", "Denton",
  "Richardson", "Garland", "Grand Prairie", "Mesquite"
];

export default function ServiceAreaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="DFW Metroplex Coverage"
        description="Headquartered in Farmers Branch, TX, Lydia Painting deploys skilled commercial painting crews across the entire Dallas-Fort Worth region."
        bgImage="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-12">Proudly Serving These Texas Communities</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {cities.map((city, index) => (
              <div key={index} className="bg-white py-4 px-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors">
                <MapPin className="w-4 h-4 mr-2 opacity-50" />
                <span className="font-sans font-semibold text-brand-navy group-hover:text-brand-orange">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-navy p-8 sm:p-12 rounded-2xl text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Project outside the DFW area?</h3>
              <p className="text-slate-300 font-sans">For large-scale industrial or portfolio rollouts, our crews are equipped to travel throughout the great state of Texas.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}