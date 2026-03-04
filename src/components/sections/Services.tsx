"use client";

import { motion, Variants } from "framer-motion";
import {
  Paintbrush, Droplets, Layers, ArrowUpSquare,
  Wrench, Sparkles, Wind, Shield,
  AlignJustify, Minimize, Box, Leaf
} from "lucide-react";

const services = [
  { name: "Interior & Exterior Painting", icon: Paintbrush, desc: "Comprehensive full-service application for commercial spaces." },
  { name: "Power Washing & Caulking", icon: Droplets, desc: "Surface preparation and weatherproofing for lasting durability." },
  { name: "Wallcovering", icon: Layers, desc: "Professional installation of commercial-grade vinyl and textiles." },
  { name: "Bar Joist Ceiling Painting", icon: ArrowUpSquare, desc: "Exposed ceiling treatments to elevate industrial aesthetics." },
  { name: "Concrete Repair & Polishing", icon: Wrench, desc: "Restoring and refining concrete floors to a brilliant finish." },
  { name: "Epoxy Floor Systems", icon: Sparkles, desc: "High-performance, seamless flooring for heavy-traffic areas." },
  { name: "Institutional Low VOC Paint", icon: Leaf, desc: "Eco-friendly, low-emission applications for sensitive environments." },
  { name: "Line Striping", icon: AlignJustify, desc: "Precision markings for parking lots and warehouse safety zones." },
  { name: "Confined Space Work", icon: Minimize, desc: "Certified and safely executed painting in restricted environments." },
  { name: "Rust Encapsulation", icon: Shield, desc: "Advanced coatings to halt corrosion and protect metal structures." },
  { name: "Storage Silo Painting", icon: Box, desc: "Large-scale exterior coatings for agricultural and industrial silos." },
  { name: "Sand Blasting", icon: Wind, desc: "Abrasive blasting for heavy-duty surface prep and cleaning." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6 leading-tight"
          >
            Comprehensive Commercial Painting Solutions
          </motion.h3>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/5"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:border-brand-orange/50 transition-colors shadow-sm">
                <service.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-orange transition-colors duration-300" />
              </div>
              <h4 className="font-heading font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-orange transition-colors">
                {service.name}
              </h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}