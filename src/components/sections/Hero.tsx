"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HardHat, Award } from "lucide-react";

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

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold text-slate-100 uppercase tracking-wider">Licensed & Insured</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <HardHat className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold text-slate-100 uppercase tracking-wider">OSHA Compliant</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Award className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold text-slate-100 uppercase tracking-wider">MBE / HUB Certified</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 text-white uppercase w-full"
        >
          Commercial & Industrial <br className="hidden md:block" />
          <span className="text-brand-orange">Painting Contractor</span> <br className="hidden md:block" />
          Serving Dallas-Fort Worth
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl font-sans text-slate-300 max-w-3xl text-balance leading-relaxed mb-10 px-2 sm:px-0"
        >
          Licensed, insured, veteran- and minority-owned contractor delivering large-scale commercial painting, coatings, and wall finishing for general contractors and developers.
        </motion.p>

        {/* 3 Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-4 sm:px-0"
        >
          <Link
            href="/bid-request"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-lg"
          >
            Request a Bid
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 transition-all duration-200 bg-transparent border-2 border-slate-500/50 rounded-lg hover:border-brand-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
          >
            Contact Estimating
          </Link>
        </motion.div>
      </div>
    </section>
  );
}