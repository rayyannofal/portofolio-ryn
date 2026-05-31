"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Map, Users, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const subjects = [
    { icon: BookOpen, title: 'Sejarah', level: 95, content: 'Mempelajari Sejarah Dunia, Sejarah Indonesia, dan Politik Global dengan pemahaman mendalam.' },
    { icon: Map, title: 'Geografi', level: 92, content: 'Menganalisis Geopolitik, Demografi, dan pengelolaan Sumber Daya Alam secara berkelanjutan.' },
    { icon: Users, title: 'Sosial', level: 95, content: 'Mendalami Sosiologi, Ekonomi Makro, dan Antropologi untuk memahami dinamika masyarakat.' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#050a14] overflow-hidden text-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-2 block uppercase tracking-widest text-sm">Kurikulum</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Bidang Studi IPS
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {subjects.map((item, index) => (
            <motion.div 
              key={index}
              className="border border-slate-800 rounded-xl overflow-hidden bg-[#0a1120]/50"
              initial={false}
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="text-blue-400 w-6 h-6" />
                  <span className="font-display font-bold text-lg md:text-xl text-white">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Persentase ditampilkan di sini */}
                  <span className="font-bold text-blue-400 text-lg">{item.level}%</span>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}