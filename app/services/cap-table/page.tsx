// app/services/cap-table/page.tsx
"use client";

import Link from "next/link";
import {
  PieChart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  FileText,
  Users,
  Check,
  Scale,
  Sparkles,
  MessageSquare,
  HelpCircle,
  AlertTriangle,
  Layers,
  FileCheck2,
} from "lucide-react";

export default function CapTableServicePage() {
  const capTableDangers = [
    {
      title: "Excessive Pre-Seed Dilution",
      badge: "Series A Red Flag",
      range: "Selling >15–20% Early",
      desc: "Giving away massive equity chunks to local angel networks or informal investors before reaching product-market fit leaves founders diluted and unbackable for top-tier VCs later.",
      points: [
        "Triggers institutional deadweight penalties in future rounds",
        "Disincentivizes founders over multiple financing stages",
        "Leads to down-rounds or painful recapitalizations",
      ],
    },
    {
      title: "Deadweight Non-Active Equity",
      badge: "Governance Trap",
      range: "Advisors/Departed Co-Founders",
      desc: "Unvested shares or high equity percentages held by inactive team members, former co-founders, or passive advisors that provide zero operational value to the business.",
      points: [
        "Creates instant veto and board governance deadlocks",
        "Institutional investors require clawbacks or cleanups before term sheets",
        "Blocks vital equity pools needed for new key executive hires",
      ],
    },
    {
      title: "Complex Debt & Interest Traps",
      badge: "Financial Burden",
      range: "Custom Convertible Debt",
      desc: "Using complex convertible debt instruments with high coupon interest rates or repayment clauses that burden early cash flow instead of pure equity alignment.",
      points: [
        "Adds unnecessary financial liabilities to balance sheets",
        "Causes valuation disputes during subsequent funding events",
        "Diverts focus from business growth to legal negotiations",
      ],
    },
    {
      title: "Mismatched ESOP Pools",
      badge: "Hiring Hurdle",
      range: "Unstructured Option Pools",
      desc: "Creating improperly structured Employee Stock Option Plans without clear vesting cliffs, exercisable timelines, or regulatory alignment under Indian company law.",
      points: [
        "Inability to attract and retain senior leadership talent",
        "Messy tax consequences for early employees upon exercise",
        "Cap-table fragmentation with micro-share allocations",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Ownership & Allocation Audit",
      icon: PieChart,
      desc: "We review your existing shareholding pattern, active founder splits, advisor grants, and past agreements to spot structural red flags.",
    },
    {
      step: "02",
      title: "Dilution Simulation",
      icon: Scale,
      desc: "We run forward-looking models showing how current notes and upcoming rounds dilute founder control through Seed, Series A, and Series B.",
    },
    {
      step: "03",
      title: "iSAFE CCPS Standardization",
      icon: FileCheck2,
      desc: "We draft clean, standardized iSAFE notes (Compulsorily Convertible Preference Shares) under Indian Companies Act and FEMA rules.",
    },
    {
      step: "04",
      title: "Institutional Ready Package",
      icon: ShieldCheck,
      desc: "You receive a transparent, clean cap-table dashboard and deal room asset that institutional VCs and angel networks can evaluate without hesitation.",
    },
  ];

  const faqs = [
    {
      q: "What is an iSAFE note, and why does it protect my equity?",
      a: "An iSAFE (India Simple Agreement for Future Equity) is a founder-friendly instrument structured as Compulsorily Convertible Preference Shares (CCPS). It allows you to raise money without pricing your company prematurely or signing restrictive debt terms, converting into equity only when you raise a priced venture round.",
    },
    {
      q: "How much equity should founders keep before Series A?",
      a: "Ideally, active founding teams should retain at least 65% to 75%+ of their company prior to Series A. Letting deadweight or passive equity exceed 15% in pre-seed phases is one of the primary reasons institutional VCs pass on otherwise good companies.",
    },
    {
      q: "Can you help clean up messy agreements from previous angel rounds?",
      a: "Yes. We evaluate existing shareholder agreements, advisor allocations, and unvested grants, providing clear restructuring frameworks to tidy up your cap-table before institutional due diligence starts.",
    },
    {
      q: "How do we get started without filling out a form on this page?",
      a: "Simply click 'Contact Now' to reach our team directly, or run the free 3-minute audit to see your current cap-table health score.",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-unfund-navy min-h-screen w-full overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative bg-[#070C1E] text-unfund-cream py-10 sm:py-16 lg:py-20 border-b border-unfund-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-3.5 sm:space-y-4">
              <span className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-unfund-gold/30 text-[10px] sm:text-[11px] font-mono text-unfund-gold max-w-full truncate">
                FOUNDER EQUITY PRESERVATION 
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight sm:leading-tight">
                Cap-Table & Equity Protection for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                  Early-Stage Founders
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Avoid giving away too much equity to early investors. We help you issue fair and compliant term sheets using standardized iSAFE CCPS notes, clean up existing ownership structures, and keep your company VC-ready.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-gold shrink-0" /> Standardized iSAFE CCPS
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0" /> Prevent Bad Dilution
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Clean Vesting & ESOPs
                </span>
              </div>
            </div>

            {/* Right Column: Direct Navigation Action Box (No Form) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#C5A059]/40 shadow-xl text-left space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy truncate">
                      Cap-Table Advisory Desk
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                      Direct consultation with equity structuring specialists
                    </p>
                  </div>
                  <Lock className="w-4 h-4 text-unfund-gold shrink-0" />
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Protect your hard work before signing term sheets. Our team audits your dilution curves, models future rounds, and structures compliant investment documents.
                </p>

                <div className="space-y-2.5 pt-1 sm:pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 sm:py-3.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
                  >
                    <span>Contact Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
                  </Link>

                  <Link
                    href="/audit"
                    className="w-full py-2.5 sm:py-3 px-4 text-xs uppercase tracking-wider font-semibold text-unfund-navy bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#C5A059]/30 rounded flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
                  >
                    <span>Run 3-Min Cap-Table Audit</span>
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-slate-500">
                  <span>100% Confidential</span>
                  <span>FEMA & Companies Act Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CAP-TABLE RISKS & COMMON PITFALLS                      */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-unfund-navy">
              Cap-Table Mistakes That Stop Funding
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Most early funding rejections are caused by messy equity structures rather than poor product-market fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capTableDangers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-[#C5A059]/25 shadow-sm space-y-3.5 sm:space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="space-y-1">
                    <span className="inline-block text-[9px] sm:text-[10px] font-mono uppercase px-2 sm:px-2.5 py-0.5 rounded-full bg-[#070C1E]/5 text-unfund-navy border border-unfund-gold/30">
                      {item.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-left xs:text-right shrink-0">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-700">
                      {item.range}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-1">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-light">
                      <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-unfund-navy hover:text-[#C5A059] transition-colors"
                  >
                    <span>Request cap-table restructuring review</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. 4-STEP STRUCTURING PROCESS                             */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-unfund-navy">
              How We Protect Your Equity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Four steps to establish a clean, institutional-grade equity structure that protects founders and satisfies investors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-[#C5A059]/25 shadow-sm space-y-2.5 sm:space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-unfund-navy text-unfund-gold font-mono font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-unfund-navy shrink-0" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-serif font-bold text-unfund-navy">
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
      {/* 4. COMPARISON: iSAFE NOTES VS TRADITIONAL PRICED ROUNDS    */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#C5A059]/30 shadow-sm space-y-5 sm:space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-unfund-navy">
                iSAFE Notes vs. Traditional Priced Equity
              </h2>
              <p className="text-xs text-slate-600 font-light">
                Why modern high-growth startups use standardized notes over complex multi-page shareholder agreements
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Dimension</th>
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Standardized iSAFE (CCPS)</th>
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Traditional Priced Round</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="bg-[#070C1E]/5 font-semibold text-unfund-navy">
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">Immediate Valuation Need</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-emerald-700">Not required (uses valuation cap/discount)</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-red-600">Requires fixed valuation & chartered valuation reports</td>
                  </tr>
                  <tr>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-medium">Legal Cost & Timeline</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-semibold text-emerald-700">Standardized, signed in days with minimal cost</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-slate-600">Weeks of negotiation, expensive legal retainers</td>
                  </tr>
                  <tr>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-medium">Board Seats & Control</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-semibold text-emerald-700">Zero board seats granted until conversion</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-slate-600">Typically grants board representation & vetoes</td>
                  </tr>
                  <tr>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-medium">Debt & Interest Clauses</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-semibold text-emerald-700">Pure equity instrument, zero debt or coupon</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-slate-600">Convertible debentures often accrue interest</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <div className="text-center space-y-1.5 sm:space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-unfund-navy">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
              EQUITY & CAP-TABLE FAQS
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-unfund-navy">
              Common Questions on Equity Preservation
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#C5A059]/25 shadow-xs space-y-1.5 sm:space-y-2"
              >
                <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base text-unfund-navy">
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
      {/* 6. CALL TO ACTION ANCHOR (Direct Links to Contact)        */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#070C1E] text-unfund-cream border-t border-unfund-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Ready to Secure Your Cap-Table?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Ensure you retain control of your business while bringing on early capital. Speak with our team today through our contact desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded text-xs uppercase tracking-wider font-bold text-unfund-navy bg-[#FAF8F5] hover:bg-white border border-[#C5A059] flex items-center justify-center gap-2 transition-colors shadow active:scale-[0.99]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-unfund-navy shrink-0" />
              <span>Contact Now</span>
            </Link>

            <Link
              href="/services/vc-investment"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
            >
              <span>Explore VC Investment</span>
              <ArrowRight className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}