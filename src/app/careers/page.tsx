"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  HardHat,
  Loader2,
  Send,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  DollarSign,
  Briefcase
} from "lucide-react";
import { openPositions } from "@/data/careers";
import { submitForm } from "@/lib/submitForm";

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: openPositions[0]?.title || "Social Media Assistant (Remote)",
    resumeLink: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm("careers", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: openPositions[0]?.title || "",
        resumeLink: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Error submitting application. Please email us directly at Info@lydiapainting.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Careers at Lydia Painting"
        description="Join a veteran-led industry leader where craftsmanship, innovation, and professional growth are our highest priorities."
        bgImage="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Why Work With Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Why Build Your Career Here?</h2>
            <p className="font-sans text-slate-600">
              We empower talented professionals to do their best work. From our commercial field teams across the southern states to our global digital operations, we foster autonomy, excellence, and collaborative innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <TrendingUp className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Professional Growth</h4>
              <p className="font-sans text-sm text-slate-600">
                Direct mentorship, clear advancement tracks, and high-impact autonomy to shape the company&apos;s future.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <ShieldCheck className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Competitive Compensation</h4>
              <p className="font-sans text-sm text-slate-600">
                Performance-driven compensation, stable long-term engagements, and comprehensive project support.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <HardHat className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Culture of Excellence</h4>
              <p className="font-sans text-sm text-slate-600">
                A veteran-led culture prioritizing discipline, safety, integrity, and client satisfaction on every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Open Positions List (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-navy">Open Positions</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans mt-0.5">
                  Click on an open position to view the full job description and requirements.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange">
                {openPositions.length} {openPositions.length === 1 ? "Role" : "Roles"} Open
              </span>
            </div>

            <div className="space-y-4">
              {openPositions.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.slug}`}
                  className="group block bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange transition-all duration-300 group-hover:w-2.5" />

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pl-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Hiring Now
                      </span>
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        {job.workplaceType}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-brand-orange transition-colors flex items-center gap-1">
                      View Full Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="pl-2">
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy group-hover:text-brand-orange transition-colors mb-2">
                      {job.title}
                    </h4>

                    <p className="text-xs sm:text-sm font-sans text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {job.shortSummary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-100 text-xs text-slate-500 font-sans">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{job.employmentType.split("/")[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* General Talent Pool Notice */}
            <div className="mt-8 p-5 bg-slate-100/80 rounded-xl border border-slate-200">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-heading font-bold text-sm text-brand-navy">Future Openings & Field Craft Opportunities</h5>
                  <p className="text-xs text-slate-600 font-sans mt-0.5 leading-relaxed">
                    Don&apos;t see your role listed? Commercial painters, foremen, and estimators are always welcome to submit credentials to our general talent database via the online form.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Application Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 sticky lg:top-24">
            <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">Quick Application</h3>
            <p className="text-xs text-slate-500 font-sans mb-6">
              Submit your information directly, or click the position card to review the complete job description first.
            </p>

            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-navy mb-2">Application Received!</h4>
                <p className="text-sm text-slate-600">Our HR team will review your qualifications and reach out shortly.</p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-brand-orange font-semibold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Position of Interest *</label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                  >
                    {openPositions.map((p) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    <option value="General Talent Pool / Future Openings">
                      General Talent Pool / Future Openings
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Link to Resume / Portfolio
                  </label>
                  <input
                    type="url"
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    placeholder="Google Drive, Portfolio, LinkedIn, etc."
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Experience Summary</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                    placeholder="Briefly describe your experience and qualifications..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-orange text-white font-semibold text-sm rounded-lg hover:bg-brand-orange-hover transition-colors flex items-center justify-center disabled:opacity-70 shadow-sm"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}