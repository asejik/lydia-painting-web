"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section className="bg-brand-navy py-16 relative overflow-hidden border-t-4 border-brand-orange">
      {/* Background Dot Pattern to match Footer */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Need a commercial painting contractor?
        </h2>
        <p className="text-lg text-slate-400 font-sans mb-10 max-w-2xl mx-auto">
          Partner with a reliable, compliant, and experienced team. We deliver large-scale projects on time and within budget.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/bid-request"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-lg"
          >
            Request a Bid Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg"
          >
            <Mail className="ml-0 mr-2 w-5 h-5" />
            Contact Estimating
          </Link>
        </div>
      </div>
    </section>
  );
}