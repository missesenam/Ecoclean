import React from "react";
import contactBg from "../assets/picture7.jpg"; // replace with your actual image
import TheMap from "@/components/TheMap";

const Contact = () => {
  return (
    <>
      {/* min-h-screen */}
      <div className="relative h-[1000px] md:h-[800px]">
        <TheMap />
        {/* Content */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90%]  md:w-3xl  mx-auto p-6 text-white shadow-2xl bg-green-900 ">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left side - Contact Form */}
            <div className="space-y-4 col-span-3 ">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-white border  text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded bg-white border text-black"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 rounded bg-white border  text-black"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-white border  text-black"
                    placeholder="Your location"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full p-2 rounded bg-white text-black border  h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Send Message
              </button>
            </div>

            {/* Right side - Contact Info */}
            <div className="space-y-6 flex flex-col  ">
              <div>
                <h2 className="text-xl font-bold mb-2 text-blue-500">
                  ADDRESS
                </h2>
                <p>14142 S Napa Cir</p>
                <p>Plainfield, IL 60544</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2 text-blue-500">
                  CALL US
                </h2>
                <p>(815) 782 0518</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
