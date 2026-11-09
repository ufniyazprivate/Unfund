// app/services/loan-assistance/page.tsx
"use client";

import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building2,
  FileText,
  Users,
  Check,
  Info,
  BadgeCheck,
  Percent,
  Receipt,
  Scale,
  Sparkles,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export default function LoanAssistancePage() {
  const loanCategories = [
    {
      title: "Collateral-Free Startup Debt (CGTMSE)",
      badge: "Govt Backed Scheme",
      range: "₹10 Lakhs – ₹5 Crores",
      roi: "8.5% – 11.5% p.a.",
      desc: "Credit Guarantee Fund Trust for Micro and Small Enterprises coverage allowing high-growth startups to access working capital and expansion funds without pledging personal real estate or hard collateral.",
      features: [
        "Up to 85% credit guarantee covered by central trust",
        "Suitable for registered private limited and LLP entities",
        "Fast-tracked via partner public & private sector banks",
      ],
    },
    {
      title: "Unsecured Business Term Loans",
      badge: "Operational Scale",
      range: "₹5 Lakhs – ₹1 Crore",
      roi: "11% – 16% p.a.",
      desc: "Fixed-tenure funding designed for healthy-cashflow companies looking to bridge marketing cycles, inventory buildup, or team hires without waiting on equity diligence.",
      features: [
        "Evaluated on last 12-month GST and banking turnover",
        "Repayment tenures from 12 to 48 months",
        "Minimal balance sheet leverage covenants",
      ],
    },
    {
      title: "Working Capital & Cash Credit (OD/CC)",
      badge: "Liquidity Lines",
      range: "₹20 Lakhs – ₹10 Crores",
      roi: "Bank Base Rate + Spread",
      desc: "Revolving lines of credit that mirror your receivables cycle, ensuring day-to-day operations stay uninterrupted while vendor payments clear.",
      features: [
        "Pay interest only on the actual amount drawn down",
        "Drawdown limit pegged directly to operational turnover",
        "Flexible renewal and collateral options",
      ],
    },
    {
      title: "Commercial & Retail Property Financing",
      badge: "Asset & Expansion",
      range: "₹50 Lakhs – ₹25 Crores",
      roi: "8.25% – 10.5% p.a.",
      desc: "Long-term mortgage financing for corporate office acquisitions, warehouse setups, or commercial real estate purchases with structured repayment schedules.",
      features: [
        "Extended repayment horizons up to 15 years",
        "Higher loan-to-value (LTV) ratios up to 75%",
        "Balance transfer options with top-up availability",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Financial Intake & Data Sanity",
      icon: Building2,
      desc: "We look over your last 12 months of GST returns, banking statements, and ITR filings to verify clean debt-service eligibility.",
    },
    {
      step: "02",
      title: "Credit Health & DSCR Audit",
      icon: Scale,
      desc: "We compute your Debt-Service-Coverage Ratio (DSCR), evaluate your credit bureau status, and identify what bank credit committees will question.",
    },
    {
      step: "03",
      title: "Institutional Document Prep",
      icon: ShieldCheck,
      desc: "We compile a structured credit proposal report formatted according to authorized bank underwriting standards.",
    },
    {
      step: "04",
      title: "Bank & Sourcing Alignment",
      icon: Users,
      desc: "We route and guide your file to authorized partner bank loan officers and registered institutions suited to your profile.",
    },
  ];

  const faqs = [
    {
      q: "Does UNFUND directly lend money or charge upfront approval fees?",
      a: "No. UNFUND is a financial assistance and deal-readiness platform. We do not lend funds, issue credit, or charge upfront loan sanction guarantees. All sanctioning and disbursals are executed directly by partner banks and RBI-registered institutions.",
    },
    {
      q: "How does the CGTMSE collateral-free scheme work?",
      a: "Under the CGTMSE framework, the government trust provides credit guarantee coverage (up to 75%–85%) to partner banks, enabling eligible MSMEs and startups to access debt without pledging personal residential or commercial real estate.",
    },
    {
      q: "What documents are required to start reviewing our profile?",
      a: "Typically, lenders require 12 months of current bank statements, 12 to 24 months of GST returns (GSTR-3B/1), audited balance sheets or provisional P&Ls, PAN/incorporation documents, and KYC of directors.",
    },
    {
      q: "How do we get started without a form on this page?",
      a: "Simply visit our dedicated Contact Page or run the 3-minute audit to schedule an advisory consultation with our loan assistance team.",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-unfund-navy min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Clean, Deep Imperial Navy Palette)       */}
      {/* ========================================================= */}
      <section className="relative bg-[#070C1E] text-unfund-cream py-14 sm:py-20 border-b border-unfund-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Overview */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-unfund-gold/30 text-[11px] font-mono text-unfund-gold">
                <Landmark className="w-3.5 h-3.5 text-unfund-gold" />
                LOAN ASSISTANCE & BANK GUIDANCE
              </span>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Bank Loan Support for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                  Growing Businesses
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light leading-relaxed">
                We organize your financial records, audit your debt-service coverage, prepare bank-ready credit dossiers, and assist your company in applying for business loans and collateral-free government credit schemes.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-gold" /> CGTMSE Scheme Sourcing
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-emerald" /> Bank Dcoument Preparation
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> Authorized Institutional Connect
                </span>
              </div>
            </div>

            {/* Right Column: Direct Navigation Action Box (No Form) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white p-7 rounded-2xl border border-[#C5A059]/40 shadow-xl text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-unfund-navy">
                      Loan Advisory Desk
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Direct consultation with loan specialists
                    </p>
                  </div>
                  <Lock className="w-4 h-4 text-unfund-gold" />
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Have questions about collateral-free schemes, credit ratings, or bank underwriting standards? Our team assists you from file organization to bank meetings.
                </p>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Contact Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-unfund-gold" />
                  </Link>

                  <Link
                    href="/audit"
                    className="w-full py-3 px-4 text-xs uppercase tracking-wider font-semibold text-unfund-navy bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#C5A059]/30 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Check Readiness Score</span>
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Transparent Process</span>
                  <span>Non-NBFC Facilitation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ELABORATED LOAN ASSISTANCE PORTFOLIO                   */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
              Comprehensive Loan Assistance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              We assist companies across working capital lines, government-guaranteed credit, and asset mortgages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanCategories.map((loan, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#C5A059]/25 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#070C1E]/5 text-unfund-navy border border-unfund-gold/30">
                      {loan.badge}
                    </span>
                    <h3 className="text-base font-serif font-bold text-unfund-navy mt-1.5">
                      {loan.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-unfund-navy">
                      {loan.range}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Indicative: {loan.roi}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {loan.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {loan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-light">
                      <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-unfund-navy hover:text-[#C5A059] transition-colors"
                  >
                    <span>Discuss eligibility with our advisors</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW IT WORKS (4 STEPS)                                 */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
              How Our Assistance Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Turning raw business accounts into a structured, bank-ready credit proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#C5A059]/25 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-unfund-navy text-unfund-gold font-mono font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <IconComp className="w-5 h-5 text-unfund-navy" />
                  </div>
                  <h3 className="text-sm font-serif font-bold text-unfund-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. UNDERWRITING & DOSSIER CHECKLIST                       */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-unfund-navy">
                What We Organize in Your Bank Dossier
              </h2>
              <p className="text-xs text-slate-600 font-light">
                Bank loan committees review structured metrics, not scattered folders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-unfund-navy">
                  <Receipt className="w-4 h-4 text-unfund-gold" />
                  Cash Flow & DSCR
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                  Calculation of Debt-Service-Coverage Ratios from banking statements to demonstrate loan service capacity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-unfund-navy">
                  <Percent className="w-4 h-4 text-unfund-gold" />
                  GST vs. Bank Reconciliation
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                  Alignment check between GST filings and current account receipts to preempt auditor discrepancies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-xs text-unfund-navy">
                  <BadgeCheck className="w-4 h-4 text-unfund-gold" />
                  Compliance Hygiene Check
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                  Verification of corporate filings, director DIN statuses, and bureau scores to avoid last-mile underwriting hurdles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FAQS                                                   */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-unfund-navy">
              <HelpCircle className="w-4 h-4 text-[#C5A059]" />
              LOAN ASSISTANCE FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-unfund-navy">
              Questions Founders Frequently Ask
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#C5A059]/25 shadow-xs space-y-2"
              >
                <h3 className="font-serif font-bold text-sm sm:text-base text-unfund-navy">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION ANCHOR                                  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-16 bg-[#070C1E] text-unfund-cream border-t border-unfund-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Need Business Loan Guidance?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Connect directly with our loan assistance desk to review your eligibility and structure your documents for banking partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-unfund-navy bg-[#FAF8F5] hover:bg-white border border-[#C5A059] flex items-center justify-center gap-2 transition-colors shadow"
            >
              <MessageSquare className="w-3.5 h-3.5 text-unfund-navy" />
              <span>Connect Now</span>
            </Link>

            <Link
              href="/services/grant"
              className="w-full sm:w-auto px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore Government Grants</span>
              <ArrowRight className="w-3.5 h-3.5 text-unfund-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. MANDATORY NON-NBFC REGULATORY DISCLAIMER               */}
      {/* ========================================================= */}
    
    </main>
  );
}