import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Handshake,
  Target,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Mūsu stāsts */}
      <section
        id="par"
        className="bg-[#202020] py-28 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Teksts */}
            <div>

              <span className="uppercase tracking-[5px] text-red-500 font-semibold">
                Mūsu stāsts
              </span>

              <h2 className="text-5xl lg:text-6xl font-black mt-5 leading-tight">
                Kā radās TURIES?
              </h2>

              <div className="w-20 h-1 bg-red-600 rounded-full mt-8 mb-8" />

              <p className="text-lg leading-8 text-gray-300">
                Mobilā virvju parka pirmsākumi meklējami 2018. gadā,
                kad tas veiksmīgi darbojās dažādos pasākumos visā Latvijā.
                Šodien <strong>TURIES</strong> turpina attīstīt šo projektu,
                lai tas atkal būtu pieejams uzņēmumiem, pašvaldībām un
                festivāliem, papildinot to ar jaunām aktivitātēm un
                mūsdienīgiem risinājumiem.
              </p>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Laika gaitā mūsu piedāvājums ir audzis. Līdzās mobilajam
                virvju parkam piedāvājam <strong>Party Trip</strong>
                lielformāta spēles, mobilo futbola laukumu un sadarbojamies
                ar pasākumu aģentūru <strong>Smaidu Darbnīca</strong>, lai
                klientiem nodrošinātu pilnvērtīgus pasākumus visā Baltijā.
              </p>

            </div>

            {/* Attēls */}
            <div className="relative">

              <Image
                src="/images/par-mums.jpg"
                alt="TURIES"
                width={700}
                height={800}
                className="rounded-3xl object-cover w-full h-[550px]"
              />

            </div>

          </div>

        </div>
      </section>

     
      {/* Mūsu pieeja */}
<section className="bg-[#1a1a1a] py-24">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <span className="uppercase tracking-[4px] text-red-500 font-bold text-sm">
      Mūsu pieeja
    </span>

    <h2 className="text-5xl font-black text-white mt-3">
      Kas mums ir svarīgi
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      <div className="bg-[#232323] rounded-2xl border border-white/10 p-8 text-center hover:border-red-600 hover:-translate-y-2 transition-all duration-300">

       <ShieldCheck
  className="w-14 h-14 text-red-500 mx-auto mb-6"
  strokeWidth={2}
/>

        <h3 className="text-2xl font-black text-white">
          DROŠĪBA
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          Visas aktivitātes organizējam droši un profesionāli,
          ievērojot augstākos drošības standartus.
        </p>

      </div>

      <div className="bg-[#232323] rounded-2xl border border-white/10 p-8 text-center hover:border-red-600 hover:-translate-y-2 transition-all duration-300">

        <Handshake
  className="w-14 h-14 text-red-500 mx-auto mb-6"
  strokeWidth={2}
/>

        <h3 className="text-2xl font-black text-white">
          SADARBĪBA
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          Katru pasākumu veidojam ciešā sadarbībā ar klientu,
          lai sasniegtu vislabāko rezultātu.
        </p>

      </div>

      <div className="bg-[#232323] rounded-2xl border border-white/10 p-8 text-center hover:border-red-600 hover:-translate-y-2 transition-all duration-300">

        <Target
  className="w-14 h-14 text-red-500 mx-auto mb-6"
  strokeWidth={2}
/>

        <h3 className="text-2xl font-black text-white">
          KVALITĀTE
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          Pievēršam uzmanību katrai detaļai —
          no plānošanas līdz pēdējai aktivitātei.
        </p>

      </div>

      <div className="bg-[#232323] rounded-2xl border border-white/10 p-8 text-center hover:border-red-600 hover:-translate-y-2 transition-all duration-300">

        <MapPin
  className="w-14 h-14 text-red-500 mx-auto mb-6"
  strokeWidth={2}
        />

        <h3 className="text-2xl font-black text-white">
          MOBILITĀTE
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          Dodamies pie klientiem visā Baltijā —
          tur, kur nepieciešamas mūsu aktivitātes.
        </p>

      </div>

    </div>

  </div>

</section>

      <section className="bg-[#161616] py-28 text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center">

      <span className="uppercase tracking-[5px] text-red-500 font-semibold">
        Mūsu komanda
      </span>

      <h2 className="text-5xl font-black mt-5">
        Cilvēki, kuri rada katru piedzīvojumu
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
        Aiz katra veiksmīga pasākuma stāv cilvēki, kuri rūpējas par katru
        detaļu – no plānošanas līdz pēdējai aktivitātei.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {/* Darbinieks 1 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/kristine.jpg"
          alt="Kristine"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Kristīne
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            Uzņēmuma vadītāja
          </p>

          <p className="text-gray-400 mt-5 leading-7">
            Atbild par uzņēmuma attīstību, pasākumu organizēšanu un sadarbību
            ar klientiem.
          </p>

        </div>

      </div>

      {/* Darbinieks 2 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/martins.jpg"
          alt="Martins"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Martiņš
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            Projekta vadītājs
          </p>

          <p className="text-gray-400 mt-5 leading-7">
            xxx
          </p>

        </div>

      </div>

      {/* Darbinieks 3 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/viktors.jpg"
          alt="Viktors"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Viktors
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            Instruktors
          </p>

          <p className="text-gray-400 mt-5 leading-7">
           xxx
          </p>

        </div>

      </div>

      {/* Darbinieks 4 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/vitalijs.jpg"
          alt="Vitālijs"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Vitālijs
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            xxx
          </p>

          <p className="text-gray-400 mt-5 leading-7">
xxx
          </p>

        </div>

      </div>

         {/* Darbinieks 5 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/agija.jpg"
          alt="Agija"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Agija
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            xxx
          </p>

          <p className="text-gray-400 mt-5 leading-7">
xxx
          </p>

        </div>

      </div>

    </div>

       {/* Darbinieks 6 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/vanesa.jpg"
          alt="Vanesa"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Vanesa
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            xxx
          </p>

          <p className="text-gray-400 mt-5 leading-7">
xxx
          </p>

        </div>

      </div>

 {/* Darbinieks 7 */}
      <div className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 transition">

        <img
          src="/images/madara.jpg"
          alt="Madara"
          className="w-full h-72 object-cover"
        />

        <div className="p-7">

          <h3 className="text-2xl font-black">
            Madara
          </h3>

          <p className="text-red-500 mt-2 font-semibold">
            xxx
          </p>

          <p className="text-gray-400 mt-5 leading-7">
xxx
          </p>

        </div>

      </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-black py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-white">
            Gatavi radīt nākamo piedzīvojumu?
          </h2>

          <p className="mt-6 text-xl text-gray-400 leading-8">
            Sazinieties ar mums, un kopā atradīsim piemērotāko
            risinājumu jūsu pasākumam.
          </p>

          <Link
            href="/kontakti"
            className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-bold text-white"
          >
            Sazināties
          </Link>

        </div>

      </section>
    </>
  );
}