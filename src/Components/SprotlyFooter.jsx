import React from "react";
import { PiPlantFill } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Make sure to install react-icons: npm install react-icons

const SproutlyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r bg-green-400 opacity-80 text-gray-900 py-12 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex text-3xl">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Sproutly</h3>
            <PiPlantFill />
          </div>

          <p className="text-gray-600 leading-relaxed">
            At Sproutly, we believe that gardening is more than just a
            hobby—it's a journey of discovery, a connection with nature, and a
            source of immense joy. Dive into our extensive collection of tips,
            tricks, and expert advice, crafted to help your garden thrive, your
            plants flourish, and your passion for nature blossom.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-50 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-50 transition-colors duration-200"
              >
                Terms And Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-50 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-50 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-4 text-gray-700">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-green-100 hover:text-green-50 transition-colors duration-200 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-green-50 transition-colors duration-200 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-green-50 transition-colors duration-200 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-green-50 transition-colors duration-200 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-green-500 text-center text-green-200 text-sm">
        <p>&copy; {currentYear} Sproutly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SproutlyFooter;
