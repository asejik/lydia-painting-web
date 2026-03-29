import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { HardHat, ShieldAlert, Activity, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Safety Standards & OSHA Compliance | Lydia Painting",
  description: "Lydia Painting is committed to zero-incident jobsites. Review our OSHA compliance, EMR ratings, and comprehensive safety training programs.",
};

export default function SafetyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Safety Commitment"
        description="Our most important metric is sending every worker home safely. We maintain a zero-incident culture through rigorous training, OSHA compliance, and proactive site management."
        bgImage="https://images.unsplash.com/photo-1504917595217-d4f50060ea05?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

            <Link href="/safety/osha-compliance" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <HardHat className="w-10 h-10 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">OSHA Compliance</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">All foremen and project managers carry OSHA 30 certifications. Field crews are required to hold OSHA 10 certifications minimum.</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-orange">
                Read Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/safety/jobsite-procedures" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <ClipboardCheck className="w-10 h-10 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Jobsite Procedures</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">Daily Job Hazard Analysis (JHA) and weekly toolbox talks are mandatory before work commences on any commercial site.</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-orange">
                Read Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/safety/emr-rating" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <Activity className="w-10 h-10 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">EMR Rating</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">We maintain an Experience Modification Rate (EMR) well below the industry average, directly reflecting our proactive safety culture.</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-orange">
                View Ratings <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/safety/hazardous-materials" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <ShieldAlert className="w-10 h-10 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">Hazardous Materials</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">Strict adherence to environmental regulations for the handling, application, and disposal of industrial coatings and solvents.</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-orange">
                Read Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}