'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/nikcodesLogo.png';
import exp from 'constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10" style={{background: 'linear-gradient(to right, #0061ff, #60efff)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} alt="Nikolas Manuel" width={80} height={80} />
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/projects" className="text-white hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link href="/blog" className="text-white hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link href="/contact" className="text-white hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className={`h-6 w-6 ${isOpen ? 'text-sky-600' : 'text-white'} transition-transform`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Nav Links - Collapsible */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-2`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600">About Me</Link>
              <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600">Projects</Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600">Blog</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;