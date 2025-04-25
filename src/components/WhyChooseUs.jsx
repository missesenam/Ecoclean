import React from "react";
import {
  FaStar,
  FaMedal,
  FaClock,
  FaCheckCircle,
  FaDollarSign,
  FaShieldAlt,
  FaBolt,
  FaRecycle,
  FaThumbsUp,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaMedal className="text-yellow-500" />,
      text: "MINORITY AND VETERAN OWNED & OPERATED",
    },
    {
      icon: <FaBolt className="text-blue-500" />,
      text: "UNIFORMED TEAM WORKS FAST & RESPONSIBLE",
    },
    {
      icon: <FaClock className="text-green-500" />,
      text: "RELIABLE, WE ARRIVE ON-TIME",
    },
    {
      icon: <FaDollarSign className="text-purple-500" />,
      text: "FREE ESTIMATES - GUARANTEED PRICING",
    },
    {
      icon: <FaShieldAlt className="text-red-500" />,
      text: "FULLY INSURED & BONDED",
    },
    {
      icon: <FaStar className="text-orange-500" />,
      text: "SAME DAY SERVICES AVAILABLE",
    },
    {
      icon: <FaRecycle className="text-emerald-500" />,
      text: "ECO-FRIENDLY – WE RECYCLE & DONATE",
    },
    {
      icon: <FaThumbsUp className="text-indigo-500" />,
      text: "NO JOB IS COMPLETE UNTIL YOU APPROVE",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            WHY CHOOSE US
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Here's what sets us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
