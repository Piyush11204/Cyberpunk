
import React, { useState, useEffect} from 'react';

const NameAndPhoto = () => {
    const abilities = [
        "Full-Stack Developer  ",
        "MERN Enthusiast  ",
        "UI/UX Designer  "
    ];

    const [displayText, setDisplayText] = useState('');
    const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });




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
                      |
                    </div>
                    <div>
                        Intern at <a href="https://www.linkedin.com/company/lsoysapps/posts/?feedView=all" className="text-teal-400 hover:text-teal-300">Lsoys Apps and Games</a>
                    </div>

                    <div className="mt-12 text-gray-300 leading-relaxed">
                        I'm a passionate third-year IT student at VCET, turning caffeine into code one project at a time.
                        My journey in web development is driven by an insatiable curiosity to create innovative digital experiences.
                        I specialize in the MERN stack and Next.js, constantly pushing the boundaries of what's possible in web development.
                    </div>
                </div>

                {/* Right side - Image with 3D effect */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-32 md:mt-0 md:mb-0 order-1 md:order-2 p-8">
                    <div
                        className="relative w-72 h-72 perspective-1000"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-200 transform-gpu preserve-3d rounded-full border-4 border-teal-400 overflow-hidden"
                            style={{
                                transform: `
                                    rotateY(${mousePosition.x * 60}deg)
                                    rotateX(${-mousePosition.y * 60}deg)
                                `,
                                boxShadow: '0 0 20px rgba(0,255,255,0.5)'
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