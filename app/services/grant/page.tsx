// app/services/grants/page.tsx
"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Building2,
  FlaskConical,
  ShieldCheck,
  Check,
  CheckCircle2,
  FileText,
  BadgePercent,
  Layers,
  SearchCheck,
  HelpCircle,
  MessageSquare,
  Lock,
} from "lucide-react";

export default function GrantsPage() {
  const schemes = [
    {
      code: "SISFS",
      name: "Startup India Seed Fund Scheme",
      amount: "Up to ₹20 Lakhs",
      type: "100% Non-Dilutive Grant",
      badge: "Early Prototype & Pilot",
      icon: Building2,
      summary:
        "Government grant support designed for early-stage Indian startups developing a working prototype, conducting proof of concept, or running customer trials.",
      points: [
        "Zero equity taken and zero loan EMIs to repay",
        "Open to incorporated companies under 2 years old",
        "Disbursed through approved university and state incubators",
      ],
    },
    {
      code: "BIRAC BIG",
      name: "Biotechnology & Healthcare Ignition",
      amount: "Up to ₹50 Lakhs",
      type: "R&D & Validation Grant",
      badge: "Healthcare & Biotech",
      icon: FlaskConical,
      summary:
        "High-value grant initiative under BIRAC supporting innovators in medtech, diagnostic tools, clean agriculture, and clinical biotechnology.",
      points: [
        "Covers laboratory validation, hardware models, and testing",
        "Zero dilution of founder shares or proprietary patent rights",
        "Structured milestone tranches aligned with research targets",
      ],
    },
    {
      code: "iDEX",
      name: "Innovations for Defence Excellence",
      amount: "Up to ₹1.5 Crores",
      type: "Defence & Aerospace Grant",
      badge: "Deep Tech & Security",
      icon: ShieldCheck,
      summary:
        "Defense ministry backing for deep tech startups building solutions across aerospace, cybersecurity, tactical electronics, and maritime platforms.",
      points: [
        "Substantial non-dilutive capital for mission-critical hardware",
        "Direct pilot and trial avenues with defense procurement units",
        "Designed to scale prototypes through field testing",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Business Assessment",
      icon: SearchCheck,
      desc: "We look at your stage, entity incorporation date, industry vertical, and current prototype to identify matching programs.",
    },
    {
      step: "02",
      title: "Scheme Selection",
      icon: Layers,
      desc: "We shortlist active central and state programs where your startup meets official guidelines and criteria.",
    },
    {
      step: "03",
      title: "Dossier & Pitch Prep",
      icon: FileText,
      desc: "We help format your budget projections, project milestones, and proposal in the exact template evaluators look for.",
    },
    {
      step: "04",
      title: "Submission Guidance",
      icon: CheckCircle2,
      desc: "Submit your final package with clarity, full documentation hygiene, and verified founder credentials.",
    },
  ];

  const faqs = [
    {
      q: "Do government grants require giving up equity or monthly interest?",
      a: "No. Grants are non-dilutive capital. You keep full ownership of your company shares, and there are no monthly interest payments or EMIs.",
    },
    {
      q: "Can very early or newly registered companies apply?",
      a: "Yes. Major programs like the Startup India Seed Fund (SISFS) are designed specifically for DPIIT-recognized startups incorporated within the last 2 years.",
    },
    {
      q: "Why do most grant applications get rejected?",
      a: "Most rejections stem from incorrect category selection, inconsistent budget projections, or incomplete compliance documentation. We help ensure your submission dossier is complete and structured.",
    },
    {
      q: "How does the team help us without filling an on-page form?",
      a: "You can talk directly to our advisory desk through our dedicated contact page to review your company's profile and start your dossier preparation.",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-unfund-navy min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Dark Luxury Palette Matching Loan Page)  */}
      {/* ========================================================= */}
      <section className="relative bg-[#070C1E] text-unfund-cream py-14 sm:py-20 border-b border-unfund-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-unfund-gold/30 text-[11px] font-mono text-unfund-gold">
                CAPITAL & SCHEME ADVISORY
              </span>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Government Grants for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                  Indian Innovators
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light leading-relaxed">
                Secure between ₹20 Lakhs and ₹1.5 Crores in non-repayable government funding. We help you identify the right central and state programs, organize your budget dossiers, and submit structured applications without losing company equity.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-gold" />  Equity Dilution
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-unfund-emerald" /> Zero Loan EMIs
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400" /> DPIIT & Central Schemes
                </span>
              </div>
            </div>

            {/* Right Column: Direct Navigation Action Box (No Form) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white p-7 rounded-2xl border border-[#C5A059]/40 shadow-xl text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-unfund-navy">
                      Grant Advisory Desk
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Speak with our grant matching specialists
                    </p>
                  </div>
                  <Lock className="w-4 h-4 text-unfund-gold" />
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Avoid guesswork and lengthy guidelines. Our advisory desk reviews your stage, product roadmap, and eligible schemes to prepare a grant-ready proposal package.
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
                    href="/services/loan-assistance"
                    className="w-full py-3 px-4 text-xs uppercase tracking-wider font-semibold text-unfund-navy bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#C5A059]/30 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Business Loan Assistance</span>
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>100% Confidential</span>
                  <span>Direct Advisor Guidance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SCHEMES GRID (SISFS, BIRAC BIG, iDEX)                  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
              Major Programs Simplified
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Clear, straightforward government initiatives available for early-stage and deep tech startups across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemes.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#C5A059]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-unfund-navy text-unfund-gold flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#070C1E]/5 text-unfund-navy border border-unfund-gold/30">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-serif font-bold text-unfund-navy">
                        {item.name}
                      </h3>
                      <p className="text-xs font-mono text-[#C5A059] font-medium mt-0.5">
                        {item.code}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-slate-200">
                      <div className="text-xl font-bold font-serif text-unfund-navy">
                        {item.amount}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {item.type}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-light">
                          <Check className="w-3.5 h-3.5 text-unfund-emerald shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="w-full py-2.5 px-3 text-xs font-semibold text-unfund-navy hover:text-white bg-[#FAF8F5] hover:bg-unfund-navy border border-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Check Scheme Suitability</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. 4-STEP PROCESS (Matching Loan Assistance Structure)    */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
              How Our Grant Assistance Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Four steps to move from an early business concept to a compliant, ready-to-submit grant dossier.
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
      {/* 4. COMPARISON MATRIX (Grants vs. Loans vs. Dilution)      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-unfund-navy">
                Capital Comparison
              </h2>
              <p className="text-xs text-slate-600 font-light">
                Why non-dilutive government capital is the safest first step for early entrepreneurs
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-mono text-[10px]">
                    <th className="py-3 px-3">Capital Route</th>
                    <th className="py-3 px-3">Equity Given Away</th>
                    <th className="py-3 px-3">Monthly Repayment</th>
                    <th className="py-3 px-3">Collateral Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="bg-[#070C1E]/5 font-semibold text-unfund-navy">
                    <td className="py-3.5 px-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-unfund-emerald" />
                      Government Grants
                    </td>
                    <td className="py-3.5 px-3">0% (Keep full equity)</td>
                    <td className="py-3.5 px-3">₹0 (Non-repayable)</td>
                    <td className="py-3.5 px-3">None</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Bank Loans</td>
                    <td className="py-3.5 px-3">0%</td>
                    <td className="py-3.5 px-3 text-red-600 font-medium">Monthly Principal + Interest</td>
                    <td className="py-3.5 px-3">Often required</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Angel / VC Investment</td>
                    <td className="py-3.5 px-3 text-red-600 font-medium">10% – 30% permanently</td>
                    <td className="py-3.5 px-3">₹0</td>
                    <td className="py-3.5 px-3">None</td>
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
      <section className="py-14 sm:py-20 border-b border-[#C5A059]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-unfund-navy">
              <HelpCircle className="w-4 h-4 text-[#C5A059]" />
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-unfund-navy">
              Everything You Need to Know
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
      {/* 6. CALL TO ACTION ANCHOR (Direct Links to Contact)        */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-16 bg-[#070C1E] text-unfund-cream border-t border-unfund-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Ready to Discover Your Eligible Grants?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Skip the complexity of hundred-page government circulars. Connect with our team via the contact page and get clear, personalized grant assistance.
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
              href="/services/loan-assistance"
              className="w-full sm:w-auto px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore Loan Assistance</span>
              <ArrowRight className="w-3.5 h-3.5 text-unfund-gold" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}