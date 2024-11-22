import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faRocket,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=".md:flex bg-customGray shadow-lg fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center h-16 .sm:max-w-screen-md">
        <div className="text-2xl font-bold text-gray-800 font-poppins">
          Bilge
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="text-gray-600 mr-2 w-3  transition duration-300 hover:text-gray-900 "
            />
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Home
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-600 mr-2 w-3 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              About
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-gray-600 mr-2 w-3 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Projects
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-gray-600 mr-2 w-4 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Skills
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 mr-2 w-3 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none "
        >
          <div className="relative flex flex-col justify-between items-center w-8 h-6  ">
            <span
              className={`block w-full h-1 bg-gray-800 transform transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>

            <span
              className={`block w-full h-1 bg-gray-800 transform transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block w-full h-1 bg-gray-800 transform transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-4">
          <li className="flex  items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="text-gray-600 mr-2 w-4  transition duration-300 hover:text-gray-900"
            />
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Home
            </a>
          </li>
          <li className="flex  items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-600 mr-2 w-4 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              About
            </a>
          </li>
          <li className="flex  items-center">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-gray-600 mr-2 w-4 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#projects"
              className="block text-gray-500  hover:text-gray-900 font-poppins"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li className="flex  items-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-gray-600 mr-2 w-4 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 font-poppins"
            >
              Skills
            </a>
          </li>
          <li className="flex  items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 mr-2 w-4 transition duration-300 hover:text-gray-900"
            />
            <a
              href="#contact"
              className="block text-gray-500  hover:text-gray-900 font-poppins"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
