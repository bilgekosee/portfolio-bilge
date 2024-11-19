import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faRocket,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className=".md:flex bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-gray-800">Bilge</div>
        <ul className="flex space-x-6">
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="text-gray-600 mr-2 w-3  transition duration-300"
            />
            <a href="#home" className="text-gray-600">
              Home
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-600 mr-2 w-3 transition duration-300"
            />
            <a href="#home" className="text-gray-600">
              About
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-gray-600 mr-2 w-3 transition duration-300"
            />
            <a href="#home" className="text-gray-600">
              Projects
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-gray-600 mr-2 w-3 transition duration-300"
            />
            <a href="#home" className="text-gray-600">
              Skills
            </a>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 mr-2 w-3 transition duration-300"
            />
            <a href="#home" className="text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
