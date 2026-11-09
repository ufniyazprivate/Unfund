"use client";

import Image from "next/image";
import Link from "next/link";
import { Landmark, Award, BarChart3, Scale, ArrowRight, Info } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Bank Loan Assistance",
      tagline: "Collateral-Free Loans",
      icon: Landmark,
      color: "text-unfund-gold",
      desc: "We help prepare your financial documents and match you with partner banks for business loans under government schemes like CGTMSE.",
      link: "/services/loan-assistance",
    },
    {
      title: "Government Schemes",
      tagline: "Free Startup Grants",
      icon: Award,
      color: "text-unfund-emerald",
      desc: "Find and apply for ₹10L–₹50L government grants (SISFS, BIRAC, iDEX) that give you money without taking company shares.",
      link: "/grant",
    },
    {
      title: "VC Investment Package",
      tagline: "Get Ready for Investors",
      icon: BarChart3,
      color: "text-blue-500",
      desc: "Turn your bank receipts and numbers into a clean, 3-minute investment report that VCs and Angel investors can trust.",
      link: "/vc-investment",
    },
    {
      title: "Cap-Table & Equity Protection",
      tagline: "Keep Your Shares",
      icon: Scale,
      color: "text-amber-500",
      desc: "Avoid giving away too much equity to early investors. We help you issue fair and compliant term sheets (iSAFE CCPS notes).",
      link: "/cap-table",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 overflow-hidden border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8 sm:mb-12">

          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-unfund-navy">
            Our Key Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans font-light">
            Whether you need a bank loan, a government grant, or investor funding—we guide you every step of the way.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-unfund-gold/25 hover:border-unfund-gold shadow-sm transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-unfund-navy text-white">
                      <IconComp className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
                      {item.tagline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-serif font-bold text-unfund-navy group-hover:text-unfund-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 font-sans leading-relaxed mt-1.5 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase font-mono text-unfund-navy hover:text-unfund-gold transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 text-unfund-gold" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="bg-unfund-navy text-unfund-cream p-4 sm:p-5 rounded-xl border border-unfund-gold/30 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-unfund-gold shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-sans leading-relaxed">
                <strong className="text-unfund-gold font-mono uppercase">Please Note:</strong> UNFUND is a loan assistance and startup advisory platform. We are not a bank or lender ourselves. All loan disbursals and grant approvals are decided directly by partner banks and government officers.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 shrink-0 self-end sm:self-center">
              <div className="relative w-5 h-5 rounded bg-unfund-dark border border-unfund-gold/30 p-0.5">
                <Image src="/icon-unfund.png" alt="Seal" fill className="object-contain" />
              </div>
              <span>Safe & Confidential</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}