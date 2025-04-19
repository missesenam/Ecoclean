import React from "react";
import heroImage from "../../assets/picture9.jpg";
import { motion } from "framer-motion";
// import "src/styles.css";

const CompanyIntro = () => {
  const bounceVariant = {
    hidden: { x: -20, y: -80, opacity: 0 }, // Slight left and upward offset
    visible: {
      x: 0,
      y: [0, 40, -50, 20, -30, 0], // Hard drop and bounce
      opacity: 1,
      transition: {
        duration: 0.7, // Fast animation duration
        delay: 2, // 2-second delay before starting
        ease: "easeOut", // Ease-out timing for smoother effect
      },
    },
  };

  // Usage inside the component
  //   <motion.h2
  //     variants={bounceVariant}
  //     initial="hidden"
  //     animate="visible"
  //     className="text-4xl md:text-5xl font-bold text-sky-700 text-center"
  //   >
  //     Cleaning Up the Clutter, One Eco-Friendly Step at a Time
  //   </motion.h2>;

  return (
    <section className="relative mt-16 ">
      {/* Catchy Header */}
      <div className="text-center mb-7">
        <motion.h2
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-sky-700 text-center w-[70%] mx-auto "
        >
          Cleaning Up the Clutter, One Eco-Friendly Step at a Time
        </motion.h2>
      </div>

      {/* Section containing blue line and top floating divs */}
      <div className="h-[70vh] flex items-end relative mb-16">
        {/* blue horizonal line */}
        <div className=" w-full h-[30%] bg-sky-600"></div>
        {/* image and the text section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-1/2 flex gap-8 w-[90%] md:h-[80%]  md:w-[80%]">
          <div className="w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={heroImage}
              alt="EcoClean at work"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/3 bg-green-600 p-6 rounded-xl shadow-lg flex items-center justify-center">
            <p className="text-slate800 text-base md:text-lg font-medium">
              EcoClean helps you reclaim your space with fast, reliable, and
              earth-friendly junk removal.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CompanyIntro;
