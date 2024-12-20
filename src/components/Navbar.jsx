import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Zap } from "lucide-react";

const GlitchText = ({ text }) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 1700);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative inline-block">
      <span className={`relative inline-block ${glitchActive ? 'animate-glitch' : ''}`}>
        {text}
        {glitchActive && (
          <>
            <span className="absolute top-0 left-0.5 w-full text-cyan-400 animate-glitch-1">{text}</span>
            <span className="absolute top-0 -left-0.5 w-full text-pink-500 animate-glitch-2">{text}</span>
          </>
        )}
      </span>
    </div>
  );
};

const CyberpunkBorder = () => (
  <svg className="absolute -inset-1 animate-pulse-slow" viewBox="0 0 400 100">
    <filter id="glow">
      <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <path
      d="M0,0 L380,0 L400,20 L400,80 L380,100 L0,100 L0,0"
      fill="none"
      stroke="url(#cyberpunk-gradient)"
      strokeWidth="2"
      filter="url(#glow)"
      className="animate-draw"
    />
    <defs>
      <linearGradient id="cyberpunk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00fff2">
          <animate attributeName="stop-color" 
            values="#00fff2; #ff00ff; #00fff2" 
            dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stopColor="#ff00ff">
          <animate attributeName="stop-color" 
            values="#ff00ff; #00fff2; #ff00ff" 
            dur="4s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm text-white fixed w-full z-20 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Link 
              to="/" 
              className="group flex items-center relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full animate-ping-slow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 animate-pulse rounded-full blur-md"></div>
                <img
                  src="https://res.cloudinary.com/dl16vvgyy/image/upload/v1734715411/Piyush_pq33tm.jpg"
                  alt="Piyush Yadav"
                  className="rounded-full border-2 border-cyan-500 relative z-10 group-hover:border-pink-500 transition-all duration-300"
                />
                {isHovered && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 animate-pulse rounded-full blur-md"/>
                )}
              </div>
              
              <div className="ml-4 relative">
                <div className="relative">
                  <CyberpunkBorder />
                  <div className="px-4 py-1 relative z-10">
                    <GlitchText text="Piyush Yadav" />

                    <div className="flex items-center mt-1 text-xs tracking-[0.3em] text-cyan-400">
                      <Zap className="w-3 h-3 mr-1 animate-pulse" />
                      <span className="animate-pulse">Software Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {["Projects", "Contact Me"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative group overflow-hidden"
              >
                <span className="relative inline-block px-4 py-2">
                  <span className="relative z-10 text-lg tracking-wide group-hover:text-cyan-400 transition-colors">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"/>
                  <span className="absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-l from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"/>
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative p-2 overflow-hidden rounded-lg border border-cyan-500 hover:border-pink-500 transition-colors group"
            >
              <Menu className="w-6 h-6 relative z-10 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 translate-y-full group-hover:translate-y-0 transition-transform"/>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            dropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 space-y-1 relative">
            {["Home", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="block px-4 py-2 text-lg relative overflow-hidden group"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="relative z-10 group-hover:text-cyan-400 transition-colors">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 translate-x-full group-hover:translate-x-0 transition-transform"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;