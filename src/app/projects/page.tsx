import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CircuitBackground } from "@/components/CircuitBackground";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center relative">
      <CircuitBackground />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-2xl">
        <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-primary border border-brand-primary/20">
            <Construction size={40} className="animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Projects Showcase
        </h1>

        <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
          We are currently curating our extensive portfolio of over 500+ successful executions up to 765kV. This section will be available soon.
        </p>

        <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-brand-primary hover:border-brand-primary hover:text-black text-white font-bold rounded-xl transition-all shadow-lg group"
        >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
        </Link>
      </div>
    </main>
  );
}
