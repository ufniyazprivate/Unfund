// app/terms/page.tsx
import React from "react";
import Link from "next/link";
import { FileText, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service | UNFUND",
  description: "Terms governing use of the UNFUND deal-readiness platform, algorithms, and advisory desk.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-unfund-navy py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#C5A059]/30">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#C5A059]/30 pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070C1E]/5 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
            <FileText className="w-4 h-4 text-[#C5A059]" />
            PLATFORM AGREEMENT
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-unfund-navy">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Governing the use of UNFUND's SaaS engine, diagnostic tools, and advisory services
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
          
          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the services provided by UNFUND (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you (&ldquo;User&rdquo;, &ldquo;Founder&rdquo;, or &ldquo;Borrower&rdquo;) agree to be legally bound by these Terms of Service. If you do not accept these terms, you must discontinue platform use immediately.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              2. Scope of Services & Non-Brokerage
            </h2>
            <p>
              UNFUND provides automated business health audits, cap-table modeling, government scheme matching, and loan assistance packaging. 
            </p>
            <p>
              You acknowledge that UNFUND is a technology provider and business facilitation partner. UNFUND does not act as an underwriter, investment banker, public stock exchange, or regulated moneylender. Nothing provided on the platform guarantees investment checks, debt disbursals, or government subsidies.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#C5A059]" />
              3. User Representations & Data Authenticity
            </h2>
            <p>
              When uploading metrics or authorizing telemetry access, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>All company documents, GST figures, bank balances, and cap-table distributions submitted are true, authentic, and free from deliberate misrepresentation.</li>
              <li>You hold legal authority on behalf of the incorporated entity to grant read-only consent and enter commercial advisory discussions.</li>
              <li>You shall not transmit automated scrapers, malicious scripts, or reverse-engineer the proprietary Fundability Scorecard (&fnof;) or iSAFE calculation models.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              4. Proprietary Intellectual Property
            </h2>
            <p>
              All proprietary algorithms, code, user interface designs, mathematical scoring models (&fnof;-Score), documentation templates, and trademarks displayed on UNFUND remain the sole intellectual property of UNFUND. Users are granted a limited, revocable license to view and download their own audited investment dossiers and verification certificates.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              5. Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall UNFUND, its directors, employees, or partners be liable for any direct, indirect, incidental, consequential, or punitive damages arising from loan rejections by partner banks, grant disqualifications by government committees, or investor diligence outcomes. Services are delivered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service and any contractual discussions shall be governed by and construed in accordance with the laws of the Republic of India. The courts of competent jurisdiction in India shall have exclusive jurisdiction over any disputes arising out of the use of this platform.
            </p>
          </section>

        </div>

        {/* Back Navigation */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <Link
            href="/"
            className="text-xs font-mono text-unfund-navy hover:text-[#C5A059] transition-colors underline font-semibold"
          >
            &larr; Return to  Home
          </Link>
        </div>

      </div>
    </main>
  );
}