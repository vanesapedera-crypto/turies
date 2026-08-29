"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, PartyPopper, Tent } from "lucide-react";
import { FaFutbol } from "react-icons/fa6";
import { FaDice } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";

const services = [
{
  id: 1,
  title: "MOBILAIS VIRVJU PARKS",
  description:
    "Horizontālās un vertikālās virvju trases, kas sniedz aizraujošus izaicinājumus, attīsta komandas sadarbību un rada neaizmirstamu piedzīvojumu.",
  image: "/images/virvju-parks.jpg",
  icon: FaPersonHiking,
  alt: "Mobilais virvju parks",
},
  {
  id: 2,
  title: "FUTBOLA LAUKUMS",
  description:
    "Pilnībā aprīkots futbola laukums, ko uzstādām jūsu izvēlētajā vietā, nodrošinot kvalitatīvu spēles vidi un aktīvu dalībnieku iesaisti.",
  image: "/images/futbola-laukums.jpg",
icon: FaFutbol,
  alt: "Futbola laukums",
},
{
  id: 3,
  title: "PARTY TRIP",
  description:
    "Lielformāta spēļu komplekts ar 10–20 dažādām aktivitātēm. Mūsu komanda nodrošina spēļu vadīšanu, tiesāšanu un raitu pasākuma norisi.",
  image: "/images/party-trip.jpg",
  icon: FaDice,
  alt: "Party Trip",
},
{
  id: 4,
  title: "PASĀKUMU ORGANIZĒŠANA",
  description: (
    <>
      Sadarbībā ar pasākumu aģentūru{" "}
      <a
        href="https://smaidudarbnica.lv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-400 hover:text-red-300 underline underline-offset-4"
      >
        Smaidu Darbnīca
      </a>{" "}
      organizējam uzņēmumu pasākumus, sporta spēles, festivālus un citus
      pasākumus no idejas līdz veiksmīgai norisei.
    </>
  ),
  image: "/images/pasakumu-organizesana.jpg",
  icon: PartyPopper,
  alt: "Pasākumu organizēšana",
},
];

import { ReactNode } from "react";

type Service = {
  id: number;
  title: string;
  description: ReactNode;
  image: string;
  alt: string;
  icon: any;
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
className="group relative overflow-hidden rounded-[28px] h-[460px] shadow-xl"    >
      {/* Background */}
      <Image
        src={service.image}
        alt={service.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-red-700/20 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">

<div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg">       
<Icon className="w-6 h-6 text-red-600" />
        </div>

        <div>
          <div className="w-14 h-1 bg-red-600 rounded-full mb-5" />

<h3 className="text-[28px] font-black uppercase leading-tight text-white mb-3">            {service.title}
          </h3>

          <p className="text-white/85 leading-7">
            {service.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-white py-28">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[4px] text-red-600 font-bold">
            Mūsu pakalpojumi
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-zinc-900 mt-5">
            Aktivitātes, inventārs un pasākumu organizēšana    
          </h2>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto my-8" />

        </div>

        {/* Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}