import React from "react";
import Link from "next/link";
import { ShieldAlert, Info, Landmark, CheckCircle, Scale } from "lucide-react";

export const metadata = {
  title: "Regulatory Disclaimers & Non-NBFC Disclosure | UNFUND",
  description: "Official legal and regulatory status of UNFUND under Indian financial laws.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-unfund-navy py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#C5A059]/30">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#C5A059]/30 pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070C1E]/5 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
            <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
            LEGAL TRANSPARENCY & STATUTORY DISCLOSURES
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-unfund-navy">
            Regulatory & Non-NBFC Disclaimers
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Last Updated: November 2026 • Effective Immediately
          </p>
        </div>

        {/* Primary Non-NBFC Callout */}
        <div className="p-6 rounded-2xl bg-[#070C1E] text-unfund-cream border border-[#C5A059]/40 shadow-md space-y-4">
          <div className="flex items-center gap-2.5 text-unfund-gold font-mono font-bold text-xs uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-unfund-gold" />
            Mandatory Non-Lender Statutory Notice
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
            <strong>UNFUND is NOT a Bank, Non-Banking Financial Company (NBFC), or Direct Capital Provider</strong> regulated under Section 45-IA of the Reserve Bank of India (RBI) Act, 1934. UNFUND does not operate a lending balance sheet, does not disburse loans, does not accept deposits, and does not charge upfront loan sanction or approval guarantees.
          </p>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            UNFUND is exclusively a technology, credit assessment, financial telemetry, and deal-readiness enablement platform. All credit approvals, interest rates (ROI), processing fees, and disbursements are executed strictly by authorized partner banks, RBI-registered NBFCs, or designated government grant authorities at their sole discretion.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
          
          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C5A059]" />
              1. Loan Assistance & DSA Role Disclosure
            </h2>
            <p>
              In our capacity as a loan assistance and sourcing partner, UNFUND assists businesses and individual applicants by packaging financial data into institutional-grade credit dossiers. Any facilitation of banking products adheres to the <strong>RBI Master Directions on Digital Lending (DLG)</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>No loan disbursements or repayments are routed through any proprietary bank accounts of UNFUND. All transactions occur directly between the borrower and the regulated entity.</li>
              <li>Borrowers receive a Key Fact Statement (KFS) directly from the lending bank or NBFC prior to digital contract execution.</li>
              <li>UNFUND does not guarantee loan approval or specific interest rate slabs. Underwriting policies remain entirely autonomous to lending partners.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#C5A059]" />
              2. Government Grant Matching Disclaimer
            </h2>
            <p>
              UNFUND provides automated matching algorithms for government assistance schemes including, but not limited to, the <strong>Startup India Seed Fund Scheme (SISFS)</strong>, <strong>BIRAC BIG</strong>, and <strong>iDEX</strong>. 
            </p>
            <p>
              UNFUND is an independent technology platform and is not affiliated, sponsored, endorsed, or operated by the Department for Promotion of Industry and Internal Trade (DPIIT), the Ministry of Commerce and Industry, or any incubator selection committee. Final selection, milestone verification, and grant tranches remain subject to official ministerial guidelines and incubator evaluation panels.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C5A059]" />
              3. VC Readiness & Cap-Table Diagnostics
            </h2>
            <p>
              The Fundability Scorecard (&fnof;), iSAFE CCPS modeling, and diagnostic reports produced by UNFUND do not constitute investment advice, equity underwriting, or solicitation of securities under SEBI regulations. 
            </p>
            <p>
              UNFUND is not a SEBI-registered Merchant Banker or Stockbroker. Calculations and dilution curves serve as informational engineering models designed to assist founders and corporate advisors during private capital preparations.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-base sm:text-lg font-serif font-bold text-unfund-navy flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C5A059]" />
              4. Accuracy of Telemetry & External Sources
            </h2>
            <p>
              Verification outputs rely on data fetched with explicit consent via the RBI Account Aggregator framework, the GSTN portal, Ministry of Corporate Affairs (MCA) registries, and credit bureaus. While UNFUND deploys bank-grade sanity models, we do not warrant the absolute completeness or operational uptime of third-party public databases and APIs.
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