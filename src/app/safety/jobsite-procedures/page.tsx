import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle2, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Jobsite Procedures | Lydia Painting" };

export default function JobsiteProceduresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Jobsite Procedures"
        description="Our proactive approach to accident prevention begins long before the first coat of paint is applied."
        bgImage="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="mb-6 flex items-center text-sm font-sans text-slate-500">
          <Link href="/" className="hover:text-brand-orange transition-colors"><Home className="w-4 h-4" /></Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/safety" className="hover:text-brand-orange transition-colors">Safety Commitment</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-brand-navy font-semibold">Jobsite Procedures</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Proactive Risk Management</h2>
          <p className="font-sans text-slate-600 leading-relaxed mb-8">
            Lydia Painting utilizes an extensive, 100-point Safety Audit Checklist to identify potential hazards, verify the proper use of PPE, and ensure compliance with all site-specific safety plans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">Job Hazard Analysis (JHA)</h3>
              <p className="font-sans text-sm text-slate-600">Conducted daily to identify existing and predictable hazards in the surroundings or working conditions. Analysts outline specific hazard controls before work begins.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">Toolbox Talks</h3>
              <p className="font-sans text-sm text-slate-600">Weekly safety meetings are held on-site to review the Emergency Action Plan, reinforce proper PPE usage, and discuss specific hazards related to the current phase of construction.</p>
            </div>
          </div>
          <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">Core On-Site Requirements</h3>
          <ul className="space-y-3 font-sans text-slate-700">
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Mandatory use of hard hats, safety glasses, and high-visibility vests.</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Ground Fault Circuit Interrupter (GFCI) protection on all electrical equipment.</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Immediate removal of damaged tools or uninspected ladders.</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3" /> Strict adherence to Lockout/Tagout programs.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}