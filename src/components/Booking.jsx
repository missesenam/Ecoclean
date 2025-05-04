import React from "react";
import { Link } from "react-router-dom";
import captcha from "../assets/png-transparent-recaptcha-wordmark-hd-logo.png";

const Booking = () => {
  const services = [
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

  const inputGroups = [
    [
      { type: "text", placeholder: "First name" },
      { type: "text", placeholder: "Last name" },
    ],
    [
      { type: "email", placeholder: "Email" },
      { type: "tel", placeholder: "Phone number" },
    ],
    [{ type: "text", placeholder: "Address", fullWidth: true }],
    [
      { type: "text", placeholder: "City" },
      { type: "text", placeholder: "State" },
      { type: "text", placeholder: "Zip Code" },
    ],
  ];
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition";

  return (
    <div className="bg-white flex flex-col md:flex-row">
      {/* Left: Form */}
      <div className="flex-1">
        {/* <h2 className="text-2xl font-semibold mb-4">Book online</h2> */}
        <h3 className="text-2xl md:text-4xl  font-bold mb-6 text-center">
          Get a Quote
        </h3>
        <form className="space-y-4">
          <div className="space-y-4">
            {inputGroups.map((group, i) => (
              <div
                key={i}
                className={`flex gap-4 ${group[0].fullWidth ? "flex-col" : ""}`}
              >
                {group.map((input, j) => (
                  <input
                    key={j}
                    type={input.type}
                    placeholder={input.placeholder}
                    className={
                      input.fullWidth ? `${inputClass} w-full` : inputClass
                    }
                  />
                ))}
              </div>
            ))}
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
              I accept the{" "}
              <Link to="/termsandconditions" className="underline text-sky-600">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <div className="mb-4 max-w-sm ">
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded shadow-sm p-2">
              {/* Left side: checkbox and label */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="captcha"
                  className="mr-3 h-5 w-5 text-green-600 border-gray-400 rounded"
                />
                <label
                  htmlFor="captcha"
                  className="text-sm text-gray-800 font-medium"
                >
                  I'm not a robot
                </label>
              </div>

              {/* Right side: reCAPTCHA icon & text */}
              <div className="flex flex-col items-center text-[10px] text-gray-500">
                <img src={captcha} alt="" className="h-10" />
                {/* <div>reCAPTCHA</div> */}
                <div className="flex gap-1">
                  <p className="underline">Privacy</p> ·
                  <p className="underline">Terms</p>
                </div>
              </div>
            </div>
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
  );
};

export default Booking;
