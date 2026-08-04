"use client";
import About from "@/_components/About";
import Hero from "@/_components/Hero";
import Works from "@/_components/Works";
import Services from "@/_components/Services";
import Navbar from "@/_components/Navbar";
import Process from "@/_components/Process";
import Cta from "@/_components/Cta";
import Testimonials from "@/_components/Testimonials";
import Footer from "@/_components/Footer"

export default function page() {
  return (
    <main className="relative w-full min-h-screen">
   

      <Hero />
      <About />
      <Services />
      <Process />
      <Works />
      <Testimonials />
      <Cta />
      <Footer /> 
         </main>
  );
}
