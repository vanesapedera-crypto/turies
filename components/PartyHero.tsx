import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PartyHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#991b1b30,transparent_60%)]" />

      <div className="grid min-h-[760px] lg:grid-cols-[42%_58%]">
        <div className="relative z-30 flex items-center">
          <div className="w-full max-w-[620px] ml-auto px-6 lg:px-10 py-24">
            <Link
              href="/aktivitates"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Atpakaļ uz aktivitātēm
            </Link>

            <span className="mt-8 block uppercase tracking-[5px] text-red-500 font-semibold">
              Aktivitāšu formāts
            </span>

            <h1 className="mt-6 leading-[0.88] font-black">
              <span className="block text-5xl sm:text-6xl lg:text-[110px] text-white">
                PARTY
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-[110px] text-red-600">
                TRIP
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-xl leading-9 text-gray-300">
              Party Trip ir lielformāta spēļu programma, kuru pielāgojam katra
              pasākuma vajadzībām, auditorijai un mērķim.
            </p>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Mēs nodrošinām visu pasākuma norisi — no spēļu uzstādīšanas un
              vadīšanas līdz punktu skaitīšanai un uzvarētāju paziņošanai.
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
            src="/images/partytrip-hero.jpg"
            alt="Party Trip"
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
  )
}