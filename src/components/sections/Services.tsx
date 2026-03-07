"use client";

import { motion } from "framer-motion";
import { PaintRoller, Building2, Factory, Grid2x2, Ear, Droplets, Leaf, RotateCcw } from "lucide-react";

const services = [
  {
    title: "Interior Commercial Painting",
    description: "High-volume, low-impact painting for offices, retail, and hospitality. We specialize in occupied spaces, ensuring zero disruption to your daily operations.",
    icon: Building2,
  },
  {
    title: "Exterior Commercial Painting",
    description: "Durable, weather-resistant coating systems designed to protect and elevate the curb appeal of large-scale commercial properties and high-rises.",
    icon: PaintRoller,
  },
  {
    title: "Industrial Coatings",
    description: "High-performance protective coatings, rust encapsulation, and chemical-resistant finishes engineered for warehouses, factories, and harsh environments.",
    icon: Factory,
  },
  {
    title: "Drywall & Wall Finishes",
    description: "Complete drywall repair, Level 5 finishing, and specialized commercial wallcovering installation for flawless, architect-approved surfaces.",
    icon: Grid2x2,
  },
  {
    title: "Acoustic Ceilings",
    description: "Acoustic drop ceiling installation and open-deck dryfall painting. We restore and modernize overhead spaces while maintaining fire and safety codes.",
    icon: Ear,
  },
  {
    title: "Epoxy Floor Coatings",
    description: "Industrial-grade epoxy and urethane floor systems. Slip-resistant, seamless, and engineered to withstand heavy machinery and high foot traffic.",
    icon: Droplets,
  },
  {
    title: "Low VOC Institutional Paint",
    description: "Eco-friendly, strict-compliance painting using low/no-VOC materials. Essential for healthcare facilities, schools, and LEED-certified developments.",
    icon: Leaf,
  },
  {
    title: "Repainting & Maintenance Programs",
    description: "Scheduled commercial maintenance painting and touch-up programs to protect your asset's value and avoid costly total-recoats down the line.",
    icon: RotateCcw,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3"
          >
            Core Competencies
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight"
          >
            Commercial & Industrial Painting Solutions
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange group-hover:bg-brand-orange/5 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-navy mb-3">
                  {service.title}
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}