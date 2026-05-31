"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react"; // Kita pakai ikon hati!

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pink-50 dark:bg-zinc-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 0.8 
        }}
        className="flex flex-col items-center gap-4"
      >
        <div className="p-4 bg-white dark:bg-zinc-900 rounded-full shadow-lg border border-pink-200">
           <Heart className="h-8 w-8 text-pink-500 fill-pink-500" />
        </div>
        <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">
          Mahira's Space
        </span>
      </motion.div>
    </motion.div>
  );
}