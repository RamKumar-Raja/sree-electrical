"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Activity, ShieldCheck, Zap, Server } from "lucide-react";
import { AnimatedClients } from "@/components/AnimatedClients";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CircuitBackground } from "@/components/CircuitBackground";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";
import Stats from "@/components/stats";

const titleContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const services = [
  { icon: Zap, title: "Substations", desc: "Up to 765kV EHV Class", route: "/services" },
  { icon: ShieldCheck, title: "Protection", desc: "Relay Refurbishments", route: "/services" },
  { icon: Activity, title: "Automation", desc: "SCADA & IoT Systems", route: "/services" },
  { icon: Server, title: "Panels", desc: "11kV / 33kV VCBs", route: "/products" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 justify-center">
        <CircuitBackground />

        <div className="container relative z-20 mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 inline-flex flex-wrap items-center justify-center gap-4 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-brand-primary/20"
            >
              <span className="text-brand-primary font-bold uppercase tracking-[0.15em] text-[11px] md:text-sm">
                ISO 9001:2015 Certified
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 hidden md:block" />
              <span className="text-brand-secondary font-semibold uppercase tracking-wider text-[11px] md:text-xs">
                Est. 1994
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 hidden md:block" />
              <span className="text-brand-secondary font-semibold uppercase tracking-wider text-[11px] md:text-xs">
                Chennai, IN
              </span>
            </motion.div>

            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.1] mb-8 tracking-tighter"
            >
              <motion.span variants={titleWord} className="inline-block">Powering</motion.span>{" "}
              <motion.span variants={titleWord} className="inline-block">Vision</motion.span>{" "}
              <motion.span variants={titleWord} className="inline-block">With</motion.span> <br />
              <motion.span
                variants={titleWord}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"
              >
                Absolute Precision.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light"
            >
              Engineering excellence in HT & EHV electrical systems up to 765kV. From robust detailed design to impeccable commissioning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 mx-auto"
            >
              <MagneticButton>
                <Link
                  href="/services"
                  className="group w-full relative overflow-hidden bg-brand-primary border border-brand-primary hover:bg-brand-bg text-black hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center shadow-[0_0_40px_rgba(155,244,103,0.3)] min-w-[200px]"
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-x-2">Our Solutions</span>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center transition-all group-hover:bg-brand-primary z-10">
                    <ArrowRight size={18} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/assets/sres-company-profile.pdf"
                  target="_blank"
                  className="w-full bg-[#0f1a2e]/50 backdrop-blur-md border border-slate-700/50 hover:bg-[#1a2b4a]/60 hover:border-brand-primary/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center flex items-center justify-center gap-3 min-w-[200px]"
                >
                  <FileText size={20} className="text-brand-primary" />
                  Company Profile
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — dark, seamless from hero */}
      <Stats />

      {/* Services & Clients */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">

          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary/80 mb-4 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                End-to-End Electrical Solutions
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {services.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TiltCard>
                  <Link
                    href={feature.route}
                    className="group flex flex-col h-full p-8 xl:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(155,244,103,0.15)] transition-all duration-300 relative z-30"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black group-hover:border-brand-primary transition-colors text-brand-primary">
                      <feature.icon strokeWidth={1.5} size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 font-medium group-hover:text-brand-primary/80 transition-colors flex items-center gap-2 mt-auto">
                      {feature.desc}
                      <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </p>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <AnimatedClients />
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
