import React from "react";
import HeroSection from "@/components/HomeComponents/HeroSection";
import CompanyHighlight from "@/components/HomeComponents/CompanyHighlight";
import picture11 from "../assets/picture11.jpg";
import ServicesSection from "@/components/HomeComponents/ServicesSection";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyChooseUs />

      {/* <CompanyHighlight /> */}
      <ServicesSection />
      <div className="relative md:w-[80%] mx-auto h-[60vh]">
        <img
          src={picture11}
          alt="picture"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Contact Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-green-400 opacity-80 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
