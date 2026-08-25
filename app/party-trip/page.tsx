import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartyHero from "@/components/PartyHero";
import PartyAbout from "@/components/PartyAbout";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import PartyCTA from "@/components/PartyCTA";

const projects = [
  {
    title: "Latvenergo sporta spēles",
    year: "2025",
    location: "Ogres Zilie kalni",
    participants: "300+ dalībnieki",
    description:
      "Aizrautības pilns komandu saliedēšanas pasākums ar lielformāta spēlēm visas dienas garumā.",
    images: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
    ],
  },

  {
    title: "Rimi darbinieku pasākums",
    year: "2024",
    location: "Rīga",
    participants: "250+ dalībnieki",
    description:
      "Komandu aktivitātes dažādām vecuma grupām ar individuālām un grupu spēlēm.",
    images: [
      "/images/gallery5.jpg",
      "/images/gallery6.jpg",
      "/images/gallery7.jpg",
      "/images/gallery8.jpg",
    ],
  },

  {
    title: "AirBaltic pasākums",
    year: "2024",
    location: "Rīga",
    participants: "180+ dalībnieki",
    description:
      "Dinamisks uzņēmuma pasākums ar vairākām sacensību zonām un komandu izaicinājumiem.",
    images: [
      "/images/gallery9.jpg",
      "/images/gallery10.jpg",
      "/images/gallery11.jpg",
      "/images/gallery12.jpg",
    ],
  },

  {
    title: "Olaines pilsētas svētki",
    year: "2024",
    location: "Olaine",
    participants: "Dažādi apmeklētāji",
    description:
      "Brīvi pieejama aktivitāšu zona ģimenēm un bērniem visas dienas garumā.",
    images: [
      "/images/gallery13.jpg",
      "/images/gallery14.jpg",
      "/images/gallery15.jpg",
      "/images/gallery16.jpg",
    ],
  },

  {
    title: "Rīgas svētki",
    year: "2024",
    location: "Rīga",
    participants: "Dažādi apmeklētāji",
    description:
      "Lielformāta spēles un komandu aktivitātes vienā no lielākajiem vasaras pasākumiem Latvijā.",
    images: [
      "/images/gallery17.jpg",
      "/images/gallery18.jpg",
      "/images/gallery19.jpg",
      "/images/gallery20.jpg",
    ],
  },
];

export default function PartyTripPage() {
  return (
    <main className="bg-[#0d0d0d] text-white">

      <Navbar />

      <PartyHero />

      <PartyAbout />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Mūsu pasākumi
            </span>

            <h2 className="text-5xl font-black mt-4">
              Party Trip darbībā
            </h2>

          </div>

          <div className="space-y-8">

            {projects.map((project, index) => (
              <PortfolioCarousel
                key={index}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

      <PartyCTA />

      <Footer />

    </main>
  );
}