import { Wrench, ShieldAlert, Activity, Users, Radio, Zap, Clock, Code, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const servicesList = [
  {
    num: "01",
    icon: Zap,
    title: "HT & EHV Switchyards / Substations (up to 765kV)",
    desc: "Detailed engineering, erection, testing, and commissioning for high-voltage systems. We handle projects from 11kV distribution level all the way up to 765kV EHV class.",
  },
  {
    num: "02",
    icon: ShieldAlert,
    title: "Protection Refurbishment",
    desc: "Modernizing outdated electromechanical relays with digital protection systems. Enhances system safety, reduces false trips, and extends equipment life.",
  },
  {
    num: "03",
    icon: Activity,
    title: "Substation Automation",
    desc: "Implementing advanced IoT and SCADA automation solutions for efficient substation control, monitoring, and remote operation from any location.",
  },
  {
    num: "04",
    icon: Users,
    title: "Project Consultancy",
    desc: "Comprehensive electrical project guidance from inception to completion — design, budgeting, vendor selection, and execution oversight under one expert team.",
  },
  {
    num: "05",
    icon: Clock,
    title: "Annual Maintenance Contracts",
    desc: "Scheduled preventive maintenance and rapid-response support to keep your electrical infrastructure performing at peak reliability all year round.",
  },
  {
    num: "06",
    icon: Radio,
    title: "24/7 Operation & Maintenance",
    desc: "Round-the-clock operational support for critical electrical infrastructure. Our teams are on standby for emergencies across all project sites.",
  },
  {
    num: "07",
    icon: Code,
    title: "Startup Training Programs",
    desc: "Hands-on engineer training on a purpose-built mock substation facility — practical, real-world, job-ready training for fresh graduates and upskilling professionals.",
  },
  {
    num: "08",
    icon: Wrench,
    title: "Electrical Installations",
    desc: "Professional installation of HT/LT electrical systems for residential, commercial, and heavy industrial clients across South India.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-[#fafbfc] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">

        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white font-bold text-xs tracking-widest uppercase mb-6 shadow-xl">
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              End-to-end Solutions for{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Critical Infrastructure.
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to your needs, from initial design to ongoing maintenance.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-20">
          {servicesList.map((service, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white rounded-3xl p-8 xl:p-10 border border-slate-100 hover:border-brand-primary/40 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(155,244,103,0.15)] hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bg/10 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute -bottom-6 -right-6 text-[120px] font-black leading-none text-slate-50 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none select-none">
                  {service.num}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-brand-bg/10 text-brand-primary flex items-center justify-center mb-8 border border-brand-bg/50 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-500 shrink-0">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-dark transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-medium mb-8 flex-1">
                  {service.desc}
                </p>

                <div className="mt-auto flex items-center text-sm font-bold text-brand-primary uppercase tracking-wider group/btn cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-2" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </main>
  );
}
