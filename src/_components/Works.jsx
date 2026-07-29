"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredWorks = [
  {
    slug: "amari-pavilion",
    title: "Amari Pavilion",
    category: "Hospitality Architecture",
    year: "2026",
    src: "/workImgs/workImg1.jpg",
    height: "700px",
    width: "2/4vw",
  },
  {
    slug: "the-dune-house",
    title: "The Dune House",
    category: "Residential Design",
    year: "2025",
    src: "/workImgs/workImg2.jpg",
    height: "600px",
    width: "1/4vw",
  },
  {
    slug: "solam-villa",
    title: "Solām Villa",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/workImgs/workImg3.jpg",
    height: "500px",
    width: "2/4vw",
  },
  {
    slug: "Bad-hand-coffe",
    title: "Bad Hand Coffee",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/workImgs/workImg4.jpg",
    height: "700px",
    width: "1/4vw",
  },
 
];

export default function Works() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.25", "end 0.25"],
  });

  const yLeftScroll = useTransform(scrollYProgress, [0, 1], ["0px", "290px"]);
  const yRightScroll = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
 

  return (
    <motion.section
      ref={sectionRef}
      
      className="w-full flex flex-col py-24 md:py-28 px-6 md:px-12 overflow-hidden gap-4"
    >
      {/* SECTION HEADER */}
      <div className="flex justify-start items-end  pb-6 mb-16 md:mb-24 ">
        <div className="flex flex-col justify-start gap-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-[clamp(2.5rem,8vw,7.5rem)] font-bold"
          >
            Selected Work
          </motion.h1>
         
        </div>
      </div>

      {/* COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9 md:gap-12 items-start ">
        {/* LEFT COLUMN */}
        <motion.div
          style={{ y: isMobile ? 0 : yLeftScroll, opacity, scale }}
          className="md:col-span-6 flex flex-col gap-12 md:gap-33"
        >
          <WorkCard project={featuredWorks[0]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[2]} isMobile={isMobile} />
       
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          style={{ y: isMobile ? 0 : yRightScroll, opacity, scale }}
          className="md:col-span-6 flex flex-col gap-12 md:gap-39 md:pt-36"
        >
          <WorkCard project={featuredWorks[1]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[3]} isMobile={isMobile} />
          
        </motion.div>
      </div>
      {/* work page nav button */}
      <Link
        href="/work"
        className="flex justify-center  text-2xl mt-4 md:text-3xl font-serif tracking-tight group-hover:translate-x-2 transition-transform duration-300 "
      >
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial="rest"
          whileHover="hovered"
          animate="rest"
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-[#361e13] flex items-center justify-center"
            variants={{
              rest: { scale: 0, opacity: 0 },
              hovered: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="text-white text-sm ">↗</span>
          </motion.div>

          <span className="font-Clash-light text-sm md:text-lg  tracking-wide relative">
            Explore our works
            <motion.span
              className="absolute left-0 -bottom-1 h-0.5 bg-[#361e13]"
              variants={{
                rest: { width: "100%" },
                hovered: { width: "0%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </span>
        </motion.div>
      </Link>
    </motion.section>
  );
}

function WorkCard({ project, isMobile }) {
  if (!project) return null;

  return (
    <Link href={`/work/${project.slug}`} className="group w-full">
      {/* Image Card */}
      <div
        className="relative w-full overflow-hidden mb-4"
        style={
          isMobile
            ? { width: "100%", height: "320px" }
            : { maxWidth: project.width, height: project.height }
        }
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
        />
      </div>
      {/* Meta Bar */}
      <div className="flex justify-between items-baseline transition-colors">
        <div className="flex items-baseline gap-3">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
            {project.title}
          </h3>
        </div>
        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80">
          {project.year}
        </span>
      </div>
    </Link>
  );
}