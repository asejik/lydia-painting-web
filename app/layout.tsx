import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Configure highly optimized, self-hosted fonts via Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lydia Painting | Commercial Painting Excellence",
  description: "A gold standard commercial painting company serving the Dallas-Fort Worth metroplex and beyond. Veteran and minority-owned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col min-h-screen`}
      >
        {/* We will inject Header here in Step 4 */}
        <main className="flex-grow">
          {children}
        </main>
        {/* We will inject Footer here in Step 4 */}
      </body>
    </html>
  );
}