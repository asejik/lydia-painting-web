"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const competencies = [
  "Full-service interior & exterior",
  "Bar joist ceiling painting",
  "Power washing and Caulking",
  "Wallcovering",
  "Concrete crack repair & polishing",
  "Epoxy floor systems",
  "Institutional low VOC paint",
  "Line striping",
  "Confined space work",
  "Rust encapsulation",
  "Storage silo painting",
  "Sand blasting",
];

export default function Capabilities() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

          {/* Left Column: Mission & Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3">
              Capabilities Statement
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6 leading-tight">
              Masterfully beautifying landmarks from hotels to corporate offices.
            </h3>
            <p className="font-sans text-slate-600 mb-8 leading-relaxed">
              We are a fully licensed and liability-insured commercial and industrial painting company. We challenge ourselves on every project by optimizing schedules, utilizing innovative ideas, and minimizing project duration through our highly proficient team.
            </p>

            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-brand-orange">
                <h4 className="font-heading font-semibold text-brand-navy text-lg mb-2">Licensed & Experienced</h4>
                <p className="font-sans text-sm text-slate-600">Exceptional quality delivered by adequately trained teams using the right equipment and safety protocols.</p>
              </div>
              <div className="pl-4 border-l-2 border-brand-orange">
                <h4 className="font-heading font-semibold text-brand-navy text-lg mb-2">Reliable & Punctual</h4>
                <p className="font-sans text-sm text-slate-600">Due diligence and on-time project completion assurance for HOA&apos;s, restaurants, schools, medical facilities, and more.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Competencies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full -z-10" />

            <h4 className="font-heading font-bold text-2xl text-brand-navy mb-6">Core Competencies</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {competencies.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mr-3 mt-0.5" />
                  <span className="font-sans text-sm font-medium text-slate-700 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}