import React from 'react';
import { 
  Code, 
  Database, 
  Layers,  
  Wrench 
} from 'lucide-react';

const TechStackSection = () => {
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
    Languages: <Code className="text-blue-400 mr-3" size={32} />,
    Frameworks: <Layers className="text-green-400 mr-3" size={32} />,
    Databases: <Database className="text-purple-400 mr-3" size={32} />,
    'Tools & Services': <Wrench className="text-teal-400 mr-3" size={32} />
  };

  return (
    <section className="bg-gray-900 mb-12 rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-teal-300 mb-6 text-center">
        Tech Stack Expertise
      </h2>

      {Object.entries(techStack).map(([category, techs]) => (
        <div key={category} className="mb-8">
          <div className="flex items-center mb-4">
            {sectionIcons[category]}
            <h3 className="text-2xl font-semibold text-teal-200">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech, index) => (
              <div 
                key={index} 
                className={`${tech.color} text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2 hover:scale-105 transition-transform`}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStackSection;