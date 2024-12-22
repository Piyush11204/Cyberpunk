
import React, { useState, useEffect,useCallback } from 'react';

const NameAndPhoto = () => {
    const abilities = [
        "Full-Stack Developer",
        "MERN Enthusiast",
        "UI/UX Designer"
    ];

    const [displayText, setDisplayText] = useState('');
    const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [matrixChars, setMatrixChars] = useState([]);

    // Matrix rain effect
    const generateMatrixChar = useCallback(() => {
        // const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const chars = '01';
        const x = Math.random() * window.innerWidth;
        const speed = 2 + Math.random() * 3;
        const size = 10 + Math.random() * 16;
        return {
            x,
            y: 10,
            char: chars[Math.floor(Math.random() * chars.length)],
            speed,
            size,
            opacity: 0.5 + Math.random() * 0.5,
            color: Math.random() > 0.47 ? '#00ffff' : '#00ff00'
        };
        }, []);

        useEffect(() => {
            const createMatrixRain = () => {
                setMatrixChars(prev => {
                    const newChars = [...prev];
                    
                    // Add new characters
                    if (newChars.length < 150) {
                        newChars.push(generateMatrixChar());
                    }

                    // Update positions and remove offscreen characters
                    return newChars
                        .map(char => ({
                            ...char,
                            y: char.y + char.speed
                        }))
                        .filter(char => char.y < window.innerHeight);
                });
            };

            const intervalId = setInterval(createMatrixRain, 50);

            const timeoutId = setTimeout(() => {
                clearInterval(intervalId);
                setMatrixChars([]);
            }, 10000);

            return () => {
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            };
        }, [generateMatrixChar]);

    // Handle mouse movement for 3D effect
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        const typingDelay = 150;
        const deleteDelay = 50;
        const pauseDelay = 1000;

        const type = () => {
            const currentText = abilities[currentAbilityIndex];

            if (!isDeleting) {
                if (displayText !== currentText) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                    setCursorPosition(displayText.length + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDelay);
                }
            } else {
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentAbilityIndex((prev) => (prev + 1) % abilities.length);
                } else {
                    setDisplayText(displayText.slice(0, -1));
                    setCursorPosition(displayText.length - 1);
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? deleteDelay : typingDelay);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentAbilityIndex, abilities]);
    return (
        <div>
                 <div className="fixed inset-0 pointer-events-none">
                {matrixChars.map((char, i) => (
                    <div
                        key={i}
                        className="absolute font-matrix transition-all"
                        style={{
                            left: `${char.x}px`,
                            top: `${char.y}px`,
                            color: char.color,
                            opacity: char.opacity,
                            fontSize: `${char.size}px`,
                            transform: 'translate3d(0,0,0)',
                            textShadow: `0 0 8px ${char.color}`
                        }}
                    >
                        {char.char}
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
                {/* Left side - Text Content */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
                    <div className="glitch-text text-5xl font-extrabold text-teal-300 mb-8" data-text="Piyush Krishnadutt Yadav">
                        Piyush Krishnadutt Yadav
                    </div>

                    <div className="typing-container text-2xl font-bold text-teal-400">
                        <span className="typing-text">{displayText}</span>
                        <span
                            className="typing-cursor"
                            style={{
                                left: `${cursorPosition * 0.6}em`,
                                position: 'relative'
                            }}
                        ></span>
                    </div>

                    <div className="mt-12 text-gray-300 leading-relaxed">
                        I'm a passionate third-year IT student at VCET, turning caffeine into code one project at a time.
                        My journey in web development is driven by an insatiable curiosity to create innovative digital experiences.
                        I specialize in the MERN stack and Next.js, constantly pushing the boundaries of what's possible in web development.
                    </div>
                </div>

                {/* Right side - Image with 3D effect */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-32 md:mt-0 md:mb-0 order-1 md:order-2">
                    <div
                        className="relative w-64 h-64 perspective-1000"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-200 transform-gpu preserve-3d rounded-full border-4 border-teal-400 overflow-hidden"
                            style={{
                                transform: `
                                        rotateY(${mousePosition.x * 60}deg)
                                        rotateX(${-mousePosition.y * 60}deg)
                                    `
                            }}
                        >
                            <img
                                src="https://res.cloudinary.com/dl16vvgyy/image/upload/v1734715411/Piyush_pq33tm.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameAndPhoto