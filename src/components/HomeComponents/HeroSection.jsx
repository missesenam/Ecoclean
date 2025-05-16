import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage1 from "../../assets/picture10.jpg";
import heroImage2 from "../../assets/picture11.jpg";
import heroImage3 from "../../assets/picture12.jpg";
import Booking from "../Booking";

const HeroSection = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <section className="relative -mt-[20px] h-[91vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          animate={{ opacity: 1 }}
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
          <a
            href="tel:8159085729"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-lg transition"
          >
            (815) 782 0518
          </a>
          <button
            onClick={handleModalToggle}
            className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 text-lg rounded-lg transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl p-8 h-[80vh] w-full max-w-2xl shadow-lg text-black overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
            >
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Close
                </button>
              </div>
              <Booking />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
