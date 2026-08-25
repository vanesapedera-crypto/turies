import Link from "next/link";

export default function PartyCTA() {
  return (
    <section className="py-28 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[5px] text-red-500 font-semibold">
          Sazinies ar mums
        </span>

        <h2 className="mt-5 text-5xl lg:text-6xl font-black text-white leading-tight">
          Radīsim neaizmirstamu
          <br />
          Party Trip pasākumu.
        </h2>

        <p className="mt-8 text-xl text-zinc-400 leading-8 max-w-3xl mx-auto">
          Pastāsti mums par savu pasākumu, un mēs sagatavosim
          individuālu piedāvājumu ar piemērotākajām aktivitātēm,
          inventāru un pilnu pasākuma organizēšanu.
        </p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          <Link
            href="/kontakti"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold"
          >
            Saņemt piedāvājumu
          </Link>

          <a
            href="tel:+37126705817"
            className="border border-white/20 hover:border-red-600 hover:text-red-500 transition px-8 py-4 rounded-xl font-bold"
          >
            Zvanīt mums
          </a>

        </div>

      </div>
    </section>
  );
}