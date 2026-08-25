"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const links = [
  { href: "/", label: "Sākums" },
  { href: "/par-mums", label: "Par mums" },
  { href: "/aktivitates", label: "Aktivitātes" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakti", label: "Kontakti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
<Link
  href="/"
  className="flex items-center"
>
  <Image
    src="/images/logo.png"
    alt="Turies"
    width={180}
    height={60}
    priority
    className="h-12 w-auto"
  />
</Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop social */}
          <div className="hidden lg:flex items-center gap-5">

            <a
              href="https://www.facebook.com/turies.lv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <button
              type="button"
              className="text-white hover:text-red-500 transition"
              title="Instagram drīzumā"
              aria-label="Instagram drīzumā"
            >
              <FaInstagram size={18} />
            </button>

          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
            aria-label="Atvērt izvēlni"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#161616] border-t border-white/10">

          <nav className="flex flex-col px-6 py-8">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-lg transition ${
                  pathname === link.href
                    ? "text-red-500 font-semibold"
                    : "text-white hover:text-red-500"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10">

              <a
                href="https://www.facebook.com/turies.lv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition"
              >
                <FaFacebookF size={22} />
              </a>

              <button
                type="button"
                className="text-white hover:text-red-500 transition"
                title="Instagram drīzumā"
                aria-label="Instagram drīzumā"
              >
                <FaInstagram size={22} />
              </button>

            </div>

          </nav>

        </div>
      )}
    </header>
  );
}