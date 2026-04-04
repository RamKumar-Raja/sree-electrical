"use client";

import { motion } from "framer-motion";
import { Rocket, PlaneTakeoff, Factory, Component } from "lucide-react";

const clientData = [
  {
    id: "isro",
    content: <div className="text-4xl font-black font-serif italic tracking-tighter text-white">ISRO</div>,
    icon: Rocket,
    gradient: "from-[#9BF467] to-[#004D00]", // Lime Green to Dark Green (Brand colors)
  },
  {
    id: "aai",
    content: <div className="text-xl font-black uppercase tracking-tight text-white border-l-[4px] border-white pl-3 py-1 leading-tight text-left">Airport<br/>Authority</div>,
    icon: PlaneTakeoff,
    gradient: "from-[#62c2fe] to-[#2b5876]", 
  },
  {
    id: "jsw",
    content: <div className="text-5xl font-black uppercase text-white tracking-tighter">JSW</div>,
    icon: Factory,
    gradient: "from-[#ff5858] to-[#f09819]", 
  },
  {
    id: "sg",
    content: <div className="text-3xl font-light tracking-wide text-white">Saint<br/>Gobain</div>,
    icon: Component,
    gradient: "from-[#c2e59c] to-[#64b3f4]", 
  }
];

export function AnimatedClients() {
  return (
    <div className="mt-32 mb-10 w-full px-4">
      <div className="text-center">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-12">Trusted by the titans of industry</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full max-w-7xl justify-items-center">
        {clientData.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}

function ClientCard({ client }: { client: typeof clientData[0] }) {
  const ActiveIcon = client.icon;

  return (
    <motion.div 
      className="relative w-full max-w-[280px] aspect-square bg-[#0f172a] rounded-[30px] overflow-hidden shadow-[rgba(0,0,0,0.2)_0px_7px_29px_0px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 group"
    >
      {/* Background that appears on hover */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${client.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`} />

      {/* Expanding Box 1 */}
      <div 
        className="absolute p-4 text-right bg-white/10 border-t-2 border-r border-white/50 shadow-[rgba(100,100,111,0.2)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 w-[85%] h-[85%] -bottom-[85%] -left-[85%] group-hover:-bottom-[1px] group-hover:-left-[1px]"
        style={{ borderRadius: '10% 13% 42% 0% / 10% 12% 75% 0%' }}
      ></div>

      {/* Expanding Box 2 */}
      <div 
        className="absolute p-4 text-right bg-white/20 border-t-2 border-r border-white/60 shadow-[rgba(100,100,111,0.2)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[100ms] z-20 w-[65%] h-[65%] -bottom-[65%] -left-[65%] group-hover:-bottom-[1px] group-hover:-left-[1px]"
        style={{ borderRadius: '10% 13% 42% 0% / 10% 12% 75% 0%' }}
      ></div>

      {/* Expanding Box 3 (Contains the Icon) */}
      <div 
        className="absolute flex items-center justify-center p-4 bg-white/30 backdrop-blur-md border-t-2 border-r border-white shadow-[rgba(100,100,111,0.3)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] z-30 w-[45%] h-[45%] -bottom-[45%] -left-[45%] group-hover:-bottom-[1px] group-hover:-left-[1px]"
        style={{ borderRadius: '10% 13% 42% 0% / 10% 12% 75% 0%' }}
      >
        <ActiveIcon size={40} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>

      {/* The Central Content / Logo */}
      <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:right-6 group-hover:bottom-6 group-hover:scale-75 z-40">
        {client.content}
      </div>
    </motion.div>
  );
}
