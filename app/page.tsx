import CompanyOverview from "./components/home/CompanyOverview";
import FooterContact from "./components/home/FooterContact";
import Hero from "./components/home/Hero";
import Process from "./components/home/Process";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <>
      {/* Primary Landing Page Hero & Lead Capture Section */}
      <Hero />
      <CompanyOverview/>
      <Services/>
      <Process/>
      <FooterContact/>
    </>
  );
}