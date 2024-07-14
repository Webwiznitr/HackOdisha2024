import React from 'react'
import Image from 'next/image'
import Ani1 from "./Animation1.svg"
import Ani2 from "./Animation2.svg"

const AreUReady = () => {
  return (
    <section className='bg-[#634752] relative'>
      <div className='flex flex-col items-center justify-center py-[4rem] md:py-[6rem] lg:py-[8rem]'>
      <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-archivoBlack'>ARE YOU READY?</h2>
      <Image
      src={Ani2}
      alt='Animation-2'
      width={90}
      className='absolute top-6 right-4 hidden sm:block md:w-[7rem] lg:mr-20'
      />
      <p 
      className='font-dela-gothic text-white text-center sm:leading-[3.5rem] lg:leading-[4rem] px-[1rem] 
      text-2xl pt-[3rem] sm:text-3xl lg:text-4xl max-w-[28rem] sm:max-w-[40rem] lg:max-w-[45rem]' 
      style={{
        textShadow: "4px 4px 0 #000",
        WebkitTextStroke: "1px #000"
      }}
      >
        TO
        {" "} 
        <span className='text-yellow-400'>
          CHANGE THE WORLD
        </span> 
        {" "}
        WITH YOUR INNOVATIVE SOLUTIONS?
      </p>
      <Image
      src={Ani1}
      alt='Animation-1'
      width={110}
      className='absolute left-5 bottom-6 hidden sm:block md:w-[8.5rem] lg:pb-10 lg:ml-20'
      />
      </div>
    </section>
  )
}

export default AreUReady;
