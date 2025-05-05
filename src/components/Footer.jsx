import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700 py-6 mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Ecoclean. All rights reserved.
        </p>
        <div
          className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 
      bg-clip-text text-transparent"
        >
          Ecoclean Junk Removal
        </div>
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a
            href="https://www.facebook.com/profile.php?id=61574988930380"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/ecocleanjunkremoval?utm_source=qr&igsh=azZyeGthZmZ4azQw"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            <Instagram size={20} />
          </a>
          {/* <a
            href="#"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:contact@ecoclean.com"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            <Mail size={20} />
          </a> */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
