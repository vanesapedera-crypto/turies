import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

<div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16">
          {/* Par uzņēmumu */}
          <div>

           <Image
  src="/images/logo.png"
  alt="Turies"
  width={280}
  height={100}
  className="h-24 w-auto"
/>

            <p className="mt-6 text-zinc-400 leading-8">
              No mobilā virvju parka un Party Trip aktivitātēm līdz pilnai
              pasākumu organizēšanai uzņēmumiem, pašvaldībām un festivāliem
              visā Baltijā.
            </p>

          </div>

          {/* Izvēlne */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Izvēlne
            </h3>

            <nav className="flex flex-col gap-4 text-zinc-400">

              <Link href="/" className="hover:text-red-500 transition">
                Sākums
              </Link>

              <Link href="/par-mums" className="hover:text-red-500 transition">
                Par mums
              </Link>

              <Link href="/aktivitates" className="hover:text-red-500 transition">
                Aktivitātes
              </Link>

              <Link href="/galerija" className="hover:text-red-500 transition">
                Galerija
              </Link>

              <Link href="/kontakti" className="hover:text-red-500 transition">
                Kontakti
              </Link>

            </nav>

          </div>

          {/* Kontakti */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Kontakti
            </h3>

            <div className="space-y-4 text-zinc-400">

  <p className="flex items-center gap-3">
    <FaMapMarkerAlt className="text-red-500" />
    Visa Baltija
  </p>

  <p className="flex items-center gap-3">
    <FaPhoneAlt className="text-red-500" />
    <a
      href="tel:+37126705817"
      className="hover:text-red-500 transition"
    >
      +371 26705817
    </a>
  </p>

  <p className="flex items-center gap-3">
    <FaEnvelope className="text-red-500" />
    <a
      href="mailto:info@turies.lv"
      className="hover:text-red-500 transition"
    >
      info@turies.lv
    </a>
  </p>

</div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/turies.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/turies.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-zinc-500 text-sm">
          © 2025 TURIES. Visas tiesības aizsargātas.
        </div>

      </div>
    </footer>
  );
}