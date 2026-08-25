import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";

export default function UznemumiemPage() {
  return (
    <main className="bg-[#161616]">
      <Navbar />

      <HeroSection />
      
      <StatsSection />

      <ServicesSection />

      <ProcessSection />

      <Footer />
    </main>
  );
}