"use client";

import {
  MessageCircle,
  ClipboardList,
  Truck,
  Mic2,
  ThumbsUp,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: MessageCircle,
    title: "SAZINĀMIES",
    text: "Uzzinām jūsu vajadzības un pasākuma mērķus.",
  },
  {
    id: "02",
    icon: ClipboardList,
    title: "IZSTRĀDĀJAM PROGRAMMU",
    text: "Sagatavojam individuālu programmu un aktivitāšu plānu.",
  },
  {
    id: "03",
    icon: Truck,
    title: "ATVEDAM INVENTĀRU",
    text: "Piegādājam visu nepieciešamo inventāru un aprīkojumu.",
  },
  {
    id: "04",
    icon: Mic2,
    title: "VADĀM PASĀKUMU",
    text: "Profesionāli koordinējam un iesaistām visus dalībniekus.",
  },
  {
    id: "05",
    icon: ThumbsUp,
    title: "JŪS BAUDĀT",
    text: "Jūs baudāt pasākumu, mēs parūpējamies par pārējo.",
  },
];

export default function ProcessSection() {
  return (
    <>
      {/* Banner */}
<section className="relative h-[500px] flex items-center justify-center overflow-hidden">

  <iframe
    className="absolute inset-0 w-full h-full"
    src="https://www.youtube.com/embed/3v7L6LN5-EI?start=78&autoplay=1&mute=1&loop=1&playlist=3v7L6LN5-EI&controls=0&rel=0&playsinline=1"
    title="Turies video"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />

  {/* Tumšs pārklājums */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Teksts */}
  <div className="relative z-10 text-center text-white max-w-4xl px-6">

    <h2 className="text-4xl lg:text-6xl font-black uppercase leading-tight">
      Mēs parūpējamies par visu
      <br />
      pasākuma norisi.
    </h2>

    <div className="w-16 h-1 bg-red-600 mx-auto my-6 rounded-full" />

  </div>

</section>

      {/* Steps */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-red-600 uppercase tracking-[4px] font-bold text-sm">
              Kā notiek sadarbība?
            </span>

            <h2 className="text-5xl font-black uppercase text-zinc-900 mt-4">
              Vienkārši. Skaidri. Profesionāli.
            </h2>

          </div>

          <div className="relative mt-20">

            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px border-t border-dashed border-red-400" />

            <div className="grid lg:grid-cols-5 gap-12">

              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="relative text-center"
                  >

                    <div className="relative mx-auto w-20 h-20 rounded-full border-2 border-red-500 bg-white flex items-center justify-center">

                      <span className="absolute -top-3 bg-white px-2 text-red-600 text-sm font-black">
                        {step.id}
                      </span>

                      <Icon
                        className="w-8 h-8 text-zinc-900"
                        strokeWidth={2}
                      />

                    </div>

                    <h3 className="mt-8 font-black uppercase text-lg text-zinc-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-zinc-500 leading-7">
                      {step.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}