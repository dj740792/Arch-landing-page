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

  const heading = ["our   journey"];

  return (
    <section className="w-full min-h-screen flex px-8 py-12 lg:py-24 lg:px-16 pt-38">
      <motion.div
        ref={containerRef}
        className="w-full flex flex-col gap-4 md:gap-8 lg:gap-12 md:px-12"
      >
        <div className="md:w-2/4 leading-none">
          {heading.map((line, index) => (
            <motion.h2
              key={index}
              style={{ y: yLeft }}
              className="text-[clamp(4.5rem,7vw,7.2rem)] pt-24  font-bold tracking-wide uppercase"
            >
              {line.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  <motion.span className="inline-block">{word}</motion.span>
                </span>
              ))}
            </motion.h2>
          ))}
        </div>

        <motion.div
          style={{ y: yRight }}
          className="w-full md:w-1/2 mt-12 lg:mb-12 lg:mt-0 ml-auto flex flex-col gap-8 md:gap-12 border-l pl-3 lg:p-9"
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
            className="text-lg md:text-xl xl:text-2xl font-normal leading-relaxed opacity-80"
          >
            Founded in 2022 in New Delhi, OASIS creates warm, modern spaces
            where clean design meets everyday comfort.
          </motion.p>
        </motion.div>

        <div className="relative z-10 mt-24 lg:mt-12 w-full flex flex-col md:flex-row gap-3">
          <motion.div
            style={{ y: yLeft }}
            className="hidden lg:block w-full md:w-2/2 relative h-[60vh] lg:h-screen"
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
            className="w-full md:w-2/2 relative h-[60vh] lg:h-screen mt-8 md:mt-24"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 my-16 md:my-24"
        >
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              OASIS <br /> The Studio
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl  leading-relaxed text-[#483b35] opacity-90 max-w-lg">
              At the heart of OASIS is a belief in intentional spaces—crafting
              modern architectures that quietly endure & elevate daily living.
            </p>
          </div>

          <div className="w-full lg:w-7/12  flex gap-4 sm:gap-6 md:gap-8 justify-between">
            <div className="flex-1 bg-[#723f27] text-[#f8eee9] p-5 sm:p-8 lg:p-10 flex flex-col justify-between h-90 sm:h-105 lg:h-120">
              <div className="flex justify-end w-full">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  className="w-15 h-15  lg:w-20 lg:h-20 text-[#f8eee9] stroke-[3.5]"
                >
                  <path d="M22 28C25.3137 28 28 25.3137 28 22C28 18.6863 25.3137 16 22 16C18.6863 16 16 18.6863 16 22C16 25.3137 18.6863 28 22 28Z" />
                  <path d="M42 28C45.3137 28 48 25.3137 48 22C48 18.6863 45.3137 16 42 16C38.6863 16 36 18.6863 36 22C36 25.3137 38.6863 28 42 28Z" />
                  <path
                    d="M10 48C10 41.3726 15.3726 36 22 36C28.6274 36 34 41.3726 34 48"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 48C30 42.5 34.5 38 40 38C45.5 38 50 42.5 50 48"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className=" flex flex-col justify-start gap-3 ">
                <h3 className="text-xl sm:text-3xl lg:text-5xl font-medium tracking-tight">
                  Our Team
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[#f8eee9]/80 font-light">
                  At our core, we operate less like a conventional firm and more
                  like a family. That trust, shared passion, and genuine bond
                  directly shape how we design together every day.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[#723f27] text-[#f8eee9] p-5 sm:p-8 lg:p-10 flex flex-col justify-between h-90 sm:h-105 lg:h-120">
              <div className="flex justify-end w-full">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  className="w-15 h-15  lg:w-20 lg:h-20 text-[#f8eee9] stroke-[3.5]"
                >
                  <circle cx="32" cy="32" r="20" />
                  <circle cx="32" cy="32" r="8" />
                  <path
                    d="M32 6V12M32 52V58M6 32H12M52 32H58"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className=" flex flex-col justify-start gap-3 ">
                <h3 className="text-xl sm:text-3xl lg:text-5xl font-medium tracking-tight">
                  Our Vision
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[#f8eee9]/80 font-light">
                  Founded in Delhi, OASIS creates warm, modern spaces where
                  clean design meets everyday comfort.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
