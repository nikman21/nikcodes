'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/nikcodesLogo.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-10  " style={{background: 'linear-gradient(to right, #0061ff, #60efff)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} alt="Nikolas Manuel" width={80} height={80} />
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/projects" className="text-white hover:text-sky-600">Projects</Link>
              <Link href="/blog" className="text-white hover:text-sky-600">Blog</Link>
              <Link href="/contact" className="text-white hover:text-sky-600">Contact</Link>
            </div>
          </div>

          {/* Hamburger Menu */} 
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className={`h-6 w-6 fill-white transition ${isOpen ? 'rotate-90' : ''}`} viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Nav Links - Collapsible */}
          <div className={`md:block absolute top-full left-0 w-full bg-white shadow-lg py-2 transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 -top-16'}`}>
            <div className="container mx-auto px-4"> 
              <Link href="/about" className="block py-2 hover:text-sky-600">About Me</Link>
              <Link href="/projects" className="block py-2 hover:text-sky-600">Projects</Link>
              <Link href="/blog" className="block py-2 hover:text-sky-600">Blog</Link>
              <Link href="/contact" className="block py-2 hover:text-sky-600">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;