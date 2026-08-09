"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["-110px", "0px"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0px", "-220px"]);

  const heading = ["How  we  started  our  journey"];
  return (
    <section className="w-full min-h-screen flex  px-8 lg:px-16 pt-38">
      <motion.div
        ref={containerRef}
        className=" w-full flex flex-col gap-4 md:gap-8 lg:gap-12 md:px-12"
      >
        <div className="md:w-2/4 leading-none  ">
          {heading.map((line, index) => (
            <motion.h2
              key={index}
              style={{yLeft}}
              className="text-[clamp(3.5rem,5vw,7.2rem)] font-bold tracking-wide uppercase "
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

        <div
          style={{ yRight }}
          className="w-full md:w-1/2  mt-12 lg:mb-12 lg:mt-0  ml-auto flex flex-col gap-8 md:gap-12 "
        >
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-lg md:text-xl xl:text-2xl font-normal leading-relaxed"
          >
            We began with a simple question: how does a structure make you feel?
            From that first line on paper to the final monolith standing against
            the sky, OASIS was created to weave geometry with emotion. We build
            spaces that breathe, endure, and offer a permanent sense of place.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg xl:text-xl font-normal leading-relaxed opacity-80"
          >
            Rooted in Delhi and operating across global horizons, our studio was
            founded on a shared belief that modern architecture should never
            feel cold. What started as a small design workshop has evolved into
            a full-scale practice, crafting timeless, high-impact environments
            that honor both local landscape and modern living.
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className="relative z-10 mt-24 lg:mt-12 w-full flex flex-col md:flex-row  gap-3 "
        >
          <motion.div
            style={{ y: yLeft }}
            className="hidden lg:block w-full md:w-1/2 relative h-[60vh] lg:h-screen"
          >
            <Image
              src="/teamImgs/img9.jpg"
              alt="OASIS architectural interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            style={{ y: yRight }}
            className="w-full md:w-1/2 relative h-[60vh]  lg:h-screen mt-8 md:mt-24"
          >
            <Image
              src="/teamImgs/img8.jpg"
              alt="OASIS architectural landscape"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
