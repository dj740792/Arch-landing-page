"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const heading = ["An  Oasis  is  not  found", "it's  constructed"];
  return (
    <section className="w-full min-h-screen flex  justify-center px-8 lg:px-16 pt-38">
      <motion.div className=" w-full flex flex-col gap-4 md:gap-8 lg:gap-12 ">
        <div className="md:w-3/4 leading-none md:px-12 ">
          {heading.map((line, index) => (
            <motion.h2
              key={index}
              
              className="text-[clamp(3.5rem,5vw,7.2rem)] font-bold tracking-wide "
            >
              {line.split(" ").map((word, wordIndex) => {
                return (
                  <span key={wordIndex} className="inline-block mr-2 ">
                    <motion.span className="inline-block">{word}</motion.span>
                  </span>
                );
              })}
            </motion.h2>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:px-12">
          <motion.div
           initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          
          className="md:col-span-4 text-sm xl:text-xl opacity-90 ">
            Based in New Delhi, <br />
            India
          </motion.div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-base sm:text-lg md:text-xl xl:text-2xl font-normal leading-relaxed "
            >
              We began with a simple question: how does a structure make you
              feel? From that first line on paper to the final monolith standing
              against the sky, OASIS was created to weave geometry with emotion.
              We build spaces that breathe, endure, and offer a permanent sense
              of place.
            </motion.p>
          </div>
        </div>
        <div className="mt-12 md:mt-16 w-full relative h-[50vh] md:h-[90vh] lg:h-screen xl:h-[110vh] overflow-hidden ">
          <Image
            src="/heroImgs/img7.jpg"
            alt="OASIS architectural interior"
            fill
            priority
            className="object-cover md:px-6"
          />
        </div>
      </motion.div>
    </section>
  );
}
