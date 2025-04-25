import React from "react";
import picture6 from "../assets/picture6.jpg";
import picture7 from "../assets/picture7.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  const images = [picture7, picture7, picture7, picture7, picture7];
  return (
    <>
      {" "}
      <section>
        <div
          className=" mx-auto p-8"
          style={{ backgroundImage: `url(${picture6})` }}
        >
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">
              CONTACT US
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Junk Bunker Scheduling is Quick and Easy!
              </h3>

              <p className="text-lg text-gray-600 mb-4">
                Just call{" "}
                <span className="font-bold text-blue-600">1-555-4500</span>
              </p>

              <p className="text-lg italic text-gray-500">
                JunkBunker Scheduling will cover your fastest service space
                today!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg- my-16 py-10">
        <div className="flex flex-col justify-center items-center min-h-screen shadow-xl max-w-5xl mx-auto bg-green-200 ">
          {/* Gallery Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 capitalize">
            Check out our Gallery
          </h2>

          {/* Image Gallery */}
          <div className="relative w-[80%] max-w-4xl h-[400px] flex justify-center items-center">
            {/* Loop through images and display each */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute ${
                  index === 0
                    ? "w-24 h-24 sm:w-28 sm:h-28 top-10 left-5 sm:left-16"
                    : index === 1
                    ? "w-32 h-32 sm:w-36 sm:h-36 top-5 right-10 sm:right-16"
                    : index === 2
                    ? "w-40 h-40 sm:w-44 sm:h-44 top-32 left-20"
                    : index === 3
                    ? "w-48 h-48 sm:w-52 sm:h-52 top-16"
                    : "w-36 h-36 sm:w-40 sm:h-40 bottom-10 right-16"
                } rounded-full overflow-hidden`}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 bg-secondary2 text-primary text-lg font-semibold rounded-full hover:bg-secondary hover:text-secondary2 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Gallery
            {/* <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg> */}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
