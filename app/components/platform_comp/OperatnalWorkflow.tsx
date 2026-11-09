"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  Cpu,
  FileCheck,
  Share2,
  Lock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Terminal,
} from "lucide-react";

export default function OperationalWorkflow() {
  const [activeTab, setActiveTab] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "Secure Data Ingestion",
      tagline: "Consent-Driven Read Rails",
      icon: Database,
      badge: "Setu AA + GSTN Portal",
      summary:
        "Founders connect operational financial records via RBI-licensed Account Aggregator framework (Setu AA) and GSTN OAuth portals. No manual PDF uploads or edited spreadsheets.",
      details: [
        "Read-Only RBI Account Aggregator OAuth Consent",
        "Automated GSTIN Revenue & Invoice Reconciliation",
        "Encrypted Supabase Row-Level Security (RLS) Isolation",
      ],
      techBadge: "OAuth 2.0 / AA Gateway",
    },
    {
      step: "02",
      title: "4-Vector Algorithmic Engine",
      tagline: "FastAPI Scoring Core",
      icon: Cpu,
      badge: "0–100 Fundability Score",
      summary:
        "The Python (FastAPI) backend parses bank cash flows, GST filings, and cap-table structures to calculate an objective 0–100 Fundability Index.",
      details: [
        "Cap-Table Dilution & Deadweight Analysis",
        "Unit Economics & Revenue Reconciliation",
        "DPIIT & Compliance Hygiene Verification",
      ],
      techBadge: "Python FastAPI Microservice",
    },
    {
      step: "03",
      title: "Automated VC Data Room",
      tagline: "Tamper-Proof Verification",
      icon: FileCheck,
      badge: "Live Dynamic Badge",
      summary:
        "The platform compiles audited financial metrics into a standardized investment package and issues a live, badged URL (unfund.in/verify/startup-id).",
      details: [
        "Standardized Institutional VC PDF & JSON Package",
        "Live API-backed Verification Badge for Pitch Decks",
        "Supabase S3-Compatible Encrypted Vault Storage",
      ],
      techBadge: "S3 Vault + Dynamic Badging",
    },
    {
      step: "04",
      title: "Direct Distribution & Matching",
      tagline: "Targeted Capital Routing",
      icon: Share2,
      badge: "Debt, Grants & VC Pipeline",
      summary:
        "Verified startup profiles automatically match with non-dilutive government schemes (SISFS, BIRAC), bank debt partners, or institutional VC buy-side pipelines.",
      details: [
        "Non-Dilutive Grant Match (₹10L–₹50L SISFS & BIRAC)",
        "Bank DSA Credit Dossier Dispatch for CGTMSE Loans",
        "Buy-Side Institutional VC & Angel Syndicate Pipeline",
      ],
      techBadge: "Rules Engine + Lender APIs",
    },
  ];

  return (
    <section className="relative bg-[#070C1E] text-unfund-cream py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-unfund-gold/30">
      
      {/* Background Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
            backgroundSize: `32px 32px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-gold font-bold tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5 text-unfund-gold" />
            <span> OPERATIONAL WORKFLOW</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight max-w-3xl leading-tight">
            How The System <span className="text-unfund-gold">Processes Data</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans font-light leading-relaxed">
            From raw bank telemetry to verified investment deal rooms—experience our end-to-end automated architecture.
          </p>
        </div>

        {/* Interactive Step Selector Tabs (Desktop Grid / Mobile Scroll) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {workflowSteps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isActive
                    ? "bg-white/10 border-unfund-gold shadow-lg shadow-unfund-gold/10"
                    : "bg-white/5 border-white/10 hover:border-unfund-gold/40 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-unfund-gold" : "text-slate-500"
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <IconComp
                    className={`w-4 h-4 ${
                      isActive ? "text-unfund-gold" : "text-slate-400"
                    }`}
                  />
                </div>

                <div className="font-serif text-xs sm:text-sm font-bold text-white tracking-wide">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive View Card for Active Step */}
        <div className="bg-[#0D1530] border border-unfund-gold/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-unfund-gold/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Detailed Step Explanation */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-unfund-gold font-mono">
                  {workflowSteps[activeTab].step}
                </span>
                <div>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-white">
                    {workflowSteps[activeTab].title}
                  </h3>
                  <p className="text-xs font-mono text-unfund-gold">
                    {workflowSteps[activeTab].tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed font-light">
                {workflowSteps[activeTab].summary}
              </p>

              {/* Step Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                {workflowSteps[activeTab].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs font-mono text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-unfund-emerald flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-4">
                <Link
                  href="/audit"
                  className="px-5 py-2.5 rounded-lg bg-unfund-gold text-unfund-navy text-xs font-bold uppercase tracking-wider hover:bg-unfund-goldHover transition-all flex items-center gap-2"
                >
                  <span>Test Step {workflowSteps[activeTab].step} Live</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-2 rounded border border-white/10">
                  {workflowSteps[activeTab].techBadge}
                </span>
              </div>

            </div>

            {/* Right Column: Dynamic Terminal / Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-unfund-navy p-5 rounded-xl border border-unfund-borderDark font-mono text-xs space-y-3 relative shadow-inner">
                
                {/* Terminal Window Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-slate-300">unfund-pipeline-v2</span>
                  </div>
                  <span className="text-unfund-emerald flex items-center gap-1">
                    <Lock className="w-3 h-3" /> 
                  </span>
                </div>

                {/* Simulated Code Execution Console Output */}
                <div className="space-y-2 text-[11px] leading-relaxed text-slate-300 py-2">
                  <p className="text-slate-500">// Executing Step {workflowSteps[activeTab].step} Pipeline</p>
                  <p className="text-unfund-gold">$ unfund init --step={workflowSteps[activeTab].step}</p>
                  <p className="text-emerald-400">[200 OK] OAuth Scope Granted via Setu AA</p>
                  <p className="text-blue-400">[200 OK] GSTIN Invoices Reconciled (0.8% Var)</p>
                  <p className="text-amber-400">[200 OK] Cap-Table iSAFE CCPS Validated</p>
                  <p className="text-white font-bold pt-1">
                    RESULT: <span className="text-unfund-emerald">Fundability Score calculated in 180s.</span>
                  </p>
                </div>

                {/* Verification Stamp */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="relative w-5 h-5 rounded bg-unfund-dark border border-unfund-gold/30 p-0.5">
                      <Image src="/icon-unfund.png" alt="Seal" fill className="object-contain" />
                    </div>
                    <span>UNFUND</span>
                  </div>
                  <span className="text-unfund-gold">FastAPI Microservice</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}