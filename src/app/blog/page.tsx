import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { format } from "date-fns";
import { FileText, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogPosts() {
  try {
    const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Lydia Painting Blog" 
        description="Insights, tips, and news from industry experts in commercial painting and maintenance." 
      />

      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center py-24">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-brand-navy mb-1">No articles yet</h3>
              <p className="text-sm font-sans text-slate-500 text-center">Check back soon for our latest updates and insights.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {post.featuredImage ? (
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-56 bg-slate-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2 flex justify-between items-center">
                      <span>{format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
                      {post.readingTime && (
                        <span className="text-slate-400 font-normal normal-case">{post.readingTime}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm mb-6 line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    <div className="flex items-center text-brand-orange font-medium text-sm mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
