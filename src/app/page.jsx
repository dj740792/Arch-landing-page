"use client";
import About from "@/_components/About";
import Hero from "@/_components/Hero";
import Works from "@/_components/Works";

export default function page() {
  return (
    
    <main className="w-full h-screen">
      <Hero />
      <About />
      <Works />
    </main>
  );
}