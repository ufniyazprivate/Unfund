import ComparisonMatrix from "../components/platform_comp/ComparisonMatrix";
import CoreEngine from "../components/platform_comp/CoreEngine";
import OperationalWorkflow from "../components/platform_comp/OperatnalWorkflow";
import PlatformHero from "../components/platform_comp/PlatformHero";
import ServicesMatrix from "../components/platform_comp/ServicesMatrix";

export default function Home() {
  return (
    <>
      {/* Primary Landing Page Hero & Lead Capture Section */}
      <PlatformHero/>
      <ServicesMatrix/>
      <OperationalWorkflow/>
      <CoreEngine/>
      <ComparisonMatrix/>
    </>
  );
}