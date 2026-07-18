"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroText = [
    "WE ARE",
    "PHOTOGRAPHY &",
    "FILM",
    "STUDIO CREATING",
    "TIMELESS VISUALS",
    "FOR MODERN",
    "BRANDS",
  ];

  const logo = "ARCH.";

  const heroContent = (
    <>
      <div className="flex flex-col md:flex-row justify-between lg:justify-around xl:justify-around md:justify-between 2xl:justify-around gap-12">
        <div className="uppercase">
          {heroText.map((line, index) => (
            <div key={index} className="overflow-hidden">
              {mounted ? (
                <motion.p
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl leading-[1.05]"
                >
                  {line}
                </motion.p>
              ) : (
                <p className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl leading-[1.05]">
                  {line}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-sm lg:max-w-md overflow-hidden self-start md:self-end">
          {mounted ? (
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-md md:text-base lg:text-lg 2xl:text-2xl leading-relaxed font-Clash-light"
            >
              Visual storytelling studio crafting cinematic imagery, creative
              direction, and emotionally driven brand experiences.
            </motion.p>
          ) : (
            <p className="text-md md:text-base lg:text-lg 2xl:text-2xl leading-relaxed font-Clash-light">
              Visual storytelling studio crafting cinematic imagery, creative
              direction, and emotionally driven brand experiences.
            </p>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center">
        <div className="overflow-hidden w-full">
          <h1 className="flex justify-center items-end font-Satoshi-black tracking-tight leading-none whitespace-nowrap">
            {logo.split("").map((letter, index) => (
              <span key={index} className="overflow-hidden inline-block">
                {mounted ? (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { y: "110%" },
                      visible: {
                        y: "0%",
                        transition: {
                          duration: 0.9,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      },
                    }}
                    className="inline-block text-[7rem] sm:text-[8rem] md:text-[13rem] lg:text-[17rem] xl:text-[22rem] 2xl:text-[28rem]"
                  >
                    {letter}
                  </motion.span>
                ) : (
                  <span className="inline-block text-[7rem] sm:text-[8rem] md:text-[13rem] lg:text-[17rem] xl:text-[22rem] 2xl:text-[28rem]">
                    {letter}
                  </span>
                )}
              </span>
            ))}

            {mounted ? (
              <motion.span
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl self-start"
              >
                ®
              </motion.span>
            ) : (
              <span className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl self-start">
                ®
              </span>
            )}
          </h1>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative min-h-screen px-4 md:px-8 lg:px-12 pt-55 md:pt-60 lg:pt-55 2xl:pt-52 flex flex-col overflow-hidden text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
       
        src="hero.mp4"
      />
      
      {mounted ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-20 xl:gap-2 2xl:gap-15 md:gap-20 relative z-10"
        >
          {heroContent}
        </motion.div>
      ) : (
        <div className="relative flex flex-col z-20 gap-20 xl:gap-2 2xl:gap-15 md:gap-20">
          {heroContent}
        </div>
      )}
    </section>
  );
};

export default Hero;
