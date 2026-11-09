// app/audit/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function AuditComingSoonPage() {
  return (
    <main className="min-h-[82vh] bg-[#FAF8F5] text-unfund-navy flex items-center justify-center px-4 py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle Background Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-xl w-full mx-auto text-center relative z-10 space-y-7">
        {/* Brand Icon with Gold Accent */}
        <div className="relative w-16 h-16 mx-auto rounded-2xl bg-white border border-[#C5A059]/40 shadow-sm flex items-center justify-center p-3">
          <Image
            src="/icon_transparent_UF.png"
            alt="UNFUND Logo"
            width={38}
            height={38}
            className="object-contain"
            priority
          />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070C1E]/5 border border-[#C5A059]/30 text-[11px] font-mono text-unfund-navy">
          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>ALGORITHMIC ENGINE • COMING SOON</span>
        </div>

        {/* Headline & Description */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-unfund-navy tracking-tight leading-tight">
            The 3-Minute Audit  is <br />
            <span className="bg-gradient-to-r from-[#9B7732] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
              Launching Soon
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-md mx-auto">
            Our automated telemetry rails for instant GST and banking reconciliations are completing final testing. You do not have to wait—speak with our team directly today.
          </p>
        </div>

        {/* Feature Preview Card */}
        <div className="p-4 rounded-xl bg-white border border-[#C5A059]/30 shadow-xs text-left space-y-2 max-w-md mx-auto text-xs text-slate-600">
          <div className="flex items-center gap-2 text-unfund-navy font-semibold font-serif">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            What is coming in the audit?
          </div>
          <p className="font-light leading-relaxed text-[11px] text-slate-500">
            Instant Fundability Scorecard, automated cap-table deadweight detection, and one-click matching to central and state government grant programs.
          </p>
        </div>

        {/* Primary CTA to Contact Page */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow-md transition-all flex items-center justify-center gap-2 group border border-unfund-navy"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-unfund-navy bg-white hover:bg-slate-50 border border-slate-200 rounded transition-all text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}