import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HorizontalaTrase() {
  return (
    <main className="bg-[#161616] text-white min-h-screen">

      <Navbar />

      {/* Hero */}

      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/horizontala.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <span className="uppercase tracking-[6px] text-red-500 font-semibold">
            Aktivitāte
          </span>

          <h1 className="text-5xl lg:text-7xl font-black mt-6">
            Horizontālā trase
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            Komandas saliedēšanas aktivitāte, kur dalībnieki kopīgi pārvar
            dažādus uzdevumus, attīstot sadarbību un uzticēšanos.
          </p>

        </div>
      </section>

      {/* Apraksts */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Par aktivitāti
            </h2>

            <p className="text-gray-400 leading-9">
              Horizontālā trase ir viena no populārākajām uzņēmumu
              saliedēšanās aktivitātēm. Dalībnieki kopā risina uzdevumus,
              pārvar šķēršļus un mācās sadarboties dažādās situācijās.
            </p>

          </div>

          <img
            src="/images/horizontala.jpg"
            className="rounded-3xl"
            alt=""
          />

        </div>

      </section>

      {/* Informācija */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-3">Dalībnieki</h3>
              <p className="text-gray-400">10–100+</p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-3">Ilgums</h3>
              <p className="text-gray-400">1–3 stundas</p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-3">Norises vieta</h3>
              <p className="text-gray-400">Visa Baltija</p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-3">Drošība</h3>
              <p className="text-gray-400">Instruktoru uzraudzībā</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <h2 className="text-4xl font-black">
            Vēlies šo aktivitāti savam uzņēmumam?
          </h2>

          <p className="text-gray-400 mt-6">
            Sazinies ar mums un sagatavosim individuālu piedāvājumu.
          </p>

          <Link
            href="/kontakti"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-full font-semibold"
          >
            Saņemt piedāvājumu
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}