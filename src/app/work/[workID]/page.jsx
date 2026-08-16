"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lato } from "next/font/google";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/_data/projects";

const numFont = Lato({ subsets: ["latin"], weight: "400" });

const containerVariants = {
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
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function ProjectPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const project = projects.find((p) => p.slug === params.workID);

  if (!project) {
    notFound();
  }

  const words = project.title.split(" ");

  return (
    <main className="w-full min-h-screen px-4 md:px-8 pt-32 pb-24">
     
      <div className="mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

     
      <div className="flex flex-col gap-8 mb-16">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center gap-x-[0.3em] gap-y-2 select-none text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex overflow-hidden">
              {word.split("").map((letter, letterIdx) => (
                <motion.span
                  key={`${wordIdx}-${letterIdx}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-8 gap-4">
          <p className="text-lg md:text-xl font-medium opacity-80">
            {project.location}
          </p>
          <p
            className={`text-lg md:text-xl font-semibold opacity-60 ${numFont.className}`}
          >
            {project.year}
          </p>
        </div>
      </div>

   
      <div className="relative w-full aspect-video overflow-hidden mb-20">
        <Image
          src={project.src}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

   
      <div className="grid grid-cols-12 gap-y-6 md:gap-x-8 mb-24">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-xs uppercase font-semibold tracking-widest opacity-50">
            About the Project
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-xl md:text-2xl leading-relaxed font-normal text-balance">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.gallery.map((imgSrc, index) => (
          <div
            key={index}
            className="relative w-full aspect-4/3 overflow-hidden"
          >
            <Image
              src={imgSrc}
              alt={`${project.title} gallery view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}