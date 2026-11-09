"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, Lock, ShieldCheck, Check } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterest: "Fundability Audit",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit request. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceInterest: "Fundability Audit",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Unable to submit request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#070C1E] text-unfund-cream py-8 sm:py-12 lg:py-16 overflow-hidden border-b border-unfund-gold/30">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />
        <div className="absolute -top-24 -left-20 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-unfund-gold/15 via-amber-600/10 to-transparent rounded-full blur-[110px]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unfund-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unfund-gold/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] max-w-2xl">
              Get Your Startup <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
                VC-Ready
              </span> Now.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg font-light leading-relaxed">
              Convert raw bank telemetry and GST filings into audited investment packages and clean cap-tables built for venture capital rounds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto pt-1">
              <Link
                href="/about"
                className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider text-unfund-navy bg-unfund-gold hover:bg-unfund-goldHover rounded-md shadow-md transition-all text-center flex items-center justify-center gap-2 group border border-unfund-gold"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-unfund-navy" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-unfund-cream border border-slate-700 hover:border-unfund-gold rounded-md transition-all text-center bg-white/5 hover:bg-white/10"
              >
                Contact Advisory Desk
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-unfund-gold" />
                <span>Bank Assistance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-unfund-emerald" />
                <span>DPIIT Grant Matcher</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero Balance Sheet Risk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Email Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-unfund-gold/30 via-amber-400/20 to-unfund-gold/25 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

            <div className="w-full bg-[#FAF8F5] text-unfund-navy p-6 sm:p-7 rounded-xl shadow-2xl relative border border-[#C5A059]/40 z-10">
              <div className="flex items-center justify-between border-b border-unfund-gold/30 pb-3.5 mb-4">
                <div className="text-left">
                  <h3 className="text-base font-serif font-bold text-unfund-navy tracking-tight">
                    Free Consultation
                  </h3>
                  <p className="text-[11px] text-slate-600 font-sans">Direct assistance</p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-unfund-navy/5 text-unfund-navy border border-unfund-navy/15">
                  <Lock className="w-3 h-3 text-unfund-gold" />
                  <span>SECURE</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-unfund-navy">Request Received!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                    A confirmation email has been dispatched to your inbox. An analyst will review your details and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-unfund-navy underline hover:text-unfund-gold pt-1 block mx-auto font-medium cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  {errorMessage && (
                    <div className="p-2 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="fullName" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Aditya Kumar"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold focus:ring-1 focus:ring-unfund-gold transition-all shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="founder@startup.in"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold focus:ring-1 focus:ring-unfund-gold transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold focus:ring-1 focus:ring-unfund-gold transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                      Company / Startup Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Tech Pvt Ltd"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold focus:ring-1 focus:ring-unfund-gold transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                      Required Service *
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-unfund-gold focus:ring-1 focus:ring-unfund-gold transition-all cursor-pointer shadow-sm"
                    >
                      <option value="Fundability Audit">Fundability Audit</option>
                      <option value="Bank Loan Assistance">Bank Loan Assistance</option>
                      <option value="Government Grants">Government Grants (SISFS/BIRAC)</option>
                      <option value="VC Investment Readiness">VC Investment Readiness</option>
                      <option value="Cap-Table & iSAFE Restructuring">Cap-Table Restructuring</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-1.5 py-3 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer border border-unfund-navy"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-unfund-gold" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-unfund-gold" />
                        <span>Get Started Free</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-500 text-center font-mono pt-0.5">
                    Data privacy protected under DPDP Act 2023.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}