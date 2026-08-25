import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = Array.from({ length: 21 }, (_, i) => `/images/gallery${i + 1}.jpg`);

export default function GalerijaPage() {
  return (
    <main className="bg-[#161616] text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 text-center px-6">
        <span className="uppercase tracking-[5px] text-red-500 font-semibold">
          Galerija
        </span>

        <h1 className="text-5xl lg:text-7xl font-black mt-6">
          Ieskats mūsu pasākumos
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
          Emocijas, saliedēšanās un piedzīvojumi, kas paliek atmiņā.
        </p>
      </section>

      <section className="pb-24">
        <div className="w-[95%] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">

            {images.map((src, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={src}
                    alt={`Galerija ${index + 1}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition">
                    <span className="text-5xl opacity-0 group-hover:opacity-100 transition">
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}