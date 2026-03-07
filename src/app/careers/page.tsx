"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle2, ShieldCheck, TrendingUp, HardHat, Loader2, Send } from "lucide-react";

const openPositions = [
  { title: "Commercial Painter", type: "Full-Time", location: "DFW Metroplex" },
  { title: "Site Foreman", type: "Full-Time", location: "DFW Metroplex" },
  { title: "Project Manager", type: "Full-Time", location: "Farmers Branch, TX" },
  { title: "Commercial Estimator", type: "Full-Time", location: "Farmers Branch, TX" },
];

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", position: "", resumeLink: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Careers Form",
          ...formData
        }),
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", position: "", resumeLink: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Error submitting application. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Careers at Lydia Painting"
        description="Join a veteran-led team where craftsmanship, safety, and professional growth are our highest priorities."
        bgImage="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Why Build Your Career Here?</h2>
            <p className="font-sans text-slate-600">We don't just hire painters; we build elite commercial teams. We offer competitive compensation, comprehensive apprentice programs, and a strict adherence to jobsite safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <TrendingUp className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Apprentice Programs</h4>
              <p className="font-sans text-sm text-slate-600">Paid training and clear advancement tracks from apprentice to journeyman to foreman.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <ShieldCheck className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Premium Benefits</h4>
              <p className="font-sans text-sm text-slate-600">Competitive hourly wages, health benefits, and consistent, year-round commercial work.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <HardHat className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Safety Culture</h4>
              <p className="font-sans text-sm text-slate-600">We invest heavily in your safety. Full OSHA training, premium PPE, and zero-incident jobsites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Open Positions</h3>
            <div className="space-y-4">
              {openPositions.map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-brand-navy">{job.title}</h4>
                    <p className="text-sm font-sans text-slate-500">{job.location} • {job.type}</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-3 py-1 rounded-full w-max">Hiring Now</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Apply Online</h3>
            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-navy mb-2">Application Received!</h4>
                <p className="text-slate-600">Our HR team will review your qualifications and reach out shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-brand-orange font-semibold hover:underline">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Position of Interest *</label>
                  <select required value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none">
                    <option value="">Select a position...</option>
                    {openPositions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Link to Resume / Portfolio</label>
                  <input type="url" value={formData.resumeLink} onChange={(e) => setFormData({...formData, resumeLink: e.target.value})} placeholder="Google Drive, LinkedIn, etc." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Experience Summary</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none" placeholder="Tell us about your past commercial painting experience..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Submit Application</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}