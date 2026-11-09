// app/about/components/FourPillars.tsx
"use client";

import { ShieldCheck, Scale, MapPin, EyeOff } from "lucide-react";

export default function FourPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Founder Equity Protection",
      desc: "We prioritize non-dilutive government grants and standardized iSAFE notes to help founding teams maintain majority control through their earliest growth stages.",
    },
    {
      icon: Scale,
      title: "Data Verification Over Hype",
      desc: "We focus on verified operational telemetry—reconciling cash flow and compliance hygiene rather than cosmetic pitch claims.",
    },
    {
      icon: MapPin,
      title: "Democratizing Regional Bharat",
      desc: "Innovation is not restricted to metro hubs. We engineer our platform to give founders in Jaipur, Indore, Kochi, and Lucknow identical access to institutional standards.",
    },
    {
      icon: EyeOff,
      title: "Zero Balance Sheet Risk",
      desc: "We are an advisory and technology facilitation platform. We do not operate a proprietary loan book, charge advance sanction fees, or issue shadow credit.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-unfund-navy">
            How We Operate
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Built on transparent frameworks that protect businesses and earn institutional trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#C5A059]/25 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-unfund-navy text-[#C5A059] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-unfund-navy">
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
  );
}