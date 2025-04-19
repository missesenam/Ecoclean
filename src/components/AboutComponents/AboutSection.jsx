import picture7 from "../../assets/picture7.jpg"; // replace with actual image path
import picture3 from "../../assets/picture3.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <>
      {/* Hero Section with animation */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[60vh] border-b-[12px] -mt-[16px] border-blue-600 rounded-b-[80px] overflow-hidden"
      >
        <img
          src={picture3}
          alt="EcoClean Team"
          className="w-full h-full object-cover object-top shadow-lg"
        />
        <div className="absolute bottom-10 left-10 bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 text-sm mt-2">
            Learn more about our mission, our values, and how we help you
            maintain a cleaner, more eco-friendly environment.
          </p>
        </div>
      </motion.div>

      {/* About Content Section with animation */}
      <motion.section
        ref={contentRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="bg-gray-100 py-12 px-4 md:px-16"
        id="about"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={picture7}
              alt="EcoClean Junk Removal Team"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About <span className="text-green-600">Us</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold">EcoClean Junk Removal</span>,
              we are committed to providing top-notch junk removal, cleaning,
              and hauling services with a focus on efficiency, reliability, and
              environmental responsibility.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As a locally owned and operated business, we take pride in serving
              our community—helping homeowners, businesses, and property
              managers clear out unwanted items and maintain clean spaces.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is to make junk removal hassle-free while promoting
              sustainable disposal practices. We strive to recycle, repurpose,
              or donate items whenever possible—reducing landfill waste and
              supporting a greener planet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Customer satisfaction is our top priority. We deliver prompt
              service, fair pricing, and a commitment to excellence. Let us
              handle the mess, so you can enjoy a cleaner, clutter-free space!
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutSection;
