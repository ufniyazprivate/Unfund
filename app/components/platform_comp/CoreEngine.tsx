"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import {
  BarChart3,
  Scale,
  CreditCard,
  CheckCircle2,
  Sliders,
  Compass,
} from "lucide-react";

// Reusable 3D Parallax Card Wrapper Component
function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    const maxRotate = 12; // Degrees
    setRotateX(-mouseY * maxRotate);
    setRotateY(mouseX * maxRotate);

    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="[perspective:1000px] w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"
          }`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`relative cursor-grab active:cursor-grabbing select-none transition-shadow duration-300 ${
          isHovered ? "shadow-2xl shadow-unfund-navy/20" : "shadow-md"
        } ${className}`}
      >
        {/* Specular Light Flare Overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-50"
          style={{
            opacity: isHovered ? 0.12 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 65%)`,
          }}
        />

        {children}
      </div>
    </div>
  );
}

export default function CoreEngine() {
  const [activeEngine, setActiveEngine] = useState<"scorecard" | "isafe" | "credit">("scorecard");

  return (
    <section id="scoring-mechanics" className="relative bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#C5A059]/20">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#0A1128 1px, transparent 1px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-unfund-navy/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-navy font-bold tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5 text-unfund-gold" />
            <span>CORE ENGINE </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-unfund-navy tracking-tight max-w-3xl leading-tight">
            The Algorithmic <span className="text-unfund-gold">Scoring & Legal</span> Architecture
          </h2>

          {/* <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans font-light leading-relaxed">
            Move your cursor over the 3D cards to explore our Python FastAPI scoring engine, legal framework, and credit matching architecture.
          </p> */}
        </div>

        {/* Engine Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-[#C5A059]/30 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveEngine("scorecard")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                activeEngine === "scorecard"
                  ? "bg-unfund-navy text-white shadow-md"
                  : "text-slate-600 hover:text-unfund-navy"
              }`}
            >
              <BarChart3 className="w-4 h-4 text-unfund-gold" />
              <span>Fundability Scorecard</span>
            </button>

            <button
              onClick={() => setActiveEngine("isafe")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                activeEngine === "isafe"
                  ? "bg-unfund-navy text-white shadow-md"
                  : "text-slate-600 hover:text-unfund-navy"
              }`}
            >
              <Scale className="w-4 h-4 text-amber-500" />
              <span>iSAFE Legal Engine</span>
            </button>

            <button
              onClick={() => setActiveEngine("credit")}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                activeEngine === "credit"
                  ? "bg-unfund-navy text-white shadow-md"
                  : "text-slate-600 hover:text-unfund-navy"
              }`}
            >
              <CreditCard className="w-4 h-4 text-blue-500" />
              <span>Credit & Loan Engine</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MODULE 1: FUNDABILITY SCORECARD (3D CARDS)                */}
        {/* ========================================================= */}
        {activeEngine === "scorecard" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3D Interactive Main Info Card */}
            <div className="lg:col-span-7">
              <Card3D className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold text-unfund-gold px-2.5 py-0.5 rounded bg-unfund-navy/5 border border-unfund-gold/30">
                      0–100 Mathematical Formula
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-unfund-gold animate-spin duration-3000" /> 
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-unfund-navy">
                    The 4-Weighted Vector Scorecard
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans font-light leading-relaxed">
                    Our engine evaluates four crucial operational vectors before issuing an institutional verification badge:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    <div style={{ transform: "translateZ(40px)" }} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1 shadow-sm">
                      <div className="flex justify-between font-bold text-unfund-navy">
                        <span>Cap-Table Health</span>
                        <span className="text-unfund-gold">30% Weight</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-500 font-light">
                        Measures deadweight angel dilution (&le;15% target) and founder equity retention.
                      </p>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1 shadow-sm">
                      <div className="flex justify-between font-bold text-unfund-navy">
                        <span>Compliance Hygiene</span>
                        <span className="text-unfund-emerald">25% Weight</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-500 font-light">
                        Verifies MCA ROC filings, DPIIT status, and GST tax compliance schedules.
                      </p>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1 shadow-sm">
                      <div className="flex justify-between font-bold text-unfund-navy">
                        <span>Unit Economics</span>
                        <span className="text-blue-600">25% Weight</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-500 font-light">
                        Analyzes monthly recurring revenue (MRR), burn rate, and gross margin profiles.
                      </p>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1 shadow-sm">
                      <div className="flex justify-between font-bold text-unfund-navy">
                        <span>Data Verification</span>
                        <span className="text-purple-600">20% Weight</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-500 font-light">
                        Matches bank Account Aggregator deposits with GST revenue filings (&lt;2% variance).
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Right 3D Visual Scorecard Display */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3D className="bg-unfund-navy text-white p-6 rounded-2xl border border-unfund-gold/40 shadow-2xl">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded bg-unfund-dark border border-unfund-gold/30 p-0.5">
                        <Image src="/icon-unfund.png" alt="Seal" fill className="object-contain" />
                      </div>
                      <span className="text-xs font-mono font-bold">Verification Badge</span>
                    </div>
                    <span className="text-[9px] font-mono bg-unfund-emerald/20 text-unfund-emerald font-bold px-2 py-0.5 rounded">
                      PASSED
                    </span>
                  </div>

                  <div style={{ transform: "translateZ(50px)" }} className="text-center py-3 bg-white/5 rounded-xl border border-white/10 space-y-1 shadow-md">
                    <div className="text-[10px] font-mono text-slate-400">Total Score Index</div>
                    <div className="text-4xl font-mono font-bold text-unfund-gold">88.5 / 100</div>
                    <div className="text-[10px] font-mono text-unfund-emerald">Institutional VC Ready</div>
                  </div>

                  <div style={{ transform: "translateZ(40px)" }} className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex justify-between p-2 rounded bg-white/5">
                      <span>Cap-Table Target:</span>
                      <span className="text-white font-bold">12.4% Dilution</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-white/5">
                      <span>GST Variance:</span>
                      <span className="text-unfund-emerald font-bold">0.8% Reconciled</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* MODULE 2: iSAFE CCPS LEGAL STANDARD ENGINE (3D CARDS)     */}
        {/* ========================================================= */}
        {activeEngine === "isafe" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <Card3D className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-600 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                      Companies Act & FEMA Standard
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-unfund-gold animate-spin duration-3000" /> 3D PARALLAX
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-unfund-navy">
                    iSAFE Equity Safeguard Engine
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans font-light leading-relaxed">
                    iSAFE (India Simple Agreement for Future Equity) converts early angel funding into Compulsorily Convertible Preference Shares (CCPS), protecting founders from premature valuation caps and unfair dilution.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-slate-700">
                    <div style={{ transform: "translateZ(40px)" }} className="p-3 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-unfund-navy block">Pre-Seed Valuation Protection</strong>
                        <span className="text-slate-500 font-sans text-[11px]">Defers valuation conversations until qualified institutional Series A rounds.</span>
                      </div>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-unfund-navy block">FEMA & RBI Cross-Border Compliance</strong>
                        <span className="text-slate-500 font-sans text-[11px]">Ensures compliant fundraising from foreign angel networks and offshore VCs.</span>
                      </div>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-unfund-navy block">Automated Term Sheet Generation</strong>
                        <span className="text-slate-500 font-sans text-[11px]">Produces ready-to-sign legal agreements in minutes without high lawyer retainer fees.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <Card3D className="bg-unfund-navy text-white p-6 rounded-2xl border border-unfund-gold/40 shadow-2xl">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-xs font-mono font-bold text-amber-400">iSAFE CCPS Template</span>
                    <span className="text-[9px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">
                      COMPLIANT
                    </span>
                  </div>

                  <div style={{ transform: "translateZ(45px)" }} className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px]">Instrument Type</span>
                      <span className="text-white font-bold">CCPS (Compulsory Convertible)</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px]">Discount Cap Range</span>
                      <span className="text-unfund-gold font-bold">15% – 20% Standard</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px]">Governing Law</span>
                      <span className="text-white font-bold">Indian Companies Act 2013</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* MODULE 3: CREDIT & LOAN ASSISTANCE ARCHITECTURE (3D)      */}
        {/* ========================================================= */}
        {activeEngine === "credit" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <Card3D className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold text-blue-600 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200">
                      Banking & Bureau Telemetry
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-unfund-gold animate-spin duration-3000" /> 3D PARALLAX
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-unfund-navy">
                    Credit Bureau & Bank Matching
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans font-light leading-relaxed">
                    By parsing founder CIBIL reports, Experian commercial profiles, and bank statement cash flows, our engine generates credit dossiers that partner banks use for CGTMSE collateral-free disbursals.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-slate-700">
                    <div style={{ transform: "translateZ(40px)" }} className="p-3 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-unfund-navy block">Instant Bureau Parsing</strong>
                        <span className="text-slate-500 font-sans text-[11px]">Checks founder CIBIL and commercial credit histories to resolve hurdles before bank submission.</span>
                      </div>
                    </div>

                    <div style={{ transform: "translateZ(40px)" }} className="p-3 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-unfund-navy block">CGTMSE Scheme Alignment</strong>
                        <span className="text-slate-500 font-sans text-[11px]">Matches startups with partner banks offering up to ₹5 Crore collateral-free debt facilities.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <Card3D className="bg-unfund-navy text-white p-6 rounded-2xl border border-unfund-gold/40 shadow-2xl">
                <div style={{ transform: "translateZ(30px)" }} className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-xs font-mono font-bold text-blue-400">Credit Dossier Status</span>
                    <span className="text-[9px] font-mono bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded">
                      CREDIT READY
                    </span>
                  </div>

                  <div style={{ transform: "translateZ(45px)" }} className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex justify-between p-2.5 rounded bg-white/5">
                      <span>Founder CIBIL Status:</span>
                      <span className="text-unfund-emerald font-bold">760+ Verified</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded bg-white/5">
                      <span>Bank Flow Analysis:</span>
                      <span className="text-white font-bold">Positive Cash Velocity</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded bg-white/5">
                      <span>Partner DSA Route:</span>
                      <span className="text-unfund-gold font-bold">CGTMSE Matched</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}