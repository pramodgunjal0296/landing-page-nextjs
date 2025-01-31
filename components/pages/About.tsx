/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FaBook, FaDollarSign, FaUserGraduate, FaHome } from "react-icons/fa";


const cards = [
  {
    title: "Education",
    icon: <FaBook size={30} />,
    description: "Quality education with modern curriculum.",
  },
  {
    title: "Fee Structure",
    icon: <FaDollarSign size={30} />,
    description: "Affordable and transparent fee system.",
  },
  {
    title: "Admission",
    icon: <FaUserGraduate size={30} />,
    description: "Simple and seamless admission process.",
  },
  {
    title: "Accommodation",
    icon: <FaHome size={30} />,
    description: "Comfortable and secure housing options.",
  },
];

const About = ({sections}: any) => {
  return (
    <>
    {/* <Section /> */}
    <section ref={sections} className="min-h-[80vh] bg-cover">
      <div  className="flex items-center justify-center flex-wrap flex-row mt-8 sm:pl-8">
        <h1 className="font-semibold text-3xl">
          Why Study MBBS in
          <span className="font-montserrat ml-2 text-[#1CB5BD] font-semibold  text-left underline underline-offset-2">
            Uzbekistan ?
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 flex-wrap mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-2xl p-6 w-64 text-center flex flex-col items-center flex-wrap border-2 
          ${index % 2 === 0 ? "translate-y-6" : "-translate-y-6"}`}
          >
            <div className="text-blue-500 mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default About;
