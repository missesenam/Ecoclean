import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Why Choose Us",
    "Contact",
    "Gallery",
  ];

  const getPath = (item) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-md fixed w-full z-50 top-0 left-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-green-700">
            <img src={logo} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`${
                    isActive
                      ? "border-b-2 border-red-900 text-red-900"
                      : "text-gray-700"
                  } hover:text-green-600 transition duration-300 ease-in-out transform hover:-translate-y-0.5 pb-1`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => {
                const path = getPath(item);
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      isActive
                        ? "border-b-2 border-red-900 text-red-900"
                        : "text-gray-700"
                    } hover:text-green-600 transition duration-300 ease-in-out pb-1`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
