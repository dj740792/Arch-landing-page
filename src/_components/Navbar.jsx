"use client";
import Link from "next/link";
import { useState } from "react";
import { easeIn, motion, stagger } from "framer-motion";
import NavLink from "./Navlinks";
const links = [
  { url: "/about", title: "About" },
  { url: "/work", title: "Works" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVarient = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 40,
      backgroundColor: "rgb(0, 0, 0)",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -40,
      backgroundColor: "rgb(0, 0, 0)",
    },
  };
  const listVarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <nav className="w-2/3 md:w-1/3 h-15 z-50">
      <div className="relative flex h-full items-center justify-between px-4 rounded-2xl border border-white/30 bg-white/10  shadow-[0_4px_22px_rgba(0,0,0,0.2)] backdrop-blur-md">
        {/* LOGO */}
        <Link href="/" className=" lg:flex text-xl uppercase font-bold mr-4">
          arch.
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        {/* Responsive menu */}
        <div className="md:hidden ml-auto">
          <button
            className="w-7 h-5 flex flex-col justify-between cursor-pointer z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              animate={open ? "opened" : "closed"}
              variants={topVarient}
              className="w-7 h-1 rounded origin-left bg-white"
            ></motion.div>
            <motion.div
              animate={open ? "opened" : "closed"}
              variants={centerVariant}
              className="w-7 h-1 rounded bg-white"
            ></motion.div>
            <motion.div
              animate={open ? "opened" : "closed"}
              variants={bottomVariant}
              className="w-7 h-1 rounded bg-white origin-left"
            ></motion.div>
          </button>
          {/* menu list */}
          {open && (
            <motion.div
              variants={listVarient}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center  text-5xl gap-10 font-semibold bg-white text-black"
            >
              {links.map((link) => (
                <motion.div variants={listItemVariant} key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
