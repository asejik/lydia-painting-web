"use client";

import { motion } from "framer-motion";

const vendors = [
  "Sherwin-Williams",
  "PPG",
  "Benjamin Moore",
  "Behr Professional",
  "Tnemec",
];

export default function Vendors() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8"
        >
          Lydia Painting works with industry-leading coating manufacturers to ensure durability and compliance with commercial specifications.
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl sm:text-2xl font-heading font-black text-slate-300 uppercase tracking-tighter"
            >
              {vendor}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}