// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Lock,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

// Clean, inline SVG social icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    topic: "Government Grants (SISFS / BIRAC)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        topic: "Government Grants (SISFS / BIRAC)",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FAF8F5] text-unfund-navy min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#070C1E] text-unfund-cream py-14 sm:py-20 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[11px] font-mono text-[#C5A059]">
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
            DIRECT ADVISORY DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Talk About Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#F7E7CD] via-[#C5A059] to-[#9B7732] bg-clip-text text-transparent">
              Funding & Growth Goals
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Have a question about government grant schemes, bank loan dossiers, or keeping your cap-table safe? Drop us a line and an advisor will assist you directly.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Channels Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Contact Info & Socials */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-unfund-navy">
                  Speak Directly with Our Team
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5 leading-relaxed">
                  No automated chatbots or endless phone menus. We review your details and connect you with someone who understands early-stage funding.
                </p>
              </div>

              {/* Direct Touchpoints (Phone & Email) */}
              <div className="space-y-3">
                <a
                  href="tel:8452050941"
                  className="p-4 rounded-xl bg-white border border-[#C5A059]/30 shadow-xs flex items-center gap-4 hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#070C1E] text-[#C5A059] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Call our desk
                    </div>
                    <div className="text-sm font-semibold text-unfund-navy group-hover:text-[#C5A059] transition-colors font-mono">
                      +91 84520 50941
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:support@unfund.in"
                  className="p-4 rounded-xl bg-white border border-[#C5A059]/30 shadow-xs flex items-center gap-4 hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#070C1E] text-[#C5A059] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Email us anytime
                    </div>
                    <div className="text-sm font-semibold text-unfund-navy group-hover:text-[#C5A059] transition-colors font-mono">
                      support@unfund.in
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="p-5 rounded-xl bg-white border border-[#C5A059]/25 shadow-xs space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  Connect on Social Platforms
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-unfund-navy hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-unfund-navy hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-unfund-navy hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-unfund-navy hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-4 rounded-xl bg-white/60 border border-slate-200 text-slate-600 text-[11px] font-light leading-relaxed flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Your information is handled in accordance with the Digital Personal Data Protection Act. We never sell your contact info or share details without your permission.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-xl space-y-5">
                
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-unfund-navy">
                      Send Us a Message
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      We usually respond within one business day
                    </p>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-3 bg-[#FAF8F5] rounded-xl border border-emerald-200">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-unfund-navy">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      We have emailed you a confirmation receipt. An advisor will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-unfund-navy underline hover:text-[#C5A059] pt-2 cursor-pointer font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Aditya Kumar"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                          Company / Venture Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Company Pvt Ltd"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.in"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        What can we assist you with? *
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all cursor-pointer shadow-2xs"
                      >
                        <option value="Government Grants (SISFS / BIRAC)">Government Grants (SISFS / BIRAC)</option>
                        <option value="Bank Loan & CGTMSE Guidance">Bank Loan & CGTMSE Guidance</option>
                        <option value="VC Investment Readiness">VC Investment Readiness</option>
                        <option value="Cap-Table & iSAFE CCPS Structuring">Cap-Table & iSAFE CCPS Structuring</option>
                        <option value="General Financial Advisory">General Financial Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-unfund-navy uppercase tracking-wider mb-1">
                        Tell us a bit about your current stage or questions *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. We are building an IoT hardware product in Pune, incorporated 8 months ago. We want to check if we qualify for SISFS grants or collateral-free bank loans."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-slate-300 rounded text-xs text-unfund-navy focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer border border-unfund-navy"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                          <span>Sending your enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Submit Consultation Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick FAQ Strip */}
      <section className="py-12 bg-white border-t border-[#C5A059]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-unfund-navy">
              What to Expect After Contacting Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 font-light leading-relaxed">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1.5">
              <strong className="text-unfund-navy font-semibold block text-sm">
                How fast do you respond?
              </strong>
              Our team reviews new requests on business days and typically responds within 2 to 24 hours.
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 space-y-1.5">
              <strong className="text-unfund-navy font-semibold block text-sm">
                Do you charge for introductory calls?
              </strong>
              No. Preliminary consultations and eligibility screenings are completely free without upfront fees.
            </div>
          </div>

          {/* <div className="text-center pt-2">
            <Link
              href="/audit"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-unfund-navy hover:text-[#C5A059] transition-colors"
            >
              <span>Want an instant score instead? Run our free 3-minute audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}