import Link from "next/link";
import { activities } from "@/lib/activities";

export default function Activities() {
  return (
    <section className="py-24 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-red-500 font-semibold">
            Aktivitātes
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-6">
            Izvēlies savu piedzīvojumu
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            Piedāvājam plašu aktivitāšu klāstu uzņēmumu saliedēšanās
            pasākumiem un sporta spēlēm.
          </p>
        </div>

        <div className="space-y-10">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/aktivitates/${activity.slug}`}
              className="group relative block overflow-hidden rounded-3xl h-[500px]"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-10">
                <h2 className="text-4xl lg:text-5xl font-black">
                  {activity.title}
                </h2>

                <p className="text-gray-200 max-w-2xl mt-5 text-lg">
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