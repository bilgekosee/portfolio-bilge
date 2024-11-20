import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  pt-40  ">
      <div className=" flex flex-col items-center gap-y-3 xs:ml-0 ml-14 ">
        <div className="relative w-64 h-64 ">
          <div className="absolute -inset-2 bg-gradient-to-r from-black via-gray-300 to-black rounded-full blur-lg opacity-80 animate-pulse"></div>
          <img
            src="https://media1.tenor.com/m/AlUkiGkR2j8AAAAC/new-game-ahagon-umiko-programming.gif"
            alt="Anime Coding"
            className="w-64 h-64 relative w-full h-full rounded-full object-cover border-4 border-gray-600 hover:border-gray-800"
          />
        </div>
      </div>
      <div className="sm:ml-10 xs:ml-10">
        <h2 className="text-2xl font-bold flex ">
          Hello, I'm Bilge <span className="ml-1 animate-wave">👋</span>
        </h2>
        <p className="text-gray-800 mt-2">Frontend Developer & Web Designer</p>
        <p className="text-gray-600 mt-4">
          I am passionate about developing innovative, user-friendly solutions
          using modern technologies. With expertise in React, Vue, Tailwind CSS
          and JavaScript, I strive to write clean, efficient code and deliver
          high-quality results for every project.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="px-6 py-3 border-2 xs:flex xs:mr-10 sm:mr-10 xs:gap-3 xs:justify-center sm:flex sm:justify-center lg:inline md:inline border-gray-600 text-white bg-gray-600 hover:bg-gray-800 hover:border-gray-800  rounded-xl transition duration-300"
          >
            Say Hii <FontAwesomeIcon icon={faComments} />
          </a>
        </div>
      </div>

      <div className="mt-6 flex sm:flex-row sm:gap-x-6 xs:flex-row xs:gap-x-6 xs:mr-0 sm:mr-0 lg:flex-col items-center m-2 gap-y-3 justify-center mr-10 ">
        <a
          href="https://github.com/bilgekosee"
          className="text-gray-800 hover:text-gray-600 w-6 "
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/bilgekosee/"
          className="text-gray-800 hover:text-gray-600 w-6"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Home;
