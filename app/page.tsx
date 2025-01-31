/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "@/components/pages/HomePage";
import About from "@/components/pages/About";
import Mbbs from "@/components/pages/Mbbs";
import Universities from "@/components/pages/Universities";
import Blogs from "@/components/pages/Blogs";
import Image from "next/image";

export default function Home() {
  const sections: any = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    universities: useRef(null),
    blogs: useRef(null),
    gallary: useRef(null),
    contactus: useRef(null),
  };

  return (
    <div>
      <Navbar sections={sections} />

      <main className="mt-0">
        <section
          ref={sections.home}
          className="relative min-h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/view-school-building.png')" }}
        >
          <HomePage />
          <div className="absolute bottom-[-20px]  sm:bottom-[-30px] right-4 md:right-10 cursor-pointer z-[9999] p-2  rounded-full ">
            <Image
              src="/Whatsapp.png"
              className="w-12 h-12 sm:w-16 sm:h-16"
              width={50}
              height={50}
              alt="whatsapp"
            />
          </div>
        </section>
        <About sections={sections.about} />
        <Mbbs sections={sections.services} />
        <Universities sections={sections.universities} />
        <Blogs sections={sections.blogs} />
     
    
      </main>

      <Footer />
    </div>
  );
}
