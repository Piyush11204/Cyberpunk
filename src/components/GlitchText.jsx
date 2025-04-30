import React, { useEffect, useState } from 'react';
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

  export default GlitchText;