"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Staggered orchestrator for the text grid elements
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const maskRevealVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const images = [
  { src: "/heroImgs/img1.jpg", height: "h-[50vh] md:h-[50vh]" },
  { src: "/heroImgs/img2.jpg", height: "h-[42vh] md:h-[45vh]" },
  { src: "/heroImgs/img3.jpg", height: "h-[46vh] md:h-[42vh]" },
  { src: "/heroImgs/img4.jpg", height: "h-[40vh] md:h-[49vh]" },
  { src: "/heroImgs/img5.jpg", height: "h-[49vh] md:h-[40vh]" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo = "Studio OASIS.";
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full  text-black min-h-screen h-[105vh] flex flex-col justify-between pt-28 md:pt-36 overflow-hidden">
      
      {/* 1. TOP SECTION: GIANT LOGO TYPE WITH LETTER SPLITTING */}
      <div className="w-full text-center mt-15 md:mt-8 lg:mt-5 md:pb-6 overflow-hidden">
        <h1 className="flex justify-center items-center tracking-tighter uppercase leading-none select-none whitespace-nowrap text-[12vw]  md:text-[10vw]">
          {logo.split("").map((letter, index) => (
            <span key={index} className="overflow-hidden inline-block">
              {mounted ? (
                <motion.span
                  initial={{ y: "140%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1],
                    delay: index * 0.03, // Cascades across characters smoothly
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ) : (
                <span className="inline-block">{letter === " " ? "\u00A0" : letter}</span>
              )}
            </span>
          ))}
        </h1>
      </div>

      {/* 3. BOTTOM SECTION: IMAGE CAROUSEL */}
      <div className="relative w-full flex overflow-hidden pb-10 mask-gradient">
        {mounted && (
          <motion.div
            className="flex gap-3 shrink-0 pr-6 items-end"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className={`relative shrink-0 w-55 sm:w-70 md:w-85 overflow-hidden ${img.height}`}
              >
                <Image
                  src={img.src}
                  alt="Studio Oasis interior layout creation"
                  fill
                  sizes="(max-w-768px) 280px, 340px"
                  priority={index < 5}
                  className="object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;