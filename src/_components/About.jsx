"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const heading = [
    "We design atmospheres, not just buildings our work is defined by material honesty and a deep respect for nature.",
  ];

  return (
    <section className="w-full h-screen flex items-center justify-center py-24 px-6">
      <motion.div className=" w-full flex flex-col gap-12">
        <div className="md:w-3/4 leading-[1.1] md:px-12">
          {heading.map((line, index) => (
            <motion.h2
              key={index}
              className="text-[clamp(2.5rem,5vw,4.5rem)]  font-semibold "
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
        <div className="flex justify-around md:gap-4  md:items-center">
          <div className="w-2/3 md:w-1/3 flex flex-col gap-9">
            <motion.p className=" text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl leading-8 font-light">
              In a world overwhelmed by noise, we believe in the power of quiet
              architecture. Raw textures, sun-washed surfaces, and sculptural
              geometry create calm environments that feel thoughtful, elevated,
              and enduring span
              Every great build begins with understanding
            </motion.p>
            <Link className="w-full mt-4" href="/about">
          
             Our approach
            </Link>
          </div>

          <motion.div className="relative overflow-hidden h-70 w-60 xl:w-80 xl:h-80 2xl:h-100 2xl:w-90 ">
            <Image
              src="/heroImgs/img4.jpg"
              alt="Interior architecture with warm light and calm materials"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
