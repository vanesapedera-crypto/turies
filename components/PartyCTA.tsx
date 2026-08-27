import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function PartyCTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-xl border border-red-950/50 bg-[#1a0d0d] px-6 py-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,29,29,0.35),rgba(127,29,29,0.08),rgba(127,29,29,0.25))]" />
          <div className="absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_right,rgba(220,38,38,0.18),transparent_70%)]" />

          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-600/10">
                <CalendarDays className="h-8 w-8 text-red-500" />
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
              className="inline-flex rounded-md bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Piesakies pasākumam
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}