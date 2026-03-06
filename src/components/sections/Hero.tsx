"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy flex items-center min-h-[90vh]">

      {/* Background Image & Heavy Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
            src="/hero-bg.png"
            alt="Modern architectural home exterior at dusk"
            className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text pops and matches brand colors */}
        <div className="absolute inset-0 bg-brand-navy/85" />
      </div>

      {/* Ambient Motion Blob - retained for subtle brand warmth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-50%] left-[-10%] w-[50vw] h-[50vw] bg-brand-orange/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-xs font-sans font-semibold text-slate-100 uppercase tracking-wider">
            Veteran & Minority-Owned Gold Standard
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 text-white uppercase"
        >
          Painting Our <br className="hidden md:block" />
          <span className="text-brand-orange">Client&apos;s Envisioned</span><br className="hidden md:block" />
          <span className="text-brand-orange">Future.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl font-sans text-slate-300 max-w-2xl text-balance leading-relaxed mb-10"
        >
          Pioneering transformative commercial painting across Texas. Fusing unmatched craftsmanship with a deep-rooted commitment to community, diversity, and quality.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}