import Image from "next/image";
import React from "react";

const stats = [
  {
    image: "/JohnDoe.png",
    count: "John Doe",
    label:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
  },
  {
    image: "/SmithaDoe.png",
    count: "Smitha Doe",
    label:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
  },
  {
    image: "/Jaqline.png",
    count: "Jaquline Doe",
    label:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
  },
];
const Blogs = ({ sections }) => {
  return (
    <div>
      <section
        ref={sections}
        className="min-h-[100vh]  text-white bg-cover bg-center bg-gradient-to-br to-[#02D6E1] from-[#C8C8C8]"
      >
        <div className="flex items-center justify-center p-4">
          <h1 className="font-semibold text-4xl text-black">
            Our Valuable{" "}
            <span className="text-[#1CB5BD] underline text-4xl">Services</span>{" "}
          </h1>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {/* Admission Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4">
              <Image
                src="/documentation.png"
                alt="Admission"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Admission
                </h3>
                <p className="text-gray-600 text-sm">
                  Get the guaranteed admission to top university.
                </p>
              </div>
            </div>

            {/* Airport Pickup Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4 relative">
              <div className="absolute right-0 bottom-0 w-full h-full rounded-lg shadow-[10px_10px_20px_#1CB5BD] -z-10"></div>
              <Image
                src="/carpool.png"
                alt="Airport Pickup"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Airport Pickup
                </h3>
                <p className="text-gray-600 text-sm">
                  Get picked up at airport by our representative.
                </p>
              </div>
            </div>

            {/* Visa Process Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4">
              <Image
                src="/id-card.png"
                alt="Visa Process"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Visa Process
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill the visa applications followed by university guidelines.
                </p>
              </div>
            </div>

            {/* Documentation Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4">
              <Image
                src="/documentation.png"
                alt="Documentation"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Documentation
                </h3>
                <p className="text-gray-600 text-sm">
                  Verification of legalized documents.
                </p>
              </div>
            </div>

            {/* Accommodation Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4">
              <Image
                src="/house-bookshelves.png"
                alt="Accommodation"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Accommodation
                </h3>
                <p className="text-gray-600 text-sm">
                  Stay in dormitories with a safe environment.
                </p>
              </div>
            </div>

            {/* Free Counseling Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-col py-8 px-4">
              <Image
                src="/marriage-counseling.png"
                alt="Free Counseling"
                width={80}
                height={80}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#1CB5BD]">
                  Free Counseling
                </h3>
                <p className="text-gray-600 text-sm">
                  Get free counseling by our reputed experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cover bg-center ">
        <Image
          src="/our-partner.png"
          alt="our partner"
          height={600}
          width={400}
          className="w-full p-2"
        />
      </div>
      <div>
        <div className="flex items-center justify-center p-4">
          <h1 className="font-semibold text-4xl text-black">
            Our Happy
            <span className="text-[#1CB5BD] underline text-4xl p-2">
              Students
            </span>{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 p-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg relative rounded-lg p-6 w-64 text-center border border-gray-200"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border shadow-sm shadow-slate-500  top-[-40] bg-white  absolute flex items-center justify-center overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    width={60}
                    height={60}
                    className="p-4"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mt-4 text-[#1CB5BD]">
                {stat.count}
              </h2>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
