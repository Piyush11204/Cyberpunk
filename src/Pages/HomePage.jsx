import React from "react";
import { Code, Globe, Server, Smartphone, Book, VideoIcon } from "lucide-react";

const PortfolioPage = () => {
  const projectLinks = [
    { 
      name: "Trip Finder", 
      link: "https://trip-finder-five.vercel.app/", 
      icon: <Globe size={24} />,
      description: "A comprehensive travel planning application"
    },
    { 
      name: "Easy Yoga", 
      link: "https://easy-yoga.vercel.app/", 
      icon: <Book size={24} />,
      description: "Yoga and wellness web application" 
    },
    { 
      name: "Phone Pe Clone", 
      link: "https://phone-pe-eta.vercel.app/", 
      icon: <Smartphone size={24} />,
      description: "Digital payment platform replica" 
    },
    { 
      name: "Page Paradise", 
      link: "https://page-paradise2-0.vercel.app/", 
      icon: <Server size={24} />,
      description: "Innovative web application platform" 
    },
    { 
      name: "Twisted Tickles", 
      link: "https://twisted-tickles.vercel.app/", 
      icon: <Code size={24} />,
      description: "Creative web development project" 
    },
    { 
      name: "Video Call App", 
      link: "https://video-call-wine.vercel.app/", 
      icon: <VideoIcon size={24} />,
      description: "Real-time video communication platform" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-300">My Project Portfolio</h1>
          <p className="text-lg text-gray-400 mt-2">
            Explore a collection of innovative web applications and digital experiences
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectLinks.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-500 border border-transparent"
            >
              <div className="flex items-center mb-4">
                <span className="text-teal-400 mr-3">{project.icon}</span>
                <h2 className="text-xl font-bold text-teal-300">{project.name}</h2>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-200 transition-colors flex items-center"
              >
                View Project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <footer className="text-center text-gray-500 text-sm mt-16">
          <p>
            Personal Portfolio &copy; {new Date().getFullYear()} | Crafted with Passion
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioPage;