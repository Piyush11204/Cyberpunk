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
    { 
      Icon: GithubIcon, 
      href: contactInfo.github, 
      label: "GitHub" 
    },
    { 
      Icon: Linkedin, 
      href: contactInfo.linkedin, 
      label: "LinkedIn" 
    },
    { 
      Icon: Instagram, 
      href: contactInfo.instagram, 
      label: "Instagram" 
    },
    { 
      Icon: Globe2Icon, 
      href: contactInfo.hackathonProfile, 
      label: "Hackathon Profile" 
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 mb-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Contact Details */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-300 mb-4 sm:mb-6 border-b border-teal-400 pb-3">
              Contact Information
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <Mail className="text-teal-400 group-hover:text-teal-300 transition-colors" size={24} />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-200 group-hover:text-teal-200 transition-colors text-base sm:text-lg break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <Phone className="text-teal-400 group-hover:text-teal-300 transition-colors" size={24} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-200 group-hover:text-teal-200 transition-colors text-base sm:text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-300 mb-4 sm:mb-6 border-b border-teal-400 pb-3">
              Connect With Me
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300 
                    hover:text-teal-400 
                    hover:bg-gray-700 
                    p-2 sm:p-3 
                    rounded-full 
                    transition-all 
                    duration-300 
                    transform 
                    hover:scale-110
                    group
                    flex 
                    items-center 
                    justify-center
                  "
                  aria-label={label}
                >
                  <Icon 
                    size={24} 
                    className="group-hover:rotate-6 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;