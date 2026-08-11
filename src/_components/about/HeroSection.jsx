"use client";
import { motion} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Fjalla_One } from "next/font/google";

const lexend = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo = "Our Journey";
  const containerRef = useRef(null);

  


  return (
    <section className="w-full min-h-screen flex px-8 py-12 lg:py-24 lg:px-16 pt-38">
      <motion.div
        ref={containerRef}
        className="w-full flex flex-col gap-4 md:gap-8 lg:gap-12 md:px-4 "
      >
        <div className="w-full text-start mt-4  md:mt-3 lg:mt-18 overflow-hidden ">
          <h1
            className={`  flex justify-start items-center tracking-tight leading-none select-none whitespace-nowrap text-[16vw] md:text-[12vw] lg:text-[10vw] h-[19vh] xl:text-[9vw] xl:h-[23vh] md:mx-4  ${lexend.className}`}
          >
            {logo.split("").map((letter, index) => (
              <span key={index} className=" inline-block">
                {mounted ? (
                  <motion.span
                    initial={{ y: "140%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.2,
                      ease: [0.13, 1, 0.22, 1],
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
        </div>

        <motion.div className="w-full md:w-1/2 mt-12  lg:mt-12 ml-auto flex flex-col  gap-8 md:gap-12 border-l pl-3 lg:p-9">
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

        <div className="relative z-10 mt-24 lg:mt-12 w-full flex  gap-3">
          <motion.div className=" w-full md:w-1/3 relative h-[60vh] lg:h-[70vh]  xl:h-[90vh]">
            <Image
              src="/teamImgs/img7.jpg"
              alt="OASIS architectural interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* 
          <motion.div
            style={{ y: yRight }}
            className=" w-full md:w-1/3 relative h-[60vh] lg:h-[70vh]  xl:h-screen"
          >
            <Image
              src="/teamImgs/img8.jpg"
              alt="OASIS architectural landscape"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}
