"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- IMPORT ASSETS (Pastikan path sesuai) ---
import PetirImg from '../assets/petir.png';
import JoinUsGif from '../assets/joinus.gif';
import WeatherImg from '../assets/weatheer.gif';

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 }),
};

const CardCarousel = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative group/carousel flex items-center justify-center w-full h-full overflow-hidden rounded-xl bg-black/20">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

// Data Projects dengan tambahan field 'challenge'
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap.',
    challenge: 'Mengintegrasikan sistem pembayaran pihak ketiga yang kompleks.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: [PetirImg, JoinUsGif, WeatherImg],
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#', demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online interaktif.',
    challenge: 'Optimasi performa streaming video untuk ribuan pengguna.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    image: [JoinUsGif, PetirImg, WeatherImg],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#', demo: '#',
  },
  // ... tambahkan proyek lainnya dengan pola yang sama
];

export default function ProjectsSection() {
  return (
    // Background Navy Tua yang konsisten
    <section id="projects" className="py-20 md:py-32 bg-[#050a14] text-slate-100">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <span className="text-blue-400 font-medium mb-2 block uppercase tracking-widest text-sm">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Projects & Karya</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-6 bg-[#0a1120] border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <div className={`aspect-video rounded-xl mb-4 bg-gradient-to-br ${project.color}`}>
                <CardCarousel images={project.image} />
              </div>
              
              <div className="space-y-4 flex-grow">
                <h3 className="font-bold text-xl text-white">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.description}</p>
                
                {/* Bagian Challenge */}
                <div className="p-3 bg-blue-950/30 rounded-lg border border-blue-500/20 flex gap-2 items-start">
                  <Target className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-xs text-blue-200">
                    <span className="font-bold block uppercase text-[10px] mb-0.5">Challenge:</span>
                    {project.challenge}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-slate-800 text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-6 mt-auto">
                <Button variant="outline" size="sm" className="rounded-full flex-1 border-slate-700 hover:bg-slate-800">
                  <Github className="h-4 w-4 mr-2" /> Code
                </Button>
                <Button size="sm" className="rounded-full flex-1 bg-blue-600 hover:bg-blue-500">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}