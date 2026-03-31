import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="w-24 h-24 bg-brand-bg/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-primary shadow-inner">
            <Construction size={40} className="animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Projects Showcase
        </h1>
        
        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
          We are currently curating our extensive portfolio of over 500+ successful executions up to 765kV. This section will be available soon.
        </p>
        
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl group"
        >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
        </Link>
      </div>
    </main>
  );
}
