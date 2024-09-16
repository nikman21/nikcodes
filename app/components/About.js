'use client';
import React from 'react';
import { FaLinkedinIn, FaGithub, FaReact, FaNodeJs, FaAws, FaPython, FaJsSquare, FaJava } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Redefining the Digital Landscape</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="about-me">
            <p className="text-lg mb-6">
              As a visionary software engineer, I blend cutting-edge technology with intuitive design to create transformative digital experiences. My journey in tech is driven by a relentless pursuit of innovation and a passion for solving complex challenges.
            </p>
            <p className="text-lg mb-6">
              Beyond code, I'm an avid fitness enthusiast, bringing the discipline and strategic thinking from my wrestling background to every project I undertake. This unique perspective allows me to approach software development with both creativity and precision.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/nikolas-manuel-dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaLinkedinIn size={28} />
              </a>
              <a href="https://github.com/nikman21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaGithub size={28} />
              </a>
            </div>
          </div>

          <div className="skills">
            <h3 className="text-2xl font-semibold mb-6">Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {['Python', 'JavaScript', 'Java', 'Node.js', 'React', 'AWS'].map((skill) => (
                <div key={skill} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-blue-100">
                  <div className="text-blue-600">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill) {
  switch (skill) {
    case 'Python': return <FaPython size={24} />;
    case 'JavaScript': return <FaJsSquare size={24} />;
    case 'Java': return <FaJava size={24} />;
    case 'Node.js': return <FaNodeJs size={24} />;
    case 'React': return <FaReact size={24} />;
    case 'AWS': return <FaAws size={24} />;
    default: return null;
  }
}

export default About;
