import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontaktiPage() {
  return (
    <main className="bg-[#161616] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 text-center px-6">
        <span className="uppercase tracking-[5px] text-red-500 font-semibold">
          Kontakti
        </span>

        <h1 className="text-5xl lg:text-7xl font-black mt-6">
          Sazinieties ar mums
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400 leading-9">
          Plānojat uzņēmuma saliedēšanās pasākumu vai sporta spēles?
          Aizpildiet formu un mēs ar Jums sazināsimies, lai sagatavotu
          individuālu piedāvājumu.
        </p>
      </section>

      {/* Saturs */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">

          {/* Forma */}

          <div className="bg-[#202020] rounded-3xl p-10 border border-white/10">

            <h2 className="text-3xl font-bold mb-8">
              Atstājiet ziņojumu
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Uzņēmuma nosaukums"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Kontaktpersona"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <input
                type="email"
                placeholder="E-pasts"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <input
                type="tel"
                placeholder="Tālrunis"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Norises vieta"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <input
                type="date"
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
              />

              <select
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Dalībnieku skaits
                </option>
                <option>Līdz 20</option>
                <option>20–50</option>
                <option>50–100</option>
                <option>100–250</option>
                <option>250+</option>
              </select>

              <textarea
                rows={6}
                placeholder="Pastāstiet par plānoto pasākumu..."
                className="w-full bg-[#2b2b2b] rounded-xl p-4 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-xl font-semibold text-lg"
              >
                Nosūtīt pieprasījumu
              </button>

            </form>

          </div>

          {/* Kontakti + Rekvizīti */}

          <div className="space-y-8">

            {/* Kontakti */}

            <div className="bg-[#202020] rounded-3xl p-10 border border-white/10">

              <h2 className="text-3xl font-bold mb-8">
                Kontakti
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-500">E-pasts</p>
                  <p className="text-white text-lg">
                    info@turies.lv
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Tālrunis</p>
                  <p className="text-white text-lg">
                    +371 26705817
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Facebook</p>

                  <a
                    href="https://www.facebook.com/turies.lv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    facebook.com/turies.lv
                  </a>
                </div>

              </div>

            </div>

            {/* Rekvizīti */}

            <div className="bg-[#202020] rounded-3xl p-10 border border-white/10">

              <h2 className="text-3xl font-bold mb-8">
                Rekvizīti
              </h2>

              <div className="space-y-5">

                <div>
                  <p className="text-gray-500">Juridiskā persona</p>
                  <p className="text-white">SIA "JUALEKS"</p>
                </div>

                <div>
                  <p className="text-gray-500">Reģistrācijas Nr.</p>
                  <p className="text-white">40002054493</p>
                </div>

                <div>
                  <p className="text-gray-500">Juridiskā adrese</p>
                  <p className="text-white">
                    Zemgales iela 8, Tukums, LV-3101<br />
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Banka</p>
                  <p className="text-white">Swedbank AS</p>
                </div>

                <div>
                  <p className="text-gray-500">IBAN</p>
                  <p className="text-white break-all">
                    LV66HABA0551041184447
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">SWIFT</p>
                  <p className="text-white">HABALV22</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}