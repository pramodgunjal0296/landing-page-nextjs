/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { BiDollarCircle } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

const stats = [
  { image: "/experties.png", count: "12+", label: "Years of expertise" },
  { image: "/Graduated.png", count: "1500+", label: "Satisfied students counselled" },
  { image: "/Education.png", count: "10", label: "Universities affiliated with us!" },
  { image: "/Visa.png", count: "100+", label: "Visa Assistance" },
];
const Universities = ({ sections }: any) => {
  return (
    <div>
      <section
        ref={sections}
        className="bg-white p-6 md:p-12 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Why{" "}
              <span className="text-[#1CB5BD] underline font-semibold">
                Uzbekistan Medi?
              </span>
            </h1>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiGraduationCapLine
                  size={30}
                  className="text-[#1CB5BD] p-1 text-xl mt-1 border border-1 border-[#1CB5BD]"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Guaranteed Admission with Low Fees
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Admission to top MBBS universities in Uzbekistan with
                    affordable fees for Indian students.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <GrNotes size={30} className="text-[#1CB5BD] text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Complete Support for Documentation
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    We provide end-to-end support for the necessary
                    documentation required for MBBS admissions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BiDollarCircle
                  size={30}
                  className="border border-1 border-[#1CB5BD] text-[#1CB5BD] text-xl mt-1"
                />
                <div>
                  <h3 className="text-lg font-semibold">Affordable Fees</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Studying abroad becomes easy with low tuition fees and
                    reasonable living costs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdMessage size={30} className="text-[#1CB5BD] text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Free Counseling & Career Guidance
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    We offer personalized counseling and guidance to help
                    students build a successful medical career.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Group_doctors.png"
              alt="Group of Doctors"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 p-6 mt-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg relative rounded-lg p-6 w-64 text-center border border-gray-200"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full border shadow-sm shadow-slate-500  top-[-40] bg-white  absolute flex items-center justify-center overflow-hidden">
              <Image src={stat.image} alt={stat.label} width={60} height={60} className="p-4" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-4 text-[#1CB5BD]">{stat.count}</h2>
          <p className="text-gray-600 text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Universities;
