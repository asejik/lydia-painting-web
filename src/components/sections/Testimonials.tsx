"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-16 h-16 text-brand-orange/20 mx-auto mb-6 rotate-180" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 relative"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-brand-orange text-brand-orange" />
            ))}
          </div>
          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-brand-navy leading-snug mb-8">
            "Lydia Painting consistently delivers high-quality work and meets our aggressive commercial construction schedules without sacrificing safety or precision."
          </h3>
          <div>
            <p className="font-heading font-bold text-lg text-brand-navy">Senior Project Manager</p>
            <p className="font-sans text-brand-orange font-semibold">Top-Tier General Contractor (DFW)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}