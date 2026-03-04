import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Slogan */}
        <div className="space-y-4">
          <span className="font-heading font-bold text-2xl tracking-tight text-white">
            LYDIA<span className="text-teal-500">PAINTING</span>
          </span>
          <p className="font-sans text-sm text-slate-400 max-w-sm">
            Envisioning Our Client&apos;s Future. A veteran and minority-owned gold standard commercial painting company.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 font-sans text-sm">
          <h3 className="font-heading font-semibold text-white text-lg">Contact</h3>
          <p>12015 Hesse Drive<br/>Farmers Branch, TX 75234</p>
          <p>Phone: (214) 244-4423</p>
          <p>Email: Info@lydiapainting.com</p>
          <p>Hours: Mon - Fri : 9am to 6pm</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 font-sans text-sm">
          <h3 className="font-heading font-semibold text-white text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-teal-400 transition-colors">Project Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center font-sans text-slate-500">
        &copy; {new Date().getFullYear()} Lydia Painting, LLC. All rights reserved.
      </div>
    </footer>
  );
}