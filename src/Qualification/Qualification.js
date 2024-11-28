import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCar,
  faLaptopCode,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const careerSteps = [
  {
    title: "Mechatronics Engineering Graduation",
    date: "Sep. 2018 - Jul. 2022",
    details: [
      "Graduated from Necmettin Erbakan University with a focus on control systems, automation, and robotics.",
      "Final Year Project: Balance Robot using STMF103 microcontroller.",
      "Worked on complex robotics systems with hardware and software integration.",
    ],
    icon: faGraduationCap,
  },
  {
    title: "Toyota Internship",
    date: "Jun. 2020 - Aug. 2020",
    details: [
      "Completed a 30-day internship focused on automotive systems and engineering.",
      "Used SolidWorks, AutoCAD, and Siemens NX for vehicle component design.",
      "Collaborated with engineers to troubleshoot and improve designs.",
    ],
    icon: faCar,
  },
  {
    title: "Ctrl+ Future Bootcamp",
    date: "Jul. 2023 - Sep. 2023",
    details: [
      "Learned front-end development with React.js and JavaScript.",
      "Gained hands-on experience in Node.js for API integrations.",
      "Worked on real-world projects and team-based coding challenges.",
    ],
    icon: faLaptopCode,
  },
  {
    title: "Yapı Kredi Technology Internship",
    date: "Nov. 2023 - Oct. 2024",
    details: [
      "Developed and maintained user interfaces using React.js.",
      "Collaborated with backend teams for API integration.",
      "Optimized UI/UX components and improved rendering performance.",
    ],
    icon: faBriefcase,
  },
];

const Qualification = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-700">Qualification</h2>
        <h6 className="text-xs text-gray-500">My Personal Journey</h6>
      </div>

      <div className="flex justify-center m-12 items-center  bg-gray-50">
        <div className="flex flex-col justify-center items-center max-w-4xl w-full py-8 px-4">
          <ol className="relative border-l border-gray-300 w-full">
            {careerSteps.map((step, index) => (
              <li key={index} className="mb-8 pl-8 relative">
                <div
                  className="absolute w-12 h-12 bg-gray-500 rounded-full -left-6 flex justify-center items-center text-white animate-bounce"
                  aria-hidden="true"
                >
                  <FontAwesomeIcon icon={step.icon} size="2x" />
                </div>

                <button
                  onClick={() => toggleStep(index)}
                  className="text-lg font-semibold text-gray-800 hover:text-gray-500 focus:outline-none"
                >
                  {step.title}
                  <span className="flex text-sm text-gray-500">
                    {step.date}
                  </span>
                </button>

                <div
                  className={`mt-2 text-gray-600 transition-all duration-300 ${
                    openStep === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <ul className="list-disc pl-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Qualification;
