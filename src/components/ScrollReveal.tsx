"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// The premium cubic-bezier easing heavily used in Webflow (like Electrax)
// It gives that instantly smooth, gliding sensation without bouncing.
const sleekEase = [0.16, 1, 0.3, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  distance?: number;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "",
  distance = 30
}: ScrollRevealProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", ...directions[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: sleekEase }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Reveal for Grid/List items exactly like the Electrax Perks section
export function StaggerReveal({ children, className = "" }: { children: ReactNode, className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1s stagger perfectly mimics the Electrax grid
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: sleekEase }
    }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
