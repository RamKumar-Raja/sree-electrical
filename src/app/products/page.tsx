import { ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

const productsList = [
  {
    image: "/vcb_panels.png",
    badge: "IEC Type-Tested",
    title: "11kV & 33kV VCB Panels",
    desc: "ISO 9001:2015 certified indoor and outdoor Vacuum Circuit Breaker panels for robust power distribution in HT networks. Available for both 11kV and 33kV class installations.",
  },
  {
    image: "/db_boxes.png",
    badge: "ISI Marked",
    title: "DB Boxes",
    desc: "High-quality Distribution Boxes for safe and organized electrical power distribution in commercial and industrial premises. Custom sizes and configurations available.",
  },
  {
    image: "/cable_trays.png",
    badge: "Hot-Dip Galvanized",
    title: "Cable Trays",
    desc: "Durable ladder-type, perforated GI, and stainless-steel cable trays for efficient, organized cable routing. Available in standard and custom lengths.",
  },
  {
    image: "/busbar_processor.png",
    badge: "Site-Ready",
    title: "Mobile Busbar Processors",
    desc: "Versatile mobile processing units for working with aluminum and copper busbars directly on-site. Significantly reduces fabrication time.",
  },
  {
    image: "/electrical_spares.png",
    badge: "Authorised Dealer",
    title: "Genuine Components & Spares",
    desc: "Genuine replacement parts and components for Schneider Electric, Crompton Greaves, and GE T&D equipment. Verified authentic.",
  },
  {
    image: "/substation_scada.png",
    badge: "Industry 4.0 Ready",
    title: "Automation & IoT Monitoring",
    desc: "Real-time tracking and remote control systems for substations using advanced IoT sensors, SCADA integration, and cloud-based dashboards.",
  },
];

const certBadges = ["IEC Type-Tested", "ISI Marked"];

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="inline-block py-1.5 px-3 rounded-full bg-brand-bg/10 text-brand-primary font-bold text-sm tracking-wider uppercase mb-6 border border-brand-bg/50 shadow-sm">
              High-Quality Equipment
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Reliable Products,{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary">
                Stringent Quality.
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              We manufacture and supply a wide range of reliable electrical products, meeting the highest industry safety and operational standards.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {productsList.map((product, i) => (
            <StaggerItem key={i}>
              <div className="group flex flex-col items-center">
                <div className="w-full aspect-[4/3] bg-slate-50 rounded-[2rem] mb-8 flex flex-col items-center justify-center border border-slate-100 group-hover:border-brand-bg/50 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover z-0 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                </div>

                <div className="text-center px-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-md mb-4 border border-slate-200 shadow-sm">
                    {certBadges.includes(product.badge)
                      ? <ShieldCheck size={14} className="text-emerald-500" />
                      : <CheckCircle2 size={14} className="text-brand-primary" />
                    }
                    {product.badge}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    {product.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed font-medium">
                    {product.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </main>
  );
}
