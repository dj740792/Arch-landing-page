"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Monolith Residence Façade",
    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass: "col-span-12 md:col-span-3 md:col-start-2 md:row-start-1",
    src:"/workImgs/workImg1.jpg"
  },
  {
    id: "02",
    title: "Echo Point Apartments",
    aspect: "h-84 md:h-auto md:aspect-[16/9]",
    gridClass: "col-span-12 md:col-span-5 md:col-start-7 md:row-start-1",
    src:"/workImgs/workImg2.jpg"
  },
  {
    id: "03",
    title: "Sunset Ridge Villas",
    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass: "col-span-12 md:col-span-3 md:col-start-1 md:row-start-2",
    src:"/workImgs/workImg3.jpg"
  },
  {
    id: "04",
    title: "Cedar Grove Estates",  
    aspect: "h-84 md:h-auto md:aspect-[4/5]",
    gridClass: "col-span-12 md:col-span-4 md:col-start-5 md:row-start-2",
    src:"/workImgs/workImg4.jpg"
  },
  {
    id: "05",
    title: "Seabreeze Luxury Suites",
    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass:
      "col-span-12 md:col-span-3 md:col-start-10 md:row-start-2 self-end",
    src:"/workImgs/workImg5.jpg"
  },
];

export default function FeaturedProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="w-full  px-4 md:px-8 py-32 ">
      {/* Header Row */}
      <div className="flex justify-between items-baseline mb-10 border-b pb-4">
        <h2 className="text-4xl md:text-7xl font-normal tracking-tight">
          Featured Projects
        </h2>
        <Link
          href="/work"
          className="text-[10px] md:text-sm font-semibold tracking-widest uppercase"
        >
          SEE ALL PORTFOLIO
        </Link>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-20 items-start">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, isMobile }) {
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const clipProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <div ref={itemRef} className={`${project.gridClass}  flex flex-col gap-2`}>
      <motion.div
        style={{
          clipPath: isMobile ? "none" : clipProgress,
        }}
        className={`relative w-full ${project.aspect} overflow-hidden`}
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <div className="flex justify-between">
        <p className="text-md md:text-lg font-normal tracking-wide">
          {project.title}
        </p>
        <p className="text-md md:text-lg font-normal tracking-wide opacity-80">
          {project.year}
        </p>
      </div>
    </div>
  );
}
