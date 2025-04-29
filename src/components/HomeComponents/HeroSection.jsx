import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage1 from "../../assets/picture10.jpg";
import heroImage2 from "../../assets/picture11.jpg";
import heroImage3 from "../../assets/picture12.jpg";

const HeroSection = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const buttons = [
    {
      label: "(815) 908-5729",
      href: "tel:8159085729",
      className: "bg-green-600 hover:bg-green-700 text-white",
    },

    {
      label: "Book Now",
      // to: "/booking",
      className: "bg-white hover:bg-gray-100 text-green-700",
    },
  ];

  return (
    <section className="relative -mt-[20px] h-[91vh] overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
          EcoClean Junk Removal
        </motion.h1>
        <p className="text-xl md:text-2xl mb-8">
          Declutter, Clean, and Haul - We Do It ALL!
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {buttons.map((btn, index) =>
            btn.label === "Book Now" ? (
              <Link
                key={index}
                to="/booking"
                className={`${btn.className} px-6 py-3 text-lg rounded-lg transition`}
              >
                {btn.label}
              </Link>
            ) : (
              <a
                key={index}
                href={btn.href}
                className={`${btn.className} px-6 py-3 text-lg rounded-lg transition`}
              >
                {btn.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
