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
];

const highlights = [
  { icon: MapPinned, title: "KUSTĪBA", text: "Aktīva un aizraujoša pieredze." },
  { icon: Users, title: "DROŠI", text: "Piemērota dažādiem sagatavotības līmeņiem." },
  { icon: ShieldCheck, title: "KOPĀ", text: "Komandas gars un kopīgs azarts." },
];

export default function HorizontalaTrasePage() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#991b1b30,transparent_55%)]" />

        <div className="grid min-h-[760px] lg:grid-cols-[42%_58%]">
          <div className="relative z-30 flex items-center">
            <div className="w-full max-w-[620px] ml-auto px-6 py-20 lg:px-10">
              <Link
                href="/aktivitates"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-zinc-400 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Atpakaļ uz aktivitātēm
              </Link>

              <span className="mt-8 block uppercase tracking-[5px] font-semibold text-red-500">
                Mobilais virvju parks
              </span>

              <h1 className="mt-6 leading-[0.88] font-black">
                <span className="block text-7xl text-white lg:text-[110px]">
                  HORIZONTĀLĀ
                </span>
                <span className="block text-7xl text-red-600 lg:text-[110px]">
                  TRASE
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-xl leading-9 text-gray-300">
                Aizraujoša horizontālā virvju trase, kas pārbauda līdzsvaru,
                veiklību un komandas garu.
              </p>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                Lieliski piemērota dažāda vecuma dalībniekiem un pasākumiem,
                kuros svarīga kustība, azarts un kopā būšana.
              </p>

              <Link
                href="/kontakti"
                className="mt-10 inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wide transition hover:bg-red-700"
              >
                Pieteikt pasākumu
              </Link>
            </div>
          </div>

          <div className="relative z-10 min-h-[760px]">
            <Image
              src="/images/horizontala-trase-hero.jpg"
              alt="Horizontālā trase"
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
              BRENDINGS
            </span>

            <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
                Mobīlā trase ar Jūsu zīmola identitāti
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
               Mobilā trase var kļūt par vienu no pasākuma centrālajiem aktivitāšu objektiem, kas piesaista apmeklētāju uzmanību un veicina aktīvu iesaisti. Papildus piedāvājam iespēju trasi personalizēt un brendot ar jūsu uzņēmuma logo, nodrošinot zīmola redzamību visa pasākuma laikā.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:auto-rows-[260px]">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 lg:col-span-2 lg:row-span-2">
              <Image
                src="/images/horizontala-trase-1.jpg"
                alt="Horizontālā trase 1"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70">
              <Image
                src="/images/horizontala-trase-2.jpg"
                alt="Horizontālā trase 2"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70">
              <Image
                src="/images/horizontala-trase-3.jpg"
                alt="Horizontālā trase 3"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 lg:col-span-2">
              <Image
                src="/images/horizontala-trase-4.jpg"
                alt="Horizontālā trase 4"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <PartyCTA />
      <Footer />
    </main>
  );
}