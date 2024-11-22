import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="m-12">
      <div className="mt-20 mb-10 flex justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-700">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out">
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

        {/* Diğer içerikler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>bilge</div>
          <div>bilge</div>
        </div>
      </div>
    </section>
  );
};

export default About;
