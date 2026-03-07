"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Landmark, Factory, Utensils, Hotel } from "lucide-react";

const industries = [
  { name: "Multifamily", icon: Building2 },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Retail Centers", icon: ShoppingBag },
  { name: "Hospitality", icon: Hotel },
  { name: "Education", icon: GraduationCap },
  { name: "Industrial", icon: Factory },
  { name: "Government", icon: Landmark },
  { name: "Restaurants", icon: Utensils },
];

export default function Industries() {
  return (
    <section className="py-24 bg-brand-navy border-t-4 border-brand-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3"
          >
            Markets We Serve
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight"
          >
            Expertise Across Every Commercial Sector
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 hover:border-brand-orange/50 transition-all duration-300 group cursor-default"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-slate-400 group-hover:text-brand-orange transition-colors" />
                <h4 className="font-heading font-bold text-white tracking-wide">{industry.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}