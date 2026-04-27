import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CircuitBackground } from "@/components/CircuitBackground";

const capabilities = [
  "ETC up to 765kV",
  "Substation Automation",
  "Project Consultancy",
  "ISO 9001:2015 Processes",
  "Mock Substation Training",
  "Authorized OEM Partner",
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <CircuitBackground />
      <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="inline-block py-1.5 px-3 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm tracking-wider uppercase mb-6 border border-brand-primary/30 shadow-sm">
              Company Profile
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
              Decades of{" "}
              <span className="text-brand-primary relative inline-block">
                Excellence.
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary/20 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Sree Raghavendra Electric Services Pvt. Ltd. (SRES) is a premier provider of specialized electrical engineering services and high-quality products.
            </p>
          </div>
        </ScrollReveal>

        {/* Image + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">

          <ScrollReveal direction="left" className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#0d1c35] border border-white/10 relative shadow-2xl group">
              <Image
                src="/corporate_office.png"
                alt="SRES Corporate Office and Factory"
                fill
                className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/60 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-60" />
            </div>

            <div className="absolute -bottom-8 right-4 md:right-0 bg-[#0d1c35] backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 max-w-[240px]">
              <div className="text-5xl font-black text-brand-primary mb-2 tracking-tighter">1994</div>
              <p className="text-gray-400 font-medium leading-tight text-sm">Establishing industry standards since inception.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight">
              Driving Industrial Power Infrastructure Forward.
            </h2>
            <div className="text-gray-300 mb-10 space-y-6 text-lg leading-relaxed">
              <p>
                Since 1994, our core competencies have included detailed engineering, erection, testing, and commissioning (ETC) of HT and EHV switchyards and substations up to{" "}
                <strong className="text-brand-primary font-bold bg-brand-primary/10 px-1 rounded">765kV</strong>.
              </p>
              <p>
                We specialize in protection refurbishment, substation automation, and end-to-end project consultancy. We are proud authorized partners of{" "}
                <strong className="text-white">Schneider Electric</strong>,{" "}
                <strong className="text-white">Crompton Greaves</strong>, and{" "}
                <strong className="text-white">GE T&D</strong>.
              </p>
              <p>
                Our hands-on startup training programs, conducted using a full-fledged mock substation, have equipped the next generation of electrical engineers across South India with crucial practical knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-primary w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-gray-200 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
