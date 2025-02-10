import React, { useEffect,useState } from 'react';
import { University, Briefcase } from "lucide-react";
import TechStackSection from "../../components/Techstack";
import ContactSection from "../../components/ContactSection";
import Certificates from "./Certificates";
import NameAndPhoto from './NameAndPhoto';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [selectedCard, setSelectedCard] = useState(null);
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
    const internships = [{
        role: "MERN Stack Developer Intern",
        company: "Lsoys Apps and Games",
        description: "Developing web applications using MongoDB, Express, React, and Node.js",
        icon: "⚡",
        skills: ["MongoDB", "Express", "React", "Node.js", "REST APIs", "Git"],
        color: "from-teal-500 to-fuchsia-500"
    }];

    const committees = [{
        role: "Deputy Technical Head",
        company: "Hackathon Committee",
        description: "Leading technical aspects of hackathon organization and execution",
        icon: "🚀",
        achievements: ["Organized 3 hackathons", "Managed 200+ participants", "Technical workshop lead"],
        color: "from-teal-500 to-fuchsia-500"
    }, {
        role: "Deputy Technical Head",
        company: "Core Coding Committee",
        description: "Overseeing coding initiatives and technical projects",
        icon: "💻",
        achievements: ["Led coding workshops", "Mentored 50+ students", "Created learning resources"],
        color: "from-teal-500 to-fuchsia-500"
    }];

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
                <NameAndPhoto />

                {/* Other Sections */}
                <section className="flex justify-center items-center p-8">
    <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>

        <Link 
            to="/contact" 
            className="relative px-8 py-4 bg-black rounded-lg flex items-center space-x-2 border border-cyan-400 hover:border-teal-500 transition-colors duration-300 group"
        >
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Connect with Me
            </span>
            <svg
                className="w-5 h-5 text-cyan-400 group-hover:text-teal-500 transition-colors duration-300 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </Link>
    </div>
</section>


                <section className="fade-in mt-24">
                    <div className="flex items-center mb-8 space-x-4">
                        <div className="bg-teal-400/20 p-3 rounded-xl backdrop-blur-sm">
                            <University className="text-teal-400 animate-pulse" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                            Education
                        </h2>
                    </div>
                    <div className="text-gray-300 space-y-6 transform hover:scale-105 transition-transform duration-300">
                        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all">
                            <h3 className="text-xl font-semibold text-teal-400">VCET (Vidyavardhini's College of Engineering and Technology)</h3>
                            <p className="mt-2">Bachelor of Engineering in <span className='text-teal-400 font-semibold'>Information Technology</span></p>
                            <p className="mt-1">Honors in <span className='text-teal-400 font-semibold'>CyberSecurity</span></p>
                            <p className="mt-2 text-gray-400">Third Year | Expected Graduation: 2026</p>
                        </div>
                    </div>
                </section>
                <section className="mt-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-300 to-fuchsia-300 bg-clip-text text-transparent">
                        Professional Journey
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                        {internships.map((intern, index) => (
                            <div key={index} className="relative group perspective">
                                <div className="relative transform transition-all duration-500 group-hover:rotate-y-180">
                                    <div className="p-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-fuchsia-500/20 rounded-2xl blur-xl" />
                                        <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-teal-500/20">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-3xl font-bold text-teal-300">{intern.company}</h3>
                                                    <p className="text-xl text-teal-200 mt-2">{intern.role}</p>
                                                </div>
                                                <span className="text-4xl">{intern.icon}</span>
                                            </div>
                                            <div className="mt-6">
                                                <h4 className="text-lg font-semibold text-teal-200 mb-3">Tech Stack</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {intern.skills.map((skill, idx) => (
                                                        <span key={idx} className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-sm">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Committee Section */}
                <section className="mt-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-300 to-fuchsia-300 bg-clip-text text-transparent">
                    Committees
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {committees.map((committee, index) => (
                            <div 
                                key={index}
                                className={`group cursor-pointer ${selectedCard === index ? 'scale-105' : ''}`}
                                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                            >
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${committee.color} opacity-20 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-30`} />
                                    <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-300 group-hover:border-white/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{committee.company}</h3>
                                                <p className="text-lg text-gray-300 mt-1">{committee.role}</p>
                                            </div>
                                            <span className="text-3xl transform transition-transform group-hover:scale-125">{committee.icon}</span>
                                        </div>
                                        
                                        <div className={`overflow-hidden transition-all duration-300 ${selectedCard === index ? 'max-h-96' : 'max-h-0'}`}>
                                            <div className="mt-4 space-y-2">
                                                {committee.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <div className="w-2 h-2 rounded-full bg-white/50" />
                                                        <p className="text-gray-300">{achievement}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="fade-in mt-24">
                    <ContactSection />
                </div>
                <div className="fade-in mt-24">

                    <Certificates />
                </div>
                <div className="fade-in mt-24">
                    <TechStackSection />
                </div>

            </div>
        </div>
    );
};

export default AboutPage;