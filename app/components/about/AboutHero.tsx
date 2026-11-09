// app/about/components/AboutHero.tsx
"use client";

import { Sparkles } from "lucide-react";

export default function AboutHero() {
  const metrics = [
    { 
      label: "DPIIT-Recognized Startups", 
      value: "223,000+", 
      detail: "Across 660+ districts in India" 
    },
    { 
      label: "Outside Tier-1 Metros", 
      value: "50%+", 
      detail: "Emerging from Tier-2 & Tier-3 hubs" 
    },
    { 
      label: "Non-Dilutive Capital Access", 
      value: "₹1,000 Cr+", 
      detail: "Under-allocated government grants yearly" 
    },
{ 
  label: "Cap-Table Dilution Risk", 
  value: "0%", 
  detail: "Founder-first iSAFE CCPS frameworks" 
}
  ];

  return (
    <section className="relative bg-[#070C1E] text-unfund-cream py-16 sm:py-24 border-b border-[#C5A059]/30 overflow-hidden">
      {/* Blueprint Ambient Grid */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />
      
      {/* Centered Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Text Content: Centered Layout */}
        <div className="max-w-3xl mx-auto space-y-5 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[11px] font-mono text-[#C5A059]">
            OUR THESIS • UNFUND
          </span>

<h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
  Real metrics into <br className="hidden sm:inline" />
  <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
    instant capital.
  </span>
</h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Indian founders rarely stumble due to lack of market ambition. They stumble due to capital structural illiteracy—diluting 30%+ equity to early angels, missing non-dilutive government schemes, or struggling with bank debt formatting. UNFUND automates that preparation layer.
          </p>
        </div>

        {/* 4-Tile Macro Metrics Grid: Centered Alignments */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10 max-w-5xl mx-auto">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-[#C5A059]/20 rounded-xl p-4 sm:p-5 space-y-1.5 text-center flex flex-col items-center justify-center hover:border-[#C5A059]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-semibold text-[#C5A059] font-mono">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 font-light">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}