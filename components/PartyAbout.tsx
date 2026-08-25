import Image from "next/image";
import Link from "next/link";

export default function PartyAbout() {
  return (
    <section className="py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Kreisā puse */}
          <div>

            <span className="uppercase tracking-[5px] text-red-500 font-semibold">
              Par Party Trip
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-5 leading-tight">
              Aktivitātes,
              <br />
              kas pielāgojas
              <br />
              jūsu pasākumam.
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-8">
              Party Trip ir daudzpusīgs aktivitāšu formāts, kuru pielāgojam
              katra klienta mērķiem, auditorijai un pasākuma norisei.
              Neatkarīgi no tā, vai tās ir uzņēmuma sporta spēles,
              komandu saliedēšana vai pilsētas svētki – izveidosim
              aktivitāšu zonu tieši jūsu vajadzībām.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              Nodrošinām inventāru, profesionālu pasākuma vadīšanu,
              rezultātu uzskaiti un visu nepieciešamo,
              lai jūs varētu baudīt pasākumu bez raizēm.
            </p>

            <blockquote className="mt-10 border-l-4 border-red-600 pl-6 italic text-gray-300 leading-8">
              "Katrs Party Trip ir atšķirīgs. Tieši tāpēc katru pasākumu
              veidojam no nulles, pielāgojot aktivitātes klienta mērķim
              un auditorijai."
            </blockquote>

            <Link
              href="/kontakti"
              className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold"
            >
              Pieteikt pasākumu
            </Link>

          </div>

          {/* Labā puse */}
          <div className="relative">

            <div className="absolute -inset-6 bg-red-600/10 blur-3xl rounded-full" />

            <Image
              src="/images/partytrip-about.jpg"
              alt="Party Trip"
              width={900}
              height={650}
              className="relative rounded-3xl w-full h-[560px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}