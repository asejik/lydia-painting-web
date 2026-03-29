import PageHeader from "@/components/layout/PageHeader";
import { FileText, Droplets, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Hazardous Materials & SDS | Lydia Painting" };

export default function HazardousMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Hazardous Materials Management"
        description="Strict adherence to environmental regulations for the handling, application, and disposal of industrial coatings."
        bgImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="mb-6 flex items-center text-sm font-sans text-slate-500">
          <Link href="/" className="hover:text-brand-orange transition-colors"><Home className="w-4 h-4" /></Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/safety" className="hover:text-brand-orange transition-colors">Safety Commitment</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-brand-navy font-semibold">Hazardous Materials</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-navy mb-4">Hazard Communication (HazCom)</h2>
              <p className="font-sans text-slate-600 leading-relaxed mb-4">
                In compliance with OSHA Standard 1910.1200, Lydia Painting maintains a comprehensive Hazard Communication Program. We verify that all chemical containers are properly labeled with product identifiers, signal words, hazard statements, and standardized pictograms.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Prior to starting work, our safety personnel provide General Contractors and site employees with information regarding the specific precautions required to lessen the possibility of exposure during the application of specialized coatings.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <div className="bg-brand-navy p-6 rounded-2xl text-white">
              <FileText className="w-8 h-8 text-brand-orange mb-3" />
              <h3 className="font-heading font-bold text-lg mb-2">Safety Data Sheets (SDS)</h3>
              <p className="font-sans text-sm text-slate-300">
                Copies of SDSs for all hazardous chemicals used on-site are strictly maintained and made readily accessible to all employees during their work shift.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Droplets className="w-8 h-8 text-brand-orange mb-3" />
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">Low VOC Systems</h3>
              <p className="font-sans text-sm text-slate-600">
                We specialize in eco-friendly, strict-compliance painting using low and no-VOC materials, essential for occupied healthcare facilities and LEED-certified developments.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}