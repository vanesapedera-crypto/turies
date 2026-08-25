"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Trophy, PartyPopper, Tent } from "lucide-react";

const services = [
  {
    id: 1,
    title: "UZŅĒMUMU PASĀKUMI",
    description:
      "Organizējam uzņēmumu saliedēšanās pasākumus un sporta spēles – no programmas izstrādes līdz profesionālai vadīšanai, tiesāšanai un apbalvošanai.",
    image: "/images/uznemumu-pasakumi.jpg",
    icon: Trophy,
    alt: "Uzņēmumu pasākumi",
  },
  {
    id: 2,
    title: "KORPORATĪVIE PASĀKUMI",
    description:
      "Plānojam un organizējam uzņēmumu jubilejas, klientu pasākumus, vasaras un ziemas balles, pielāgojot programmu jūsu kolektīvam.",
    image: "/images/korporativie.jpg",
    icon: PartyPopper,
    alt: "Korporatīvie pasākumi",
  },
  {
    id: 3,
    title: "PILSĒTU SVĒTKI UN FESTIVĀLI",
    description:
      "Nodrošinām aktivitātes, profesionālus vadītājus, inventāru un koordinētu norisi publiskos pasākumos visā Latvijā.",
    image: "/images/festivali.jpg",
    icon: Tent,
    alt: "Festivāli",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.6,
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: any;
};

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[20px] min-h-[620px] cursor-pointer shadow-2xl"
    >
      {/* Background image */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.95) 0%, rgba(0,0,0,.65) 45%, rgba(0,0,0,.15) 100%)",
        }}
      />

      {/* Red Hover Overlay */}
      <div className="absolute inset-0 bg-red-700/20 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
          <Icon
            className="w-7 h-7 text-red-600"
            strokeWidth={2.2}
          />
        </div>

        {/* Bottom */}
        <div>

          <div className="w-16 h-1 rounded-full bg-red-600 mb-5" />

          <h3 className="text-4xl font-black uppercase leading-none text-white mb-5">
            {service.title}
          </h3>

          <p className="text-white/90 leading-7 text-base">
            {service.description}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto w-full" style={{ maxWidth: "1400px" }}>

       {/* Header */}

<div className="flex flex-col items-center text-center mb-16 md:mb-20">

  {/* Small red subtitle */}
  <span className="inline-block text-red-600 font-bold uppercase tracking-[0.22em] text-xs sm:text-sm mb-4">
    Mūsu pakalpojumi
  </span>

  {/* Main heading */}
  <h2
    className="font-extrabold uppercase text-zinc-900 leading-tight tracking-tight mb-5"
    style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
  >
    Ko mēs organizējam?
  </h2>

  {/* Red accent line */}
  <div className="w-16 h-[3.5px] rounded-full bg-red-600 mb-7" />

  {/* Description */}
  <p
    className="text-zinc-500 font-light leading-relaxed max-w-[720px]"
    style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)" }}
  >

  </p>

</div>

        {/* ── Grid ── */}
         <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
