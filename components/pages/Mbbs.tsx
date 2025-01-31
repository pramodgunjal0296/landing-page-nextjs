/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import { LiaUniversitySolid } from "react-icons/lia";

const cards = [
  {
    title: "Andijan State Medical Institute",
    icon: <LiaUniversitySolid size={30} />,
    description: "Quality education with modern curriculum.",
    image: "/harvard-university-cambridge-usa.png",
  },
  {
    title: "Andijan State Medical Institute",
    icon: <LiaUniversitySolid size={30} />,
    description: "Affordable and transparent fee system.",
    image: "/harvard-university-cambridge-usa.png",
  },
  {
    title: "Andijan State Medical Institute",
    icon: <LiaUniversitySolid size={30} />,
    description: "Simple and seamless admission process.",
    image: "/harvard-university-cambridge-usa.png",
  },
];

const Mbbs = ({ sections }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const visibleCards = getVisibleCards();
  const totalSlides = Math.ceil(cards.length / visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <section
        ref={sections}
        className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/back-view-medium-shot-hugging-teenagers-going-highschool.png')",
        }}
      >
        <div
          style={{ backgroundImage: "url('/Rectangle.png')" }}
          className="absolute inset-0 bg-opacity-20 bg-cover bg-center min-h-screen"
        ></div>

        <h1 className="z-10 font-semibold text-3xl text-center">
          Explore{" "}
          <span className="underline underline-offset-2 text-[#1CB5BD]">
            Medical Universities
          </span>{" "}
          in Uzbekistan
        </h1>

        <div className="relative w-full max-w-6xl flex items-center justify-center mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${
                currentIndex * (100 / visibleCards)
              }%))`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="transition-all duration-300 px-2 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
                style={{
                  opacity:
                    index >= currentIndex * visibleCards &&
                    index < (currentIndex + 1) * visibleCards
                      ? 1
                      : 1,
                }}
              >
                <div className="bg-white  shadow-lg rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center border-2 w-full relative">
                  <div className="relative w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="object-cover rounded-lg"
                      width={400}
                      height={300}
                      layout="responsive"
                    />
                  </div>

                  <div className="flex items-center px-3 mx-4 w-auto z-10 bg-white sm:px-4 justify-center gap-2 mt-[-20] border-2 border-t-4 border-[#1CB5BD] pb-1">
                    <div className="text-[#1CB5BD] border border-[#1CB5BD] p-2 rounded-full">
                      {card.icon}
                    </div>
                    <h2 className="text-sm sm:text-lg font-semibold text-black">
                      {card.title}
                    </h2>
                  </div>

                  <div className="flex justify-center  flex-col items-center w-full mt-2 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm">
                    <p className=" font-bold">
                      Fee Structure:
                      <span className="font-medium">₹5,22,111/-</span>
                    </p>
                    <p className="font-bold">
                      Duration: <span className="font-medium">4 years</span>
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="border-2 text-xs sm:text-sm border-[#1CB5BD] text-[#1CB5BD] px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 hover:bg-[#1CB5BD] hover:text-white">
                      Read More
                    </button>
                    <button className="border-2 text-xs sm:text-sm border-[#1CB5BD] text-[#1CB5BD] px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 hover:bg-[#1CB5BD] hover:text-white">
                      Apply More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            className="bg-[#1CB5BD] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1CB5BD] transition"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="bg-[#1CB5BD] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1CB5BD] transition"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>

      
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#1CB5BD] scale-125"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Mbbs;
