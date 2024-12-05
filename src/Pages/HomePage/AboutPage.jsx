import React from "react";
import {
    Code,
    University,

} from "lucide-react";
import TechStackSection from "../../components/Techstack";
import ContactSection from "../../components/ContactSection";
import Certificates from "./Certificates";


const AboutPage = () => {
 
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white p-8">
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
            >
                <source src="https://motionbgs.com/media/5329/tech-hud.960x540.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-teal-300">Piyush Krishnadutt Yadav</h1>
                    <p className="text-lg text-gray-400 mt-2">
                        Full-Stack Developer | MERN Enthusiast | UI/UX Designer
                    </p>
                </header>

                {/* About Me Section */}
                <section className="bg-gray-800 rounded-lg p-8 mb-12 shadow-lg">
                    <div className="flex items-center mb-6">
                        <Code className="text-teal-400 mr-4" size={32} />
                        <h2 className="text-2xl font-bold text-teal-300">About Me</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a passionate third-year IT student at VCET, turning caffeine into code one project at a time.
                        My journey in web development is driven by an insatiable curiosity to create innovative digital experiences.
                        I specialize in the MERN stack and Next.js, constantly pushing the boundaries of what's possible in web development.
                    </p>
                </section>
                <section className="bg-gray-800 rounded-lg p-8 mb-12 shadow-lg">
                    <div className="flex items-center mb-6">
                        <University className="text-teal-400 mr-4" size={32} />
                        <h2 className="text-2xl font-bold text-teal-300">Education</h2>
                    </div>
                    <div className="text-gray-300">
                        <h3 className="text-xl font-semibold text-teal-400">VCET (Vidyalankar College of Engineering and Technology)</h3>
                        <p>Bachelor of Engineering in Information Technology</p>
                        <p>Third Year | Expected Graduation: 2026</p>
                    </div>
                </section>

                <ContactSection />
                <TechStackSection />
                <Certificates />

              

                {/* Footer */}
                <footer className="text-center text-gray-500 text-sm mt-16">
                    <p>
                        Piyush K. Yadav &copy; {new Date().getFullYear()} | Crafted with Passion
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default AboutPage;