// app/about/components/ProblemStory.tsx
"use client";

import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProblemStory() {
  const pitfalls = [
    "Severe Pre-Seed Dilution: Selling 20%–35% equity to early passive angels, making Series A unviable.",
    "Overlooked Government Grants: Missing ₹20L to ₹1.5Cr in free capital (SISFS, BIRAC, iDEX) due to paperwork friction.",
    "Debt Verification Delays: Presenting raw, scattered balance sheets that stall bank and NBFC credit committees.",
    "Legal Retainer Costs: Spending lakhs on custom legal drafts instead of standard iSAFE terms.",
  ];

  const solutions = [
    "Cap-Table Guardrails: Algorithmic checks that protect equity splits before signing term sheets.",
    "Automated Grant Matching: Direct mapping to active state and central non-dilutive funding pipelines.",
    "Bank-Grade Credit Dossiers: Structured cash flow, DSCR, and banking summaries for partner lenders.",
    "Standardized iSAFE CCPS: Clean, founder-aligned investment instruments under Indian Companies Act rules.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] text-unfund-navy border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
    
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
            Why 90% of Promising Startups Miss Capital
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Traditional tools treat founders like legal paperwork filers. We treat them as institutional ventures from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Pitfalls Column */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-red-200/70 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-red-700 font-serif font-bold text-lg border-b border-red-100 pb-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>The Early-Stage Capital Trap</span>
            </div>
            <div className="space-y-3.5 text-xs text-slate-700 font-light leading-relaxed">
              {pitfalls.map((text, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-unfund-navy font-serif font-bold text-lg border-b border-slate-100 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>The UNFUND Infrastructure Approach</span>
            </div>
            <div className="space-y-3.5 text-xs text-slate-700 font-light leading-relaxed">
              {solutions.map((text, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}