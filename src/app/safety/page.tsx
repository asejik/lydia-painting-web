import PageHeader from "@/components/layout/PageHeader";
import { HardHat, ShieldAlert, Activity, ClipboardCheck } from "lucide-react";

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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <HardHat className="w-10 h-10 text-brand-orange mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3">OSHA Compliance</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">All foremen and project managers carry OSHA 30 certifications. Field crews are required to hold OSHA 10 certifications minimum.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <ClipboardCheck className="w-10 h-10 text-brand-orange mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3">Jobsite Procedures</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">Daily Job Hazard Analysis (JHA) and weekly toolbox talks are mandatory before work commences on any commercial site.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <Activity className="w-10 h-10 text-brand-orange mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3">EMR Rating</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">We maintain an Experience Modification Rate (EMR) well below the industry average, directly reflecting our proactive safety culture.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <ShieldAlert className="w-10 h-10 text-brand-orange mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-3">Hazardous Materials</h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">Strict adherence to environmental regulations for the handling, application, and disposal of industrial coatings and solvents.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}