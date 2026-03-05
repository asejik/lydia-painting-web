"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If not loading, no user is found, and we are not already on the login page -> Redirect
    if (!loading && !user && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [user, loading, router, pathname]);

  // Show a premium loading state while verifying auth
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-brand-orange animate-spin mb-4" />
        <p className="font-sans text-brand-navy font-medium animate-pulse">Verifying secure access...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {children}
    </div>
  );
}