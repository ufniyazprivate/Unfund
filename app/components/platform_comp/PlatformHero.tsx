"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Lock,
  Sparkles,
  Zap,
  Activity,
  Database,
  BarChart2,
  Compass,
} from "lucide-react";

export default function PlatformHero() {
  // 3D Parallax Tilt State
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateXAngle] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt handler for 3D card physics
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Max rotation angles (degrees)
    const maxRotateX = 14;
    const maxRotateY = 14;

    setRotateX(-mouseY * maxRotateX);
    setRotateXAngle(mouseX * maxRotateY);

    // Glare position percentage
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateXAngle(0);
  };

  return (
    <section className="relative bg-[#070C1E] text-unfund-cream py-10 sm:py-14 lg:py-20 overflow-hidden border-b border-unfund-gold/30">
      
      {/* ========================================================= */}
      {/* 1. BACKGROUND AMBIENT GLOWS & BLUEPRINT GRID              */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle Radial Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
            backgroundSize: `28px 28px`,
          }}
        />

        {/* Top-Right Gold Glow */}
        <div className="absolute -top-32 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-unfund-gold/20 via-amber-500/10 to-transparent rounded-full blur-[120px] animate-pulse duration-[9000ms]" />

        {/* Bottom-Left Blue Glow */}
        <div className="absolute -bottom-28 -left-16 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-blue-900/25 rounded-full blur-[110px]" />

        {/* Metallic Border Rules */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unfund-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unfund-gold/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: PLATFORM THESIS & PRIMARY CTAS              */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-gold shadow-sm backdrop-blur-md">
              <span className="tracking-wider">AUTOMATED DEAL-READINESS PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] max-w-2xl">
              From Startup to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                Institutional Deal Readiness
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 max-w-lg font-light leading-relaxed">
              UNFUND bypasses manual due-diligence bottlenecks. We automatically connect operational bank data, audit cap-tables, and synchronize tax filings into verified VC packages.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-2">
              <Link
                href="/audit"
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-unfund-navy bg-unfund-gold hover:bg-unfund-goldHover rounded-lg shadow-lg shadow-unfund-gold/20 transition-all text-center flex items-center justify-center gap-2 group border border-unfund-gold"
              >
                <span>Launch 3-Min Audit</span>
                <ArrowRight className="w-4 h-4 text-unfund-navy group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href="#scoring-mechanics"
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-unfund-cream border border-slate-700 hover:border-unfund-gold rounded-lg transition-all text-center bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Cpu className="w-4 h-4 text-unfund-gold" />
                <span>Explore Scoring Mechanics</span>
              </a>
            </div>

            {/* Live Metrics Bar */}
            {/* <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center lg:text-left">
                <div className="text-[10px] font-mono text-slate-400">Data Reconciled</div>
                <div className="text-xs sm:text-sm font-semibold text-white font-mono mt-0.5">RBI AA & GST</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center lg:text-left">
                <div className="text-[10px] font-mono text-slate-400">Security Standard</div>
                <div className="text-xs sm:text-sm font-semibold text-unfund-emerald font-mono mt-0.5">256-Bit SSL / RLS</div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center lg:text-left">
                <div className="text-[10px] font-mono text-slate-400">Audit Latency</div>
                <div className="text-xs sm:text-sm font-semibold text-unfund-gold font-mono mt-0.5">180 Seconds</div>
              </div>
            </div> */}

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D MOVABLE INTERACTIVE ENGINE CARD          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto flex justify-center [perspective:1000px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                  isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"
                }`,
                transition: isHovered
                  ? "transform 0.1s ease-out"
                  : "transform 0.5s ease-out",
                transformStyle: "preserve-3d",
              }}
              className="w-full bg-[#0D1530] text-unfund-cream p-5 sm:p-7 rounded-2xl shadow-2xl relative border border-unfund-gold/40 cursor-grab active:cursor-grabbing select-none"
            >
              
              {/* Dynamic Dynamic Glare Overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 0.15 : 0,
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)`,
                }}
              />

              {/* Gold Ambient Halo behind 3D Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-unfund-gold/20 via-amber-400/10 to-unfund-gold/20 rounded-2xl blur-lg -z-10 pointer-events-none" />

              {/* Mouse Movement Direction Helper Overlay */}
              <div 
                className="absolute top-2 right-2 text-[9px] font-mono text-unfund-gold/50 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ transform: "translateZ(20px)" }}
              >
                <Compass className="w-3 h-3 animate-spin duration-3000" />
                <span>3D PARALLAX ACTIVE</span>
              </div>

              {/* Engine Header with Floating 3D Layer */}
              <div 
                className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 transition-transform duration-200"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-unfund-gold/40 bg-unfund-navy p-1 flex-shrink-0 shadow-lg">
                    <Image
                      src="/icon-unfund.png"
                      alt="UNFUND Engine Shield"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white font-mono tracking-wide">
                      UNFUND 
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">Audit Gateway</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/30">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Floating Score Display Module */}
              <div 
                className="p-4 rounded-xl bg-unfund-navy/90 border border-unfund-borderDark mb-4 space-y-2 shadow-inner transition-transform duration-200"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>Calculated Fundability Score</span>
                  <span className="text-unfund-gold font-bold">Series A Grade</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold font-mono text-white">
                    88.5 <span className="text-xs text-slate-400 font-sans font-normal">/ 100</span>
                  </div>
                  <span className="text-[10px] font-semibold text-unfund-emerald bg-unfund-emerald/10 px-2.5 py-1 rounded border border-unfund-emerald/30 font-mono">
                    VERIFIED DEAL
                  </span>
                </div>
              </div>

              {/* Floating API Status List */}
              <div 
                className="space-y-2 text-xs font-mono transition-transform duration-200"
                style={{ transform: "translateZ(35px)" }}
              >
                
                <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/10 hover:border-unfund-gold/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Database className="w-3.5 h-3.5 text-unfund-gold" />
                    <span>Setu AA Bank </span>
                  </div>
                  <span className="text-unfund-emerald font-bold text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Reconciled
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/10 hover:border-unfund-gold/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300">
                    <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>GSTIN Revenue Match</span>
                  </div>
                  <span className="text-unfund-emerald font-bold text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 0.8% Variance
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-white/5 border border-white/10 hover:border-unfund-gold/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>Cap-Table Health Check</span>
                  </div>
                  <span className="text-unfund-gold font-bold text-[10px] flex items-center gap-1">
                    <Zap className="w-3 h-3" /> iSAFE 
                  </span>
                </div>

              </div>

              {/* Bottom Security Footer */}
              <div 
                className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono transition-transform duration-200"
                style={{ transform: "translateZ(25px)" }}
              >
                <span className="flex items-center gap-1">
                  {/* <Lock className="w-3 h-3 text-unfund-gold" /> */}
                  
                </span>
                <span>Read-Only Audit Rails</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}