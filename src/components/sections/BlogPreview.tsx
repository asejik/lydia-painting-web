import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { format } from "date-fns";
import { FileText, ArrowRight } from "lucide-react";

async function getRecentBlogPosts() {
  try {
    const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"), limit(3));
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
    console.error("Error fetching recent blog posts:", error);
    return [];
  }
}

export default async function BlogPreview() {
  const posts = await getRecentBlogPosts();

  if (posts.length === 0) {
    return null; // Don't show the section if there are no posts yet
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] -mt-32 -mr-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy/5 rounded-full blur-[100px] -mb-40 -ml-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold tracking-wide uppercase mb-6">
            <FileText className="w-4 h-4" />
            <span>Latest News</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
            Insights & <span className="text-brand-orange">Updates</span>
          </h2>
          <p className="text-lg font-sans text-slate-600">
            Read our latest articles on commercial painting, maintenance, and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              {post.featuredImage ? (
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              ) : (
                <div className="h-56 bg-slate-200 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-400" />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col bg-white">
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

        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-brand-navy hover:bg-brand-orange transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg group">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
