import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PartyCTA from "@/components/PartyCTA";
import {
  ArrowLeft,
  Users,
  ShieldCheck,
  MapPinned,
  Map,
  SlidersHorizontal,
  CircleCheckBig,
} from "lucide-react";

const infoCards = [
  {
    icon: CircleCheckBig,
    title: "PIEMĒROTS",
    text: "Bērniem, jauniešiem un pieaugušajiem. Lieliski der sporta dienām, svētkiem un uzņēmumu pasākumiem.",
  },
  {
    icon: Map,
    title: "VIETAS VAJADZĪBAS",
    text: "Nepieciešama līdzena teritorija, kur droši uzstādīt laukumu un nodrošināt kustību ap to.",
  },
  {
    icon: Users,
    title: "DALĪBNIEKI",
    text: "Piemērots gan mazām komandām, gan lielākām grupām, kur svarīgs ir azarts un kustība.",
  },
  {
    icon: ShieldCheck,
    title: "IEKĻAUTS",
    text: "Laukuma uzstādīšana, inventārs un mūsu komandas uzraudzība visas aktivitātes laikā.",
  },
  {
    icon: SlidersHorizontal,
    title: "PIELĀGOJAM",
    text: "Laukumu pielāgojam jūsu pasākuma vajadzībām, vietai un dalībnieku vecumam.",
  },
];

const gallery = [
  "/images/futbola-laukums-1.jpg",
  "/images/futbola-laukums-2.jpg",
  "/images/futbola-laukums-3.jpg",
  "/images/futbola-laukums-4.jpg",
];

export default function MobilaisFutbolaLaukumsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#991b1b30,transparent_55%)]" />

        <div className="grid min-h-[760px] lg:grid-cols-[42%_58%]">
          <div className="relative z-30 flex items-center">
            <div className="w-full max-w-[620px] ml-auto px-6 lg:px-10 py-20">
              <Link
                href="/aktivitates"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-zinc-400 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Atpakaļ uz aktivitātēm
              </Link>

              <span className="mt-8 block uppercase tracking-[5px] text-red-500 font-semibold">
                Mobilais sporta formāts
              </span>

              <h1 className="mt-6 leading-[0.88] font-black">
                <span className="block text-5xl sm:text-6xl lg:text-[110px] text-white">
                  FUTBOLA
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-[110px] text-red-600">
                  LAUKUMS
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-xl leading-9 text-gray-300">
                Aizraujoša mobilā futbola aktivitāte, kas rada kustību, azartu
                un komandas garu jebkurā pasākumā.
              </p>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                Lieliski piemērots dažāda vecuma dalībniekiem, sporta dienām,
                svētkiem un pasākumiem, kuros svarīga ir enerģija un kopā
                būšana.
              </p>

              <Link
                href="/kontakti"
                className="inline-flex mt-10 rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide transition hover:bg-red-700"
              >
                Pieteikt pasākumu
              </Link>
            </div>
          </div>

          <div className="relative z-10 min-h-[760px]">
            <Image
              src="/images/futbola-laukums.jpg"
              alt="Mobilais futbola laukums"
              fill
              priority
              sizes="58vw"
              className="object-cover"
            />

            <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#090909] via-[#090909]/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#dc262640,transparent_45%)]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 lg:px-10">
          <div className="grid gap-0 md:grid-cols-5">
            {infoCards.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`py-6 text-center md:px-4 ${
                  index !== infoCards.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <Icon className="mx-auto h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-lg font-black tracking-wide">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[5px] text-red-500">
              Laukums darbībā
            </span>

            <h2 className="mt-4 text-5xl font-black text-white">
              Kā tas izskatās
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/70"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image}
                    alt={`Mobilais futbola laukums ${index + 1}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartyCTA />
      <Footer />
    </main>
  );
}