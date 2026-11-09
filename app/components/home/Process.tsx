"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Cpu, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Check
} from "lucide-react";

export default function Process() {
  const [activeMobileStep, setActiveMobileStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      subtitle: "1-Minute Setup",
      icon: Building2,
      badge: "Quick & Secure",
      description: "Connect your bank statements and GST details safely. No manual paperwork required.",
      tag: "Step 1",
    },
    {
      number: "02",
      title: "Instant Financial Check",
      subtitle: "Smart Review",
      icon: Cpu,
      badge: "0–100 Score",
      description: "Our system calculates your startup score and highlights areas to fix before talking to lenders.",
      tag: "Step 2",
    },
    {
      number: "03",
      title: "Find Your Best Options",
      subtitle: "Loans & Grants",
      icon: Target,
      badge: "Grants & Debt",
      description: "Get matched with non-dilutive government grants (SISFS, BIRAC) and partner bank loan programs.",
      tag: "Step 3",
    },
    {
      number: "04",
      title: "Get Funded",
      subtitle: "Ready to Present",
      icon: ShieldCheck,
      badge: "Verified Profile",
      description: "Receive a verified startup profile link that you can share with banks and investors to close funding.",
      tag: "Step 4",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 overflow-hidden border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10 sm:mb-14">

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy tracking-tight">
            How It <span className="text-unfund-gold">Works?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans font-light max-w-xl">
            From raw financial numbers to verified funding applications in four simple steps.
          </p>
        </div>

        {/* Desktop Horizontal Process */}
        <div className="hidden lg:block relative my-4">
          <div className="absolute top-[38px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-unfund-gold/20 via-unfund-gold to-unfund-gold/20 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <div key={index} className="flex flex-col group">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-unfund-gold/40 group-hover:border-unfund-navy group-hover:bg-unfund-navy transition-all duration-300 flex items-center justify-center shadow-sm relative">
                      <span className="font-serif font-bold text-lg text-unfund-navy group-hover:text-unfund-gold transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-unfund-gold/25 shadow-sm group-hover:border-unfund-gold group-hover:shadow-md transition-all flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-unfund-gold bg-unfund-navy/5 px-2 py-0.5 rounded">
                          {step.tag}
                        </span>
                        <IconComp className="w-4 h-4 text-unfund-navy" />
                      </div>

                      <div>
                        <h3 className="text-sm font-serif font-bold text-unfund-navy">
                          {step.title}
                        </h3>
                        <div className="text-[10px] font-mono text-slate-400">
                          {step.subtitle}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 font-sans leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-unfund-emerald" /> {step.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="lg:hidden">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 scrollbar-none"
            onScroll={(e) => {
              const target = e.currentTarget;
              const stepWidth = target.scrollWidth / steps.length;
              const index = Math.round(target.scrollLeft / stepWidth);
              setActiveMobileStep(index);
            }}
          >
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={index}
                  className="w-[85%] sm:w-[60%] shrink-0 snap-center bg-white p-5 rounded-2xl border border-unfund-gold/30 shadow-md flex flex-col justify-between relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-unfund-navy text-unfund-gold font-mono font-bold text-xs flex items-center justify-center">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-sm font-serif font-bold text-unfund-navy">
                            {step.title}
                          </h3>
                          <p className="text-[9px] font-mono text-slate-400">{step.subtitle}</p>
                        </div>
                      </div>
                      <IconComp className="w-5 h-5 text-unfund-gold" />
                    </div>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-unfund-navy font-semibold px-2 py-0.5 rounded bg-unfund-navy/5 border border-unfund-navy/10">
                      {step.badge}
                    </span>
                    <span className="text-slate-400 flex items-center gap-0.5">
                      Step {index + 1} of 4 <ChevronRight className="w-3 h-3 text-unfund-gold" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-2 mt-1">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileStep === idx 
                    ? "w-6 bg-unfund-navy" 
                    : "w-1.5 bg-unfund-gold/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-unfund-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-unfund-dark transition-all shadow-md border border-unfund-navy"
          >
            <span>Get Financial Assistance Now</span>
            <ArrowRight className="w-4 h-4 text-unfund-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
}