"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/rayyannofal/portofolio-ryn", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/nvllryyan", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 transition-colors duration-500"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* FOTO KIRI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <img
              src="/foto akun1.jpg"
              alt="Rayyan"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </motion.div>

          {/* TEXT KANAN */}
          <div className="max-w-xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white"
            >
              hi, i'm <span className="text-blue-500">rayyan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-8 font-medium leading-relaxed"
            >
              Building digital experiences that matter. Passionate about web development and modern design.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 border border-blue-500/20"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white bg-slate-900/50"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* SOSIAL MEDIA */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ARROW DOWN */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-slate-900 border border-slate-800 shadow-md animate-bounce cursor-pointer text-slate-400 hover:text-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}