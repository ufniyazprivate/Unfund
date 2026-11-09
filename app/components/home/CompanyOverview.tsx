"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  FileBadge,
  ArrowRight,
  CheckCircle2,
  Lock,
  Boxes,
} from "lucide-react";

export default function CompanyOverview() {
  return (
    <section className="relative bg-[#FAF8F5] text-unfund-navy py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-unfund-gold/30">
      
      {/* Background Decorative Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-[0.03] w-[350px] sm:w-[480px] h-[350px] sm:h-[480px]">
          <Image
            src="/icon-unfund.png"
            alt="UNFUND Watermark"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unfund-gold/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-unfund-navy/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-navy font-semibold tracking-wider">
            <Boxes className="w-3.5 h-3.5 text-unfund-gold" />
            <span>INSTITUTIONAL THESIS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-unfund-navy tracking-tight max-w-3xl leading-tight">
            Bridging the <span className="text-unfund-gold">Capital Literacy</span> Gap for Bharat’s Founders.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans font-normal leading-relaxed">
            90% of early-stage Indian startups fail due to equity dilution, mismanaged cap-tables, and unverified metric rooms. UNFUND automates deal-readiness before you meet VCs.
          </p>
        </div>

        {/* Overview Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Strategic Pillars */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Feature 1 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-unfund-gold/30 shadow-sm hover:border-unfund-gold transition-all space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-unfund-navy text-unfund-gold flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy">
                  Automated Bank & GST Telemetry
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pl-11">
                Direct integration via RBI Account Aggregator framework and GSTIN portals to construct audited, tamper-proof financial packages.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-unfund-gold/30 shadow-sm hover:border-unfund-gold transition-all space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-unfund-navy text-unfund-emerald flex-shrink-0">
                  <FileBadge className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy">
                  Cap-Table Protection & Grants Matcher
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pl-11">
                Protect your pre-seed equity while automatically matching eligible startups with non-dilutive government capital like SISFS, BIRAC BIG, and iDEX.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-unfund-gold/30 shadow-sm hover:border-unfund-gold transition-all space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-unfund-navy text-blue-400 flex-shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy">
                  Standardized Fundability Scorecard
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pl-11">
                Our 0–100 mathematical engine evaluates Cap-Table Health, Unit Economics, Compliance Hygiene, and Revenue Verification for VC confidence.
              </p>
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-unfund-navy hover:text-unfund-gold transition-colors font-mono group"
              >
                <span>Read Full Strategic Execution Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-unfund-gold" />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Telemetry Verification Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-unfund-navy text-unfund-cream p-5 sm:p-7 rounded-2xl shadow-2xl relative border border-unfund-gold/40">
              
              {/* Subtle Gold Halo Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-unfund-gold/20 via-amber-400/10 to-unfund-gold/20 rounded-2xl blur-lg -z-10 pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-unfund-gold/20 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-unfund-gold/40 bg-unfund-dark p-1 flex-shrink-0">
                    <Image
                      src="/icon-unfund.png"
                      alt="UNFUND Verified Shield Icon"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">UNFUND Audit Verification</h4>
                    <p className="text-[10px] text-slate-400 font-mono">ID: unfund.in/verify/st-9821</p>
                  </div>
                </div>

                <span className="px-2 py-0.5 bg-unfund-emerald/15 text-unfund-emerald text-[10px] font-mono font-bold rounded border border-unfund-emerald/30">
                  VERIFIED
                </span>
              </div>

              {/* Score Box */}
              <div className="p-3.5 rounded-xl bg-unfund-dark/90 border border-unfund-border-dark mb-4 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>Fundability Score</span>
                  <span className="text-unfund-gold font-bold">Series A Threshold Met</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    86.4 <span className="text-xs text-slate-400 font-sans font-normal">/ 100</span>
                  </div>
                  <span className="text-[10px] font-semibold text-unfund-emerald bg-unfund-emerald/10 px-2.5 py-1 rounded border border-unfund-emerald/30">
                    DEAL READY
                  </span>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10 text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-unfund-emerald" />
                    Cap-Table Dilution
                  </span>
                  <span className="text-white font-bold">&le; 8.5% Clean</span>
                </div>

                <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10 text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-unfund-emerald" />
                    GST Revenue Match
                  </span>
                  <span className="text-unfund-emerald font-bold">&lt; 1.2% Variance</span>
                </div>

                <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10 text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-unfund-gold" />
                    Government Grants
                  </span>
                  <span className="text-unfund-gold font-bold">SISFS & BIRAC</span>
                </div>
              </div>

              {/* Footer Notice */}
              <div className="mt-4 pt-3 border-t border-unfund-border-dark flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
  
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