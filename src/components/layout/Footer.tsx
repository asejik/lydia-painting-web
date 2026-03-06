import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy relative overflow-hidden pt-20 pb-10 border-t-4 border-brand-orange">
      {/* Subtle Dot Matrix Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4">
            <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase mb-4 block">
              Lydia<span className="text-brand-orange ml-1">Painting</span>
            </span>
            <p className="font-sans text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Painting Our Client's Envisioned Future. A veteran and minority-owned gold standard commercial painting company dedicated to diversity, community, and unmatched craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 lg:pl-12">
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="font-sans text-sm text-slate-400 hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="font-sans text-sm text-slate-400 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/services" className="font-sans text-sm text-slate-400 hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link href="/projects" className="font-sans text-sm text-slate-400 hover:text-brand-orange transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="font-sans text-sm text-slate-400 hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-orange mr-3 shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-slate-400">12015 Hesse Drive<br />Farmers Branch, TX 75234</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-orange mr-3 shrink-0" />
                <span className="font-sans text-sm text-slate-400">(214) 244-4423</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-orange mr-3 shrink-0" />
                <span className="font-sans text-sm text-slate-400">Info@lydiapainting.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} Lydia Painting Company LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}