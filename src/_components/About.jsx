"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function About() {
  const heading = [
    "We  design  atmospheres, not just buildings our work is defined by material honesty and a deep respect for nature.",
  ];

  return (
    <section className="w-full h-screen flex items-center justify-center py-16 px-4">
      <motion.div className=" w-full flex flex-col gap-12">
        <div className="md:w-3/4 leading-[1.1]  md:px-12">
          {heading.map((line, index) => (
            <motion.h2
              key={index}
              className="text-[clamp(2.5rem,5vw,4.2rem)] font-bold tracking-wider leading-none "
            >
              {line.split(" ").map((word, wordIndex) => {
                return (
                  <span key={wordIndex} className="inline-block mr-2 last:mr-0">
                    <motion.span className="inline-block">{word}</motion.span>
                  </span>
                );
              })}
            </motion.h2>
          ))}
        </div>
        <div className="flex justify-around md:gap-4  md:items-center ">
          <div className="w-2/3 md:w-1/3 flex flex-col gap-9">
            <motion.p className="text-lg md:text-lg xl:text-xl 2xl:text-2xl leading-8 tracking-wide font-bold opacity-90">
              In a world overwhelmed by noise, we believe in the power of quiet
              architecture. Raw textures, sun-washed surfaces, and sculptural
              geometry create calm environments that feel thoughtful, elevated,
              and enduring. Every great build begins with understanding.
            </motion.p>

            <Link
              href="/about"
              className="w-fit self-start group inline-flex items-center justify-between gap-6 px-6 py-3 bg-[#361e13] text-[#f8eee9] rounded-md text-base sm:text-lg font-medium tracking-wide transition-all duration-300 "
            >
              <span>Our Journey</span>
              <div className="w-8 h-8 rounded-full bg-[#f8eee9] text-[#361e13] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>

          <motion.div className=" rrelative overflow-hidden h-90 w-80 2xl:h-110 2xl:w-80 hidden lg:flex flex-col justify-between cursor-pointer">
            <div className="relative w-full h-full overflow-hidden">
              <video
                src="/video/about.mp4"
                loop
                autoPlay
                muted={true}
                playsInline
                className="w-full h-full object-cover "
              />
            </div>
            <div className="flex justify-between items-center w-full pt-3 text-md  uppercase tracking-widest">
              <p className="font-semibold">showcase reel</p>
              <p className="font-semibold opacity-70">2026</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
