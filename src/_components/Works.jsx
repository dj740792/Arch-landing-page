"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Lato } from "next/font/google";

const numFont = Lato({ subsets: ["latin"], weight: "400" });
const projects = [
  {
    id: "01",
    slug: "monolith-residence-facade",
    title: "Monolith Residence Façade",
    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass: "col-span-12 md:col-span-3 md:col-start-2 md:row-start-1",
    src: "/workImgs/workImg1.jpg",
    year: "2024",
  },
  {
    id: "02",
    title: "Echo Point Apartments",
    slug: "echo-point-apartments",
    aspect: "h-84 md:h-auto md:aspect-[16/9]",
    gridClass: "col-span-12 md:col-span-5 md:col-start-7 md:row-start-1",
    src: "/workImgs/workImg2.jpg",
    year: "2025",
  },
  {
    id: "03",
    title: "Seabreeze Luxury Suites",
    slug: "seabreeze-luxury-suites",

    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass: "col-span-12 md:col-span-3 md:col-start-1 md:row-start-2",
    src: "/workImgs/workImg3.jpg",
    year: "2026",
  },
  {
    id: "04",
    title: "Bad Hand Coffee",
    aspect: "h-84 md:h-auto md:aspect-[4/5]",
    slug: "bad-hand-coffee",
    gridClass: "col-span-12 md:col-span-4 md:col-start-5 md:row-start-2",
    src: "/workImgs/workImg4.jpg",
    year: "2024",
  },
  {
    id: "05",
    title: "Sunset Ridge Villas",
    slug: "sunset-ridge-villas",
    aspect: "h-84 md:h-auto md:aspect-square",
    gridClass:
      "col-span-12 md:col-span-3 md:col-start-10 md:row-start-2 self-end",
    src: "/workImgs/workImg5.jpg",
    year: "2025",
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
   
      <div className="flex justify-between items-baseline mb-10  pb-8">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tight">
          Featured Projects
        </h2>
        <Link
          href="/work"
          className="text-[10px] md:text-sm font-semibold tracking-widest uppercase"
        >
          SEE ALL PORTFOLIO
        </Link>
      </div>

      
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
  const [revealed, setRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const clipProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"],
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1 && !revealed) {
      setRevealed(true);
    }
  });

  return (
    <div ref={itemRef} className={`${project.gridClass}  flex flex-col gap-2`}>
      <Link
        href={`/work/${project.slug} `}
        className="className=group flex flex-col gap-2 w-full"
      >
        <motion.div
          style={{
            clipPath: isMobile || revealed ? "none" : clipProgress,
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
          <p className="text-md md:text-lg xl:text-xl  tracking-wide font-semibold">
            {project.title}
          </p>
          <p
            className={`text-md md:text-lg tracking-wide font-semibold opacity-70 ${numFont.className}`}
          >
            {project.year}
          </p>
        </div>
      </Link>
    </div>
  );
}
