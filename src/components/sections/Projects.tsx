"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight, Loader2, Image as ImageIcon, Building, Calendar, Maximize, DollarSign } from "lucide-react";
import Link from "next/link";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Project } from "@/types";
import Modal from "@/components/ui/Modal";

interface ProjectsProps {
  limitDisplay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Projects({ limitDisplay }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

        if (limitDisplay) {
          q = query(collection(db, "projects"), orderBy("createdAt", "desc"), limit(limitDisplay));
        }

        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            location: data.location,
            description: data.description,
            gc: data.gc || "",
            size: data.size || "",
            contractValue: data.contractValue || "",
            scope: data.scope || "",
            completionDate: data.completionDate || "",
            challenges: data.challenges || "",
            results: data.results || "",
            featuredImage: data.featuredImage || data.imageUrl || "",
            gallery: data.gallery || (data.imageUrl ? [data.imageUrl] : []),
          };
        }) as Project[];

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [limitDisplay]);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-3"
            >
              Featured Case Studies
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight"
            >
              Leaving an indelible mark of quality on every project.
            </motion.h3>
          </div>

          {limitDisplay && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center font-sans font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors group"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="font-heading font-semibold text-xl text-brand-navy">Portfolio Updating</h4>
            <p className="font-sans text-slate-500 mt-2">We are currently curating our latest projects. Check back soon.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onClick={() => openProjectDetails(project)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden bg-slate-200 shrink-0">
                  <img
                    src={project.featuredImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/30 transition-colors duration-500 flex items-center justify-center">
                     <span className="opacity-0 group-hover:opacity-100 text-white font-sans font-medium tracking-wide transition-opacity duration-300 bg-brand-orange/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                        View Case Study
                     </span>
                  </div>

                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute top-4 right-4 bg-brand-navy/90 text-white text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-sm shadow-md z-10">
                      {project.gallery.length} Images
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center text-slate-500 text-sm font-sans mb-3 gap-y-2">
                    <span className="flex items-center mr-4">
                      <MapPin className="w-4 h-4 mr-1 text-brand-orange" />
                      {project.location}
                    </span>
                    {project.gc && (
                      <span className="flex items-center text-xs bg-slate-100 px-2 py-1 rounded-md">
                        <Building className="w-3 h-3 mr-1 text-slate-400" />
                        {project.gc}
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                    {project.name}
                  </h4>
                  {project.scope ? (
                    <p className="font-sans text-sm text-slate-600 line-clamp-3 leading-relaxed mt-auto">
                      <strong>Scope:</strong> {project.scope}
                    </p>
                  ) : (
                    <p className="font-sans text-sm text-slate-600 line-clamp-3 leading-relaxed mt-auto">
                      {project.description || "No description provided."}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedProject?.name || "Case Study"}
      >
        {selectedProject && (
          <div className="space-y-8 pb-2">

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Location</span>
                <span className="text-sm font-medium text-brand-navy">{selectedProject.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Building className="w-3 h-3"/> Client / GC</span>
                <span className="text-sm font-medium text-brand-navy">{selectedProject.gc || "N/A"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Maximize className="w-3 h-3"/> Size</span>
                <span className="text-sm font-medium text-brand-navy">{selectedProject.size || "N/A"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3 h-3"/> Completed</span>
                <span className="text-sm font-medium text-brand-navy">{selectedProject.completionDate || "N/A"}</span>
              </div>
            </div>

            {/* Detailed Content */}
            <div className="space-y-6">
              {selectedProject.scope && (
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-2">Scope of Work</h4>
                  <p className="font-sans text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedProject.scope}</p>
                </div>
              )}
              {selectedProject.challenges && (
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-2">Project Challenges</h4>
                  <p className="font-sans text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedProject.challenges}</p>
                </div>
              )}
              {selectedProject.results && (
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-2">Results Delivered</h4>
                  <p className="font-sans text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedProject.results}</p>
                </div>
              )}
              {selectedProject.description && !selectedProject.scope && !selectedProject.challenges && (
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-wider text-brand-orange uppercase mb-2">Project Overview</h4>
                  <p className="font-sans text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedProject.description}</p>
                </div>
              )}
            </div>

            {/* Gallery */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-sm font-sans font-bold tracking-wider text-slate-400 uppercase mb-4">
                  Project Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.gallery.map((img, idx) => (
                    <a
                      key={idx}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100 group shadow-sm hover:shadow-md transition-shadow cursor-pointer block"
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.name} - Gallery Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

    </section>
  );
}