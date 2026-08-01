"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";


const images = [
 "/heroImgs/img1.jpg",
  "/heroImgs/img2.jpg",
  "/heroImgs/img3.jpg",
  "/heroImgs/img4.jpg",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const logo = "Studio OASIS.";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between p-6 md:p-12"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 h-[120%] w-full"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentImg]}
              alt="studio Oasis"
              fill
              priority
              className="object-cover object-center  filter brightness-[0.85]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* metadata */}
      <motion.div
        style={{ opacity }}
        className="w-full flex justify-between items-center text-white/80 pt-20 md:pt-10 z-20"
      >
        <p className="text-xs md:text-sm font-mono tracking-widest uppercase">
          [ ARCHITECTURE & SPATIAL DESIGN ]
        </p>

        {/* Subtle Slide Indicators */}
        <div className="hidden md:flex gap-2 items-center">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-500 ${
                i === currentImg ? "w-8 bg-white" : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div>

        <p className="text-xs md:text-sm font-mono tracking-widest uppercase hidden md:block">
          DELHI, IN — 2026
        </p>
      </motion.div>

      {/* CENTER / MAIN TYPOGRAPHY */}
      <motion.div
        style={{ opacity, y: textY }}
        className="w-full my-auto text-white z-20"
      >
        <h1 className="tracking-tight leading-none select-none text-[13vw] md:text-[11vw] font-bold uppercase">
          {logo.split("").map((letter, index) => (
            <span key={index} className="overflow-hidden inline-block">
              {mounted ? (
                <motion.span
                  initial={{ y: "140%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ) : (
                <span className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              )}
            </span>
          ))}
        </h1>
      </motion.div>

      {/* FOOTER CUE */}
      <motion.div
        style={{ opacity }}
        className="w-full flex justify-between items-end text-white z-20"
      >
        <p className="text-xs md:text-sm max-w-xs text-white/70 leading-relaxed">
          Crafting minimalist structures and bespoke spatial experiences.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
