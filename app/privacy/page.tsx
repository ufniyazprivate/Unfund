// app/privacy/page.tsx
import React from "react";
import Link from "next/link";
import { Lock, Shield, Eye, Database, FileCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & DPDP Alignment | UNFUND",
  description: "How UNFUND collects, processes, and protects financial telemetry under the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-unfund-navy py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#C5A059]/30">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#C5A059]/30 pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070C1E]/5 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            DATA FIDUCIARY STANDARDS
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-unfund-navy">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Compliant with the Digital Personal Data Protection (DPDP) Act, 2023 & CERT-In Directives
          </p>
        </div>

        {/* Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1 shadow-xs">
            <div className="font-serif font-bold text-xs text-unfund-navy flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              Read-Only Access
            </div>
            <p className="text-[11px] text-slate-500 font-light">
              Zero transaction rights. Bank statements are accessed exclusively through consent-based Account Aggregators.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1 shadow-xs">
            <div className="font-serif font-bold text-xs text-unfund-navy flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#C5A059]" />
              Isolated Storage
            </div>
            <p className="text-[11px] text-slate-500 font-light">
              Database isolation via cryptographic tokens and Row-Level Security (RLS) policies.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1 shadow-xs">
            <div className="font-serif font-bold text-xs text-unfund-navy flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              Zero Data Brokering
            </div>
            <p className="text-[11px] text-slate-500 font-light">
              We never sell, lease, or monetize your cap-tables or financial telemetry to unsolicited third parties.
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
          
          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy">
              1. Information We Collect
            </h2>
            <p>
              As a Data Fiduciary under the DPDP Act 2023, we collect only data strictly necessary for providing deal-readiness diagnostics, credit evaluations, and grant matching:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Corporate & Identity Details:</strong> Company Legal Name, CIN/LLPIN, Director DINs, official email address, mobile contact, and GSTIN registration numbers.</li>
              <li><strong>Financial Telemetry (Consent-Driven):</strong> Cash flow statements, debt profiles, and bank transaction summaries retrieved strictly in read-only format via RBI-regulated Account Aggregators.</li>
              <li><strong>Cap-Table & Equity Architecture:</strong> Founder shareholding, option pools (ESOPs), convertible debt notes, and past investment instruments uploaded for audit.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy">
              2. How Data Is Processed and Used
            </h2>
            <p>Your data is processed strictly for legitimate uses:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Calculating the 4-Vector Fundability Scorecard (&fnof;) and cap-table health decay scores.</li>
              <li>Compiling bankable credit dossiers formatted for partner bank underwriting.</li>
              <li>Evaluating technical eligibility against central/state grant requirements (SISFS, BIRAC, iDEX).</li>
              <li>Transmitting loan applications to partner banks or institutional VCs <strong>strictly upon your explicit affirmative action</strong>.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy">
              3. Data Retention & Revocation of Consent
            </h2>
            <p>
              In accordance with the DPDP Act 2023, data principals retain complete rights over their data. You may withdraw consent or request complete erasure of your business dossier and telemetry snapshots at any time by contacting us directly at <a href="mailto:support@unfund.in" className="text-unfund-navy font-semibold underline">support@unfund.in</a>. Data is automatically purged from active audit instances upon account deactivation, except where statutory compliance under tax or corporate law mandates retention.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy">
              4. Cybersecurity & Localization
            </h2>
            <p>
              All customer data, operational logs, and document stores are localized within Indian data center jurisdictions in alignment with CERT-In directions. We enforce Transport Layer Security (TLS 1.3), AES-256 data encryption at rest, and strict API token authorization models.
            </p>
          </section>

        </div>

        {/* Back Navigation */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <Link
            href="/"
            className="text-xs font-mono text-unfund-navy hover:text-[#C5A059] transition-colors underline font-semibold"
          >
            &larr; Return to Home
          </Link>
        </div>

      </div>
    </main>
  );
}