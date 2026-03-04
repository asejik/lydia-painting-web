"use client";

import { motion, Variants } from "framer-motion";
import { Award, Briefcase, Users, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Completed Projects",
    value: "500+",
    icon: Briefcase,
    description: "Across Texas & neighboring states",
  },
  {
    id: 2,
    name: "Client Satisfaction",
    value: "98%",
    icon: Star,
    description: "Consistently exceeding expectations",
  },
  {
    id: 3,
    name: "Ownership",
    value: "Top Tier",
    icon: Users,
    description: "Veteran & Minority-Owned Business",
  },
  {
    id: 4,
    name: "Excellence",
    value: "Awarded",
    icon: Award,
    description: "Texas Sustainable Business Plaque",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
                <stat.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-brand-navy mb-1">
                {stat.value}
              </h3>
              <p className="font-sans font-semibold text-slate-800 text-sm mb-1">
                {stat.name}
              </p>
              <p className="font-sans text-slate-500 text-xs text-balance">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}