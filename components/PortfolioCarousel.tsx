"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Project = {
  title: string;
  year: string;
  location: string;
  participants: string;
  description: string;
  images: string[];
};

export default function PortfolioCarousel({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="py-20 border-b border-white/10">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Teksts */}

        <div>

          <span className="uppercase tracking-[4px] text-red-500 font-semibold">
            Realizēts projekts
          </span>

          <h2 className="text-5xl font-black mt-5 leading-tight">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-4 mt-8 text-zinc-400">

            <span>{project.year}</span>

            <span>•</span>

            <span>{project.location}</span>

            <span>•</span>

            <span>{project.participants}</span>

          </div>

          <p className="mt-8 text-lg leading-8 text-zinc-300">
            {project.description}
          </p>

        </div>

        {/* Karuselis */}

        <div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
            }}
            loop
            className="rounded-3xl overflow-hidden"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>

                <Image
                  src={image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full h-[520px] object-cover"
                />

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

    </section>
  );
}
.swiper-button-prev,
.swiper-button-next{
    color:#dc2626 !important;
}

.swiper-pagination-bullet{
    background:white !important;
    opacity:.4;
}

.swiper-pagination-bullet-active{
    opacity:1;
    background:#dc2626 !important;
}

.swiper{
    border-radius:24px;
}