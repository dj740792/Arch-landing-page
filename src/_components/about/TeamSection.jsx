"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const teamMembers = [
  {
    id: "01",
    name: "Aarav Sharma",
    role: "Lead Architect",
    src: "/teamImgs/img1.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-2 md:row-start-1",
  },
  {
    id: "02",
    name: "Kabir Mehta",
    role: "Project Director",
    src: "/teamImgs/img2.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-7 md:row-start-2",
  },
  {
    id: "03",
    name: "Rhea Kapoor",
    role: "Principal Designer",
    src: "/teamImgs/img3.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-10 md:row-start-2",
  },
  {
    id: "04",
    name: "Devansh Verma",
    role: "Structural Engineer",
    src: "/teamImgs/img4.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-1 md:row-start-3",
  },
  {
    id: "05",
    name: "Tara Joshi",
    role: "3D Visualizer",
    src: "/teamImgs/img5.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-4 md:row-start-3",
  },
  {
    id: "06",
    name: "Ananya Iyer",
    role: "Interior Architect",
    src: "/teamImgs/img6.jpg",
    gridClass: "col-span-12 md:col-span-3 md:col-start-7 md:row-start-3",
  },
];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return(
      <section className="w-full px-4 md:px-12 py-24 ">
        



      </section>




  )


}
