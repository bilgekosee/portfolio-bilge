import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4  pt-40 ">
      <div className="mt-6 flex flex-col items-center m-2 gap-y-3">
        <a
          href="https://github.com/bilgekosee"
          className="text-gray-800 hover:text-gray-600 w-6"
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
