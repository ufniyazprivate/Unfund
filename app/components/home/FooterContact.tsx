// app/components/FooterContact.tsx
"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function FooterContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterest: "General Funding Consultation",
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
      const res = await fetch("/api/footer-contact", {
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
        serviceInterest: "General Funding Consultation",
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
    <section className="w-full bg-[#FAF8F5] text-unfund-navy py-12 sm:py-16 border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-unfund-navy/5 border border-unfund-gold/40 text-[11px] font-mono text-unfund-gold font-bold uppercase tracking-wider">
              <span>Take The Next Step</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-unfund-navy tracking-tight leading-tight">
              Ready to Get Your Startup <span className="text-unfund-gold">Funded?</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get expert guidance on bank loans, government grants, and investor fundraising. Fill out your details below for a quick callback.
            </p>

            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-[11px] font-mono text-slate-600">
              <a
                href="tel:8452050941"
                className="flex items-center gap-1.5 hover:text-unfund-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-unfund-gold" />
                <span>+91 8452050941</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">&bull;</span>

              <a
                href="mailto:support@unfund.in"
                className="flex items-center gap-1.5 hover:text-unfund-navy transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-unfund-gold" />
                <span>support@unfund.in</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">&bull;</span>

              <span className="flex items-center gap-1 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-unfund-emerald" />
                <span>100% Confidential</span>
              </span>
            </div>
          </div>

          {/* Right Column: Resend Form */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-unfund-gold to-transparent" />

              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                <div>
                  <h3 className="text-base font-serif font-bold text-unfund-navy">
                    Request a Callback
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Our funding team responds within 2 hours
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-unfund-navy/5 text-unfund-navy border border-unfund-navy/15">
                  <Lock className="w-3 h-3 text-unfund-gold" />
                  <span>SECURE</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3 bg-emerald-50/50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-serif font-bold text-unfund-navy">
                    Request Received!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    We sent a confirmation email to your inbox. An advisor will review your venture and call you back shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-unfund-navy underline hover:text-unfund-gold pt-1 inline-block cursor-pointer font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {errorMessage && (
                    <div className="p-2.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="footer-fullName" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="footer-fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="footer-phone" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="footer-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="footer-email" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="footer-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@startup.in"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="footer-companyName" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Startup Name
                      </label>
                      <input
                        type="text"
                        id="footer-companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Tech Pvt Ltd"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy placeholder-slate-400 focus:outline-none focus:border-unfund-gold transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="footer-serviceInterest" className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                      What do you need help with? *
                    </label>
                    <select
                      id="footer-serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-unfund-gold transition-all cursor-pointer shadow-sm"
                    >
                      <option value="General Funding Consultation">General Funding Consultation</option>
                      <option value="Bank Loan Assistance">Bank Loan Assistance</option>
                      <option value="Government Grants (SISFS / BIRAC)">Government Grants (SISFS / BIRAC)</option>
                      <option value="VC Investment Readiness">VC Fundraising & Term Sheets</option>
                      <option value="Cap-Table & iSAFE Protection">Cap-Table & iSAFE Protection</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md border border-unfund-navy"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-unfund-gold" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-unfund-gold" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-500 text-center font-mono pt-0.5">
                    Your details are confidential under DPDP privacy regulations.
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