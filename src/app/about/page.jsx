import HeroSection from "@/_components/about/HeroSection";
import StatsSection from "@/_components/about/StatsSection";
import TeamSection from "@/_components/about/TeamSection";
import FaqSection from "@/_components/about/FaqSection";

export default function page() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
