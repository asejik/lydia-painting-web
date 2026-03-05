"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data: This will be replaced by Firebase Firestore data later
const mockProjects = [
  {
    id: "1",
    name: "Downtown Corporate Center",
    location: "Dallas, TX",
    description: "Full exterior repaint and protective rust encapsulation for a 15-story commercial building.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Luxury Boutique Hotel",
    location: "Fort Worth, TX",
    description: "High-end interior wallcovering installation and low-VOC paint application for 200+ guest rooms.",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Regional Logistics Hub",
    location: "Arlington, TX",
    description: "Epoxy floor systems and safety line striping for a 50,000 sq ft warehouse facility.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3"
            >
              Featured Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight"
            >
              Leaving an indelible mark of quality on every project.
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center font-sans font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors group"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center text-slate-500 text-sm font-sans mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-brand-orange" />
                  {project.location}
                </div>
                <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {project.name}
                </h4>
                <p className="font-sans text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}