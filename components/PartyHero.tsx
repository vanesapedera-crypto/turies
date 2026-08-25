import Image from "next/image";
import Link from "next/link";

export default function PartyHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">

      {/* Fona efekts */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#7f1d1d30,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Kreisā puse */}
          <div>

            <span className="uppercase tracking-[5px] text-red-500 font-semibold">
              Aktivitāšu formāts
            </span>

            <h1 className="mt-5 text-7xl lg:text-8xl font-black leading-none">
              PARTY
              <br />
              <span className="text-red-600">
                TRIP
              </span>
            </h1>

            <p className="mt-10 text-lg text-gray-300 leading-8 max-w-xl">
              Party Trip ir pilnībā pielāgojams aktivitāšu formāts
              uzņēmumu pasākumiem, sporta spēlēm un festivāliem.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
              Izvēlamies piemērotākās spēles, nodrošinām inventāru,
              profesionālu vadīšanu un parūpējamies, lai pasākums
              būtu aizraujošs ikvienam dalībniekam.
            </p>

            <Link
              href="/kontakti"
              className="inline-flex items-center mt-10 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition font-bold"
            >
              Pieteikt pasākumu
            </Link>

          </div>

          {/* Labā puse */}
          <div className="relative">

            <div className="absolute -inset-6 bg-red-600/10 blur-3xl rounded-full" />

            <Image
              src="/images/partytrip-hero.jpg"
              alt="Party Trip"
              width={900}
              height={650}
              priority
              className="relative rounded-3xl object-cover w-full h-[620px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}