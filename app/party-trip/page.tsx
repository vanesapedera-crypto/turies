import Footer from "@/components/Footer";
import PartyHero from "@/components/PartyHero";
import GamesGallery from "@/components/GamesGallery";
import PartyCTA from "@/components/PartyCTA";

export default function PartyTripPage() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <PartyHero />
      <GamesGallery />
      <PartyCTA />
      <Footer />
    </main>
  );
}