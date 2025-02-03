import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Zap } from "lucide-react";
import GlitchText from "./GlitchText";


const CyberpunkBorder = () => (
  <svg className="absolute -inset-1" viewBox="0 0 400 100">
    <defs>
      {/* Circuit-like gradient */}
      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff">
          <animate 
            attributeName="stop-color" 
            values="#00ffff;#00ff80;#00ffff" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#ff00ff">
          <animate 
            attributeName="stop-color" 
            values="#ff00ff;#8000ff;#ff00ff" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>

      {/* Digital glitch filter */}
      <filter id="digital-glitch">
        <feTurbulence 
          type="turbulence" 
          baseFrequency="0.05" 
          numOctaves="3" 
          result="turbulence"
        >
          <animate 
            attributeName="baseFrequency" 
            values="0.02;0.1;0.02" 
            dur="2.5s" 
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap 
          in2="turbulence" 
          in="SourceGraphic" 
          scale="10" 
          xChannelSelector="R" 
          yChannelSelector="G"
        >
          <animate 
            attributeName="scale" 
            values="0;10;0" 
            dur="2.5s" 
            repeatCount="indefinite"
          />
        </feDisplacementMap>
      </filter>
    </defs>

    {/* Outer circuit path */}
    <path 
      d="M20,0 L380,0 
         C400,20 400,40 380,60 
         L20,60 
         C0,40 0,20 20,0"
      fill="none"
      stroke="url(#circuit-gradient)"
      strokeWidth="3"
      strokeDasharray="15 10"
      filter="url(#digital-glitch)"
    >
      <animate 
        attributeName="stroke-dashoffset" 
        from="25" 
        to="-25" 
        dur="3s" 
        repeatCount="indefinite"
      />
    </path>

    {/* Inner circuit lines */}
    {[20, 40].map((y) => (
      <path 
        key={y}
        d={`M10,${y} L390,${y}`}
        stroke="url(#circuit-gradient)"
        strokeWidth="1"
        opacity="0.5"
        strokeDasharray="10 10"
        filter="url(#digital-glitch)"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          from="-10" 
          to="10" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </path>
    ))}

    {/* Circuit node points */}
    {[50, 150, 250, 350].map((x) => (
      <circle 
        key={x}
        cx={x % 400} 
        cy={50} 
        r="3" 
        fill="url(#circuit-gradient)"
        opacity="0.7"
      >
        <animate 
          attributeName="r" 
          values="2;5;2" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);
// const CyberpunkBorder = () => (
//   <svg className="absolute -inset-1" viewBox="0 0 400 100">
//     <defs>
//       <filter id="glitch-filter">
//         <feTurbulence 
//           type="fractalNoise" 
//           baseFrequency="0.05" 
//           numOctaves="2" 
//           result="turbulence">
//           <animate 
//             attributeName="baseFrequency" 
//             values="0.05;0.1;0.05" 
//             dur="3s" 
//             repeatCount="indefinite"
//           />
//         </feTurbulence>
//         <feDisplacementMap 
//           in2="turbulence" 
//           in="SourceGraphic" 
//           scale="5" 
//           xChannelSelector="R" 
//           yChannelSelector="G">
//           <animate 
//             attributeName="scale" 
//             values="0;5;0" 
//             dur="3s" 
//             repeatCount="indefinite"
//           />
//         </feDisplacementMap>
//       </filter>
      
//       <linearGradient id="electric-gradient">
//         <stop offset="0%" stopColor="#00ffff">
//           <animate 
//             attributeName="stop-color" 
//             values="#00ffff;#ff00ff;#00ffff" 
//             dur="4s" 
//             repeatCount="indefinite"
//           />
//         </stop>
//         <stop offset="100%" stopColor="#ff00ff">
//           <animate 
//             attributeName="stop-color" 
//             values="#ff00ff;#00ffff;#ff00ff" 
//             dur="4s" 
//             repeatCount="indefinite"
//           />
//         </stop>
//       </linearGradient>
//     </defs>
    
//     <path 
//       d="M20,0 L380,0 Q400,20 400,50 Q400,80 380,100 L20,100 Q0,80 0,50 Q0,20 20,0"
//       fill="none"
//       stroke="url(#electric-gradient)"
//       strokeWidth="3"
//       filter="url(#glitch-filter)"
//       strokeDasharray="10 10"
//     >
//       <animate 
//         attributeName="stroke-dashoffset" 
//         from="20" 
//         to="-20" 
//         dur="2s" 
//         repeatCount="indefinite"
//       />
//     </path>
    
//     <path 
//       d="M15,5 L385,5 Q395,25 395,50 Q395,75 385,95 L15,95 Q5,75 5,50 Q5,25 15,5"
//       fill="none"
//       stroke="url(#electric-gradient)"
//       strokeWidth="1"
//       opacity="0.5"
//       filter="url(#glitch-filter)"
//       strokeDasharray="15 15"
//     >
//       <animate 
//         attributeName="stroke-dashoffset" 
//         from="-15" 
//         to="15" 
//         dur="3s" 
//         repeatCount="indefinite"
//       />
//     </path>
//   </svg>
// );

// const CyberpunkBorder = () => (
//   <svg className="absolute -inset-1 animate-pulse-slow" viewBox="0 0 400 100">
//     <defs>
//       <filter id="neon-glow">
//         <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
//         <feFlood floodColor="#00ffff" floodOpacity="0.7"/>
//         <feComposite in2="coloredBlur" operator="in"/>
//         <feMerge>
//           <feMergeNode/>
//           <feMergeNode in="SourceGraphic"/>
//         </feMerge>
//       </filter>
      
//       <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#00ffff">
//           <animate 
//             attributeName="stop-color" 
//             values="#00ffff;#ff00ff;#00ffff" 
//             dur="5s" 
//             repeatCount="indefinite"
//           />
//         </stop>
//         <stop offset="100%" stopColor="#ff00ff">
//           <animate 
//             attributeName="stop-color" 
//             values="#ff00ff;#00ffff;#ff00ff" 
//             dur="5s" 
//             repeatCount="indefinite"
//           />
//         </stop>
//       </linearGradient>
      
//       <clipPath id="jagged-clip">
//         <path d="M20,0 L380,0 Q400,10 400,30 L400,70 Q400,90 380,100 L20,100 Q0,90 0,70 L0,30 Q0,10 20,0"/>
//       </clipPath>
//     </defs>
    
//     <rect 
//       x="0" 
//       y="0" 
//       width="400" 
//       height="100" 
//       fill="transparent" 
//       stroke="url(#cyber-gradient)" 
//       strokeWidth="3" 
//       filter="url(#neon-glow)"
//       clipPath="url(#jagged-clip)"
//       className="animate-pulse-slow"
//     />
    
//     <path 
//       d="M20,0 L380,0 Q400,10 400,30 L400,70 Q400,90 380,100 L20,100 Q0,90 0,70 L0,30 Q0,10 20,0"
//       fill="none"
//       stroke="url(#cyber-gradient)"
//       strokeWidth="3"
//       filter="url(#neon-glow)"
//       className="animate-draw"
//     />
//   </svg>
// );

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
                  <div className="px-2  relative  z-10">
                    <div className="text-lg font-bold">
                    <GlitchText text="Piyush Yadav" />
                    </div>

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
            {["Projects", "Contact"].map((item) => (
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