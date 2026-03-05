"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-brand-navy pt-32 pb-20 relative overflow-hidden border-b border-brand-orange/20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-50%] right-[-10%] w-[50vw] h-[50vw] bg-brand-orange/20 rounded-full blur-[100px]"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg font-sans text-slate-300 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}