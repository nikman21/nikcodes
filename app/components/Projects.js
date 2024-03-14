import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and live project links

function Projects() {
  return (
    <section id="projects" style={{ backgroundImage: 'linear-gradient(to right, #0061ff, #60efff)' }} className="text-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-semibold mb-10 text-center text-white">Highlighted Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="project bg-white bg-opacity-95 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">NeuraNote - Personal Productivity App</h3>
            <p className="mb-4 text-gray-700">
              A Next.js application designed to enhance personal productivity through efficient data management and security. Implements JWT for secure authentication.
            </p>
            <div className="flex items-center justify-between text-sm">
              <a href="https://github.com/nikman21/neuranote-frontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="https://neuranote-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project bg-white bg-opacity-95 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Empath - Therapy Journaling App</h3>
            <p className="mb-4 text-gray-700">
              Collaborative project building a full-stack therapy journaling app with React Native and Express.js, featuring therapist insights through a React dashboard.
            </p>
            {/* <div className="flex items-center justify-between text-sm">
              <a href="https://github.com/nikman21/empath" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="https://empath.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div> */}
          </div>

          {/* Additional Projects */}
          <div className="project bg-white bg-opacity-95 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">BookBuddy</h3>
            <p className="mb-4 text-gray-700">
              An AI smart reading tracker that helps you keep track of your reading progress and are able to have discussion with an ai chatbot after each reading session. 
            </p>
            {/* <div className="flex items-center justify-between text-sm">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaGithub /> GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div> */}
          </div>

          {/* Project 4 */}
          <div className="project bg-white bg-opacity-95 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Play4life</h3>
            <p className="mb-4 text-gray-700">
              A full-stack website for a bounce house company with a custom booking system and user authentication, built with Nextjs and Express.js.
            </p>
            <div className="flex items-center justify-between text-sm">
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaGithub /> GitHub
              </a> */}
              <a href="https://www.play4life.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
