import PageHeader from "@/components/layout/PageHeader";
import { Download, ShieldCheck, FileText, CheckCircle, HardHat } from "lucide-react";

export const metadata = {
  title: "Contractor Prequalification | Lydia Painting",
  description: "Download Lydia Painting's compliance documents, W-9, COI, and safety manuals for commercial subcontractor prequalification.",
};

const documents = [
  { name: "W-9 Form (2026)", icon: FileText, size: "124 KB" },
  { name: "Certificate of Insurance (COI)", icon: ShieldCheck, size: "450 KB" },
  { name: "Safety Manual Summary", icon: HardHat, size: "1.2 MB" },
  { name: "OSHA Training Certifications", icon: CheckCircle, size: "850 KB" },
  { name: "EMR Rating Letter", icon: FileText, size: "210 KB" },
  { name: "MBE/HUB Certification", icon: ShieldCheck, size: "530 KB" },
];

export default function PrequalificationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Contractor Prequalification"
        description="We understand the rigorous compliance requirements of commercial construction. Access our company details and standard prequalification documents below."
        bgImage="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column: Company Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-6 border-b border-slate-100 pb-4">Company Details</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Legal Name</span>
                    <span className="text-sm font-medium text-slate-800">Lydia Painting Company LLC</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Years in Business</span>
                    <span className="text-sm font-medium text-slate-800">Established 2019 (7 Years)</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company Size</span>
                    <span className="text-sm font-medium text-slate-800">25-50 Employees</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bonding Capacity</span>
                    <span className="text-sm font-medium text-slate-800">$2,000,000 Single / $5,000,000 Aggregate</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary NAICS Codes</span>
                    <span className="text-sm font-medium text-slate-800">238320 (Painting and Wall Covering Contractors)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Downloadable Documents */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Compliance Documents</h3>
              <p className="font-sans text-slate-600 mb-8">
                The following standard documents are available for immediate download to expedite your vendor approval process. For project-specific insurance certificates, please contact our estimating team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {documents.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <a
                      key={index}
                      href="#" // Replace with actual PDF links from Cloudinary/Firebase later
                      className="group flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:border-brand-orange hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-brand-orange/10 transition-colors">
                        <Icon className="w-5 h-5 text-brand-navy group-hover:text-brand-orange transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-sans font-semibold text-sm text-brand-navy group-hover:text-brand-orange transition-colors">{doc.name}</h4>
                        <span className="text-xs text-slate-400">{doc.size} • PDF</span>
                      </div>
                      <Download className="w-5 h-5 text-slate-300 group-hover:text-brand-orange transition-colors" />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}