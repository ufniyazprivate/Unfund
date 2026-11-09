// app/about/components/EcosystemBridge.tsx
"use client";

import { UserCheck, Landmark, TrendingUp } from "lucide-react";

export default function EcosystemBridge() {
  const personas = [
    {
      icon: UserCheck,
      role: "For Founders & Innovators",
      tag: "Readiness & Protection",
      points: [
        "Free 3-minute audit of fundability indices",
        "Direct matching to central/state government grants",
        "Cap-table scenario modeling & iSAFE structuring",
        "Institutional dossier creation for bank loan files",
      ],
    },
    {
      icon: Landmark,
      role: "For Lending & Banking Partners",
      tag: "Credit Hygiene",
      points: [
        "Pre-structured financial files and DSCR analyses",
        "Reconciled GST vs. banking account telemetry",
        "Reduced last-mile turnaround on working capital reviews",
        "Referrals through registered DSA & sourcing rails",
      ],
    },
    {
      icon: TrendingUp,
      role: "For VCs & Institutional Angels",
      tag: "Pre-Vetted Deal Flow",
      points: [
        "Screened cap-tables with deadweight equity checks",
        "Verified financial telemetry reducing diligence lag",
        "Companies Act and FEMA-compliant CCPS templates",
        "Access to high-growth businesses outside Tier-1 hubs",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
 
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
            Connecting India's Capital Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            We operate as the neutral, analytical bridge aligning founders, banking lenders, and institutional investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#C5A059]/25 shadow-xs space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-unfund-navy text-[#C5A059] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#070C1E]/5 text-unfund-navy border border-[#C5A059]/30">
                    {col.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-unfund-navy">
                  {col.role}
                </h3>

                <ul className="space-y-2.5 text-xs text-slate-600 font-light">
                  {col.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}