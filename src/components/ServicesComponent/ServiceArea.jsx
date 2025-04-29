import React from "react";
import pictur3 from "../../assets/picture3.jpg";

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
    <>
      <section className=" py-10 bg-white">
        <h1 class="text-5xl lg:text-6xl font-bold text-sky-600 text-center relative mb-24">
          locations we serve
          <span class="absolute -bottom-6 left-1/2 w-1/3 h-1 bg-gradient-to-r from-green-300 to-sky-500 transform -translate-x-1/2 translate-y-2"></span>
        </h1>

        <div className="grid md:grid-cols-2 gap-2 mx-auto max-w-lg justify-center">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <span className="text-green-500" style={{ color: "green" }}>
                ✔
              </span>
              <p className="text-xl text-slate-700">{location.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServiceArea;
