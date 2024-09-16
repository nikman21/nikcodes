import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Me from '../../public/assets/me.jpeg';


const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 text-center bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mx-auto shadow-xl relative mb-8">
          <Image src={Me} alt="Nikolas Manuel" layout='fill' objectFit="cover" className="transition-transform duration-700 ease-out hover:scale-110" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">Innovate. Create. Inspire.</h1>
        <p className="text-xl text-white mb-8">Nikolas Manuel: Crafting the future of web experiences.</p>    

        <div className="flex space-x-4">
          <Link href="/#contact" className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-blue-100 hover:shadow-lg">
            Let's Connect
          </Link>
          <a href="/Nikolas_Manuel_SWE_Resume.pdf" download className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

