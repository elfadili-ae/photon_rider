import Image from 'next/image'
import React from 'react'

const BuyNow = () => {
  return (
    <section className="realtive pt-10  w-full max-container bg-gradient-to-b from-slate-900 to-slate-700">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
            <div className='relative h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 rounded-lg overflow-hidden'>
            <Image fill className="object-cover hover:rotate-3 hover:scale-105 transition-all duration-500" src="/car3.jpg" alt="" />
            </div>
        </div>

        <div className="text-white flex flex-col items-center mt-6 justify-center xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-white xl:text-3xl dark:text-white">
            Pre-Order Your Photon Rider Today
            </h2>

            <div className="mt-6 sm:-mx-2">
            <button className="cta-button overflow-hidden relative z-[2] self-center group px-12 h-12 font-semibold rounded-full">
  Buy Now
</button>
  <div className="overlay fixed top-0 left-0 z-[1] w-full h-screen bg-black/40 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default BuyNow