import React from "react";
import { motion } from "framer-motion";
import { h1, section } from "motion/react-client";

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

export default function About() {
  const lines = ["Architectural studio specializing in interiors"];
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center py-24 md:py-28 lg:py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col text-center w-full max-w-450 mx-auto"
      >
        {lines.map((line, i) => (
          <h1
            key={i}
            className="uppercase leading-[1.3] tracking-tight flex flex-wrap justify-center overflow-visible max-w-[14ch] mx-auto"
            style={{ fontSize: "clamp(40px, 5vw, 100px)" }}
          >
            {line.text.split(" ").map}
          </h1>
        ))}
      </motion.div>
    </section>
  );
}
