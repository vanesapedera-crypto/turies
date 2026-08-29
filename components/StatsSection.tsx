"use client";

import { CalendarDays, Users, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "100+",
    title: "PASĀKUMI",
  },
  {
    icon: Users,
    value: "10 000+",
    title: "DALĪBNIEKI",
  },
  {
    icon: Star,
    value: "8+",
    title: "GADU PIEREDZE",
  },
  {
    icon: MapPin,
    title: "STRĀDĀJAM VISĀ BALTIJĀ",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#111111] border-t border-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-5 py-10 px-8 border-r border-white/10 last:border-r-0"
              >
                <Icon
                  className="w-11 h-11 text-red-600 flex-shrink-0"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="text-white font-black text-4xl leading-none">
                    {item.value}
                  </h3>

                  <p className="text-white/70 uppercase text-sm mt-2 tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}