import React from 'react'

const AreUReady = () => {
  return (
    <section className='bg-[#634752] relative'>
      <div className='flex flex-col items-center justify-center pt-[6rem] pb-[7rem] md:py-[6rem] lg:py-[8rem]'>
      <video
      src='https://res.cloudinary.com/dttynw5li/video/upload/v1720981434/About_us_animation-2_vml0cl.mp4' 
      width={60} 
      autoPlay 
      loop 
      muted 
      playsInline
      preload='none' 
      disablePictureInPicture
      className='absolute top-6 right-4 sm:block sm:w-[5rem] md:w-[7rem] lg:mr-20 md:pt-4'
      >
      </video>
      <h2 className='text-white text-lg sm:text-2xl lg:text-4xl font-archivoBlack'>ARE YOU READY?</h2>
      <p 
      className='font-dela-gothic text-white text-center sm:leading-[3.5rem] lg:leading-[4rem] px-[1rem] 
      text-xl pt-[3rem] sm:pt-[4rem] sm:text-3xl lg:text-4xl max-w-[30rem] sm:max-w-[40rem] lg:max-w-[45rem]' 
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
      <video
      src='https://res.cloudinary.com/dttynw5li/video/upload/v1720981434/About_us_animation-2_vml0cl.mp4' 
      width={60} 
      autoPlay 
      loop 
      muted 
      playsInline
      preload='none'
      disablePictureInPicture
      className='absolute sm:left-5 bottom-6 left-4 sm:block sm:w-[6rem] md:w-[8.5rem] lg:pb-10 lg:ml-20'
      >
      </video>
      </div>
    </section>
  )
}

export default AreUReady;
