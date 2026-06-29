"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, LayoutGrid, FileText } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Lydia Painting Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="ml-3 px-2.5 py-1 rounded-md bg-brand-navy/5 text-brand-navy text-xs font-semibold uppercase tracking-wider hidden sm:block">
              Admin Portal
            </span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6 mr-4 border-r border-slate-200 pr-6">
              <Link
                href="/admin"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  pathname === "/admin" ? "text-brand-orange" : "text-slate-600 hover:text-brand-navy"
                }`}
              >
                <LayoutGrid className="w-4 h-4" /> Case Studies
              </Link>
              <Link
                href="/admin/blog"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  pathname?.includes("/admin/blog") ? "text-brand-orange" : "text-slate-600 hover:text-brand-navy"
                }`}
              >
                <FileText className="w-4 h-4" /> Blog Posts
              </Link>
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center text-sm font-sans font-medium text-slate-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex items-center justify-around border-t border-slate-100 py-3">
          <Link
            href="/admin"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              pathname === "/admin" ? "text-brand-orange" : "text-slate-600"
            }`}
          >
            <LayoutGrid className="w-4 h-4" /> Case Studies
          </Link>
          <Link
            href="/admin/blog"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              pathname?.includes("/admin/blog") ? "text-brand-orange" : "text-slate-600"
            }`}
          >
            <FileText className="w-4 h-4" /> Blog Posts
          </Link>
        </div>
      </div>
    </header>
  );
}
