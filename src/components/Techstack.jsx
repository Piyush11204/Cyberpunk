import React, { useState } from 'react';
import {
  Code,
  Database,
  Layers,
  Wrench
} from 'lucide-react';

const TechStackSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const techStack = {
    Languages: [
      { name: 'TypeScript', icon: '💻', color: 'bg-blue-600' },
      { name: 'Python', icon: '🐍', color: 'bg-green-600' },
      { name: 'JavaScript', icon: '📜', color: 'bg-yellow-500' },
      { name: 'Java', icon: '☕', color: 'bg-red-600' },
      { name: 'HTML5', icon: '🌐', color: 'bg-orange-600' },
      { name: 'CSS3', icon: '🎨', color: 'bg-blue-500' },
      { name: 'Dart', icon: '🎯', color: 'bg-teal-600' }
    ],
    Frameworks: [
      { name: 'React', icon: '⚛️', color: 'bg-cyan-600' },
      { name: 'Next.js', icon: '🔺', color: 'bg-gray-800' },
      { name: 'Node.js', icon: '🟢', color: 'bg-green-700' },
      { name: 'Express.js', icon: '📦', color: 'bg-gray-600' },
      { name: 'Flask', icon: '🧪', color: 'bg-gray-700' },
      { name: 'Vue.js', icon: '🟢', color: 'bg-emerald-600' },
      { name: 'Django', icon: '🌱', color: 'bg-green-900' }
    ],
    Databases: [
      { name: 'MongoDB', icon: '💾', color: 'bg-green-600' },
      { name: 'MySQL', icon: '🔍', color: 'bg-blue-800' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-600' },
      { name: 'SQLite', icon: '📊', color: 'bg-indigo-600' }
    ],
    'Tools & Services': [
      { name: 'Firebase', icon: '🔥', color: 'bg-orange-500' },
      { name: 'GitHub', icon: '🐱', color: 'bg-gray-900' },
      { name: 'NPM', icon: '📦', color: 'bg-red-600' },
      { name: 'Canva', icon: '🎨', color: 'bg-blue-400' },
      { name: 'Adobe Photoshop', icon: '✏️', color: 'bg-blue-600' },
      { name: 'Adobe Illustrator', icon: '🖌️', color: 'bg-orange-600' },
      { name: 'Git', icon: '🔀', color: 'bg-orange-700' }
    ]
  };

  const sectionIcons = {
    Languages: <Code className="text-blue-400" size={32} />,
    Frameworks: <Layers className="text-green-400" size={32} />,
    Databases: <Database className="text-purple-400" size={32} />,
    'Tools & Services': <Wrench className="text-teal-400" size={32} />
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <h2 className="text-4xl font-bold text-teal-300 text-center mb-16 hover:text-teal-200 transition-colors duration-300">
        Tech Stack Expertise
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8">
        {Object.entries(techStack).map(([category, techs], index) => (
          <div
            key={category}
            className="relative group"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="flex items-center justify-between mb-6 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {sectionIcons[category]}
                </div>
                <h3 className="text-2xl font-semibold text-teal-200 group-hover:text-teal-100">
                  {category}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {techs.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className={`
                    ${tech.color} p-4 rounded-lg
                    transform transition-all duration-500
                    hover:scale-105 hover:shadow-xl
                    ${hoveredCategory === category ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'}
                    ${hoveredCategory && hoveredCategory !== category ? 'opacity-50 scale-95' : ''}
                  `}
                  style={{
                    transitionDelay: `${techIndex * 50}ms`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;