"use client";

import { motion } from "framer-motion";

// Make sure the 'src' paths exactly match the filenames you saved in the public/vendors/ folder!
const vendors = [
  { name: "Sherwin-Williams", src: "/vendors/sherwin-williams.png" },
  { name: "PPG", src: "/vendors/ppg.png" },
  { name: "Benjamin Moore", src: "/vendors/benjamin-moore.png" },
  { name: "Behr Professional", src: "/vendors/behr.png" },
  { name: "Tnemec", src: "/vendors/tnemec.jpeg" },
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
              key={vendor.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-28 sm:w-36 md:w-40 flex items-center justify-center"
            >
              <img
                src={vendor.src}
                alt={`${vendor.name} Logo`}
                className="w-full h-auto max-h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}