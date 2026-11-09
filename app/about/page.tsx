// app/about/page.tsx
import AboutHero from "../components/about/AboutHero";
import ProblemStory from "../components/about/ProblemStory";
import FourPillars from "../components/about/FourPillars";
import EcosystemBridge from "../components/about/EcosystemBridge";
// import GovernanceTrust from "../components/about/GovernanceTrust";
import AboutCta from "../components/about/AboutCta";

export const metadata = {
  title: "About Us | UNFUND",
  description: "Learn how UNFUND bridges the missing middle of Indian startups to institutional deal readiness, bank loan assistance, and government grants.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-unfund-navy">
      <AboutHero />
      <ProblemStory />
      <FourPillars />
      <EcosystemBridge />
      {/* <GovernanceTrust /> */}
      <AboutCta />
    </main>
  );
}