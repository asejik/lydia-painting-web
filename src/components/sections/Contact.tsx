"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      setError("Routing configuration is missing. Please contact support directly via email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

      // Reset the success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (err) {
      console.error("Submission error:", err);
      setError("There was a problem sending your request. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden z-10 border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-lg"
          >
            <h2 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6 leading-tight">Ready to transform your space?</h3>
            <p className="font-sans text-slate-600 mb-10 leading-relaxed">
              Reach out to our team of experts for a comprehensive consultation and quote. We are ready to bring your envisioned future to life with unmatched precision and quality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-navy text-lg">Office Location</h4>
                  <p className="font-sans text-sm text-slate-600">12015 Hesse Drive<br/>Farmers Branch, TX 75234</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-navy text-lg">Phone</h4>
                  <p className="font-sans text-sm text-slate-600">214-244-4423<br/>Mon - Fri : 9am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-navy text-lg">Email</h4>
                  <p className="font-sans text-sm text-slate-600">Info@lydiapainting.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-brand-navy mb-2">Request Received</h4>
                <p className="font-sans text-slate-600">
                  Thank you for reaching out to Lydia Painting. One of our experts will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-red-700">{error}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="font-sans text-sm font-medium text-slate-700">First Name <span className="text-brand-orange">*</span></label>
                    <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="font-sans text-sm font-medium text-slate-700">Last Name <span className="text-brand-orange">*</span></label>
                    <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-sans text-sm font-medium text-slate-700">Email Address <span className="text-brand-orange">*</span></label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-sans text-sm font-medium text-slate-700">Phone Number <span className="text-brand-orange">*</span></label>
                    <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="font-sans text-sm font-medium text-slate-700">Service of Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800 appearance-none">
                    <option value="">Select a service...</option>
                    <option value="Interior/Exterior Painting">Interior/Exterior Painting</option>
                    <option value="Epoxy Floor Systems">Epoxy Floor Systems</option>
                    <option value="Power Washing & Caulking">Power Washing & Caulking</option>
                    <option value="Concrete Repair">Concrete Repair</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-sm font-medium text-slate-700">Project Details <span className="text-brand-orange">*</span></label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow font-sans text-slate-800 resize-none" placeholder="Tell us about your envisioned future..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-md disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}