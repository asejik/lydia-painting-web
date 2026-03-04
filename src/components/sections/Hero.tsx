"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-200">

      {/* Enhanced Ambient Motion Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orange Paint Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-brand-orange/30 rounded-full blur-[100px]"
        />
        {/* Navy Paint Blob */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-brand-navy/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">

        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 text-sm font-medium font-sans text-brand-navy shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
            Veteran & Minority-Owned Gold Standard
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-brand-navy leading-[1.1] mb-8 uppercase"
        >
          Painting Our <br className="hidden md:block" />
          <span className="text-brand-orange">Client&apos;s Envisioned Future.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-sans text-slate-700 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Pioneering transformative commercial painting across Texas. Fusing unmatched craftsmanship with a deep-rooted commitment to community, diversity, and quality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-md hover:shadow-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-brand-navy transition-all duration-200 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
          >
            View Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}