"use client";

import React from 'react';
import { ProjectShowcase } from './projectModals'; 
import Play4life from '../../public/assets/p4l_sample.png'
import NueraNote from '../../public/assets/neuranote.png'
import bookbuddy from '../../public/assets/bookbuddy.png'
import leaf from '../../public/assets/leaf_sample.png'


function Projects() {
  const projects = [
    {
      title: "NeuraNote",
      description: "A comprehensive note-taking app with AI-powered features for enhanced productivity.",
      src: NueraNote,
      ctaText: "Visit Demo",
      ctaLink: "https://neuranote-frontend.vercel.app",
      content: () => (
        <>
          <p>
            NeuraNote is a full-featured note-taking application that allows users to create and manage todos, journal entries, and notes. It includes a user-friendly dashboard that organizes content efficiently. This project was developed using CRUD operations to ensure comprehensive functionality for various note-taking needs.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Tech Stack:</h4>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Demo Video:</h4>
          <div className="w-full max-w-[600px] mx-auto aspect-video">
            <video controls className="w-full h-full mt-2 rounded-lg object-contain">
              <source src='/assets/neuranote_vid.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ),
    },
    {
      title: "Leaf",
      description: "A TikTok-inspired social media platform focusing on content rather than likes.",
      src: leaf,
      content: () => (
        <>
          <p>
            Leaf is a social media platform that aims to shift the focus from likes to meaningful content. Similar to TikTok, Leaf allows users to upload and share short-form videos, but without the pressure of likes, fostering a more positive environment. It includes microservices architecture and an API gateway for efficient and scalable performance.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Tech Stack:</h4>
          <ul className="list-disc list-inside">
            <li>Expo Router</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
            <li>Docker</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Demo Video:</h4>
          <div className="w-full max-w-[600px] mx-auto aspect-video">
            <video controls className="w-full h-full mt-2 rounded-lg object-contain">
              <source src="/assets/leaf_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ),
    },
    {
      title: "BookBuddy",
      description: "An AI-powered book discovery and reading management app with community features.",
      src: bookbuddy,
      content: () => (
        <>
          <p>
            BookBuddy offers a seamless way to find books, track reading sessions, chat with AI about the books, and take notes. It integrates the Google Books API for book discovery and offers a personalized reading experience. Users can interact with a chatbot that discusses the book, facilitating engaging conversations and enhancing the reading journey.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Tech Stack:</h4>
          <ul className="list-disc list-inside">
            <li>Expo Router</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Google Books API</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Demo Video:</h4>
          <div className="w-full max-w-[600px] mx-auto aspect-video">
            <video controls className="w-full h-full mt-2 rounded-lg object-contain">
              <source src='/assets/bookbuddy_vid.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ),
    },
    {
      title: "Play4Life",
      description: "A website and booking dashboard for a local bounce house company.",
      src: Play4life,
      ctaText: "Visit Website",
      ctaLink: "https://www.play4life.com",
      content: () => (
        <>
          <p>
            Play4Life is a platform I developed for a local bounce house company to facilitate online bookings. The site includes a user-friendly interface for customers to browse and book bounce houses, along with a comprehensive dashboard for managing bookings. The platform streamlines operations and enhances customer engagement.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Tech Stack:</h4>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside">
            <li>Online booking system</li>
            <li>Comprehensive management dashboard</li>
            <li>User-friendly interface</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Demo Video:</h4>
          <div className="w-full max-w-[600px] mx-auto aspect-video">
            <video controls className="w-full h-full mt-2 rounded-lg object-contain">
              <source src='/assets/play4life_sample_vid.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ),
    }
  ];
  

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Innovative Creations</h2>
        <ProjectShowcase projects={projects} />
      </div>
    </section>
  );
}

export default Projects;
