import React from "react";
import contactBg from "../assets/picture7.jpg"; // replace with your actual image
import TheMap from "@/components/TheMap";

const Contact = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto p-6 text-white">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Contact Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-white text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded bg-white text-black"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 rounded bg-white text-black"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-white text-black"
                    placeholder="Your location"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full p-2 rounded bg-white text-black h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Send Message
              </button>
            </div>

            {/* Right side - Contact Info */}
            <div className="space-y-6 flex flex-col items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">ADDRESS</h2>
                <p>14142 S Napa Cir</p>
                <p>Plainfield, IL 60544</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">CALL US</h2>
                <p>(3) Side-up</p>
                <p>ORAL#_#%s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TheMap /> */}
    </>
  );
};

export default Contact;
