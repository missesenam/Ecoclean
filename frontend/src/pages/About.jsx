import React from "react";
import AboutSection from "@/components/AboutComponents/AboutSection";
import HowItWorks from "@/components/AboutComponents/HowItWorks";
import Faqs from "@/components/AboutComponents/Faqs";

const About = () => {
  return (
    <div>
      <AboutSection />
      <HowItWorks />
      {/* <WhyChooseUs /> */}
      <Faqs />
    </div>
  );
};

export default About;
