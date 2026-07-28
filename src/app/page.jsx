"use client";
import About from "@/_components/About";
import Hero from "@/_components/Hero";
import Works from "@/_components/Works";
import Services from "@/_components/Services";
import Navbar from "@/_components/Navbar";

export default function page() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-4 pt-4 md:px-6 md:pt-6">
        <Navbar />
      </div>

      <Hero />
      <About />
      <Services />
      <Works />
    </main>
  );
}
