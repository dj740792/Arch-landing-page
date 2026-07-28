import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const services = [
    {
      num: "01",
      title: "Architecture & Masterplanning",
      desc: "Site analysis, structural design, and zoning feasibility.",
      image: "/serviceImgs/serviceImg1.jpg",
    },
    {
      num: "02",
      title: "Interior Architecture",
      desc: "Spatial layout, lighting studies, and custom joinery.",
      image: "/serviceImgs/serviceImg2.jpg",
    },
    {
      num: "03",
      title: "Material & Furniture Curation",
      desc: "Bespoke furniture design, stone sourcing, and styling.",
      image: "/serviceImgs/serviceImg3.jpg",
    },
    {
      num: "04",
      title: "Material & Furniture Curation",
      desc: "Bespoke furniture design, stone sourcing, and styling.",
      image: "/serviceImgs/serviceImg3.jpg",
    },
  ];

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 90,
    restDelta: 0.001,
  })

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[550vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 md:gap-16 pl-6 md:pl-12 "
        >
          <div className="w-[55vw] md:w-[35vw] flex-none flex flex-col  h-[60vh]   pr-6">
            <div className="flex flex-col gap-10">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-none uppercase">
                Concept
            
                <br />
                <span className=" font-medium ">To completion</span>
              </h2>
              <p className="w-full  text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed  text-[#483b35]">
                We guide smoothly from idea to built reality.
              </p>
            </div>
          </div>

          {services.map((service, index) => (
            <ProjectCard
              key={index}
              service={service}
              index={index}
              total={services.length}
              smoothProgress={smoothProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ service, index, total, smoothProgress }) {
  const start = index / (total + 1);

  const y = useTransform(smoothProgress, [start - 0.2, start + 0.05], [190, 0]);

  const scale = useTransform(
    smoothProgress,
    [start - 0.2, start + 0.05],
    [0.94, 1],
  );

  return (
    <motion.div
      style={{
        y: index === 0 ? 0 : y,
        scale: index === 0 ? 1 : scale,
      }}
      className="w-[65vw] md:w-[40vw] flex-none flex flex-col gap-12 group "
    >
      {/* Image Container */}
      <div className="relative w-full h-[42vh] md:h-[55vh] overflow-hidden ">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 85vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Meta Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 px-1">
        <div className="flex flex-col gap-1 max-w-md">
          <div><h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">
            {service.title}
          </h3>
          <p className="text-xs md:text-sm text-zinc-500 font-light">{service.desc}</p>
          </div>
         
        </div>

      </div>
    </motion.div>
  );
}
