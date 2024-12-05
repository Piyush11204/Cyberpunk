import React from "react";
import {
    Code,
    University,
    Award,
    Globe,
    BookOpen,
    Target,
    Zap,
    ExternalLink,
    Globe2Icon

} from "lucide-react";
import TechStackSection from "../../components/Techstack";
import ContactSection from "../../components/ContactSection";

const certifications = [
    
    {
      title: "Foundations of User Experience (UX) Design",
      link: "https://www.coursera.org/account/accomplishments/verify/2HLGV9W732GB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      hours: "18 hours Course",
      platform: "Coursera",
      icon: <BookOpen className="text-blue-400" size={32} />,
      skills: ["Figma", "Google doc","PhotoShop", "JavaScript", "Web Development"]
    },
    {
      title: "Python for Data Science, AI & Development",
      link: "https://www.coursera.org/account/accomplishments/verify/2G3HYKKGMR8W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      hours: "25 hours Course",
      platform: "Coursera",
      icon: <Target className="text-green-400" size={32} />,
      skills: ["Programming Fundamentals","Pandas","Django","Flask", "Algorithms", "Data Structures"]
    },
    {
      title: "Full Stack Development",
      link: "https://www.udemy.com/certificate/UC-ce1ba7df-df36-49d6-a2de-af0a46028061/",
      hours: "13 hours Course",
      platform: "Udemy",
      icon: <Globe className="text-purple-400" size={32} />,
      skills: ["React","JQuery", "Node.js", "Express", "MongoDB", "Full Stack"]
    },
    {
        title:"Hacktoberfest 2024",
        link:"https://www.holopin.io/@piyush11204#badges",
        hours:"Open Source Contribution",
        platform:"Hacktoberfest",
        icon: <Globe2Icon className="text-blue-400" size={32} />,
        skills: ["Git","Github","Next.js","Node.js"]
    },
    {
      title: "Technology Workshop",
      link: "https://drive.google.com/file/d/1PcIGCtDn8xn5qmSjjSrCIZP-T4IHdt0r/view",
      hours: "Workshop Certificate",
      platform: "Industry Event",
      icon: <Award className="text-red-400" size={32} />,
      skills: ["Tech Innovation", "Industry Trends", "Networking"]
    },
    {
      title: "Google Cloud Skills",
      link: "https://www.cloudskillsboost.google/public_profiles/a645caef-9a86-45bc-94be-790bba741b1e",
      hours: "Cloud Certification",
      platform: "Google Cloud",
      icon: <Globe className="text-yellow-400" size={32} />,
      skills: ["Cloud Computing","LLM", "Google Cloud Platform", "Generative AI","Responsible AI"]
    },
    {
      title: "AI Chatbot Development",
      link: "https://www.credly.com/badges/17ff1b5f-15bc-40b7-bd4a-5caee56caacf/linked_in_profile",
      hours: "Specialization Badge",
      platform: "Credly",
      icon: <Zap className="text-pink-400" size={32} />,
      skills: ["AI", "Machine Learning", "Chatbot Development"]
    }
];

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

                <section className="bg-gray-800 rounded-lg p-8 mb-12 shadow-lg">
                    <div className="flex items-center mb-8">
                        <Award className="text-teal-400 mr-4" size={36} />
                        <h2 className="text-3xl font-bold text-teal-300">Certifications & Achievements</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl border-l-4 border-teal-500"
                            >
 <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="hover:text-teal-200 transition-colors"
                                            >
                                <div className="flex items-start">
                                   
                                    <div className="mr-6">
                                        {React.cloneElement(cert.icon, { size: 48 })}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold text-teal-300 mb-2 flex items-center">
                                            <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="hover:text-teal-200 transition-colors"
                                            >
                                                {cert.title}
                                            </a>
                                            <ExternalLink className="ml-2 text-gray-500" size={16} />
                                        </h3>
                                        <div className="mb-3">
                                            <p className="text-gray-400 text-sm">{cert.hours}</p>
                                            <p className="border-2 w-fit border-teal-600 text-teal-300 font-extrabold px-3 py-1 m-2 rounded text-xs">{cert.platform}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex} 
                                                    className="bg-teal-900 text-teal-300 px-2 py-1 rounded-full text-xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

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