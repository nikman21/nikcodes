'use client';

import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing social icons

function Footer() {
  return (
    <footer style={{ backgroundImage: 'linear-gradient(to right, #0061ff, #60efff)' }} className=" text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <a href="https://www.linkedin.com/in/nikolas-manuel-dev/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/nikman21" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-sm">
          Nikolas Manuel © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        a {
          transition: transform 0.3s ease;
        }

        a:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
