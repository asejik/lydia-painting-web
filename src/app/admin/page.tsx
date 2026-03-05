"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { LogOut, Plus, LayoutGrid } from "lucide-react";

export default function AdminDashboard() {
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
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Dashboard Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl tracking-tight text-brand-navy uppercase">
                Lydia<span className="text-brand-orange ml-1">Painting</span>
              </span>
              <span className="ml-3 px-2.5 py-1 rounded-md bg-brand-navy/5 text-brand-navy text-xs font-semibold uppercase tracking-wider hidden sm:block">
                Admin Portal
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center text-sm font-sans font-medium text-slate-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* Page Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-brand-navy">Project Portfolio Manager</h1>
            <p className="text-sm font-sans text-slate-500 mt-1">Manage the projects displayed on the public website.</p>
          </div>

          <button className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add New Project
          </button>
        </div>

        {/* Placeholder for Data Table / Empty State */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col items-center justify-center py-24">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
            <LayoutGrid className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-brand-navy mb-1">No projects loaded yet</h3>
          <p className="text-sm font-sans text-slate-500 max-w-sm text-center mb-6">
            We will connect Firebase Firestore here in the next step to fetch, add, edit, and delete projects.
          </p>
        </div>

      </main>
    </div>
  );
}