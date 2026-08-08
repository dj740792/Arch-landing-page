"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      label: "Projects",
      detail: "When a concept passes the filter, its executed to perfection",
      number: "100+",
    },
    {
      label: "Client Retention Rate",
      detail:
        "It's always an honor to offer our continuous services to our clients for their future works",
      number: "89%",
    },
    {
      label: "Cities and Beyond",
      detail:
        "Our design driven team continues to stretch our footprint further",
      number: "30+",
    },
  ];

  return (
    <section className="w-full  py-10  md:py-32 px-6 md:px-12 ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start ">
        <div className="md:col-span-6  ">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl lg:text-5xl  xl:text-7xl font-bold  leading-[1.1] tracking-wide"
          >
            Real Results We Are <br />
            Proud To Share
          </motion.h2>
        </div>

        <div className="md:col-span-6 flex flex-col divide-y border-b ">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="py-6 sm:py-8 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-12 sm:col-span-4 text-md lg:text-lg  font-semibold uppercase tracking-wide ">
                {stat.label}
              </div>

              <div className="col-span-8 sm:col-span-5 text-md lg:text-lg leading-relaxed ">
                {stat.detail}
              </div>

              <div className="col-span-4 sm:col-span-3 text-right text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {stat.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
