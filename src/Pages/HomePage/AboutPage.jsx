import React, { useEffect, useState } from 'react';
import { University } from "lucide-react";
import TechStackSection from "../../components/Techstack";
import ContactSection from "../../components/ContactSection";
import Certificates from "./Certificates";
import Resume from "../../components/Resume";

const AboutPage = () => {
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

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white p-2">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
            >
                <source src="https://motionbgs.com/media/5329/tech-hud.960x540.mp4" type="video/mp4" />
            </video>
            
            <div className="relative z-10 max-w-6xl mx-auto">
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

                {/* Other Sections */}
                <section className="fade-in  mt-24">
                    <Resume />
                </section>

                <section className="fade-in mt-24">
                    <div className="flex items-center mb-6">
                        <University className="text-teal-400 mr-4 animate-bounce-gentle" size={32} />
                        <h2 className="text-2xl font-bold text-teal-300">Education</h2>
                    </div>
                    <div className="text-gray-300">
                        <h3 className="text-xl font-semibold text-teal-400">VCET (Vidyalankar College of Engineering and Technology)</h3>
                        <p>Bachelor of Engineering in Information Technology</p>
                        <p>Third Year | Expected Graduation: 2026</p>
                    </div>
                </section>

                <div className="fade-in mt-24">
                    <ContactSection />
                </div>
                <div className="fade-in mt-24">
                    <TechStackSection />
                </div>
                <div className="fade-in mt-24">
                    <Certificates />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

// for the moblie view make the image as full with as screen and cover 65% from top and and a horizontal live bend at 35 degrree below it my name and other info should be visible