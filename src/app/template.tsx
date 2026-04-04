"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const sleekEase = [0.16, 1, 0.3, 1] as const; // Electrax cubic-bezier
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ease: sleekEase, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
