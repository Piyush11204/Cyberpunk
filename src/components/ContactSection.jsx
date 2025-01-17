import React from 'react';
import { 
  Mail, 
  Phone, 
  GithubIcon, 
  Linkedin, 
  Instagram,
} from 'lucide-react';

const LeetcodeIcon = () => (
  <svg height="20" width="20" viewBox="0 0 24 24" fill="#00fff2">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.312 1.494 3.81 1.494 1.497 0 2.827-.513 3.809-1.494l2.697-2.607c.515-.515.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038z" />
  </svg>
);

const ContactSection = () => {
  const contactInfo = {
    email: "piyushkrishna11@gmail.com",
    phone: "+91 7558565929",
    github: "https://github.com/Piyush11204",
    linkedin: "https://www.linkedin.com/in/piyush-yadav-23b8ba2a3/",
    instagram: "https://www.instagram.com/piyush.afk/",
    hackathonProfile: "https://leetcode.com/u/piyush___11204/"
  };

  const socialLinks = [
    { Icon: GithubIcon, href: contactInfo.github, label: "GitHub" },
    { Icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: contactInfo.instagram, label: "Instagram" },
    { Icon: LeetcodeIcon, href: contactInfo.hackathonProfile, label: "Leetcode" },
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
                  <div key={label} className="relative group/tooltip">
                    <a
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
                        block
                      "
                      aria-label={label}
                    >
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover/icon:from-cyan-500/20 group-hover/icon:to-purple-500/20 rounded-xl transition-all duration-300" />
                      
                      <Icon 
                        className="
                          relative
                          text-gray-400
                          group-hover/icon:text-white
                          transition-all
                          duration-300
                        "
                      />
                    </a>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-gray-100  rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </div>
                  </div>
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