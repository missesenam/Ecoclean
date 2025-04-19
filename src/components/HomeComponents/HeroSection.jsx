import React from "react";
import heroImage from "../../assets/picture10.jpg";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const buttons = [
    {
      label: "(815) 908-5729",
      href: "tel:8159085729",
      className: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
      label: "(630) 618-2165",
      href: "tel:6306182165",
      className:
        "bg-green-600 hover:bg-green-700 text-white md:absolute md:bg-black md:opacity-50 md:top-10 md:right-20",
    },
    {
      label: "Book Online",
      href: "#contact",
      className: "bg-white hover:bg-gray-100 text-green-700",
    },
  ];

  return (
    <section
      className="relative -mt-[20px] h-[91vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
          EcoClean Junk Removal
        </motion.h1>
        <p className="text-xl md:text-2xl mb-8">
          Declutter, Clean, and Haul - We Do It ALL!
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              className={`${btn.className} px-6 py-3 text-lg rounded-lg  transition`}
            >
              {btn.label}
            </a>
          ))}
        </div>

        <p className="absolute bottom-4 text-sm md:text-base px-4 text-center">
          Residential, Commercial Junk Removal and Haulage &nbsp; | &nbsp;
          Residential and Commercial Bin Cleaning
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
