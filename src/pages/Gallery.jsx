import React from "react";
import picture4 from "../assets/picture4.jpg";

const Gallery = () => {
  const images = [
    { src: picture4, title: "ecoclean", description: "image 1" },
    { src: picture4, title: "ecoclean", description: "image 1" },
    { src: picture4, title: "ecoclean", description: "image 1" },
    { src: picture4, title: "ecoclean", description: "image 1" },
    { src: picture4, title: "ecoclean", description: "image 1" },
    { src: picture4, title: "ecoclean", description: "image 1" },
  ];

  return (
    <>
      <section>
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:h-[50vh] -mt-4"
          style={{ backgroundImage: `url(${picture4})` }}
        >
          {/* Dark Background Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-50"></div>{" "}
          {/* Centered Text */}
          <div className="relative z-10 flex flex-col text-white text-center items-center justify-center p-8">
            <h2 className="text-3xl lg:text-6xl text-white font-bold mb-4">
              Gallery
            </h2>
            <p className="text-lg lg:text-xl lg:w-[60%]">
              Explore our collection showcasing our initiatives, events, and
              success stories that highlight our community impact.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-200">
        <div className="px-4 grid md:grid-cols-3 gap-5  max-w-6xl mx-auto ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={`image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition-all duration-300 group-hover:bg-opacity-50"></div>
              <div className="absolute bottom-[-50px] left-5 text-white text-xl font-semibold transition-all duration-300 group-hover:bottom-5">
                <p>{image.title}</p>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
