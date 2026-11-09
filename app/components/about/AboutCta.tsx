// app/about/components/AboutCta.tsx
"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Calculator } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#070C1E] text-unfund-cream border-t border-[#C5A059]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Make Your Company Institutional-Grade
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Whether you want to check government grant eligibility, evaluate business loan readiness, or safeguard your equity for Series A, we are here to assist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/audit"
            className="w-full sm:w-auto px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-unfund-navy bg-unfund-gold hover:bg-unfund-goldHover transition-colors flex items-center justify-center gap-2 shadow"
          >
            <Calculator className="w-3.5 h-3.5 text-unfund-navy" />
            <span>Free Audit (Coming Soon)</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Contact Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
}