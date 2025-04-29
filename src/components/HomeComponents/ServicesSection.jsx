import React, { useRef } from "react";
import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[90%] mx-auto md:h-[60vh] flex gap-6 my-20"
    >
      <div className="w-1/2 flex items-center justify-center mb-16">
        <div className="relative w-[80%] h-[90%]">
          {[
            {
              src: picture1,
              alt: "Service 1",
              className:
                "h-[80%] w-[60%] left-1/2 transform -translate-x-1/2 z-30 shadow-lg",
            },
            {
              src: picture2,
              alt: "Service 2",
              className: "-bottom-15 right-1/2 transform z-20 shadow-lg",
            },
            {
              src: picture3,
              alt: "Service 3",
              className: "-top-15 left-1/2 transform z-10 shadow-lg",
            },
          ].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute ${image.className}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 rounded-xl text-white space-y-4">
        <div className="relative w-fit">
          <h1 className="text-6xl font-bold text-blue-400 mb-2 pb-3">
            Services
          </h1>
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-green-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <p className="leading-relaxed text-black font-serif text-2xl">
          Residential, Commercial Junk Removal and Haulage. We can handle most
          <span className="block">
            ANYTHING and EVERYTHING, except hazardous waste.
          </span>
        </p>
        <div className="w-full py-8 flex justify-center overflow-hidden">
          <motion.button
            initial={{ x: ["-100%", "100%"] }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg font-semibold hover:bg-blue-700 transition"
          >
            <Link to="/services">Check out more services</Link>

            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
