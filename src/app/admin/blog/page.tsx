"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Edit, Trash2, Loader2, Image as ImageIcon, X, UploadCloud, FileText } from "lucide-react";
import Modal from "@/components/ui/Modal";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { format } from "date-fns";

import { useAuth } from "@/hooks/useAuth";
import AdminHeader from "@/components/admin/AdminHeader";

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featuredImage: string;
  readingTime?: string;
  createdAt?: any;
  updatedAt?: any;
}

export default function BlogAdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    readingTime: "",
  });

  // Image State
  const [featuredImage, setFeaturedImage] = useState<string>("");
  const [newFile, setNewFile] = useState<File | null>(null);

  useEffect(() => {
    // Only subscribe to Firestore once the user is confirmed authenticated
    if (authLoading || !user) return;
    const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Firestore snapshot error:", error);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [user, authLoading]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug === generateSlug(prev.title) ? generateSlug(title) : prev.slug
    }));
  };

  const openModal = (post: BlogPost | null = null) => {
    if (post) {
      setCurrentPost(post);
      setFormData({
        title: post.title,
        slug: post.slug,
        description: post.description,
        content: post.content,
        readingTime: post.readingTime || "",
      });
      setFeaturedImage(post.featuredImage || "");
    } else {
      setCurrentPost(null);
      setFormData({
        title: "",
        slug: "",
        description: "",
        content: "",
        readingTime: "",
      });
      setFeaturedImage("");
    }
    setNewFile(null);
    setIsModalOpen(true);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewFile(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setNewFile(null);
    setFeaturedImage("");
  };

  const uploadToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: data,
    });
    const result = await res.json();
    return result.secure_url;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.content) {
      alert("Please fill in all required fields (Title, Slug, Content).");
      return;
    }

    setIsSaving(true);
    try {
      let finalFeaturedUrl = featuredImage;

      if (newFile) {
        finalFeaturedUrl = await uploadToCloudinary(newFile);
      }

      const postData = {
        ...formData,
        featuredImage: finalFeaturedUrl,
        updatedAt: serverTimestamp(),
      };

      if (currentPost?.id) {
        await updateDoc(doc(db, "blogPosts", currentPost.id), postData);
      } else {
        await addDoc(collection(db, "blogPosts"), {
          ...postData,
          createdAt: serverTimestamp(),
        });
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Ensure environment variables are correct.");
    } finally {
      setIsSaving(false);
    }
  };

  const confirmDelete = (post: BlogPost) => {
    setCurrentPost(post);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!currentPost?.id) return;
    setIsSaving(true);
    try {
      await deleteDoc(doc(db, "blogPosts", currentPost.id));
      setIsDeleteModalOpen(false);
      setCurrentPost(null);
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading) {
    return (
      <>
        <AdminHeader />
        <div className="flex-grow flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-brand-orange" />
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-brand-navy">Blog Posts</h1>
          <p className="text-sm font-sans text-slate-500 mt-1">Create and manage content for your blog.</p>
        </div>
        <button onClick={() => openModal()} className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover shadow-sm">
          <Plus className="w-4 h-4 mr-2" /> Add New Post
        </button>
      </div>

      {isLoading ? (
        <div className="py-24 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand-orange" /></div>
      ) : posts.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center py-24">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
            <FileText className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-brand-navy mb-1">No blog posts yet</h3>
          <p className="text-sm font-sans text-slate-500 text-center mb-6">Click "Add New Post" to start writing.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-100 relative group">
                {post.featuredImage ? (
                  <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-12 h-12" />
                  </div>
                )}
                {post.createdAt && (
                  <div className="absolute top-2 right-2 bg-brand-navy/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {format(post.createdAt.toDate(), 'MMM dd, yyyy')}
                  </div>
                )}
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h4 className="font-heading font-bold text-lg text-brand-navy mb-1 line-clamp-2">{post.title}</h4>
                <p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-grow">{post.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 mt-auto">
                  <button onClick={() => openModal(post)} className="flex-1 flex items-center justify-center py-2 text-sm font-medium text-slate-600 hover:text-brand-navy hover:bg-slate-50 rounded-md transition-colors">
                    <Edit className="w-4 h-4 mr-2" /> Edit
                  </button>
                  <button onClick={() => confirmDelete(post)} className="flex-1 flex items-center justify-center py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => !isSaving && setIsModalOpen(false)} title={currentPost ? "Edit Blog Post" : "Add New Blog Post"}>
        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Post Title *</label>
              <input required type="text" value={formData.title} onChange={handleTitleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" placeholder="e.g. Why Surface Preparation Determines Success" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL Slug *</label>
              <input required type="text" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none bg-slate-50 text-slate-600" placeholder="e.g. surface-preparation-success" />
              <p className="text-xs text-slate-500 mt-1">This will be the URL for your post (e.g. /blog/surface-preparation-success)</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description (shown at top of article & lists)</label>
              <textarea rows={2} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none" placeholder="Brief summary of the post..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Reading Time (e.g., 3 minutes)</label>
              <input type="text" value={formData.readingTime} onChange={(e) => setFormData({...formData, readingTime: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" placeholder="e.g. 3 minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Featured Image</label>
              {newFile || featuredImage ? (
                <div className="relative group h-40 rounded-lg overflow-hidden border border-slate-200">
                  <img src={newFile ? URL.createObjectURL(newFile) : featuredImage} alt="Featured" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button type="button" onClick={removeImage} className="p-2 bg-white text-red-500 rounded-full hover:scale-110 transition-transform shadow-sm" title="Remove Image">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="h-32 border-2 border-dashed border-slate-300 hover:border-brand-orange hover:bg-brand-orange/5 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors">
                  <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                  <span className="text-sm font-medium text-slate-600">Upload Cover Image</span>
                  <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
                </label>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Content *</label>
              <RichTextEditor value={formData.content} onChange={(val) => setFormData({...formData, content: val})} />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
            <button type="submit" disabled={isSaving} className="px-5 py-2.5 text-sm font-medium text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg transition-colors disabled:opacity-70 flex items-center">
              {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</> : "Save Post"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => !isSaving && setIsDeleteModalOpen(false)} title="Confirm Deletion">
        <div className="space-y-4">
          <p className="text-slate-600 font-sans">Are you sure you want to permanently delete <strong>{currentPost?.title}</strong>? This action cannot be undone.</p>
          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
            <button onClick={handleDelete} disabled={isSaving} className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-70 flex items-center">
              {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Deleting...</> : "Yes, Delete Post"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
    </>
  );
}
