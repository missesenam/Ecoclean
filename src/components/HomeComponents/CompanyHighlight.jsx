import React from "react";
import heroImage from "../../assets/picture9.jpg";
import { useInView } from "react-intersection-observer";

const CompanyIntro = () => {
  const text = "One Eco-Friendly Step at a Time";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <section className="relative mt-16">
      <div className="text-center mb-7">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-700 text-center w-[70%] mx-auto">
          Cleaning Up the Clutter
        </h2>
      </div>

      <div className="h-[70vh] flex items-end relative mb-16">
        <div className="w-full h-[30%] bg-sky-600"></div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-1/2 flex flex-col md:flex-row gap-8 w-[90%] md:h-[80%] md:w-[80%]"
          ref={ref}
        >
          <div className="w-2/3 text-3xl md:text-7xl text-center font-bold text-green-700 ">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block leading-tight ${
                  inView ? "animate-fall opacity-0" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-2xl flex items-center justify-center border-2 border-green-300">
            <p className="text-base md:text-2xl font-sans text-center font-medium bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent leading-8">
              EcoClean helps you reclaim your space with fast, reliable, and
              earth-friendly junk removal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;

{
  /* <div className="w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={heroImage}
              alt="EcoClean at work"
              className="w-full h-full object-cover"
            />
          </div> */
}

// Usage inside the component
//   <motion.h2
//     variants={bounceVariant}
//     initial="hidden"
//     animate="visible"
//     className="text-4xl md:text-5xl font-bold text-sky-700 text-center"
//   >
//     Cleaning Up the Clutter, One Eco-Friendly Step at a Time
//   </motion.h2>;
