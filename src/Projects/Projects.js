import React, { useState } from "react";

const data = [
  {
    project: "Book Store",
    stack: ["react"],
    description:
      "This project introduces Bilge Bookstore, a web application that allows you to explore books across various categories. The project is developed using React.js.",
    website: "https://bilgebookstore.vercel.app/",
    github: "https://github.com/bilgekosee/bilgebookstore?tab=readme-ov-file",
    image:
      "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    status: "Live",
    needs:
      "The backend part can be added to make the project more stable and functional.",
  },
  {
    project: "Anime Bölüm Takip",
    stack: ["vue"],
    description:
      "With this site, you can search for the anime you're watching and mark the episode you left off. It's a great convenience for anime lovers! :)",
    website: "https://vue-anime-takibi.netlify.app/",
    github: "https://github.com/bilgekosee/animetakipapp?tab=readme-ov-file",
    image:
      "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fHww",
    status: "Live",
    needs: "The design can be updated and improved.",
  },
  {
    project: "Voice Command",
    stack: ["vue"],
    description: "When you start recording, it converts your voice into text.",
    website: "https://sesli-komut-app.netlify.app/",
    github:
      "https://github.com/bilgekosee/seslikomut-uygulamasi?tab=readme-ov-file",
    image:
      "https://images.unsplash.com/photo-1722842253274-982122f538be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlrcm9mb258ZW58MHx8MHx8fDA%3D",
    status: "Live",
    needs:
      "The design should be revamped and made more modern, with the right colors carefully chosen.",
  },
  {
    project: "Order",
    stack: ["vue"],
    description: "A simple order placement website.",
    website: "https://products-vue-cli.netlify.app/",
    github: "https://github.com/bilgekosee/vue-product-cli",
    image:
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Live",
    needs: "The design should be updated and made user-friendly.",
  },
  {
    project: "Blog Website",
    stack: ["react"],
    description:
      "A blog site organized into categories aims to make learning fun and engaging by presenting information you're curious about in an entertaining way.",
    website: "https://evenstardust.github.io/BlogWebsite/",
    github: "https://github.com/EvenStarDust/BlogWebsite",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Live",
    needs: "Categories should be increased, and a backend should be added.",
  },
  {
    project: "Other Projects",
    stack: ["react", "vue", "python", "C#", "C++"],
    description:
      "If you're curious about other projects, you can check them out on the GitHub link.butterflies and sunshine.",

    github: "https://github.com/bilgekosee?tab=repositories",
    image:
      "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-6 m-12 lg:grid-cols-3 sm:grid-cols-2">
      {children}
    </div>
  );
};

const StackIcons = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {data.map((item, index) => (
        <span
          key={index}
          className={`px-2 py-1 rounded text-sm ${
            item === "react"
              ? "bg-blue-200"
              : item === "express"
              ? "bg-yellow-200"
              : item === "node"
              ? "bg-red-200"
              : item === "python"
              ? "bg-green-200"
              : item === "django"
              ? "bg-teal-200"
              : "bg-gray-200"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </span>
      ))}
    </div>
  );
};

const Card = ({ data }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className={`relative bg-white hover:shadow-2xl duration-300 rounded-lg shadow-lg overflow-hidden transition-transform transform ${
        isRevealed ? "h-auto" : "h-72"
      }`}
    >
      <div
        className="cursor-pointer"
        onClick={() => setIsRevealed((prev) => !prev)}
      >
        <img
          className="w-full h-40 object-cover"
          src={data.image}
          alt={data.project}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{data.project}</h3>
          <StackIcons data={data.stack} />
          {!isRevealed && (
            <div className="mt-4 flex items-center justify-between">
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline text-sm"
              >
                Website
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
      {isRevealed && (
        <div className="absolute inset-0 bg-gray-100 p-4 overflow-auto z-10">
          <button
            className="absolute top-2 right-2 text-gray-700"
            onClick={() => setIsRevealed(false)}
          >
            ✖
          </button>
          <h4 className="text-lg font-bold">{data.project}</h4>
          <p className="mt-2 text-sm text-gray-700">{data.description}</p>
          <p className="mt-2 text-sm text-gray-700">
            <strong>Status:</strong> {data.status}
          </p>
          {data.needs && (
            <p className="mt-2 text-sm text-gray-700">
              <strong>Needs:</strong> {data.needs}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Projects = ({ data }) => {
  return (
    <Layout>
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </Layout>
  );
};

const Project = () => {
  return (
    <section id="project">
      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="flex justify-center items-center mt-20 mb-10 text-3xl font-bold text-gray-700">
          Projects
        </h2>
        <Projects data={data} />
      </div>
    </section>
  );
};

export default Project;
