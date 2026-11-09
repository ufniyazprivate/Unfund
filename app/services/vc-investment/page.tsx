// app/services/vc-investment/page.tsx
"use client";

import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building2,
  FileText,
  Users,
  Check,
  Info,
  Layers,
  SearchCheck,
  HelpCircle,
  MessageSquare,
  Scale,
  PieChart,
  Award,
} from "lucide-react";

export default function VcInvestmentPage() {
  const investmentStages = [
    {
      code: "SEED & PRE-SERIES A",
      name: "Institutional Seed Round",
      amount: "₹1 Crore – ₹8 Crores",
      instrument: "Standardized iSAFE (CCPS)",
      badge: "Early Traction & Pilots",
      icon: Building2,
      summary:
        "Built for startups with initial revenue, active early customers, or validated product-market fit looking to scale without messy legal hurdles.",
      points: [
        "Protects your equity using standard iSAFE notes (no complex debt clauses)",
        "Pre-vetted data room ready for angel networks and micro-VC funds",
        "Prevents giving away too much early ownership to passive investors",
      ],
    },
    {
      code: "SERIES A & BEYOND",
      name: "Growth Capital Round",
      amount: "₹8 Crores – ₹40+ Crores",
      instrument: "Priced Equity (Series A CCPS)",
      badge: "Proven Business Model",
      icon: TrendingUp,
      summary:
        "Targeted at businesses with consistent monthly revenue, strong customer retention, and clear expansion plans across domestic or international markets.",
      points: [
        "In-depth unit economics review (Customer Lifetime Value vs Acquisition Cost)",
        "Verified bank and tax reconciliation to speed up VC due diligence",
        "Structured cap-table clean-up before institutional term sheet signing",
      ],
    },
    {
      code: "STRATEGIC & FAMILY OFFICE",
      name: "Syndicate & Angel Capital",
      amount: "₹50 Lakhs – ₹3 Crores",
      instrument: "Direct Equity / Convertible Notes",
      badge: "Industry Mentorship",
      icon: Award,
      summary:
        "Connects founders directly with sector-specific operators, corporate venture arms, and family offices providing hands-on operational help.",
      points: [
        "Access to experienced industry leaders who open sales doors",
        "Flexible check sizes tailored to bridge rounds or specialized tech pilots",
        "Direct founder-to-investor presentations with verified operational data",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Cap-Table & Health Check",
      icon: PieChart,
      desc: "We review your company ownership to make sure no inactive founders or early advisors hold too much equity, keeping your business attractive to top VCs.",
    },
    {
      step: "02",
      title: "Data Verification",
      icon: SearchCheck,
      desc: "We verify your sales numbers against actual bank and GST records so investors can trust your metrics on day one without long diligence delays.",
    },
    {
      step: "03",
      title: "Document & Deck Prep",
      icon: FileText,
      desc: "We organize your pitch deck, financial model, and legal documents into an institutional-standard data room that matches what investment committees expect.",
    },
    {
      step: "04",
      title: "Curated Investor Introductions",
      icon: Users,
      desc: "We connect your verified profile directly to aligned venture capital funds, micro-VCs, and angel networks actively looking for your sector.",
    },
  ];

  const faqs = [
    {
      q: "What is an iSAFE agreement, and why do founders prefer it?",
      a: "An iSAFE (India Simple Agreement for Future Equity) allows startups to raise early capital quickly without fixing an immediate company valuation. It converts into equity shares during a future funding round, saving legal fees and preventing unfair early dilution.",
    },
    {
      q: "Why do institutional VCs reject otherwise good startups?",
      a: "Most early rejections happen due to messy cap-tables (selling too much equity too early to inactive parties) or unverified financial claims. We fix these structural issues beforehand so your business is deal-ready.",
    },
    {
      q: "Does UNFUND charge upfront investment approval or broker fees?",
      a: "No. UNFUND is a deal-readiness and financial telemetry platform. We do not charge upfront check guarantees, nor do we operate as an unauthorized middleman. We help prepare your business records to VC-grade standards.",
    },
    {
      q: "How can I get started?",
      a: "Click 'Contact Now' to connect directly with our advisory team or run our quick 3-minute audit to see if your cap-table and financials are venture-ready.",
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
                <TrendingUp className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
                VENTURE CAPITAL & DEAL READINESS
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight sm:leading-tight">
                Venture Capital Support for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                  High-Growth Founders
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Raise equity capital from institutional VCs and angel networks without compromising your cap-table. We verify your business metrics, organize an institutional data room, and connect you with the right investors.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-gold shrink-0" /> Clean Cap-Table Protection
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0" /> Standardized iSAFE Notes
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> VC-Ready Data Rooms
                </span>
              </div>
            </div>

            {/* Right Column: Direct Navigation Action Box (No Form) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#C5A059]/40 shadow-xl text-left space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy truncate">
                      VC Advisory Desk
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                      Talk directly to our venture preparation team
                    </p>
                  </div>
                  <Lock className="w-4 h-4 text-unfund-gold shrink-0" />
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Skip the endless cold emails and broken pitch formats. Our team checks your equity structure, audits your metrics, and guides you on raising smart capital.
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
                    <span>Check Fundability Score</span>
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-slate-500">
                  <span>100% Confidential</span>
                  <span>Founder-First Guidance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INVESTMENT STAGES                                      */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-unfund-navy">
              Venture Capital Funding Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Clear funding stages tailored to where your business stands today and where you plan to take it next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {investmentStages.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#C5A059]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 sm:space-y-5"
                >
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-unfund-navy text-unfund-gold flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase px-2 sm:px-2.5 py-1 rounded-full bg-[#070C1E]/5 text-unfund-navy border border-unfund-gold/30 truncate">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-unfund-navy leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono text-[#C5A059] font-medium mt-0.5">
                        {item.code}
                      </p>
                    </div>

                    <div className="p-3 sm:p-3.5 bg-[#FAF8F5] rounded-xl border border-slate-200">
                      <div className="text-lg sm:text-xl font-bold font-serif text-unfund-navy">
                        {item.amount}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                        Typical Instrument: {item.instrument}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-100">
                      {item.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-light">
                          <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="w-full py-2.5 px-3 text-xs font-semibold text-unfund-navy hover:text-white bg-[#FAF8F5] hover:bg-unfund-navy border border-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors active:scale-[0.99]"
                    >
                      <span>Contact Now</span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. 4-STEP PROCESS                                         */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-unfund-navy">
              How Our VC Assistance Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Four clear steps to turn your business numbers into an institutional-grade investment package.
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
      {/* 4. COMPARISON MATRIX (VC vs. Bank Loans vs. Grants)       */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#C5A059]/30 shadow-sm space-y-5 sm:space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif font-bold text-unfund-navy">
                When Should You Raise Venture Capital?
              </h2>
              <p className="text-xs text-slate-600 font-light">
                Compare VC equity investment with non-dilutive government grants and business bank debt
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[500px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-mono text-[9px] sm:text-[10px]">
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Funding Type</th>
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Ownership Impact</th>
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Monthly Repayment</th>
                    <th className="py-2.5 sm:py-3 px-2.5 sm:px-3">Best Used For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="bg-[#070C1E]/5 font-semibold text-unfund-navy">
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 flex items-center gap-1.5 sm:gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-unfund-emerald shrink-0" />
                      <span>Venture Capital (VC)</span>
                    </td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">Give 10% – 20% equity</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">₹0 (Zero monthly EMIs)</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">Rapid scaling, tech hiring & marketing</td>
                  </tr>
                  <tr>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-medium">Government Grants</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">0% (Keep full equity)</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">₹0 (Non-repayable)</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">Prototypes, R&D, and early testing</td>
                  </tr>
                  <tr>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 font-medium">Bank Loans</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">0%</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3 text-red-600 font-medium">Monthly Principal + Interest</td>
                    <td className="py-3 sm:py-3.5 px-2.5 sm:px-3">Working capital & physical assets</td>
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
              COMMON QUESTIONS
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-unfund-navy">
              Everything You Need to Know
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
              Ready to Raise Venture Capital?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Don't let a disorganized cap-table or unverified numbers slow down your funding round. Speak directly with our advisory desk today.
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
              href="/services/grants"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
            >
              <span>Explore Government Grants</span>
              <ArrowRight className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. REGULATORY & PLATFORM NOTICE                           */}
      {/* ========================================================= */}
      
    </main>
  );
}