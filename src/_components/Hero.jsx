"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const images = [
  { src: "/heroImgs/img1.jpg", height: "h-[40vh] md:h-[30vh]" },
  { src: "/heroImgs/img2.jpg", height: "h-[36vh] md:h-[26vh]" },
  { src: "/heroImgs/img3.jpg", height: "h-[32vh] md:h-[32vh]" },
  { src: "/heroImgs/img4.jpg", height: "h-[39vh] md:h-[29vh]" },
  { src: "/heroImgs/img5.jpg", height: "h-[37vh] md:h-[27vh]" },
  { src: "/heroImgs/img6.jpg", height: "h-[32vh] md:h-[32vh]" },
  { src: "/heroImgs/img7.jpg", height: "h-[39vh] md:h-[29vh]" },
  { src: "/heroImgs/img8.jpg", height: "h-[37vh] md:h-[27vh]" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo = "Studio OASIS.";
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full   min-h-screen h-[105vh] flex flex-col justify-between pt-28 md:pt-36 overflow-hidden">
      
      {/* TOP SECTION*/}
      <div className="w-full text-center mt-15 md:mt-8 lg:mt-5 md:pb-6 overflow-hidden">
        <h1 className="flex justify-center md:justify-start  items-center tracking-tight  leading-none select-none whitespace-nowrap text-[12vw]  md:text-[10vw] md:mx-8 font-bold">
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
                <span className="inline-block">{letter === " " ? "\u00A0" : letter}</span>
              )}
            </span>
          ))}
        </h1>
      </div>

      {/* BOTTOM SECTION IMAGE CAROUSEL */}
      <div className="relative w-full flex overflow-hidden pb-10 mask-gradient">
        {mounted && (
          <motion.div
            className="flex gap-2 shrink-0 pr-6 items-end"
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
                className={`relative shrink-0 w-55  md:w-55 overflow-hidden ${img.height}`}
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