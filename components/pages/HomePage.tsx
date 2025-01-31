import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/Rectangle.png')" }}
        className="absolute inset-0  bg-opacity-500 bg-cover bg-center min-h-[80vh]"
      ></div>

      <div className="flex items-start justify-center z-10 cursor-pointer transition-transform duration-300 hover:scale-105">
        <Image src='/applyButton.png' width={40} height={60} alt="apply now "/>
      </div>
      <div className="mt-24 flex items-center z-10 justify-center  w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full">
          <div className="flex flex-col items-center sm:items-start w-auto justify-start  pl-6 sm:pl-10 pb-6">
            <div className="border-l-4 border-sky-400 mb-8 sm:mb-auto">
              <div className="pl-4 ">
                <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
                  Pursue{" "}
                  <span className="font-montserrat px-2 text-black font-semibold leading-[78.02px] tracking-[-0.02em] text-left  decoration-skip-ink-none">
                    MBBS
                  </span>
                  in
                  <span className="font-montserrat px-2 text-black font-semibold leading-[78.02px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                    Uzbekistan
                  </span>{" "}
                  Top Universities
                </h1>

              
                <div className="space-y-3 mt-4">
                  {[
                    "Low-cost medical education starting from INR 5 Lacs*",
                    "No Donation Capitation fees",
                    "Practice in India across the world",
                    "Worldwide accepted degree",
                  ].map((text, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <FaCheckCircle className="text-white" size={20} />
                      </div>
                      <p className="text-lg">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Apply Now Button */}
            <button
              className="mt-20 sm:mt-auto hover:cursor-pointer px-6 ml-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(to right, #64C7C7, #207C83)",
              }}
            >
              Apply Now
            </button>
          </div>

    
          <div className="relative w-full flex justify-center items-center">
           
            <div className="absolute bottom-0 bg-[#081D18] w-48 h-64 sm:w-72 sm:h-96 md:w-96 md:h-[28rem] rounded-t-full"></div>

      
            <Image
              src="/doctor_image.svg"
              alt="Doctor Image"
              width={500} 
              height={700} 
              className="w-48 h-auto sm:w-72 md:w-96 relative z-10 bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
