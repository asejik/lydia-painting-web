import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "react-quill-new/dist/quill.snow.css";

export const revalidate = 60; // Revalidate every 60 seconds

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featuredImage?: string;
  readingTime?: string;
  createdAt: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, "blogPosts"), where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    
    const doc = snapshot.docs[0];
    const data = doc.data() as BlogPost;
    return {
      ...data,
      id: doc.id,
      createdAt: doc.data().createdAt?.toDate().toISOString() || new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex-grow py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-brand-orange hover:text-brand-orange-hover mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500 font-sans text-sm mb-6">
            <span>Published on {format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
          </div>

          {post.description && (
            <p className="text-lg text-slate-700 font-sans mb-4 leading-relaxed">
              <strong className="text-brand-navy font-semibold">Description:</strong> {post.description}
            </p>
          )}

          {post.readingTime && (
            <div className="border-b-4 border-brand-orange pb-2 inline-block">
              <p className="text-base text-slate-700 font-sans">
                <strong className="text-brand-navy font-semibold">Reading Time:</strong> {post.readingTime}
              </p>
            </div>
          )}
        </header>

        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-brand-navy prose-a:text-brand-orange hover:prose-a:text-brand-orange-hover prose-img:rounded-xl ql-editor !p-0 whitespace-pre-wrap break-words">
          {parse(post.content)}
        </div>
        
      </div>
    </article>
  );
}
