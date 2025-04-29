import React from "react";
import picture5 from "../../assets/picture5.jpg";

const ServicesSection = () => {
  const services = [
    {
      category: "Disposal Services",
      servicesName: [
        "Foreclosure Cleanout",
        "Hoarding cleanout",
        "Garage Cleanout",
        "Yard waste removal",
        "Hot Tub Disposal",
        "Garbage Remova",
        "Others",
      ],
    },
    {
      category: "Recycling Services",
      servicesName: [
        "Mattress Disposal",
        "Furniture Removal",
        "E-waste Disposal",
        "Construction Waste Removal",
        "Appliance Removal",
        "Tire Disposal",
        "Others",
      ],
    },
  ];
  return (
    <>
      <section className="lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between p-6">
          <div className="lg:w-1/2 pl-6">
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-green-300 bg-clip-text text-transparent font-serif uppercase">
              our services
            </h1>

            <p className="text-lg">
              Residential, Commercial Junk Removal and Haulage We can handle
              most ANYTHING and EVERYTHING, except hazardous waste.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={picture5}
              alt="Descriptive Text"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="px-[50px] md:px-[100px] bg-slate-200 relative py-10 min-h-screen">
        <div className="bg-sky-700 h-[30vh] lg:h-[40vh] flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            <span className="text-transparent text-stroke text-stroke-green uppercase pr-4">
              our
            </span>
            Services
          </h1>
        </div>

        <article className="grid md:grid-cols-2 xl:grid-cols-2 gap-10 max-w-5xl mx-auto absolute top-[35%] left-0 right-0 z-10">
          {services.map((serviceCategory, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary20 mb-2 bg-green-600 p-2 text-white">
                {serviceCategory.category}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {serviceCategory.servicesName.map((service, idx) => (
                  <li key={idx}>
                    <strong>{service}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default ServicesSection;
