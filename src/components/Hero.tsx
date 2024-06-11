'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  // const heroText = useRef(null);

  useGSAP(() => {
    gsap.to('.heroText', {
      y: 300,
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
    });
    gsap.to('.carOn', {
      opacity: 1,
      delay: 3,
      duration: 2,
      repeat: -1,
      ease: 'back.inOut'
    });

    gsap.to('.smallText', {
      opacity: 1,
      delay: 2
    });
    const tl = gsap.timeline();

    tl.to('.bigText', {
      opacity: 1
    });
    const bigText = new SplitType('.bigText', {types: 'chars'});
    const chars = bigText.chars;

    tl.fromTo(chars, {
      y: 100,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
    })
  })
  return (
    <section id='hero' className='relative flex flex-col justify-center items-center overflow-hidden w-full min-h-screen max-container bg-gradient-to-b from-slate-900 to-slate-700'>
        <Image src='/herobg.png' fill className='object-cover' alt='hero image'/>
        <Image src='/heroImg.png' fill className='object-contain z-[2] max-sm:translate-y-16 max-md:translate-y-5' alt='hero image'/>
        <Image src='/heroImgOn.png' fill className='opacity-0 carOn object-contain z-[3] max-sm:translate-y-16 max-md:translate-y-5' alt='hero image'/>
        <div className='heroText text-white -translate-y-12'>
          <p className='smallText opacity-0 translate-y-1 translate-x-1 max-md:text-sm'>Experience the Future of Driving Today</p>
          <h1 className='bigText opacity-0 uppercase text-5xl md:text-8xl lg:text-9xl font-bold'>Photon Rider</h1>
        </div>
    </section>
  )
}

export default Hero