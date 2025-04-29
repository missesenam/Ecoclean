import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import freequote from "../../assets/free.png";
import flexibility from "../../assets/flexibility.png";
import commited from "../../assets/commited.png";

const steps = [
  {
    image: freequote,
    title: "We Quote",
    description:
      "Schedule your appointment online or by calling 1-888-797-4520.",
  },
  {
    image: flexibility,
    title: "We Schedule",
    description:
      "We offer flexible scheduling to fit your busy lifestyle. Choose a time that works best for you, and our professional haulers will arrive on time, ready to get the job done.",
  },
  {
    image: commited,
    title: "We Remove",
    description:
      "We’re committed to eco-friendly junk removal. Whenever possible, we recycle and donate items to minimize waste. You can trust us to handle your unwanted items responsibly.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className=" text-white py-16 px-4 mt-10" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center "
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wider text-black">
          HOW IT WORKS
        </h2>
        <p className="text-sm mb-12 md:text-base text-black leading-relaxed">
          Hassle-Free Junk Removal in will county and surrounding areas We know
          that convenience matters. That’s why we’ve made junk removal in Joliet
          as simple and stress-free as possible. Here’s how our streamlined
          process works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center space-y-4 bg-white p-10 rounded-bl-3xl rounded-tr-3xl shadow-2xl border border-sky-400"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-28 h-28 object-contain "
              />
              <h2 className="text-center text-black font-bold">{step.title}</h2>
              <p className="text-sm md:text-base text-black leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
