"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[760px] overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Pasākumu organizēšana"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-20" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />

      {/* Content */}
      <div className="relative z-30 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          {/* Palielināts platums */}
          <div className="max-w-[900px]">

            <span className="text-red-600 uppercase tracking-[4px] font-bold text-base md:text-lg">
              MOBILAIS PIEDZĪVOJUMU PARKS
            </span>

            <h1 className="mt-5 font-black uppercase text-white leading-[0.9]
                           text-[3rem]
                           md:text-[4.3rem]
                           xl:text-[4.8rem]">

              Plānojam. 
              <br />
              Organizējam. <span className="text-red-600">Īstenojam.</span>

            </h1>

            <p className="mt-8 max-w-[620px] text-lg md:text-xl text-white/90 leading-8">
Mobilais virvju parks ir viena no mūsu populārākajām aktivitātēm, taču piedāvājam arī pilna cikla pasākumu organizēšanu – no programmas izstrādes un inventāra līdz profesionālai vadīšanai un koordinēšanai.            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/kontakti"
                className="rounded-full bg-red-600 px-9 py-4 font-bold uppercase transition hover:bg-red-700"
              >
                Saņemt piedāvājumu
              </Link>

              <Link
                href="/aktivitates"
                className="rounded-full border-2 border-white px-9 py-4 font-bold uppercase text-white transition hover:bg-white hover:text-black"
              >
                Skatīt aktivitātes
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}