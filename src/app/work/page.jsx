"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fjalla_One, Lato } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { projects } from "@/_data/projects";
import Image from "next/image";

const numFont = Lato({ subsets: ["latin"], weight: "400" });

const lexend = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
});

const titleContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { y: "140%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.13, 1, 0.22, 1],
    },
  },
};

const descContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
      delayChildren: 0.5,
    },
  },
};

const descWordVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.13, 1, 0.22, 1],
    },
  },
};

export default function WorkPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const logo = "Our Projects";
  const descText =
    "A collection of digital experiences, custom web development, and interface designs built for performance.";
  const descWords = descText.split(" ");
  const containerRef = useRef(null);

  return (
    <section className="w-full min-h-screen flex flex-col px-8 py-12 lg:py-24 lg:px-16 pt-38 gap-22">
      <motion.div
        ref={containerRef}
        className="w-full gap-4 md:gap-8 lg:gap-12 md:px-4"
      >
        <div className="w-full flex flex-col lg:flex-row text-center lg:text-start items-center mt-4 justify-between md:mt-3 lg:mt-18 gap-8 lg:gap-12">
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className={`flex justify-start items-center tracking-tight leading-none select-none whitespace-nowrap text-[16vw] md:text-[12vw] lg:text-[10vw] h-[19vh] xl:text-[9vw] xl:h-[23vh] md:mx-4 ${lexend.className}`}
          >
            {logo.split("").map((letter, index) => (
              <span key={index} className="inline-block ">
                <motion.span variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={descContainerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-md md:text-lg xl:text-xl font-normal leading-relaxed max-w-xl opacity-80 flex flex-wrap justify-center lg:justify-start gap-x-[0.25em] gap-y-1"
          >
            {descWords.map((word, idx) => (
              <span key={idx} className="inline-flex overflow-hidden">
                <motion.span
                  variants={descWordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-22">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer flex flex-col"
            >
              <Link
                href={`/work/${project.slug}`}
                className="block overflow-hidden relative w-full aspect-16/10"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>

              <div className="flex justify-between mt-4">
                <p className="text-md md:text-lg xl:text-xl tracking-wide font-semibold">
                  {project.title}
                </p>
                <p
                  className={`text-md md:text-lg tracking-wide font-semibold opacity-70 ${numFont.className}`}
                >
                  {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
