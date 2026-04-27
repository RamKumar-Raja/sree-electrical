"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "Years of Expertise" },
  { value: 765, suffix: "kV", label: "Max Voltage Class" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Global Brand Partnerships" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-14 bg-[#060c18] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`px-6 py-6 text-center relative ${
                index < stats.length - 1 ? "border-r border-white/5" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-brand-primary drop-shadow-[0_0_20px_rgba(155,244,103,0.35)]">
                {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-400 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
