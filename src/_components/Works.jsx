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
    src: "/WorkImgs/img6.jpg",
    height: "500px",
    width: "2/4vw",
  },
  {
    slug: "the-dune-house",
    title: "The Dune House",
    category: "Residential Design",
    year: "2025",
    src: "/WorkImgs/img1.jpg",
    height: "500px",
    width: "1/4vw",
  },
  {
    slug: "solam-villa",
    title: "Solām Villa",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/WorkImgs/img3.jpg",
    height: "500px",
    width: "2/4vw",
  },
  {
    slug: "",
    title: "Solām Villa",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/WorkImgs/img4.jpg",
    height: "500px",
    width: "1/4vw",
  },
  {
    slug: "",
    title: "Solām Villa",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/WorkImgs/img4.jpg",
    height: "500px",
    width: "1/4vw",
  },
  {
    slug: "",
    title: "Solām Villa",
    category: "Spatial Masterplan",
    year: "2025",
    src: "/WorkImgs/img4.jpg",
    height: "500px",
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
    offset: ["start start", "end start"],
  });

  const yLeftScroll = useTransform(scrollYProgress, [0, 1], ["0px", "290px"]);
  const yRightScroll = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-red-400 flex flex-col  py-28 md:py-36 px-6 md:px-12 overflow-hidden gap-12"
    >
      {/* SECTION HEADER */}
      <div className="flex justify-center items-end  pb-6 mb-16 md:mb-24">
        <div className="flex flex-col items-center gap-3">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-[clamp(4.5rem,8vw,9.5rem)]"
          >
            Our works
          </motion.h1>
          <span className=""></span>
        </div>
      </div>

      {/* COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9 md:gap-16 items-start">
        {/* LEFT COLUMN */}
        <motion.div
          style={{ y: isMobile ? 0 : yLeftScroll, opacity,scale }}
          className="md:col-span-6 flex flex-col gap-20 md:gap-32"
        >
          <WorkCard project={featuredWorks[0]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[2]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[5]} isMobile={isMobile} />
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          style={{ y: isMobile ? 0 : yRightScroll, opacity ,scale}}
          className="md:col-span-6 flex flex-col gap-20 md:gap-32 md:pt-36"
        >
          <WorkCard project={featuredWorks[1]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[3]} isMobile={isMobile} />
          <WorkCard project={featuredWorks[4]} isMobile={isMobile} />
        </motion.div>
      </div>
    </section>
  );
}

function WorkCard({ project, isMobile }) {
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
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {/* Meta Bar */}
      <div className="flex justify-between items-baseline transition-colors">
        <div className="flex items-baseline gap-3">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
            {project.title}
          </h3>
        </div>
        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
