"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, FileText } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export default function BidRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    phone: "",
    projectName: "",
    projectAddress: "",
    projectType: "",
    estimatedStartDate: "",
    planLink: "",
    additionalDetails: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Bid Request Form",
          ...formData
        }),
      });
      setIsSubmitted(true);
      setFormData({ companyName: "", contactName: "", contactEmail: "", phone: "", projectName: "", projectAddress: "", projectType: "", estimatedStartDate: "", planLink: "", additionalDetails: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("There was an error submitting your bid request. Please try contacting us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Submit a Bid Request"
        description="Provide your project details below. Our estimating team will review your plans and respond promptly with a comprehensive proposal."
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-brand-navy mb-4">Request Received</h3>
                  <p className="text-slate-600 font-sans max-w-md mx-auto">Thank you for inviting Lydia Painting to bid. Our estimating team will review the details and reach out shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-brand-orange font-semibold hover:underline">Submit another project</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Company & Contact Info */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-brand-navy border-b border-slate-100 pb-2 mb-6">Company & Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                        <input required type="text" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="e.g. Turner Construction" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contact Name *</label>
                        <input required type="text" value={formData.contactName} onChange={(e) => setFormData({...formData, contactName: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <input required type="email" value={formData.contactEmail} onChange={(e) => setFormData({...formData, contactEmail: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-brand-navy border-b border-slate-100 pb-2 mb-6 mt-10">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Name *</label>
                        <input required type="text" value={formData.projectName} onChange={(e) => setFormData({...formData, projectName: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="e.g. Medical Office Building Phase 2" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Address *</label>
                        <input required type="text" value={formData.projectAddress} onChange={(e) => setFormData({...formData, projectAddress: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="123 Construction Way, Dallas, TX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                        <select required value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all">
                          <option value="">Select a type...</option>
                          <option value="Multifamily">Multifamily / Apartments</option>
                          <option value="Healthcare">Healthcare / Hospital</option>
                          <option value="Retail/Restaurant">Retail / Restaurant</option>
                          <option value="Education">Education / School</option>
                          <option value="Industrial">Industrial / Warehouse</option>
                          <option value="Office">Corporate Office</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Start Date</label>
                        <input type="date" value={formData.estimatedStartDate} onChange={(e) => setFormData({...formData, estimatedStartDate: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-brand-orange" /> Link to Plans / Specifications
                        </label>
                        <input type="url" value={formData.planLink} onChange={(e) => setFormData({...formData, planLink: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="Procore, Dropbox, Google Drive link..." />
                        <p className="text-xs text-slate-500 mt-2">If your plans require a password, please include it in the details below.</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details / Scope</label>
                        <textarea rows={4} value={formData.additionalDetails} onChange={(e) => setFormData({...formData, additionalDetails: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none transition-all" placeholder="Any specific requirements, phasing, or notes..." />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md">
                      {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting Request...</> : <><Send className="w-5 h-5 mr-2" /> Submit Bid Request</>}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}