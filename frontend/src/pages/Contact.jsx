import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactForm } from "../slices/contactSlice"; // You'll create this next
import { toast } from "react-hot-toast";
import TheMap from "@/components/TheMap";

const Contact = () => {
  const dispatch = useDispatch();
  const { status, error, success } = useSelector((state) => state.contactForm);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  useEffect(() => {
    if (success) {
      toast.success("Message sent successfully!");
    }
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [success, error]);

  return (
    <div className="relative h-[1000px] md:h-[800px]">
      {/* <TheMap /> */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90%] md:w-3xl mx-auto p-6 text-white shadow-2xl bg-green-900">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Contact Form */}
          <div className="space-y-4 col-span-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 rounded bg-white border text-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  className="w-full p-2 rounded bg-white border text-black"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <label className="block mb-1">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 rounded bg-white border text-black"
                  placeholder="Your location"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black border h-32"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col">
            <div>
              <h2 className="text-xl font-bold mb-2 text-blue-500">ADDRESS</h2>
              <p>14142 S Napa Cir</p>
              <p>Plainfield, IL 60544</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-blue-500">CALL US</h2>
              <p>(815) 782 0518</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
