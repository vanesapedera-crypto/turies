import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";

export default function AktivitatesPage() {
  return (
    <main className="bg-[#161616] text-white min-h-screen">
      <Navbar />
      <Activities />
      <Footer />
    </main>
  );
}