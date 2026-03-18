"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 30, suffix: "+", label: "Years of expertise" },
    { value: 765, suffix: "kV", label: "Max voltage class" },
    { value: 500, suffix: "+", label: "Projects delivered" },
    { value: 3, suffix: "", label: "Global brand partnerships" },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-blue-500/30">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="px-4 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-blue-100 font-medium tracking-wide text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
