"use client";

import { useState } from "react";

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

import "yet-another-react-lightbox/styles.css";

const infoCards = [
  {
    icon: CircleCheckBig,
    title: "PIEMĒROTA",
    text: "Bērniem, jauniešiem un pieaugušajiem. Piemērota uzņēmumu pasākumiem, svētkiem un sporta dienām.",
  },
  {
    icon: Map,
    title: "VIETAS VAJADZĪBAS",
    text: "Nepieciešama līdzena teritorija, kur droši uzstādīt trasi un nodrošināt kustību ap to.",
  },
  {
    icon: Users,
    title: "DALĪBNIEKI",
    text: "Vienlaikus trasē var atrasties līdz 8–10 dalībniekiem, pārējie gaida drošā zonā.",
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
  "/images/horizontala-trase-1.jpg",
  "/images/horizontala-trase-2.jpg",
  "/images/horizontala-trase-3.jpg",
  "/images/horizontala-trase-4.jpg",
  "/images/horizontala-trase-5.jpg",
  "/images/horizontala-trase-6.jpg",
  "/images/horizontala-trase-7.jpg",
  "/images/horizontala-trase-8.jpg",
  "/images/horizontala-trase-9.jpg",
  "/images/horizontala-trase-10.jpg",
  "/images/horizontala-trase-11.jpg",
];

const highlights = [
  { icon: MapPinned, title: "KUSTĪBA", text: "Aktīva un aizraujoša pieredze." },
  { icon: Users, title: "DROŠI", text: "Piemērota dažādiem sagatavotības līmeņiem." },
  { icon: ShieldCheck, title: "KOPĀ", text: "Komandas gars un kopīgs azarts." },
];

export default function HorizontalaTrasePage() {
  return (
    <><main className="bg-[#0b0b0b] text-white">
      <section className="relative overflow-hidden bg-black min-h-[720px] lg:min-h-screen">
        {/* Fona bilde */}
        <div className="absolute inset-0">
          <Image
            src="/images/horizontala-trase-hero.jpg"
            alt="Horizontālā trase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center" />

          {/* Tumšs pārklājums */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10 lg:to-transparent" />
        </div>

        {/* Saturs */}
        <div className="relative z-10 mx-auto flex min-h-[720px] lg:min-h-screen items-center max-w-7xl px-6 py-32 lg:px-10">
          <div className="max-w-xl lg:max-w-2xl">

            <Link
              href="/aktivitates"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Atpakaļ uz aktivitātēm
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[8px] text-red-500">
              Mobilais virvju parks
            </p>

            <h1 className="mt-6 font-black leading-[0.88]">
              <span className="block text-[44px] sm:text-6xl lg:text-[110px] text-white">
                HORIZONTĀLĀ
              </span>

              <span className="block text-[44px] sm:text-6xl lg:text-[110px] text-red-600">
                TRASE
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Aizraujoša horizontālā virvju trase, kas pārbauda līdzsvaru,
              veiklību un komandas garu.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              Lieliski piemērota dažāda vecuma dalībniekiem un uzņēmumu
              pasākumiem, sporta spēlēm un svētkiem.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kontakti"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
              >
                Pieteikt pasākumu
              </Link>
            </div>

          </div>
        </div>
      </section>


      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 lg:px-10">
          <div className="grid gap-0 md:grid-cols-5">
            {infoCards.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`py-6 text-center md:px-4 ${index !== infoCards.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""}`}
              >
                <Icon className="mx-auto h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-lg font-black tracking-wide">
                  {title}
                </h3>
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

   <div className="mt-14 grid gap-6 lg:grid-cols-3 auto-rows-[260px]">

  {/* 1 - Liela */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-2 lg:row-span-2">
    <Image
      src={gallery[0]}
      alt="Horizontālā trase 1"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 2 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[1]}
      alt="Horizontālā trase 2"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 3 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[2]}
      alt="Horizontālā trase 3"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 4 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-2">
    <Image
      src={gallery[3]}
      alt="Horizontālā trase 4"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 5 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[4]}
      alt="Horizontālā trase 5"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 6 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[5]}
      alt="Horizontālā trase 6"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 7 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[6]}
      alt="Horizontālā trase 7"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 8 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[7]}
      alt="Horizontālā trase 8"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 9 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-2">
    <Image
      src={gallery[8]}
      alt="Horizontālā trase 9"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 10 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10">
    <Image
      src={gallery[9]}
      alt="Horizontālā trase 10"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* 11 */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-3 h-[500px]">
    <Image
      src={gallery[10]}
      alt="Horizontālā trase 11"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

        </div>
        </div>
      </section>

      <PartyCTA />
      <Footer />
    </main></>
  );
}