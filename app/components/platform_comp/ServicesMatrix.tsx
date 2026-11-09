"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Award,
  CreditCard,
  Scale,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ServicesMatrix() {
  const coreServices = [
    {
      id: "bank-debt",
      title: "Startup Loan & Bank Assistance",
      icon: Landmark,
      tag: "DSA & Debt Sourcing",
      badgeColor: "bg-unfund-navy text-unfund-gold border-unfund-gold/30",
      description:
        "We convert bank telemetry and GST filings into bankable credit dossiers, matching eligible startups directly with partner banks for CGTMSE collateral-free working capital.",
      features: [
        "CGTMSE Collateral-Free Credit Match",
        "Automated Bank Credit Dossier Engine",
        "Partner DSA & Lender Network Dispatch",
      ],
      systemIntegration: "Setu Account Aggregator API + GSTN Portal",
      link: "/services/loan-assistance",
    },
    {
      id: "grants-schemes",
      title: "Government Schemes & Grants",
      tag: "Non-Dilutive Capital",
      icon: Award,
      badgeColor: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30",
      description:
        "Access ₹10L–₹50L in non-dilutive government capital. Our engine evaluates DPIIT recognition and scheme criteria to auto-prepare error-free application packages.",
      features: [
        "Startup India Seed Fund (SISFS)",
        "BIRAC BIG (Biotech & Deeptech)",
        "iDEX Defense & Innovation Grants",
      ],
      systemIntegration: "DPIIT Portal Sync + Rules Engine",
      link: "/grants",
    },
    {
      id: "cibil-credit",
      title: "Credit Bureau & CIBIL Fetch",
      tag: "Credit Profile Verification",
      icon: CreditCard,
      badgeColor: "bg-blue-950/80 text-blue-400 border-blue-500/30",
      description:
        "Automated fetching and parsing of founder CIBIL and Experian commercial credit reports to ensure zero friction during bank credit committee reviews.",
      features: [
        "Founder CIBIL Score Analysis",
        "Experian Commercial Credit Check",
        "Instant Credit Health Diagnostics",
      ],
      systemIntegration: "Bureau API Gateways (Experian / CIBIL)",
      link: "/audit",
    },
    {
      id: "cap-table-isafe",
      title: "Cap-Table & iSAFE Compliance",
      tag: "Equity Safeguard",
      icon: Scale,
      badgeColor: "bg-amber-950/80 text-amber-400 border-amber-500/30",
      description:
        "Protect founder equity during pre-seed rounds. We eliminate deadweight angel terms and structure Companies Act and FEMA compliant iSAFE CCPS instruments.",
      features: [
        "Deadweight Equity Elimination",
        "iSAFE CCPS Instrument Generator",
        "Companies Act & FEMA Compliance",
      ],
      systemIntegration: "FastAPI iSAFE Legal Valuation Engine",
      link: "/isafe-standard",
    },
    {
      id: "commercial-debt",
      title: "Commercial & Business Loans",
      tag: "Working Capital Support",
      icon: Building2,
      badgeColor: "bg-purple-950/80 text-purple-400 border-purple-500/30",
      description:
        "Tailored loan assistance for commercial and business debt expansion, helping growing startups secure machinery finance, invoice discounting, and term loans.",
      features: [
        "Invoice & Purchase Order Discounting",
        "Machinery & Equipment Credit",
        "Structured Commercial Term Loans",
      ],
      systemIntegration: "GST Invoice Reconciliation Engine",
      link: "/services/loan-assistance",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#C5A059]/20">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#0A1128 1px, transparent 1px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-unfund-navy/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-navy font-bold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-unfund-gold" />
            <span>5 CORE SERVICES MATRIX</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-unfund-navy tracking-tight max-w-3xl leading-tight">
            Natively Integrated <span className="text-unfund-gold">Funding Services</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-sans font-light leading-relaxed">
            Every service operates natively within the UNFUND pipeline—enabling automated data verification, legal compliance, and capital matching.
          </p>
        </div>

        {/* 5-Card Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-[#C5A059]/30 hover:border-unfund-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gold Top Edge Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-unfund-gold/0 to-transparent group-hover:via-unfund-gold transition-all duration-300" />

                <div className="space-y-4">
                  {/* Service Card Top */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-unfund-navy text-unfund-gold group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-serif font-bold text-unfund-navy group-hover:text-unfund-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed mt-2 font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs font-mono text-slate-700">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-unfund-emerald flex-shrink-0" />
                        <span className="text-[11px] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integration Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="truncate max-w-[200px]" title={service.systemIntegration}>
                    <strong className="text-unfund-navy">Engine:</strong> {service.systemIntegration}
                  </span>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-unfund-navy hover:text-unfund-gold transition-colors flex-shrink-0"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5 text-unfund-gold" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Integrated Platform Trust Stamp Card */}
          <div className="bg-unfund-navy text-unfund-cream p-6 rounded-2xl border border-unfund-gold/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-unfund-gold/30 bg-unfund-dark p-1">
                  <Image src="/icon-unfund.png" alt="UNFUND Seal" fill className="object-contain" />
                </div>
                <span className="text-[10px] font-mono text-unfund-gold uppercase font-bold tracking-wider">
                  Read-Only Rails
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-white">
                Unified  Pipeline
              </h3>

              <p className="text-xs text-slate-300 font-sans leading-relaxed font-light">
                All 5 services consume the same underlying encrypted data layer. Once connected, your financial records automatically route across debt, grant, and equity channels.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-unfund-emerald">
                <ShieldCheck className="w-3.5 h-3.5" /> Read-Only Audit Rails
              </span>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}