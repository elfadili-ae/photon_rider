'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollToPlugin);

const Features = () => {

  useGSAP(() => {
    const featElements = document.getElementsByClassName('feat');
    const feats = gsap.utils.toArray(featElements);

    feats.forEach((feat:any, index) => {
      let dir = -1
      if (index % 2 === 0) {dir = 1} 
      gsap.to(feat, {
        opacity: 1,
        y: -100,
        x: 22 * dir,
        scrollTrigger: {
          trigger: feat,
          start: 'top 80%',
          end: 'bottom 70%',
          scrub: true,
        }
      });
    });

    gsap.from('.hudBox', {
      x: -100,
      scrollTrigger: {
        scrub: true,
        start: 'top',
      }
    });
    
    const titleElements = document.getElementsByClassName('movingTitle');
    const titles = gsap.utils.toArray(titleElements);

    titles.forEach((ele, index) => {
      // gsap.set((ele), { autoAlpha: 0 }); 

      titles.forEach((ele: any, index) => {
        gsap.to(ele, {
          y: 400,
          scrollTrigger: {
          trigger: ele,
          start: 'top 80%',
          scrub: true
        }
      })
    });
  })
  });
 
  useEffect(() => {
    let i = 0
    const phrases = ["You're Limitless", "a Legend", "Light Speed"];
    const colors = ["#14b8a6", "#9966ff", "#ff0066"];
  
    const toChange = document.getElementsByClassName("tochange");
  
    const changeText = () => {
      if (i >= phrases.length) {i = 0}
      toChange[0].textContent = phrases[i];
      toChange[0].style.color = colors[i];
      i += 1
    }
  
    setInterval(changeText, 2000);
  });

  return (
    <section className='relative min-h-[200vh] w-full max-container overflow-x-hidden bg-gradient-to-r from-black via-black/80 to-black/10'>
        <div className='pt-40 p-4 flex flex-col justify-between items-center w-full h-full z-[2]'>
        
        <div className='feat opacity-20 relative bg-black text-white w-full p-5 md:max-w-[50%] border-2 border-teal-500 rounded-lg'>
          <div className='relative py-5 w-full flex justify-end items-center'>
          <h1 className='text-center text-xl md:text-4xl uppercase font-bold'>Advanced Electric Propulsion Systems</h1>
          <h1 className='text-center text-6xl uppercase font-bold text-teal-500/40'>01</h1>
          </div>
        <div className='w-full my-5 border-t-2 border-teal-500'></div> 
          <p>Harness the power of cutting-edge electric technology for unmatched performance and efficiency.</p>
        <div className='hudBox absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] z-[-1]'>
          <Image src='/scifi_circle.png' alt='circle image' className='hud' width={164} height={164} />
        </div>
        </div>
        
        <div className='feat opacity-20 relative bg-black text-white w-full p-5 md:max-w-[50%] border-2 border-teal-500 rounded-lg'>
          <div className='relative py-5 w-full flex justify-end items-center'>
          <h1 className='text-center text-xl md:text-4xl uppercase font-bold'>AI-Powered Autonomous Driving</h1>
          <h1 className='text-center text-6xl uppercase font-bold text-teal-500/40'>02</h1>
          </div>
        <div className='w-full my-5 border-t-2 border-teal-500'></div> 
          <p>Enjoy a seamless, autonomous driving experience with our state-of-the-art AI technology.</p>
        </div>
         
        <div className='feat opacity-20 relative bg-black text-white w-full p-5 md:max-w-[50%] border-2 border-teal-500 rounded-lg'>
          <div className='relative py-5 w-full flex justify-end items-center'>
          <h1 className='text-center text-xl md:text-4xl uppercase font-bold'>Sustainable Materials</h1>
          <h1 className='text-center text-6xl uppercase font-bold text-teal-500/40'>03</h1>
          </div>
        <div className='w-full my-5 border-t-2 border-teal-500'></div> 
          <p>Harness the power of cutting-edge electric technology for unmatched performance and efficiency.</p>
        </div>
        
        <div className='feat opacity-20 relative bg-black text-white w-full p-5 md:max-w-[50%] border-2 border-teal-500 rounded-lg'>
          <div className='relative py-5 w-full flex justify-end items-center'>
          <h1 className='text-center text-xl md:text-4xl uppercase font-bold'>Next-Gen Connectivity</h1>
          <h1 className='text-center text-6xl uppercase font-bold text-teal-500/40'>04</h1>
          </div>
        <div className='w-full my-5 border-t-2 border-teal-500'></div> 
          <p>Stay connected on the go with our integrated smart technology and infotainment systems.</p>
        </div>
        </div>
        
        <div className='relative w-full h-[51vh] sm:h-[100vh] overflow-y-hidden'>
          <Image fill src='/car1.jpg' alt='photon car photo' className='object-contain sm:object-cover' />
          <div className='movingTitle absolute top-0 left-0 py-4 bg-black/50 backdrop-blur-sm w-full text-center'>
            <h1 className='text-2xl md:text-5xl font-bold text-white'>Drive like <span className='text-teal-500 tochange'>You&apos;re Limitless</span></h1>
          </div>
        </div>
    </section>
  )
}

export default Features