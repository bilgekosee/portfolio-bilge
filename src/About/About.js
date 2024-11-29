import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faProjectDiagram,
  faCertificate,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section id="about" className="m-12 ">
      <div className="mt-20 mb-10 flex justify-center items-center ">
        <h2 className="text-3xl font-bold text-gray-700">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-6">
        <div className="flex justify-center items-center">
          <button
            onClick={toggleModal}
            className="flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <div
              className="border-solid border-gray-200 border rounded-lg bg-gray-100 p-20"
              style={{
                backgroundImage: `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWczcGZkcHd2dHV6OHVqY3V5YzNqemt0eDhmd3RodjBpd3N4NHZ1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QpVUMRUJGokfqXyfa1/200.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="flex justify-center items-center text-2xl font-extrabold text-white hover:scale-110 transition-transform duration-300 ease-in-out">
                Who Am I?
              </h3>

              <h4 className="flex justify-center items-center  font-extrabold text-white hover:scale-110 transition-transform duration-300 ease-in-out">
                View More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-lg transform transition-transform duration-300 ease-in-out hover:translate-x-2"
                />
              </h4>
            </div>
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                Hi, I'm Bilge! 👋 A Software Engineer with a background in
                Mechatronics Engineering. I specialize in React.js, JavaScript,
                and modern front-end technologies, crafting user-focused
                applications with clean and efficient code. With experience in
                companies like Yapı Kredi Technology and academic projects in
                robotics, I bring a multi-disciplinary perspective to
                problem-solving. My passion lies in building innovative,
                high-performance web solutions and continuously learning new
                technologies. When I’m not coding, I enjoy drawing, exploring
                robotics, and dreaming about my future adventures in Japan. 🚀
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={toggleModal}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="border flex flex-col items-center justify-center rounded-xl bg-customWhite border-customBorder p-4">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-lg transform transition-transform duration-300  "
              />
              <h3>Experience</h3>
              <div className="text-xs text-gray-600">
                <h6>- Yapı Kredi Technology </h6>
                <h6>- Toyota </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="border flex flex-col items-center justify-center rounded-xl bg-customWhite border-customBorder p-6">
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="text-lg transform transition-transform duration-300  "
              />
              <h3>Completed</h3>
              <div className="text-xs text-gray-600">
                <h6>50 + Projects </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="border flex flex-col items-center justify-center rounded-xl bg-customWhite border-customBorder p-6">
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-lg transform transition-transform duration-300  "
              />
              <h3>Bootcamps</h3>
              <div className="text-xs text-gray-600">
                <h6> Ctrl+ Future Bootcamp (2023) </h6>
              </div>
            </div>
          </div>
          <a href="/Bilge_Kose_CV.pdf" download="Bilge_Kose_CV">
            <div className="border flex flex-col items-center justify-center rounded-xl bg-customWhite border-customBorder  hover:bg-gray-500 hover:text-white p-6">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-lg transform transition-transform duration-300  "
              />
              <h3>Download CV</h3>
              <div className="text-xs text-red-950 hover:text-white">
                <h6> Click here to download the CV </h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
