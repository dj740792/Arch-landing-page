import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { title } from "motion/react-client";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Architecture & Masterplanning",
      image: "/serviceImgs/serviceImg1.jpg",
    },
    {
      num: "02",
      title: "Interior Architecture",
      image: "/serviceImgs/serviceImg2.jpg",
    },
    {
      num: "03",
      title: "Material & Furniture Curation",
      image: "/serviceImgs/serviceImg3.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-8xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Header block */}

        <motion.h1 className="text-[clamp(2.5rem,5vw,4.5rem)] text-start leading-15 font-semibold">
          End-to-end spatial design & architectural realization
        </motion.h1>

        <div className="mx-12 grid grid-cols-2 justify-center md:grid-cols-3 gap-4 md:gap-9 items-start">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 group ">
              <div className="relative w-full h-60 lg:h-80 xl:h-100  overflow-hidden ">
                <motion.div
                  initial={{ y: "-8%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    delay: index * 0.4,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="w-full h-full relative "
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: "0%" }}
                  whileInView={{ y: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0 bg-white z-10 pointer-events-none"
                />
              </div>
              <h3 className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
