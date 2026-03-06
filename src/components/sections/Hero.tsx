"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy flex items-center min-h-[90vh]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Modern architectural home exterior at dusk"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 z-0 opacity-95"
        style={{
          background: "linear-gradient(135deg, rgba(10,31,53,0.95) 0%, rgba(10,31,53,0.7) 50%, rgba(242,110,34,0.15) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center w-full">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-sans font-semibold text-slate-100 uppercase tracking-wider truncate">
            Veteran & Minority-Owned Gold Standard
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 text-white uppercase w-full"
        >
          Painting Our <br className="hidden md:block" />
          <span className="text-brand-orange">Client&apos;s Envisioned</span> <br className="hidden md:block" />
          <span className="text-brand-orange">Future.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl font-sans text-slate-300 max-w-2xl text-balance leading-relaxed mb-10 px-2 sm:px-0"
        >
          Pioneering transformative commercial painting across Texas. Fusing unmatched craftsmanship with a deep-rooted commitment to community, diversity, and quality.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}