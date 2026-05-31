"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Trophy, Gamepad2, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Trophy, value: '2009', label: 'Tahun Lahir' },
    { icon: Gamepad2, value: 'MAN 1', label: 'Sekolah' },
  ];

  const accordionData = [
    {
      title: "Siapa Saya?",
      content: "Halo, aku Muhammad Rayyan Nofal. Lahir pada 14 Agustus 2009 dan saat ini sedang menempuh pendidikan dengan penuh semangat di MAN 1 Banda Aceh, kelas 10."
    },
    {
      title: "Hobi & Minat",
      content: "Aku adalah pribadi yang aktif dan senang mengembangkan kemampuan diri. Badminton adalah hobiku karena olahraga ini melatih ketangkasan, kedisiplinan, dan semangat pantang menyerah. Selain itu, saat memiliki waktu luang, aku juga senang bermain PS (PlayStation) sebagai sarana hiburan dan melepas penat setelah belajar."
    },
    {
      title: "Prinsip Hidup",
      content: "Bagiku, kesuksesan tidak datang secara instan, tetapi melalui kerja keras, disiplin, dan kemauan untuk terus belajar. Oleh karena itu, aku selalu berusaha memanfaatkan setiap kesempatan untuk berkembang dan menjadi pribadi yang lebih baik setiap harinya. 🏸🎮✨"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-950 overflow-hidden text-slate-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-2 block uppercase tracking-widest text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl relative z-10 flex items-center justify-center"
              >
                <span className="text-9xl">🏸🎮</span>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -right-6 p-6 bg-slate-800 rounded-2xl shadow-xl z-20 border border-blue-500/30 backdrop-blur-md"
              >
                <p className="font-display font-bold text-2xl text-blue-400">Rayyan</p>
                <p className="text-xs font-medium text-slate-400 uppercase">Student Life</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Accordion & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50"
                  initial={false}
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
                  >
                    <span className="font-display font-bold text-lg md:text-xl text-white">
                      {item.title}
                    </span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-0 text-slate-400 leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center"
                >
                  <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <p className="font-display text-xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}