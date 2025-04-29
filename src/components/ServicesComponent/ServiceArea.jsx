import React from "react";
import pictur10 from "../../assets/picture10.jpg";

function ServiceArea() {
  const locations = [
    { name: "Chicagoland" },
    { name: "Naperville" },
    { name: "Aurora" },
    { name: "Montgomery" },
    { name: "Oswego" },
    { name: "Yorkville" },
    { name: "Batavia" },
    { name: "Dak Brook" },
    { name: "North Aurora" },
    { name: "Lombard" },
    { name: "Wheaton" },
    { name: "Downers Grove" },
    { name: "Lockport" },
    { name: "Orland Park" },
    { name: "Plainfield" },
    { name: "Joliet" },
    { name: "Elmhurst" },
    { name: "Shorewood" },
    { name: "Roselle" },
    { name: "Oak Park" },
    { name: "Dekalb" },
    { name: "Elburn" },
    { name: "Hinsdale" },
  ];

  return (
    <section className="py-10 bg-white">
      <h1 className="text-5xl lg:text-6xl font-bold text-sky-600 text-center relative mb-16">
        locations we serve
        <span className="absolute -bottom-6 left-1/2 w-1/3 h-1 bg-gradient-to-r from-green-300 to-sky-500 transform -translate-x-1/2 translate-y-2"></span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto px-4">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={pictur10}
            alt="Service Area"
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Right - Locations List */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 "
            >
              <span className="text-green-600">✔</span>
              <p className="text-lg text-slate-700">{location.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
