import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PartyHero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[720px] lg:min-h-screen">

      {/* Fona bilde */}
      <div className="absolute inset-0">
        <Image
          src="/images/partytrip-hero.jpg"
          alt="Party Trip"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10 lg:to-transparent" />
      </div>

      {/* Saturs */}
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
            Aktivitāšu formāts
          </p>

          <h1 className="mt-6 font-black leading-[0.9]">
            <span className="block text-[42px] sm:text-6xl lg:text-[110px] text-white">
              PARTY
            </span>

            <span className="block text-[42px] sm:text-6xl lg:text-[110px] text-red-600">
              TRIP
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            Party Trip ir lielformāta spēļu programma, kuru pielāgojam katra
            pasākuma vajadzībām, auditorijai un mērķim.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
            Mēs nodrošinām visu pasākuma norisi — no spēļu uzstādīšanas un
            vadīšanas līdz punktu skaitīšanai un uzvarētāju paziņošanai.
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
  );
}