"use client";
import Image from "next/image";
import Link from "next/link";
import PartyCTA from "@/components/PartyCTA";
import Footer from "@/components/Footer";
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
    title: "PIEMĒROTA",
    text: "Bērniem, jauniešiem un pieaugušajiem. Piemērota uzņēmumu pasākumiem, svētkiem un sporta dienām.",
  },
  {
    icon: Map,
    title: "VIETAS VAJADZĪBAS",
    text: "Nepieciešama piemērota teritorija, kur droši uzstādīt trasi un nodrošināt kustību ap to.",
  },
  {
    icon: Users,
    title: "DALĪBNIEKI",
    text: "Vienlaikus trasē var atrasties vairāki dalībnieki, pārējie gaida drošā zonā.",
  },
  {
    icon: ShieldCheck,
    title: "IEKĻAUTS",
    text: "Trases uzstādīšana, drošības aprīkojums, instruktāža un profesionāla uzraudzība visas aktivitātes laikā.",
  },
  {
    icon: SlidersHorizontal,
    title: "PIELĀGOJAM",
    text: "Trasi pielāgojam jūsu pasākuma vajadzībām, vietai un dalībnieku vecumam vai sagatavotībai.",
  },
];

const gallery = [
  "/images/vertikala-trase-1.jpg",
  "/images/vertikala-trase-2.jpg",
  "/images/vertikala-trase-3.jpg",
  "/images/vertikala-trase-4.jpg",
  "/images/vertikala-trase-5.jpg",
  "/images/vertikala-trase-6.jpg",
  "/images/vertikala-trase-7.jpg",
  "/images/vertikala-trase-8.jpg",
  "/images/vertikala-trase-9.jpg",
  "/images/vertikala-trase-10.jpg",
  "/images/vertikala-trase-11.jpg",
  "/images/vertikala-trase-12.jpg",
];

const highlights = [
  { icon: MapPinned, title: "KUSTĪBA", text: "Aktīva un aizraujoša pieredze." },
  { icon: Users, title: "DROŠI", text: "Piemērota dažādiem sagatavotības līmeņiem." },
  { icon: ShieldCheck, title: "KOPĀ", text: "Komandas gars un kopīgs azarts." },
];

export default function VertikalaTrasePage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="relative overflow-hidden bg-black min-h-[720px] lg:min-h-screen">

        <div className="absolute inset-0">
          <Image
            src="/images/vertikala-trase-hero.jpg"
            alt="Vertikālā trase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center" />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10 lg:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[720px] lg:min-h-screen items-center max-w-7xl px-6 py-28 lg:px-10">

          <div className="max-w-xl lg:max-w-2xl">

            <Link
              href="/aktivitates"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[4px] text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Atpakaļ uz aktivitātēm
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[8px] text-red-500">
              Mobilais virvju parks
            </p>

            <h1 className="mt-6 font-black leading-[0.9]">
              <span className="block text-[42px] sm:text-6xl lg:text-[110px]">
                VERTIKĀLĀ
              </span>

              <span className="block text-[42px] sm:text-6xl lg:text-[110px] text-red-600">
                TRASE
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Aizraujoša vertikālā virvju trase, kas pārbauda līdzsvaru,
              veiklību un komandas garu.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              Lieliski piemērota dažāda vecuma dalībniekiem un uzņēmumu
              pasākumiem, sporta spēlēm un svētkiem.
            </p>

            <Link
              href="/kontakti"
              className="mt-10 inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide transition hover:bg-red-700"
            >
              Pieteikt pasākumu
            </Link>

          </div>

        </div>

      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 lg:px-10">
          <div className="grid gap-0 md:grid-cols-5">
            {infoCards.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`py-6 text-center md:px-4 ${index !== infoCards.length - 1 ? "md:border-r md:border-white/10" : ""}`}
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
              REBRENDINGS
            </span>

            <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
              Mobīlā trase ar Jūsu zīmola identitāti
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Mobilā trase var kļūt par vienu no pasākuma centrālajiem aktivitāšu objektiem, kas piesaista apmeklētāju uzmanību un veicina aktīvu iesaisti. Papildus piedāvājam iespēju trasi personalizēt un brendot ar jūsu uzņēmuma logo, nodrošinot zīmola redzamību visa pasākuma laikā.
            </p>
          </div>

    <div className="mt-14 columns-1 sm:columns-2 xl:columns-3 gap-6 space-y-6">

  {gallery.map((image, index) => {
    const tall =
      index === 0 ||
      index === 4 ||
      index === 7 ||
      index === 11;

    return (
      <div
        key={image}
        className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-black/60"
      >
        <div
          className={`relative w-full ${
            tall ? "h-[620px]" : "h-[340px]"
          }`}
        >
          <Image
            src={image}
            alt={`Vertikālā trase ${index + 1}`}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  })}


          </div>
        </div>
      </section>

      <PartyCTA />
      <Footer />
    </main>
  );
}