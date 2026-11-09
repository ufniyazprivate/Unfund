// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ShieldAlert, ArrowUpRight } from "lucide-react";

// Inline brand SVGs for social icons (consistent with Navbar)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050814] text-slate-300 border-t border-[#C5A059]/25 pt-14 pb-10 text-xs selection:bg-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================= */}
        {/* 1. TOP BRAND, NAVIGATION & CHANNELS                       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/icon-unfund.png"
                  alt="UNFUND Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="font-serif font-bold tracking-[0.2em] text-white text-2xl leading-none">
                <span>UN</span>
                <span className="relative inline-block mx-[1px]">
                  F
                  <span className="absolute top-[44%] left-[12%] w-[75%] h-[2.5px] bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] rounded-full" />
                </span>
                <span>UND</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
              Deal-readiness and financial telemetry infrastructure for early-stage Indian enterprises, founders, and institutional funding partners.
            </p>

            {/* Direct Touchpoints */}
            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href="tel:9315956745"
                className="flex items-center gap-2 text-slate-300 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+91 9315956745</span>
              </a>
              <a
                href="mailto:support@unfund.in"
                className="flex items-center gap-2 text-slate-300 hover:text-[#C5A059] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>support@unfund.in</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-mono text-white text-[11px] uppercase tracking-wider font-semibold">
              Platform Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services/loan-assistance" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <span>Bank Loan Assistance</span>
                </Link>
              </li>
              <li>
                <Link href="/services/grant" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <span>Government Grants (SISFS)</span>
                </Link>
              </li>
              <li>
                <Link href="/services/vc-investment" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <span>VC Investment Readiness</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cap-table" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <span>Cap-Table & Equity Protection</span>
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 2: Navigation & Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-mono text-white text-[11px] uppercase tracking-wider font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-[#C5A059] transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
                  Contact Desk
                </Link>
              </li>


            </ul>
          </div>

          {/* Column 3: Governance (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-mono text-white text-[11px] uppercase tracking-wider font-semibold">
              Governance
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C5A059] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#C5A059] transition-colors">
                  Disclaimer
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. REGULATORY NOTICE & NON-NBFC SAFEGUARDS                */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5 text-[11px] leading-relaxed text-slate-400 font-light">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono font-bold uppercase text-[10px] tracking-wide">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>Important Regulatory Disclosures & Non-NBFC Notice</span>
          </div>
          <p>
            <strong className="text-slate-200 font-normal">Non-Lender Status:</strong> UNFUND is a financial telemetry, credit assessment, and funding facilitation technology platform. UNFUND is <strong>not a Bank, Non-Banking Financial Company (NBFC), or Capital Provider</strong> regulated under the Reserve Bank of India (RBI) Act, and does not engage in direct balance sheet lending, deposit taking, or charge upfront loan sanction guarantees.
          </p>
          <p>
            <strong className="text-slate-200 font-normal">Disbursal Autonomy:</strong> All commercial and startup loan credit decisions, interest rates, and loan disbursals are executed directly by partner banks and RBI-registered financial institutions. Non-dilutive grants (SISFS, BIRAC, iDEX) are evaluated and disbursed directly by respective government ministries and approved incubators subject to official norms.
          </p>
          <p>
            <strong className="text-slate-200 font-normal">Data Privacy (DPDP Act 2023):</strong> Telemetry accessed via Account Aggregator and GSTIN rails is strictly read-only, encrypted, and processed exclusively on user-authorized, revocable consent.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM BASELINE & LEGAL COPYRIGHT                      */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-slate-400">
          <p>© {currentYear} UNFUND. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}