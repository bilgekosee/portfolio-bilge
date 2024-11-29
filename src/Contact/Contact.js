import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verileri gönderildi:", formData);
  };

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
    console.log("Active state:", !active);
  };

  return (
    <>
      <section id="contact">
        <div className="mt-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-700">Get In Touch</h2>
          <h6 className="text-xs text-gray-500">Contact Me</h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center  ml-12 mr-12 sm:mr-0 sm:ml-0 xs:mr-0 xs:ml-0  px-8 sm:px-6 lg:px-12 bg-bgWhite">
          <div className="w-full max-w-lg  space-y-8 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 md:justify-center md:items-center">
            <div>
              <h2 className="text-md font-semibold text-center text-gray-600 mt-2">
                Write me your project
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insert your name"
                    className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-600"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insert your email"
                    className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-600"
                  >
                    Write me
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-transparent sm:flex sm:mt-12  xs:mt-12">
            <div className="relative max-w-[420px] p-10 sm:p-0 xs:p-0  overflow-hidden mx-auto">
              <main className="w-full relative">
                <section className="bg-[#615e5d] rounded-lg shadow-lg">
                  <div className="text-center px-8 py-10 relative">
                    <img
                      src="/me.jpeg"
                      alt="Profile Image"
                      className="inline-block w-[140px] h-[140px] rounded-full mb-4 object-cover"
                    />
                    <aside className="text-white mt-2 mb-4">
                      <h1 className="font-thin text-2xl mb-2">Bilge Köşe</h1>
                      <p className="text-sm leading-relaxed tracking-wide mb-12">
                        Hi, I'm Bilge Köşe and I'm a Frontend Developer and Web
                        Designer
                      </p>
                    </aside>

                    <button
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#343333] text-white rounded-full text-lg py-2 px-6 mb-4`}
                      onClick={toggleActive}
                    >
                      <span
                        className={`block w-full text-center transition-opacity duration-200 ${
                          active ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Contact Me
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <path
                          d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"
                          fill="#c63535"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </main>

              <nav
                className={`overflow-hidden transition-all duration-500 ${
                  active
                    ? "max-h-[600px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <a
                  href="mailto:bilge.koosee@gmail.com"
                  className={`block bg-gray-300 p-4 rounded-lg text-[#d14836] mb-4 mt-4 transition-all duration-700 ${
                    active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#d14836] rounded-full flex justify-center items-center">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-white"
                      >
                        <path
                          d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg">Email</h1>
                      <span className="text-gray-600">
                        bilge.koosee@gmail.com
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/bilgekosee"
                  target="#"
                  className={`block bg-gray-300 p-4 rounded-lg text-[#181717] mb-4 mt-4 transition-all duration-700 ${
                    active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#181717] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6"
                      >
                        <path d="M12 2a10 10 0 0 0-3.162 19.478c.5.093.682-.217.682-.482 0-.237-.008-.866-.013-1.698-2.776.603-3.362-1.34-3.362-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.068-.608.068-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.912.832.092-.647.35-1.088.637-1.338-2.217-.252-4.553-1.109-4.553-4.937 0-1.09.39-1.98 1.029-2.677-.103-.253-.447-1.27.097-2.645 0 0 .84-.268 2.75 1.02a9.564 9.564 0 0 1 2.5-.336 9.554 9.554 0 0 1 2.5.336c1.91-1.288 2.75-1.02 2.75-1.02.545 1.375.202 2.392.1 2.645.64.697 1.028 1.587 1.028 2.677 0 3.836-2.338 4.682-4.567 4.93.36.31.682.922.682 1.856 0 1.34-.013 2.42-.013 2.748 0 .267.18.578.688.481A10.001 10.001 0 0 0 12 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h1>Github</h1>
                      <span className="text-gray-600">bilgekosee</span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bilgekosee/"
                  target="#"
                  className={`block bg-gray-300 p-4 rounded-lg text-[#0077B5] mb-4 mt-4 transition-all duration-700 ${
                    active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#0077B5] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6"
                      >
                        <path d="M20.452 20.452h-3.9v-5.633c0-1.344-.024-3.073-1.873-3.073-1.873 0-2.161 1.461-2.161 2.969v5.737h-3.9V9h3.743v1.561h.053c.521-.986 1.797-2.025 3.698-2.025 3.953 0 4.683 2.603 4.683 5.987v6.929zM5.337 7.433a2.255 2.255 0 0 1-2.252-2.252 2.255 2.255 0 0 1 2.252-2.252 2.256 2.256 0 0 1 2.253 2.252 2.255 2.255 0 0 1-2.253 2.252zM7.335 20.452H3.335V9h4v11.452zM22.225 0H1.771C.792 0 0 .786 0 1.759v20.485C0 23.214.792 24 1.771 24h20.451c.98 0 1.774-.786 1.774-1.756V1.759C24 .786 23.206 0 22.225 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-lg">LinkedIn</h1>
                      <span className="text-gray-600">Bilge Köşe</span>
                    </div>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-300 ">
          <h4 className="text-xl text-white mt-6 mb-6">Bilge KÖŞE</h4>
        </div>
      </section>
    </>
  );
};

export default Contact;
