import { CheckCircle2, Factory } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="inline-block py-1.5 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wider uppercase mb-6 border border-blue-100 shadow-sm">
            Company Profile
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tighter mb-8">
            Decades of <span className="text-blue-600 relative inline-block">
              Excellence.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            Sree Raghavendra Electric Services Pvt. Ltd. (SRES) is a premier provider of specialized electrical engineering services and high-quality products.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 relative shadow-2xl flex flex-col items-center justify-center text-gray-400 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent z-10 transition-opacity group-hover:opacity-50" />
              <Factory size={64} className="mb-4 opacity-30 text-blue-900 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <p className="text-sm font-medium relative z-20">Corporate Office / Factory Photo</p>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[280px]">
              <div className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">1994</div>
              <p className="text-gray-600 font-medium leading-tight">Establishing industry standards since inception.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Driving Industrial Power Infrastructure Forward.</h2>
            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="mb-6 leading-relaxed">
                Since 1994, our core competencies have included detailed engineering, erection, testing, and commissioning (ETC) of HT and EHV switchyards and substations up to <strong className="text-blue-700 font-bold bg-blue-50 px-1 rounded">765kV</strong>.
              </p>
              <p className="mb-6 leading-relaxed">
                We specialize in protection refurbishment, substation automation, and end-to-end project consultancy. We are proud authorized partners of <strong className="text-gray-900">Schneider Electric</strong>, <strong className="text-gray-900">Crompton Greaves</strong>, and <strong className="text-gray-900">GE T&D</strong>.
              </p>
              <p className="leading-relaxed">
                Our hands-on startup training programs, conducted using a full-fledged mock substation, have equipped the next generation of electrical engineers across South India with crucial practical knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              {[
                "ETC up to 765kV",
                "Substation Automation",
                "Project Consultancy",
                "ISO 9001:2015 Processes",
                "Mock Substation Training",
                "Authorized OEM Partner"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-blue-600 w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
