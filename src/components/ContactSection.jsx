import React from 'react';
import { 
  Mail, 
  Phone, 
  GithubIcon, 
  Linkedin, 
  Instagram, 
  Globe2Icon 
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    email: "piyushkrishna11@gmail.com",
    phone: "+91 7558565929",
    github: "https://github.com/Piyush11204",
    linkedin: "https://www.linkedin.com/in/piyush-yadav-23b8ba2a3/",
    instagram: "https://www.instagram.com/piyush.afk/",
    hackathonProfile: "https://www.holopin.io/@piyush11204#badges"
  };

  const socialLinks = [
    { Icon: GithubIcon, href: contactInfo.github, label: "GitHub" },
    { Icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: contactInfo.instagram, label: "Instagram" },
    { Icon: Globe2Icon, href: contactInfo.hackathonProfile, label: "Hackathon Profile" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 mb-12 bg-black/75 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Contact Details */}
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl opacity-75 group-hover:opacity-100 animate-tilt transition duration-300 blur" />
            
            <div className="relative bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-xl transform transition-all duration-300 hover:scale-105">
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 mb-4 sm:mb-6 border-b border-teal-500/30 pb-3">
                Contact Information
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-3 sm:space-x-4 group/item">
                  <div className="p-2 rounded-lg bg-teal-500/10 group-hover/item:bg-teal-500/20 transition-colors">
                    <Mail className="text-teal-400 group-hover/item:text-teal-300 transition-colors" size={24} />
                  </div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 group-hover/item:text-teal-200 transition-colors text-base sm:text-lg break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-3 sm:space-x-4 group/item">
                  <div className="p-2 rounded-lg bg-teal-500/10 group-hover/item:bg-teal-500/20 transition-colors">
                    <Phone className="text-teal-400 group-hover/item:text-teal-300 transition-colors" size={24} />
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 group-hover/item:text-teal-200 transition-colors text-base sm:text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl opacity-75 group-hover:opacity-100 animate-tilt transition duration-300 blur" />
            
            <div className="relative h-52 bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-xl transform transition-all duration-300 hover:scale-105">
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-4 sm:mb-6 border-b border-purple-500/30 pb-3">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative group/icon
                      p-3 sm:p-4
                      rounded-xl
                      bg-gray-800/50
                      hover:bg-gray-700/50
                      transition-all
                      duration-300
                      transform
                      hover:scale-110
                      hover:rotate-6
                    "
                    aria-label={label}
                  >
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover/icon:from-cyan-500/20 group-hover/icon:to-purple-500/20 rounded-xl transition-all duration-300" />
                    
                    <Icon 
                      size={24} 
                      className="
                        relative
                        text-gray-400
                        group-hover/icon:text-white
                        transition-all
                        duration-300
                      "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;