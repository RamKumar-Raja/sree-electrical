import Link from "next/link";
import { FileText, ArrowRight, Activity, ShieldCheck, Zap, Server } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 justify-center">
        <div className="absolute inset-0 z-0 bg-[#060c18] overflow-hidden">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-dark/10 via-[#060c18]/80 to-[#060c18] z-10" />
          <svg className="absolute inset-0 h-full w-full stroke-brand-dark/10 opacity-60 z-0" aria-hidden="true" fill="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M.5 40V.5H40" vectorEffect="non-scaling-stroke"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)"></rect>
          </svg>
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
            
            <div className="mb-10 inline-flex flex-wrap items-center justify-center gap-4 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-brand-primary/20">
              <span className="text-brand-primary font-bold uppercase tracking-[0.15em] text-[11px] md:text-sm shadow-brand-primary/50 drop-shadow-md">
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
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Powering Vision With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-sm filter">
                Absolute Precision.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
              Engineering excellence in HT & EHV electrical systems up to 765kV. From robust detailed design to impeccable commissioning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mx-auto">
              <Link href="/services" className="group relative overflow-hidden bg-brand-primary border border-brand-primary hover:bg-brand-bg text-black hover:text-white pl-8 pr-16 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center shadow-[0_0_40px_rgba(155,244,103,0.3)]">
                <span className="relative z-10 transition-transform group-hover:-translate-x-1">Our Solutions</span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-primary z-10">
                  <ArrowRight size={18} className="text-black group-hover:text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              </Link>

              <a href="/assets/sres-company-profile.pdf" target="_blank" className="bg-[#0f1a2e]/50 backdrop-blur-md border border-slate-700/50 hover:bg-[#1a2b4a]/60 hover:border-brand-primary/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center flex items-center justify-center gap-3">
                <FileText size={20} className="text-brand-primary" />
                Company Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Quick Links */}
      <section className="bg-white py-24 relative z-20 -mt-10 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              { icon: Zap, title: "Substations", desc: "Up to 765kV EHV Class", route: "/services" },
              { icon: ShieldCheck, title: "Protection", desc: "Relay Refurbishments", route: "/services" },
              { icon: Activity, title: "Automation", desc: "SCADA & IoT Systems", route: "/services" },
              { icon: Server, title: "Panels", desc: "11kV / 33kV VCBs", route: "/products" },
            ].map((feature, i) => (
              <Link key={i} href={feature.route} className="group p-8 xl:p-10 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black group-hover:border-brand-primary transition-colors text-brand-dark">
                  <feature.icon strokeWidth={1.5} size={32} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-brand-dark transition-colors">{feature.title}</h3>
                <p className="text-gray-500 font-medium group-hover:text-brand-dark/80 transition-colors flex items-center gap-2">
                  {feature.desc} 
                  <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-32 mb-10 text-center">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-12">Trusted by the titans of industry</h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale">
              <div className="text-3xl font-black font-serif italic tracking-tighter text-slate-900">ISRO</div>
              <div className="text-xl font-black uppercase tracking-tight text-slate-800 border-l-[6px] border-slate-900 pl-4 py-1 leading-tight">Airport Authority<br/>of India</div>
              <div className="text-4xl font-black uppercase text-slate-900 tracking-tighter">JSW</div>
              <div className="text-2xl font-light tracking-wide text-slate-800">Saint-Gobain</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
