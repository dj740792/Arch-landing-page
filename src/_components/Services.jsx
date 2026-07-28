import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Works() {
  const projects = [
    {
      slug: "amari-pavilion",
      title: "Amari Pavilion",
      category: "Hospitality Architecture",
      year: "2026",
      image: "/workImgs/workImg1.jpg",
    },
    {
      slug: "the-dune-house",
      title: "The Dune House",
      category: "Hospitality Architecture",
      year: "2026",
      image: "/workImgs/workImg2.jpg",
    },

    {
      slug: "solam-villa",
      title: "Solām Villa",
      category: "Hospitality Architecture",
      year: "2026",
      image: "/workImgs/workImg3.jpg",
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
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section ref={targetRef} className="relative h-[550vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 md:gap-16 pl-6 md:pl-12 "
        >
          <div className="w-[55vw] md:w-[35vw] flex-none flex flex-col  h-[60vh]   pr-6">
            <div className="flex flex-col gap-10">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-none">
                Selected work <br />
                <span className=" font-medium">& explorations</span>
              </h2>
              <p className="w-full  text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed  text-[#483b35]">
                A look at the people, places, and ideas we've had the privilege
                to shape.
              </p>
            </div>
          </div>

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              total={projects.length}
              smoothProgress={smoothProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total, smoothProgress }) {
  const start = index / (total + 1);

  const y = useTransform(smoothProgress, [start - 0.2, start + 0.05], [120, 0]);

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
      className="w-[85vw] md:w-[50vw] flex-none flex flex-col gap-12 group "
    >
      {/* Image Container */}
      <div className="relative w-full h-[52vh] md:h-[60vh] overflow-hidden rounded-md">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 85vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Meta Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 px-1">
        <div className="flex flex-col gap-1 max-w-md">
          <h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-zinc-500 font-light">
            {project.category}
          </p>
        </div>

        <a
          href={project.link}
          className="text-xs font-mono uppercase tracking-widest text-zinc-800 underline underline-offset-4 hover:text-zinc-500 transition-colors self-start md:self-auto cursor-pointer"
        >
          Explore Project ↗
        </a>
      </div>
    </motion.div>
  );
}
