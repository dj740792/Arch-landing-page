import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Architecture &\nMasterplanning",
      desc: "Site analysis, structural design, and zoning feasibility.",
      image: "/WorkImgs/img6.jpg",
    },
    {
      num: "02",
      title: "Interior\nArchitecture",
      desc: "Spatial layout, lighting studies, and custom joinery.",
      image: "/WorkImgs/img6.jpg",
    },
    {
      num: "03",
      title: "Material &\nFurniture Curation",
      desc: "Bespoke furniture design, stone sourcing, and styling.",
      image: "/WorkImgs/img6.jpg",
    },
  ];
  return (
    <section className="w-full py-14  md:py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Header block */}
        <div className="flex flex-col items-center text-center gap-3">
           <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-[clamp(2.5rem,5vw,6.5rem)]"
          >
            Our Services
          </motion.h1>
          <span className="text-xs md:text-sm lg:text-md font-mono uppercase tracking-[0.2em] text-zinc-500">
            End-to-end spatial design & architectural realization
          </span>
        </div>
        <div className="flex gap-8 md:gap-6 items-start">

        {services.map((service, index) => (
          <div key={index} className="flex-1 w-full flex flex-col gap-3 group">
            <span className="text-xs font-mono text-zinc-400">
              {service.num}
            </span>

            <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-light leading-none tracking-tight text-white mix-blend-difference invert whitespace-pre-line">
                {service.title}
              </h3>
            </div>

            <p className="text-xs text-zinc-500 font-light pt-1">
              {service.desc}
            </p>
          </div>
        ))}

        {/* 4TH COLUMN: TEXT STATEMENT */}
        <div className="flex-1 w-full flex flex-col justify-between pt-8 md:pt-6 md:pl-4 gap-8">
          <p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed">
            From initial site feasibility to final custom joinery, we oversee
            every phase of the spatial journey to ensure material continuity and
            structural precision.
          </p>

          <a
            href="/about"
            className="text-xs font-mono uppercase tracking-widest text-black underline underline-offset-4 hover:text-zinc-600 transition-colors"
          >
            How we approach design ———&gt;
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
