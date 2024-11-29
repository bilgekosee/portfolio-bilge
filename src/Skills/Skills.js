import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPalette,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills" className="m-12">
      <div className="mt-20 mb-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-700">Skills</h2>
        <h6 className="text-xs text-gray-500">My Technical Level</h6>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="border bg-customWhite border-customBorder rounded-xl px-8 py-16 flex flex-col justify-center items-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Programming Languages
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">JavaScript</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Python</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">C</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">C++</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">C#</h4>
            </div>
          </div>
        </div>
        <div className="border bg-customWhite border-customBorder rounded-xl px-8 py-16 flex flex-col justify-center items-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">Frontend</h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">HTML</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">CSS</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">JavaScript</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Bootstrap</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Vue</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPalette} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">React</h4>
            </div>
          </div>
        </div>
        <div className="border bg-customWhite border-customBorder  rounded-xl px-8 py-16 flex flex-col justify-center items-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Software & Tools
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">VS Code</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Figma</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Git & Github</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">SolidWorks</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">Matlab</h4>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTools} className="text-l mr-2" />
              <h4 className="text-md text-gray-900">ROS</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
