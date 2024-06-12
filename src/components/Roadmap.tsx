'use client'

import { roadmapMilestones } from '@/data';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import { start } from 'repl';

gsap.registerPlugin(ScrollTrigger);
const Roadmap = () => {
  useGSAP(() => {
    const milestoneElements = document.getElementsByClassName('milestone');
    const milestones = gsap.utils.toArray(milestoneElements);

    milestones.forEach((ele) => {
      gsap.from(ele, {
        x: 500,
        scrollTrigger: {
          trigger: ele,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true
        }
      })
    })
  })
  return (
    <section className="w-full max-container overflow-x-hidden">
  <div className="p-4 mt-4">
    <h3 className="text-xl text-indigo-400 text-center font-semibold mb-1">Roadmap</h3>
    <h2 className='text-4xl text-white text-center font-bold mb-12'>The car that evolves and<br/> grows with you.</h2>
    <div className="container">
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50">


      {roadmapMilestones.map((milestone, index) => {
        if (milestone.state === "done") {
          return <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-teal-500 pointer-events-none"></div>
            </div>
            <div className="flex justify-center items-center w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-teal-500 shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 50 50">
<path className='fill-white' d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
</svg>
            </div>
          </div>
          <div className="milestone bg-teal-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1">{milestone.title}:<br/><span className='text-slate-800 text-sm font-normal'>{milestone.description}</span></h3>
            <p className="leading-tight text-justify w-full">
            {milestone.date}
            </p>
          </div>
        </div>
        }
        else {
          return  <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
              <i className="fas fa-exclamation-circle text-gray-400"></i>
            </div>
          </div>
          <div className="milestone bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-gray-400">{milestone.title}:<br/><span className='text-sm font-normal'>{milestone.description}</span></h3>
            <p className="leading-tight text-justify">
            {milestone.date}
            </p>
          </div>
        </div>
        }
      })}
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Roadmap