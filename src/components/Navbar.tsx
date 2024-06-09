'use client'
import { navbarLinks } from '@/data';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if(window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
        window.removeEventListener('scroll', scrollHandler);
        }
    })
  return (
    <header className="fixed max-container w-full text-white p-2">
	<div className="container flex items-center justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="relative w-20 h-10">
			<Image src='/photonLogo.png' fill className='object-contain' alt='photon rider logo' />
		</Link>
		<ul className={`items-stretch hidden space-x-3 lg:flex h-10 ${isScrolled && 'border-[1px] drop-shadow-glow border-slate-400'} rounded-full bg-slate-700/20 backdrop-blur-sm`}>
			{navbarLinks.map((element, index) => {
                return <li key={index} className="flex">
				<Link rel="noopener noreferrer" href={element.url} className="flex items-center px-4 hover:text-slate-300 transition-all duration-300">
                    {element.name}
                </Link>
			</li>
            })}
            
		</ul>
			<button className="cta-button overflow-hidden relative self-center px-8 h-10 font-semibold rounded-full">
                Buy Now
                </button>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}

export default Navbar