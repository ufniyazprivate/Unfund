// app/about/components/GovernanceTrust.tsx
"use client";

import { Info, Lock, ShieldAlert } from "lucide-react";

export default function GovernanceTrust() {
  return (
    <section className="py-12 bg-white text-unfund-navy border-b border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/30 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-unfund-navy uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            Data Protection & Regulatory Transparency
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 font-light leading-relaxed">
            <div>
              <strong className="text-unfund-navy font-medium block mb-1">
                DPDP Act 2023 Alignment:
              </strong>
              Any financial data shared on UNFUND is processed with explicit user consent, encrypted in storage, and protected under India's Digital Personal Data Protection standards.
            </div>
            <div>
              <strong className="text-unfund-navy font-medium block mb-1">
                Non-NBFC Disclosure:
              </strong>
              UNFUND is an advisory, credit preparation, and deal-readiness technology platform. We do not lend funds, issue credit lines, or guarantee loan sanctions. All lending decisions belong to partner banks and RBI-registered NBFCs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}