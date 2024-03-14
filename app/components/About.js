'use client';
import React from 'react';
import { FaLinkedinIn, FaGithub, FaReact, FaNodeJs, FaAws, FaPython, FaJsSquare, FaJava } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* About Me Section */}
          <div className="about-me">
            <h2 className="text-4xl font-semibold mb-4">About Me</h2>
            <p className="mb-4">
  Hello, my name is Nik Manuel. I got my degree in Informatics and am deeply passionate about all things tech and programming. I thrive on learning new things and keeping up with the latest trends in the tech world. Collaborating on projects and brainstorming ideas with others is what I enjoy the most!
</p>
<p className="mb-4">
  Embracing the challenges of the digital world, I continuously refine my skills, ensuring my creations stand at the forefront of industry advancements. When I'm not buried in code, you'll find me by the river, taking a moment to clear my mind and recharge.
</p>
<p className="mb-4">
  Fitness is a big part of my life, too. I used to wrestle in high school and have recently gotten into jiu-jitsu. It's been an exciting journey. I'm keen to connect with like-minded folks who are eager to make a difference. Let's team up on some projects and shape the future together!
</p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/nikolas-manuel-dev/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/nikman21" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h2 className="text-4xl font-semibold mb-4">Skills at a Glance</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="skill"><FaPython className="skill-icon" /><span>Python</span></div>
              <div className="skill"><FaJsSquare className="skill-icon" /><span>JavaScript</span></div>
              <div className="skill"><FaJava className="skill-icon" /><span>Java</span></div>
              <div className="skill"><FaNodeJs className="skill-icon" /><span>Node.js</span></div>
              <div className="skill"><FaReact className="skill-icon" /><span>React</span></div>
              <div className="skill"><FaAws className="skill-icon" /><span>AWS</span></div>
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill {
          display: flex;
          align-items: center;
          gap: 12px;
          transition: background-color 0.3s ease;
          padding: 10px;
          border-radius: 8px;
        }

        .skill-icon {
          color: #0071e3;
        }

        .skill:hover {
          background-color: #f0f0f5;
        }

        .social-link {
          transition: transform 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-2px);
        }

        h2 {
          margin-bottom: 20px;
        }

        p {
          line-height: 1.6;
          color: #666;
        }
      `}</style>
    </section>
  );
}

export default About;
