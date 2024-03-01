import React from 'react';
import Image from 'next/image';
import Me from '../../public/assets/me.jpeg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 text-center" style={{background: 'linear-gradient(to right, #0061ff, #60efff)'}}>
      <div className="container mx-auto flex flex-col items-center"> 
        {/* Image container adjusted to match example, if needed */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mx-auto shadow-xl relative mb-4">
        <Image src={Me} alt="Nikolas Manuel" layout='fill' objectFit="cover" className="transition-transform duration-700 ease-out hover:scale-110" />
        </div>
        
        {/* Adjusted title and subtitle to match example */}
        <h1 className="text-6xl font-bold text-white mb-4">Hi, I'm Nikolas Manuel</h1>
        <p className="text-xl text-white mb-6">I'm a software engineer specializing in web development.</p>    

        {/* Adjusted button to match example */}
        <div className="flex space-x-4 mb-8">
        <button className="text-white py-2 px-6 border-2 border-white rounded-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-blue-500">Contact Me</button>
        <button className="text-white py-2 px-6 border-2 border-white rounded-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-blue-500">Resume</button>
        </div>
      </div>

      {/* Water Wave Effect (at the bottom) enhanced with a more dynamic look */}
      <div className="absolute bottom-0 left-0 right-0">
      </div>
    </section>
  );
};

export default Hero;

