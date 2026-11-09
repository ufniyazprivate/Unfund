"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Scale,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ComparisonMatrix() {
  const comparisonData = [
    {
      parameter: "Data Source & Authenticity",
      traditionalFiling: "Self-declared manual PDFs & static forms",
      manualVc: "Excel models & self-reported pitch decks",
      unfund: "Automated Setu AA Bank & GSTIN ",
    },
    {
      parameter: "Cap-Table Protection",
      traditionalFiling: "Generic templates with no equity advice",
      manualVc: "Negotiated heavily in favor of investor term sheets",
      unfund: "Automated iSAFE CCPS Engine (≤15% Dilution Target)",
    },
    {
      parameter: "Audit Latency & Speed",
      traditionalFiling: "7–15 Business Days for basic filings",
      manualVc: "3–6 Weeks of manual analyst screening",
      unfund: "180 Seconds (3-Minute Automated Diagnostic)",
    },
    {
      parameter: "Non-Dilutive Grant Matching",
      traditionalFiling: "Manual form filing with extra CA retainer fees",
      manualVc: "Rarely offered or prioritized by equity VCs",
      unfund: "Automated Matching for SISFS, BIRAC & iDEX",
    },
    {
      parameter: "Verification & Badging",
      traditionalFiling: "Static paper certificates",
      manualVc: "Private internal analyst notes",
      unfund: "Live Security Badge (unfund.in/verify/id)",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#C5A059]/20">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-unfund-navy/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-navy font-bold tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5 text-unfund-gold" />
            <span>PLATFORM COMPARISON MATRIX</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-unfund-navy tracking-tight max-w-3xl leading-tight">
            Why <span className="text-unfund-gold">UNFUND</span> Outperforms Traditional Methods
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans font-light leading-relaxed">
            See how our automated telemetry pipeline replaces slow legal form websites and manual VC analyst screening.
          </p>
        </div>

        {/* Clean Flat Comparison Container */}
        <div className="bg-white rounded-2xl border border-[#C5A059]/30 p-4 sm:p-8 shadow-sm">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono uppercase tracking-wider">
                  <th className="py-4 px-4 text-slate-500 font-semibold w-1/4">Strategic Parameter</th>
                  <th className="py-4 px-4 text-slate-500 font-semibold w-1/4">Legal Filing Websites</th>
                  <th className="py-4 px-4 text-slate-500 font-semibold w-1/4">Manual VC Analyst Vetting</th>
                  <th className="py-4 px-4 bg-unfund-navy text-unfund-gold font-bold w-1/4 rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 rounded bg-unfund-dark border border-unfund-gold/30 p-0.5">
                        <Image src="/icon-unfund.png" alt="UNFUND Seal" fill className="object-contain" />
                      </div>
                      <span>UNFUND Platform</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs font-sans">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                    
                    {/* Parameter Name */}
                    <td className="py-4 px-4 font-serif font-bold text-unfund-navy">
                      {row.parameter}
                    </td>

                    {/* Legal Filing Sites */}
                    <td className="py-4 px-4 text-slate-500 font-light">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.traditionalFiling}</span>
                      </div>
                    </td>

                    {/* Manual VC Vetting */}
                    <td className="py-4 px-4 text-slate-500 font-light">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.manualVc}</span>
                      </div>
                    </td>

                    {/* UNFUND Platform */}
                    <td className="py-4 px-4 bg-unfund-navy/5 font-mono font-semibold text-unfund-navy border-x border-unfund-gold/20">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-unfund-emerald shrink-0 mt-0.5" />
                        <span className="text-unfund-navy font-bold">{row.unfund}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-unfund-gold" />
              <span>Built for Fast Execution & Zero-Capital Liability</span>
            </span>
            <span className="flex items-center gap-1 text-unfund-emerald">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span></span>
            </span>
          </div>

        </div>

        {/* Bottom Action CTA */}
        <div className="pt-4 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-unfund-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-unfund-dark transition-all shadow-md group border border-unfund-navy"
          >
            <span>Run 3-Minute Platform Audit</span>
            <ArrowRight className="w-4 h-4 text-unfund-gold group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}