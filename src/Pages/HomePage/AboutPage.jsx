import React, { useEffect} from 'react';
import { University } from "lucide-react";
import TechStackSection from "../../components/Techstack";
import ContactSection from "../../components/ContactSection";
import Certificates from "./Certificates";
import NameAndPhoto from './NameAndPhoto';

const AboutPage = () => {


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
                <NameAndPhoto />


                {/* Other Sections */}
                <section className="fade-in">
                 
                </section>

                <section className="fade-in mt-24">
                    <div className="flex items-center mb-6">
                        <University className="text-teal-400 mr-4 animate-bounce-gentle" size={32} />
                        <h2 className="text-2xl font-bold text-teal-300">Education</h2>
                    </div>
                    <div className="text-gray-300 z-5">
                        <h3 className="text-xl font-semibold z-5 text-teal-400">VCET (Vidyalankar College of Engineering and Technology)</h3>
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
