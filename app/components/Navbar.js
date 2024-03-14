'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/nikcodesLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10" style={{background: 'linear-gradient(to right, #0061ff, #60efff)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center">
            <Link href="/">
              {/* <Image src={Logo} alt="Nikolas Manuel" width={80} height={80} /> */}
              <h1 className="text-2xl font-bold text-white">Nikcodes.</h1>
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link  href="/#about">
                  <p className="text-white hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">About</p>
                </Link>
                <Link href="/#projects">
                  <p className="text-white hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">Projects</p>
                </Link>
                <Link href="/#contact">
                  <p className="text-white hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">Contact</p>
                </Link>
                <div className="rounded-md px-5 py-2 font-bold flex gap-1 hover:bg-sky-600 cursor-pointer">
                 
                  <Link className="text-white" href="/blog">Blog</Link>
                </div>
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
            <Link href="/#about">
                  <p className="text-gray-700 hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">About</p>
                </Link>
                <Link href="/#projects">
                  <p className="text-gray-700 hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">Projects</p>
                </Link>
                <Link href="/#contact">
                  <p className="text-gray-700 hover:bg-sky-600 px-3 py-2 rounded-md text-md font-bold cursor-pointer">Contact</p>
                </Link>
                <Link href="/blog" className="rounded-md px-5 py-2 font-bold flex gap-1 bg-main-orange hover:bg-sky-600 cursor-pointer">
                  <p className='text-gray-700'>Blog</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;