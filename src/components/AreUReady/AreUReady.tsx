import React from 'react'

const AreUReady = () => {
  return (
    <section className='bg-[#634752]'>
      <div className='flex flex-col items-center justify-center py-[4rem]'>
      <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-archivo'>ARE YOU READY?</h2>
      <p 
      className='font-dela-gothic text-white text-center lg:leading-[4rem] px-[1rem] text-xl pt-[3rem] sm:text-2xl md:text-3xl lg:text-4xl max-w-[45rem]' 
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
      </div>
    </section>
  )
}

export default AreUReady;
