/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar({ sections }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section: string) => {
    sections[section].current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#081D18] shadow-md p-4 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Uzbekistan Med</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden md:flex space-x-4">
          {Object.keys(sections).map((key) =>
            key === "services" ? (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="px-4 py-2 hover:text-[#16A8AF] text-white rounded"
              >
                MBBS in Uzbekistan
              </button>
            ) :  key === "contactus" ? (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="px-4 py-2 hover:text-[#16A8AF] text-white rounded"
              >
                Contact Us
              </button>
            ): (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="px-4 py-2 hover:text-[#16A8AF] text-white rounded"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-2">
          {Object.keys(sections).map((key) =>
            key === "services" ? (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="w-full py-3 hover:bg-gray-200"
              >
                MBBS in Uzbekistan
              </button>
            ) : key==='contactus'?(
              <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="w-full py-3 hover:bg-gray-200"
            >
              Contact Us
            </button>
            ): (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="w-full py-3 hover:bg-gray-200"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
