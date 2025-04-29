import React from "react";

const Booking = () => {
  const services = [
    "Garbage Bin Cleaning",
    "Residential Trash Pickup",
    "Commercial Dumpster and Pad Cleaning",
    "Exterior Pressure Washing",
    "Exterior Soft Washing",
    "Residential Junk",
    "Commercial Junk",
    "Moving Junk",
    "Storage Junk",
    "Renovation Junk",
    "Disaster Junk",
    "Cleanout services",
    "Bush Yard Waste Removal",
    "Other",
  ];

  const additionalServices = [];

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left: Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Book online</h2>
          <h3 className="text-xl font-bold mb-6 text-center">Get a Quote</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="input" />
              <input type="text" placeholder="Last name" className="input" />
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="Email" className="input" />
              <input type="tel" placeholder="Phone number" className="input" />
            </div>
            <input type="text" placeholder="Address" className="input w-full" />
            <div className="flex gap-4">
              <input type="text" placeholder="City" className="input" />
              <input type="text" placeholder="State" className="input" />
              <input type="text" placeholder="Zip Code" className="input" />
            </div>

            <div>
              <label className="block font-medium mb-2">Type of Service</label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <label key={index}>
                    <input type="checkbox" className="mr-2" /> {service}
                  </label>
                ))}
              </div>
            </div>

            {/* <h3 className="text-lg font-semibold mb-4 mt-6">
              Additional Services
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {additionalServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul> */}

            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              className="w-full h-24 p-2 border border-gray-300 rounded resize-none mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I accept the Terms
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="captcha"
                className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="captcha" className="text-sm text-gray-700">
                I'm not a robot
              </label>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" fill="#E5E7EB" />
                <path
                  d="M16 4C11.58 4 8 7.58 8 12V16C8 17.1 7.1 18 6 18H4V22H28V18H26C24.9 18 24 17.1 24 16V12C24 7.58 20.42 4 16 4ZM16 14C17.1 14 18 13.1 18 12C18 10.9 17.1 10 16 10C14.9 10 14 10.9 14 12C14 13.1 14.9 14 16 14Z"
                  fill="#4B5EAA"
                />
              </svg>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
