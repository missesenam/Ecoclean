import React from "react";
import pictur3 from "../../assets/picture3.jpg";

function ServiceArea() {
  const locations = [
    { name: "Chicagoland", image: pictur3 },
    { name: "Naperville", image: pictur3 },
    { name: "Aurora", image: pictur3 },
    { name: "Montgomery", image: pictur3 },
    { name: "Oswego", image: pictur3 },
    { name: "Yorkville", image: pictur3 },
    { name: "Batavia", image: pictur3 },
    { name: "Dak Brook", image: pictur3 },
    { name: "North Aurora", image: pictur3 },
    { name: "Lombard", image: pictur3 },
    { name: "Wheaton", image: pictur3 },
    { name: "Downers Grove", image: pictur3 },
    { name: "Lockport", image: pictur3 },
    { name: "Orland Park", image: pictur3 },
    { name: "Plainfield", image: pictur3 },
    { name: "Joliet", image: pictur3 },
    { name: "Elmhurst", image: pictur3 },
    { name: "Shorewood", image: pictur3 },
    { name: "Roselle", image: pictur3 },
    { name: "Oak Park", image: pictur3 },
    { name: "Dekalb", image: pictur3 },
    { name: "Elburn", image: pictur3 },
    { name: "Hinsdale", image: pictur3 },
  ];

  return (
    <>
      <section className=" py-10 bg-white">
        <h1 class="text-5xl lg:text-6xl font-bold text-sky-600 text-center relative mb-24">
          locations we serve
          <span class="absolute -bottom-6 left-1/2 w-1/3 h-1 bg-gradient-to-r from-green-300 to-sky-500 transform -translate-x-1/2 translate-y-2"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto ">
          {locations.map((location, index) => (
            <div
              key={index}
              className="p-3 = shadow-lg flex items-center bg-slate-300 "
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-1/3 h-auto object-cover rounded-sm mr-4"
              />
              <p className="text-xl text-slate-700">{location.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServiceArea;
