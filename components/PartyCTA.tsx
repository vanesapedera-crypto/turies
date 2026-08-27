import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function PartyCTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-red-900/40 bg-[#1a0b0b] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10">
                <CalendarDays className="h-9 w-9 text-red-500" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white md:text-[28px]">
                  Gatavs padarīt savu pasākumu neaizmirstamu?
                </h2>
                <p className="mt-1 text-sm text-zinc-400 md:text-base">
                  Sazinies ar mums un kopā izveidosim labāko izklaidi Tavā pasākumā!
                </p>
              </div>
            </div>

            <Link
              href="/kontakti"
              className="inline-flex rounded-xl bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Piesakies pasākumam
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}