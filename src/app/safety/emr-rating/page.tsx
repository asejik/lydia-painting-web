import PageHeader from "@/components/layout/PageHeader";

export const metadata = { title: "EMR Rating | Lydia Painting" };

export default function EmrRatingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Experience Modification Rate (EMR)"
        description="A direct reflection of our proactive safety culture and commitment to protecting our workforce."
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Industry-Leading Safety Metrics</h2>
          <p className="font-sans text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            The industry average EMR is 1.0. Lydia Painting consistently maintains an EMR well below the industry standard, ensuring lower risk profiles and reduced insurance costs for the General Contractors we partner with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-navy p-8 rounded-xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
              <p className="font-sans text-brand-orange font-semibold tracking-widest uppercase text-sm mb-2">2024 - 2025</p>
              <p className="text-5xl font-heading font-black">.718</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-sans text-slate-500 font-semibold tracking-widest uppercase text-sm mb-2">2023 - 2024</p>
              <p className="text-5xl font-heading font-black text-brand-navy">.693</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <p className="font-sans text-slate-500 font-semibold tracking-widest uppercase text-sm mb-2">2022 - 2023</p>
              <p className="text-5xl font-heading font-black text-brand-navy">.720</p>
            </div>
          </div>

          <p className="font-sans text-sm text-slate-500 italic">
            * Data verified and provided by Texas Mutual Workers' Compensation Insurance. Official EMR Rating Letter available for download in our Prequalification Hub.
          </p>
        </div>
      </section>
    </div>
  );
}