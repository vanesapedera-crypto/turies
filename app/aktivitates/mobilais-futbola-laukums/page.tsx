import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PartyCTA from "@/components/PartyCTA";
import {
  ArrowLeft,
  Users,
  ShieldCheck,
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
  "/images/futbola-laukums-hero.jpg",
  "/images/futbola-laukums.jpg",
];

export default function MobilaisFutbolaLaukumsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-black min-h-[720px] lg:min-h-screen">

        <div className="absolute inset-0">
          <Image
            src="/images/futbola-laukums.jpg"
            alt="Mobilais futbola laukums"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10 lg:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[720px] lg:min-h-screen items-center max-w-7xl px-6 py-32 lg:px-10">

          <div className="max-w-xl lg:max-w-2xl">

            <Link
              href="/aktivitates"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[4px] text-zinc-400 hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Atpakaļ uz aktivitātēm
            </Link>

            <p className="mt-8 text-sm uppercase tracking-[8px] font-semibold text-red-500">
              Mobilais sporta formāts
            </p>

            <h1 className="mt-6 font-black leading-[0.88]">
              <span className="block text-[44px] sm:text-6xl lg:text-[110px] text-white">
                FUTBOLA
              </span>

              <span className="block text-[44px] sm:text-6xl lg:text-[110px] text-red-600">
                LAUKUMS
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Aizraujoša mobilā futbola aktivitāte, kas rada kustību,
              azartu un komandas garu jebkurā pasākumā.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              Lieliski piemērots sporta dienām, uzņēmumu pasākumiem,
              pilsētu svētkiem un privātiem pasākumiem.
            </p>

            <Link
              href="/kontakti"
              className="inline-flex mt-10 rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide transition hover:bg-red-700"
            >
              Pieteikt pasākumu
            </Link>

          </div>

        </div>

      </section>

      {/* INFO KARTES */}

      <section className="px-6 py-8">

        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 lg:px-10">

          <div className="grid gap-0 md:grid-cols-5">

            {infoCards.map(({ icon: Icon, title, text }, index) => (

              <div
                key={title}
                className={`py-6 text-center md:px-4 ${
                  index !== infoCards.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""
                }`}
              >
                <Icon className="mx-auto h-10 w-10 text-red-500" />

                <h3 className="mt-4 text-lg font-black tracking-wide">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* GALERIJA */}

    <section className="border-t border-white/10 bg-[#0b0b0b] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <span className="font-semibold uppercase tracking-[5px] text-red-500">
        Galerija
      </span>

      <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
        Kā tas izskatās
      </h2>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gallery.map((image, index) => (
        <div
          key={image}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 ${
            index === 0
              ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]"
              : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image}
            alt={`Mobilais futbola laukums ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
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