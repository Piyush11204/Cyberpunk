import React, { useState } from 'react'
import { BookOpen, Target, Globe, Globe2 as Globe2Icon, Award, Zap, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const Certificates = () => {
    const [openCertIndex, setOpenCertIndex] = useState(null);

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

    const toggleCertificate = (index) => {
        setOpenCertIndex(openCertIndex === index ? null : index);
    };

  return (
    <>
        <section className="bg-gray-800 rounded-lg p-4 sm:p-8 mb-12 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center mb-8">
                <Award className="text-teal-400 mb-4 sm:mb-0 sm:mr-4" size={36} />
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-300 text-center sm:text-left">
                    Certifications & Achievements
                </h2>
            </div>
            <div className="space-y-4 block sm:hidden"> {/* Mobile View */}
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-900 rounded-lg overflow-hidden"
                    >
                        <div 
                            onClick={() => toggleCertificate(index)}
                            className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800 transition-all"
                        >
                            <div className="flex items-center">
                                {React.cloneElement(cert.icon, { size: 32 })}
                                <span className="ml-4 text-teal-300 font-semibold">{cert.title}</span>
                            </div>
                            {openCertIndex === index ? (
                                <ChevronUp className="text-teal-300" size={24} />
                            ) : (
                                <ChevronDown className="text-teal-300" size={24} />
                            )}
                        </div>
                        {openCertIndex === index && (
                            <div className="p-4 bg-gray-800 border-t border-gray-700">
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="block mb-3"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-gray-400 text-sm">{cert.hours}</p>
                                        <p className="border-2 border-teal-600 text-teal-300 font-extrabold px-3 py-1 rounded text-xs">
                                            {cert.platform}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex} 
                                                className="bg-teal-900 text-teal-300 px-2 py-1 rounded-full text-xs"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-end">
                                        <ExternalLink className="text-teal-300" size={16} />
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className=" grid-cols-1 md:grid-cols-2 gap-6 hidden sm:grid"> {/* Desktop View */}
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl border-l-4 border-teal-500"
                    >
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-teal-200 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row items-start">
                                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 self-center sm:self-start">
                                    {React.cloneElement(cert.icon, { size: 48 })}
                                </div>
                                <div className="flex-grow w-full">
                                    <h3 className="text-lg sm:text-xl font-semibold text-teal-300 mb-2 flex items-center justify-between">
                                        <span className="mr-2">{cert.title}</span>
                                        <ExternalLink className="text-gray-500" size={16} />
                                    </h3>
                                    <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                        <p className="text-gray-400 text-sm mb-2 sm:mb-0">{cert.hours}</p>
                                        <p className="border-2 border-teal-600 text-teal-300 font-extrabold px-3 py-1 rounded text-xs">
                                            {cert.platform}
                                        </p>
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
    </>
  )
}

export default Certificates;