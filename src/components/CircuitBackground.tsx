"use client";

import { motion } from "framer-motion";

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#060c18] z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-dark/10 via-[#060c18]/80 to-[#060c18] z-10" />
      <svg className="absolute inset-0 w-full h-full opacity-30 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(155, 244, 103, 0.1)" strokeWidth="1"/>
            <circle cx="100" cy="100" r="2" fill="rgba(155, 244, 103, 0.3)"/>
            <circle cx="0" cy="0" r="2" fill="rgba(155, 244, 103, 0.3)"/>
            <path d="M0 50 H 50 V 100" fill="none" stroke="rgba(155, 244, 103, 0.1)" strokeWidth="1"/>
            <circle cx="50" cy="100" r="1.5" fill="rgba(245, 158, 11, 0.3)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      </svg>
      {/* Animated glowing dots traveling on lines */}
      <motion.div
        className="absolute top-[25%] left-0 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_15px_4px_rgba(155,244,103,0.5)] z-0"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[75%] left-0 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_15px_4px_rgba(155,244,103,0.5)] z-0"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 4 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-0 w-1.5 h-1.5 rounded-full bg-brand-secondary shadow-[0_0_15px_4px_rgba(245,158,11,0.5)] z-0"
        animate={{ x: ["0vw", "-100vw"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div
        className="absolute top-0 left-[40%] w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_15px_4px_rgba(155,244,103,0.5)] z-0"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
      />
      <motion.div
        className="absolute bottom-0 left-[80%] w-1.5 h-1.5 rounded-full bg-brand-secondary shadow-[0_0_15px_4px_rgba(245,158,11,0.5)] z-0"
        animate={{ y: ["0vh", "-100vh"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </div>
  );
}
