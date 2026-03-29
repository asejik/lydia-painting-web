import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle2, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "OSHA Compliance | Lydia Painting" };

export default function OshaCompliancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="OSHA Compliance"
        description="A foundational pillar of our safety program is strict adherence to Occupational Safety and Health Administration (OSHA) regulations."
        bgImage="https://images.unsplash.com/photo-1504917595217-d4f50060ea05?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="mb-6 flex items-center text-sm font-sans text-slate-500">
          <Link href="/" className="hover:text-brand-orange transition-colors"><Home className="w-4 h-4" /></Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/safety" className="hover:text-brand-orange transition-colors">Safety Commitment</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-brand-navy font-semibold">OSHA Compliance</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Certification & Training</h2>
          <p className="font-sans text-slate-600 leading-relaxed mb-8">
            At Lydia Painting, we do not view OSHA compliance as a suggestion; it is a mandate. Our comprehensive safety policy manual ensures that every team member, from senior management to field crews, understands and executes their specific safety responsibilities to provide a workplace free from recognized hazards.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mr-3 mt-0.5" />
              <p className="font-sans text-slate-700"><strong>Supervisory Training:</strong> All foremen, project managers, and designated "Competent Persons" carry OSHA 30-Hour Construction Safety certifications.</p>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mr-3 mt-0.5" />
              <p className="font-sans text-slate-700"><strong>Field Crew Training:</strong> All field employees are required to hold OSHA 10-Hour Construction Safety certifications at minimum.</p>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mr-3 mt-0.5" />
              <p className="font-sans text-slate-700"><strong>Fall Protection & Scaffolding:</strong> Specialized training is conducted for Personal Fall Arrest Systems (PFAS) and proper scaffold erection, use, and dismantling under the supervision of a Competent Person.</p>
            </li>
          </ul>
          <Link href="/prequalification" className="text-brand-orange font-semibold hover:underline">Download our OSHA Certifications in the Plan Room</Link>
        </div>
      </section>
    </div>
  );
}