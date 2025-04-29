import picture7 from "../../assets/picture7.jpg"; // replace with actual image path
import picture3 from "../../assets/picture3.jpg";
import picture5 from "../../assets/picture5.jpg";

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
      <motion.div>
        <div
          className="relative w-full lg:h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${picture5})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Centered blue box */}
          <div className="relative z-10 flex items-center justify-center h-full text-white px-4 py-5">
            <div className="bg-sky-800 lg:max-w-5xl w-full rounded-xl text-center p-5">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-lg">
                At EcoClean Junk Removal, we are committed to providing
                top-notch junk removal, cleaning, and hauling services with a
                focus on efficiency, reliability, and environmental
                responsibility. As a locally owned and operated business, we
                take pride in serving our community by helping homeowners,
                businesses, and property managers clear out unwanted items,
                maintain clean spaces, and handle heavy-duty hauling needs.
                <br />
                <br />
                Our mission is to make junk removal and cleaning hassle-free
                while promoting sustainable disposal practices. We strive to
                recycle, repurpose, or donate items whenever possible, reducing
                landfill waste and supporting a greener environment.
                <br />
                <br />
                Whether you're decluttering your home, managing a property
                cleanout, or need heavy materials hauled away, our professional
                team is ready to handle the job with care and professionalism.
                At EcoClean Junk Removal, customer satisfaction is our priority.
                We provide prompt service, fair pricing, and a commitment to
                excellence in everything we do.
                <br />
                <br />
                Let us take care of the mess so you can enjoy a cleaner,
                clutter-free space! Contact us today to schedule your service
                and experience the EcoClean Junk Removal difference!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
