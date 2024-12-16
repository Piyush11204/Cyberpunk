import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const updatedFormData = {
      ...formData,
      to_name: "Piyush Yadav", 
      from_name: formData.name,  
    };
  
    emailjs
      .send(
        "service_ra3d2ja",
        "template_91xfcvu",
        updatedFormData,
        "FP06bty5FIPhrRZRy"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
  
          // const autoReplyData = {
          //   from_name: "Piyush Yadav",
          //   to_name: formData.name,
          //   email: formData.email,
          // };
  
          // emailjs
          //   .send(
          //     "service_ra3d2ja",
          //     "template_oobdqlk",
          //     autoReplyData,
          //     "FP06bty5FIPhrRZRy"
          //   )
          //   .then(
          //     (autoReplyResponse) => {
          //       console.log("Auto-reply sent:", autoReplyResponse.status, autoReplyResponse.text);
          //     },
          //     (error) => {
          //       console.error("Auto-reply failed:", error);
          //     }
          //   );
  
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Message sending failed:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black  via-gray-900 to-teal-900 text-white p-8">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full  h-full object-cover opacity-40"
      >
        <source src="https://motionbgs.com/media/5329/tech-hud.960x540.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 mt-32 max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Send className="text-teal-400 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-teal-300">Contact Me</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-teal-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-teal-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-teal-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-500 transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </button>
          </form>
          
          {status && (
            <p className="mt-4 text-center text-sm text-teal-300">
              {status}
            </p>
          )}
        </div>

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

export default ContactPage;