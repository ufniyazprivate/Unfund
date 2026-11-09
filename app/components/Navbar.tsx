"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Calculator,
  Award,
  Lock,
  ArrowRight,
  TrendingUp,
  PieChart,
  Landmark,
  Sparkles,
} from "lucide-react";

// Social Media SVGs
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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`}>
        {/* Top Bar - Mobile overflow horizontal-safe scroll */}
        <div className="bg-unfund-navy text-unfund-cream border-b border-unfund-gold/20 text-[11px] font-sans py-1.5 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            
            {/* Left: Highlight Tagline */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-unfund-gold/15 text-unfund-gold border border-unfund-gold/30 text-[9px] sm:text-[10px] font-mono whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-unfund-emerald animate-pulse" />
                Get Your Startup Funded
              </span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-slate-300 font-light">
                Institutional Deal-Readiness Platform
              </span>
            </div>

            {/* Right: Phone & Social Media Icons */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              <a
                href="tel:84520 50941"
                className="flex items-center gap-1 sm:gap-1.5 text-slate-300 hover:text-unfund-gold transition-colors font-mono text-[10px] sm:text-[11px] whitespace-nowrap"
              >
                <Phone className="w-3 h-3 text-unfund-gold shrink-0" />
                <span>+91 84520 50941</span>
              </a>

              <span className="text-slate-600">|</span>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 sm:gap-2.5 text-slate-300">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-unfund-gold transition-colors p-0.5"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-unfund-gold transition-colors p-0.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-unfund-gold transition-colors p-0.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="hover:text-unfund-gold transition-colors p-0.5"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Main Header */}
        <header className="bg-unfund-cream border-b border-unfund-gold/30 text-unfund-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            
            {/* Logo on Left: Icon + Brand Name */}
            <Link href="/" className="group flex items-center gap-2 sm:gap-2.5 py-1">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/icon_transparent_UF.png"
                  alt="UNFUND Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="font-serif font-bold tracking-[0.2em] text-unfund-navy text-xl sm:text-3xl leading-none">
                <span>UN</span>
                <span className="relative inline-block mx-[1px]">
                  F
                  <span className="absolute top-[44%] left-[12%] w-[75%] h-[2.5px] sm:h-[3px] bg-gradient-to-r from-unfund-gold via-[#EAD096] to-unfund-goldHover rounded-full" />
                </span>
                <span>UND</span>
              </div>
            </Link>

            {/* Desktop Navigation: Home, About Us, Platform, Services, Contact */}
            <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-unfund-navy">
              <Link href="/" className="hover:text-unfund-gold transition-colors py-2">
                Home
              </Link>
              <Link href="/about" className="hover:text-unfund-gold transition-colors py-2">
                About Us
              </Link>
              <Link href="/platform" className="hover:text-unfund-gold transition-colors py-2">
                Platform
              </Link>

              {/* SERVICES Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className="flex items-center gap-1 hover:text-unfund-gold transition-colors py-2 font-semibold uppercase tracking-widest cursor-pointer"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-unfund-gold" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-unfund-gold/30 rounded-xl shadow-xl p-3 space-y-1 z-50 normal-case font-normal animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-[10px] font-mono uppercase text-slate-400 px-3 py-1 font-bold tracking-widest border-b border-slate-100 mb-1">
                      Platform Offerings
                    </div>

                    <Link
                      href="/services/loan-assistance"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-unfund-cream/70 transition-colors group"
                    >
                      <Landmark className="w-5 h-5 text-unfund-gold mt-0.5 group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-unfund-navy group-hover:text-unfund-gold">
                          Bank Loan Assistance
                        </div>
                        <div className="text-[11px] text-slate-500">
                          CGTMSE, working capital & debt dossier prep
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/services/grant"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-unfund-cream/70 transition-colors group"
                    >
                      <Award className="w-5 h-5 text-unfund-emerald mt-0.5 group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-unfund-navy group-hover:text-unfund-gold">
                          Government grant
                        </div>
                        <div className="text-[11px] text-slate-500">
                          SISFS, BIRAC BIG & iDEX non-dilutive funds
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/services/vc-investment"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-unfund-cream/70 transition-colors group"
                    >
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-unfund-navy group-hover:text-unfund-gold">
                          VC Investment
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Institutional seed & Series A deal readiness
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/services/cap-table"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-unfund-cream/70 transition-colors group"
                    >
                      <PieChart className="w-5 h-5 text-amber-600 mt-0.5 group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="text-xs font-bold text-unfund-navy group-hover:text-unfund-gold">
                          Cap-Table & Equity
                        </div>
                        <div className="text-[11px] text-slate-500">
                          iSAFE CCPS terms & founder dilution protection
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="hover:text-unfund-gold transition-colors py-2">
                Contact
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Verify Startup: Popup Trigger */}
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-unfund-navy border border-unfund-navy/30 rounded hover:border-unfund-navy hover:bg-unfund-navy/5 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3 h-3 text-unfund-gold" />
                <span>Verify Startup</span>
              </button>

              {/* Book Consultation: Links to /contact */}
              <Link
                href="/contact"
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded shadow-md transition-all flex items-center gap-1.5 group border border-unfund-navy"
              >
                <Calendar className="w-3.5 h-3.5 text-unfund-gold" />
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-unfund-gold group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-unfund-navy hover:bg-unfund-gold/10 rounded-md border border-unfund-navy/20 active:scale-95 transition-transform cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-unfund-navy" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Unified Single Mobile Menu Drawer - Screen height & scroll-protected */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-unfund-cream border-t border-unfund-gold/30 px-4 pt-4 pb-8 space-y-5 text-sm font-sans max-h-[calc(100dvh-4rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
              
              {/* Primary Navigation Links */}
              <div className="space-y-0.5 uppercase tracking-wider text-xs font-semibold text-unfund-navy border-b border-unfund-gold/20 pb-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-2 rounded-lg hover:bg-white/60 hover:text-unfund-gold transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-2 rounded-lg hover:bg-white/60 hover:text-unfund-gold transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/platform"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-2 rounded-lg hover:bg-white/60 hover:text-unfund-gold transition-colors"
                >
                  Platform
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-2 rounded-lg hover:bg-white/60 hover:text-unfund-gold transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Services Sub-Links */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-unfund-gold uppercase tracking-widest font-bold px-1">
                  SERVICES
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href="/services/loan-assistance"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-unfund-gold/20 text-xs font-medium text-unfund-navy active:bg-[#FAF8F5] transition-colors"
                  >
                    <Landmark className="w-4 h-4 text-unfund-gold shrink-0" />
                    <span>Bank Loan Assistance</span>
                  </Link>
                  <Link
                    href="/services/grant"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-unfund-gold/20 text-xs font-medium text-unfund-navy active:bg-[#FAF8F5] transition-colors"
                  >
                    <Award className="w-4 h-4 text-unfund-emerald shrink-0" />
                    <span>Government grants</span>
                  </Link>
                  <Link
                    href="/services/vc-investment"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-unfund-gold/20 text-xs font-medium text-unfund-navy active:bg-[#FAF8F5] transition-colors"
                  >
                    <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>VC Investment</span>
                  </Link>
                  <Link
                    href="/services/cap-table"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-unfund-gold/20 text-xs font-medium text-unfund-navy active:bg-[#FAF8F5] transition-colors"
                  >
                    <PieChart className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Cap-Table & Equity Protection</span>
                  </Link>
                  <Link
                    href="/audit"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-unfund-gold/20 text-xs font-medium text-unfund-navy active:bg-[#FAF8F5] transition-colors"
                  >
                    <Calculator className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>3-Min Audit </span>
                  </Link>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="pt-1 space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAuditModalOpen(true);
                  }}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-unfund-navy bg-white border border-unfund-navy/30 rounded-lg text-center flex items-center justify-center gap-2 active:scale-[0.99] transition-transform cursor-pointer shadow-xs"
                >
                  <Lock className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
                  <span>Verify Startup</span>
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-unfund-navy rounded-lg text-center flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform"
                >
                  <Calendar className="w-4 h-4 text-unfund-gold shrink-0" />
                  <span>Book Consultation</span>
                </Link>

                {/* Mobile Social & Phone */}
                <div className="pt-3 border-t border-unfund-gold/20 flex flex-col gap-2.5">
                  <a
                    href="tel:84520 50941"
                    className="flex items-center justify-center gap-1.5 text-xs font-mono text-slate-700 hover:text-unfund-navy py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-unfund-gold shrink-0" />
                    <span>+91 84520 50941</span>
                  </a>

                  <div className="flex items-center justify-center gap-4 text-slate-600 pt-0.5">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-1.5 rounded-full hover:bg-white/50 hover:text-unfund-navy transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-1.5 rounded-full hover:bg-white/50 hover:text-unfund-navy transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-1.5 rounded-full hover:bg-white/50 hover:text-unfund-navy transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="p-1.5 rounded-full hover:bg-white/50 hover:text-unfund-navy transition-colors"
                    >
                      <XIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}
        </header>
      </div>

      {/* "Free Audit Coming Soon" Modal Popup */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-sm p-6 bg-white rounded-2xl border border-unfund-gold/40 shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsAuditModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-unfund-navy transition-colors p-1 cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-12 h-12 mx-auto rounded-full bg-unfund-gold/15 flex items-center justify-center p-2 border border-unfund-gold/30">
              <Image
                src="/icon_transparent_UF.png"
                alt="UNFUND Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-unfund-gold font-bold">
                Feature Preview
              </span>
              <h3 className="text-lg font-serif font-bold text-unfund-navy">
                Free Audit Coming Soon
              </h3>
            </div>

            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Our automated startup verification and instant public health badges are finalizing sandbox testing. Connect with our advisory desk in the meantime.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsAuditModalOpen(false)}
                className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-bold text-white bg-unfund-navy hover:bg-unfund-dark rounded-lg transition-colors text-center shadow-sm"
              >
                Contact Now
              </Link>
              <button
                onClick={() => setIsAuditModalOpen(false)}
                className="w-full py-2 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}