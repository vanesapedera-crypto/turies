import Link from "next/link";
import Image from "next/image";
import { activities } from "@/lib/activities";

export default function Activities() {
  return (
    <section className="bg-[#161616] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 text-center">
          <span className="font-semibold uppercase tracking-[5px] text-red-500">
            Aktivitātes
          </span>

          <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">
            Izvēlies savu piedzīvojumu
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Piedāvājam plašu aktivitāšu klāstu uzņēmumu saliedēšanās
            pasākumiem un sporta spēlēm.
          </p>
        </div>

        <div className="space-y-10">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/aktivitates/${activity.slug}`}
              className="group relative block h-[500px] overflow-hidden rounded-3xl"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-10">
                <h2 className="text-4xl font-black lg:text-5xl">
                  {activity.title}
                </h2>

                <p className="mt-5 max-w-2xl text-lg text-gray-200">
                  {activity.description}
                </p>

                <div className="mt-8">
                  <span className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 font-semibold transition group-hover:bg-red-700">
                    Uzzināt vairāk →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}