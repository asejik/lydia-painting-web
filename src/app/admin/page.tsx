"use client";

import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { LogOut, Plus, LayoutGrid, Edit, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { Project } from "@/types";

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({ name: "", location: "", description: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    // Real-time listener for projects
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const openModal = (project: Project | null = null) => {
    if (project) {
      setCurrentProject(project);
      setFormData({ name: project.name, location: project.location, description: project.description });
    } else {
      setCurrentProject(null);
      setFormData({ name: "", location: "", description: "" });
    }
    setImageFile(null);
    setIsModalOpen(true);
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
    setIsSaving(true);

    try {
      let imageUrl = currentProject?.imageUrl || "";

      // Upload new image if selected
      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      if (currentProject?.id) {
        // Update
        await updateDoc(doc(db, "projects", currentProject.id), {
          ...formData,
          imageUrl,
        });
      } else {
        // Create
        if (!imageUrl) throw new Error("Image is required for new projects.");
        await addDoc(collection(db, "projects"), {
          ...formData,
          imageUrl,
          createdAt: serverTimestamp(),
        });
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Ensure your image is selected and environment variables are set.");
    } finally {
      setIsSaving(false);
    }
  };

  const confirmDelete = (project: Project) => {
    setCurrentProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!currentProject?.id) return;
    setIsSaving(true);
    try {
      await deleteDoc(doc(db, "projects", currentProject.id));
      setIsDeleteModalOpen(false);
      setCurrentProject(null);
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl tracking-tight text-brand-navy uppercase">
                Lydia<span className="text-brand-orange ml-1">Painting</span>
              </span>
              <span className="ml-3 px-2.5 py-1 rounded-md bg-brand-navy/5 text-brand-navy text-xs font-semibold uppercase tracking-wider hidden sm:block">Admin Portal</span>
            </div>
            <button onClick={handleLogout} className="flex items-center text-sm font-sans font-medium text-slate-600 hover:text-red-600 transition-colors">
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-brand-navy">Project Portfolio Manager</h1>
            <p className="text-sm font-sans text-slate-500 mt-1">Manage the projects displayed on the public website.</p>
          </div>
          <button onClick={() => openModal()} className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-lg hover:bg-brand-orange-hover shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Add New Project
          </button>
        </div>

        {isLoading ? (
          <div className="py-24 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand-orange" /></div>
        ) : projects.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center py-24">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
              <LayoutGrid className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-brand-navy mb-1">No projects loaded yet</h3>
            <p className="text-sm font-sans text-slate-500 text-center mb-6">Click "Add New Project" to populate your portfolio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-bold text-lg text-brand-navy mb-1">{project.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{project.location}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                    <button onClick={() => openModal(project)} className="flex-1 flex items-center justify-center py-2 text-sm font-medium text-slate-600 hover:text-brand-navy hover:bg-slate-50 rounded-md transition-colors">
                      <Edit className="w-4 h-4 mr-2" /> Edit
                    </button>
                    <button onClick={() => confirmDelete(project)} className="flex-1 flex items-center justify-center py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add / Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => !isSaving && setIsModalOpen(false)} title={currentProject ? "Edit Project" : "Add New Project"}>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
            <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" placeholder="Downtown Hotel" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
            <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none" placeholder="Dallas, TX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required rows={3} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none resize-none" placeholder="Details about the work..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">High-Res Image {currentProject && "(Leave empty to keep current)"}</label>
            <input type="file" accept="image/*" required={!currentProject} onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-orange/10 file:text-brand-orange hover:file:bg-brand-orange/20 cursor-pointer" />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
            <button type="submit" disabled={isSaving} className="px-5 py-2.5 text-sm font-medium text-white bg-brand-orange hover:bg-brand-orange-hover rounded-lg transition-colors disabled:opacity-70 flex items-center">
              {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</> : "Save Project"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => !isSaving && setIsDeleteModalOpen(false)} title="Confirm Deletion">
        <div className="space-y-4">
          <p className="text-slate-600 font-sans">Are you sure you want to permanently delete <strong>{currentProject?.name}</strong>? This action cannot be undone.</p>
          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
            <button onClick={handleDelete} disabled={isSaving} className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-70 flex items-center">
              {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Deleting...</> : "Yes, Delete Project"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}