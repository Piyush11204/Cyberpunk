import React, { useState } from 'react';
import { Download, X, Eye } from 'lucide-react';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Convert Google Drive view URL to embed URL
  const driveUrl = "https://drive.google.com/file/d/1Ziqr5GaLUE9PwIPI8f8KYVkq5evq4Uzj/view?usp=sharing";
  const fileId = driveUrl.split('/')[5];
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 bg-gray-900 z-10 text-teal-400 shadow-xl rounded-lg border-2 border-teal-500 relative overflow-hidden">
      {/* Cyberpunk background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-2xl font-bold mb-6 glitch-text">Resume</h2>
        
        <div className="space-y-4">
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setShowModal(true)}
            className="group relative px-8 py-3 bg-teal-600 text-black font-medium rounded-md 
                     hover:bg-teal-700 transform transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]
                     active:scale-95 flex items-center gap-2"
          >
            <Eye className="w-5 h-5" />
            <span className='glitch-text'>View Resume</span>
            <div className={`absolute inset-0 border-2 border-teal-400 rounded-md 
                          transition-all duration-300 ${isHovering ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`} />
          </button>
        </div>
      </div>

      {/* Modal with animation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-gray-900 text-teal-400 rounded-lg p-6 shadow-2xl w-11/12 max-w-3xl 
                        border-2 border-teal-500 animate-slideUp relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent rounded-lg" />
            
            <div className="flex justify-between items-center mb-6 relative">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
                Resume Preview
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-black rounded-md 
                           hover:bg-teal-700 transition-all duration-300 z-10 hover:shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                >
                  <Download className="w-4 h-4" />
                  <span className='glitch-text'>Download</span>
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-teal-400 hover:text-teal-200 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="relative border-2 border-teal-500 rounded-lg overflow-hidden">
              <iframe
                src={embedUrl}
                title='Resume Preview'
                className="w-full h-96 rounded-md"
                allow="autoplay"
                frameBorder="2"
                z-index="10"
              />
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Resume;