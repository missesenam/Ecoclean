import React, { useState } from "react";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import picture5 from "../assets/picture5.jpg";
import picture6 from "../assets/picture6.jpg";
import picture7 from "../assets/picture7.jpg";
import picture8 from "../assets/picture8.jpg";
import picture9 from "../assets/picture9.jpg";
import picture10 from "../assets/picture10.jpg";
import picture11 from "../assets/picture11.jpg";
import picture12 from "../assets/picture12.jpg";
import picture13 from "../assets/picture13.png";
import picture14 from "../assets/picture14.jpg";
import picture15 from "../assets/picture15.jpg";
import picture16 from "../assets/picture16.jpg";
import picture17 from "../assets/picture17.jpg";
import picture18 from "../assets/picture18.jpg";
import picture19 from "../assets/picture19.jpg";
import picture20 from "../assets/picture20.jpg";
import picture21 from "../assets/picture21.jpg";
import picture22 from "../assets/picture22.jpg";
import picture23 from "../assets/picture23.jpg";
import picture24 from "../assets/picture24.jpg";
import picture25 from "../assets/picture25.jpg";
import picture26 from "../assets/picture26.jpg";
import picture27 from "../assets/picture27.jpg";
import cleaningser from "../assets/cleaningser.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Modal state

  const pictures = [
    picture14,
    picture15,
    picture16,
    picture17,
    picture18,
    picture19,
    picture20,
    picture21,
    picture25,
    picture26,
    picture27,
  ];

  const images = pictures.map((pic, index) => ({
    src: pic,
    title: `Image ${index + 1}`,
  }));

  return (
    <>
      {/* Hero Section */}
      <section>
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:h-[50vh] -mt-4"
          style={{
            backgroundImage: `url(${cleaningser})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 opacity-50"></div>
          <div className="relative z-10 flex flex-col text-white text-center items-center justify-center p-8">
            <h2 className="text-3xl lg:text-6xl font-bold mb-4">Gallery</h2>
            <p className="text-lg lg:text-xl lg:w-[60%]">
              Explore our collection showcasing our works and success stories
              that highlight our company impact.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-slate-200">
        <div className="px-4 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition-all duration-300 group-hover:bg-opacity-50"></div>
              <div className="absolute bottom-[-50px] left-5 text-white text-xl font-semibold transition-all duration-300 group-hover:bottom-5">
                <p>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black opacity-95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
