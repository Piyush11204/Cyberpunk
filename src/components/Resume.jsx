import React, { useState } from 'react';
import { Download, X, Eye } from 'lucide-react';

const ResumeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [setIsHovering] = useState(false);

  // Convert Google Drive view URL to embed URL
  const driveUrl = "https://drive.google.com/file/d/1Ziqr5GaLUE9PwIPI8f8KYVkq5evq4Uzj/view?usp=sharing";
  const fileId = driveUrl.split('/')[5];
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Resume"
        className="fixed bottom-6 right-6 h-10 border-2 border-teal-300 p-3 bg-teal-500 text-white font-[ethnocentric] rounded-full flex items-center justify-center 
                   shadow-lg hover:bg-teal-600 transform hover:scale-110 transition-transform duration-300
                   hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] z-50"
      >
        Resume
      </button>

      <div className={`fixed bottom-24 right-6 w-80 bg-gray-900 rounded-lg shadow-2xl border-2 
                      border-teal-500 transform transition-all duration-300 z-40
                      ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-gray-900/20 rounded-lg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)] rounded-lg" />
        
        <div className="p-4 relative z-10">
          <h2 className="text-xl font-bold text-teal-400 mb-4">My Resume</h2>
          
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setShowModal(true)}
            className="w-full group relative px-4 py-2 bg-teal-600 text-black font-medium rounded-md 
                     hover:bg-teal-700 transform transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]
                     active:scale-95 flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            <span>View Resume</span>
          </button>
        </div>
      </div>

      {/* Modal */}
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
                  <span>Download</span>
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
                title="Resume Preview"
                className="w-full h-96 rounded-md"
                allow="autoplay"
                frameBorder="2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeChatbot;