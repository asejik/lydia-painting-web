import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { Calendar, MapPin, Building, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Bid Opportunities & Plan Room | Lydia Painting",
  description: "View Lydia Painting's active bidding calendar and submit your commercial project plans for an estimate.",
};

// Placeholder data - this could eventually be moved to Firebase if they want to manage it dynamically
const activeBids = [
  { project: "Marriott Hotel Renovation", location: "Dallas, TX", gc: "Turner Construction", due: "June 20, 2026", status: "Estimating" },
  { project: "Medical Office Building Phase 3", location: "Plano, TX", gc: "DPR Construction", due: "June 28, 2026", status: "Estimating" },
  { project: "Heritage High School Addition", location: "Frisco, TX", gc: "McCarthy Building Cos.", due: "July 05, 2026", status: "Reviewing Plans" },
  { project: "Logistics Warehouse 4A", location: "Arlington, TX", gc: "Open to Bidders", due: "July 12, 2026", status: "Accepting Plans" },
];

export default function PlanRoomPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Bid Opportunities"
        description="We actively partner with leading General Contractors across the DFW Metroplex. View our current bid calendar or submit your plans directly to our estimating team."
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h3 className="text-2xl font-heading font-bold text-brand-navy">Active Plan Room</h3>
            <Link
              href="/bid-request"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-orange rounded-lg hover:bg-brand-orange-hover transition-colors shadow-sm"
            >
              Submit Plans for Estimate
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white text-sm font-sans tracking-wider uppercase">
                    <th className="px-6 py-4 font-semibold">Project Name</th>
                    <th className="px-6 py-4 font-semibold">Location</th>
                    <th className="px-6 py-4 font-semibold">General Contractor</th>
                    <th className="px-6 py-4 font-semibold">Bid Due Date</th>
                    <th className="px-6 py-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {activeBids.map((bid, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5">
                        <span className="font-semibold text-brand-navy">{bid.project}</span>
                      </td>
                      <td className="px-6 py-5 text-slate-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                          {bid.location}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-600">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-2 text-slate-400" />
                          {bid.gc}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-brand-orange" />
                          <span className="font-medium">{bid.due}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          bid.status === 'Estimating' ? 'bg-amber-100 text-amber-700' :
                          bid.status === 'Accepting Plans' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {bid.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-500 font-sans">
            Don't see your project listed? <Link href="/contact" className="text-brand-orange hover:underline font-semibold">Contact us directly</Link> to send a formal invitation to bid.
          </div>

        </div>
      </section>
    </div>
  );
}