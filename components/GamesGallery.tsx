"use client";

import { useState } from "react";
import Image from "next/image";

type Game = {
  title: string;
  image: string;
};

const games: Game[] = [
  { title: "Garās kājas", image: "/images/garas kajas.jpg" },
  { title: "Jenga", image: "/images/jenga.jpg" },
  { title: "Katapulta", image: "/images/katapulta.jpg" },
  { title: "Līdzsvara dēlis", image: "/images/lidzsvaru delis.jpg" },
  { title: "Limbo", image: "/images/limbo.jpg" },
  { title: "Melnais caurums", image: "/images/melnais caurums.jpeg" },
  { title: "Slēpes", image: "/images/slepes.jpg" },
  { title: "Smaidiņu cope", image: "/images/smaidinu cope.jpeg" },
  { title: "Veiksmīgais loms", image: "/images/veiksmigais loms.jpg" },
  { title: "Pīļuks pa dambi", image: "/images/piluks pa dambi.jpg" },
  { title: "Desas", image: "/images/desas.jpeg" },
  { title: "Tornis", image: "/images/tornis.jpeg" },
  { title: "Saldumu zeme", image: "/images/saldumu zeme.jpeg" },
  { title: "Peļu slazds", image: "/images/peļu slazds.jpg" },
  { title: "Slinkais šoferītis", image: "/images/slinkais soferitis.jpg" },
  { title: "Lielformāta smaidiņš", image: "/images/lielformata smaidins.jpg" },
  { title: "Dambrete", image: "/images/dambrete.jpeg" },
  { title: "Acenes", image: "/images/acenes.jpg" },
  { title: "Bišu šūniņas", image: "/images/bisu suninas.jpeg" },
  { title: "Bungas", image: "/images/bungas.jpg" },
];

export default function GamesGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + games.length) % games.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % games.length);
  };

  return (
    <>
      <section className="border-t border-white/10 bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[5px] text-red-500">
              Party Trip
            </span>

            <h2 className="mt-4 text-5xl font-black text-white">
              Spēles
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Zemāk redzamas mūsu pieejamās Party Trip spēles. No tām veidojam
              pasākumam piemērotāko kombināciju atbilstoši vietai, dalībniekiem un
              pasākuma mērķim.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game, index) => (
              <button
                key={game.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/70 text-left transition hover:-translate-y-1 hover:border-red-600"
              >
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="px-5 py-4">
                  <h3 className="text-lg font-bold text-white">
                    {game.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-8 bg-red-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 text-5xl text-white md:left-8 md:text-7xl"
            aria-label="Iepriekšējā bilde"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 text-5xl text-white md:right-8 md:text-7xl"
            aria-label="Nākamā bilde"
          >
            ›
          </button>

          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-4xl text-white md:right-8 md:top-8 md:text-5xl"
            aria-label="Aizvērt"
          >
            ✕
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={games[activeIndex].image}
                alt={games[activeIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">
                {games[activeIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}