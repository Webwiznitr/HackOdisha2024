"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


const AboutUs = () => {

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      // Adjust this based on your actual breakpoint for mobile devices
      return window.innerWidth <= 768;
    }
    return false;
    };
  
    const getParallaxSpeed = () => {
      return isMobile() ? 5 : 10; // Adjust speeds for mobile and desktop
    };
  return (
    <ParallaxProvider>
      <div className='bg-[#634752] w-full min-h-[750px] flex flex-col items-center justify-center p-8 md:p-30 lg:p-40 pt-1 lg:pt-10 relative'>
        
        <Parallax className='absolute bottom-20 md:left-12 left-5 z-0 rotate-star-1' speed={getParallaxSpeed()} rotate={[0, 360]}>
          <Image
            src='/images/aboutus-bottom-star.png'
            alt='Star-1'
            height={45}
            width={50}
          />
        </Parallax>

        <Parallax className='absolute top-2 md:right-12 right-5 z-0 rotate-star-2' speed={-7} rotate={[0, 360]}>
          <Image
            src='/images/aboutus-top-star.png'
            alt='Star-2'
            height={45}
            width={50}
          />
        </Parallax>

        <div className='relative text-justify w-full'>
          <div className='pb-4 relative -rotate-6 w-full z-10'>
          <div className='absolute top-3 md:-top-3 md:left-56 left-20'>
          <Image
               src='/images/aboutus-crack-wall.png'
               alt='Crack-wall'
               className='w-[130px] md:w-[330px] h-auto'
               width={200}
               height={200}
             />
           </div>

            <div className="pl-5">
            <h4 className='text-[#FEDAC4] md:text-xl text-sm font-semibold md:px-10 md:pl-20 px-5 pb-10 relative'>
              SO YOU MIGHT BE THINKING..
            </h4>
            <h1 className='text-[#FFFFFF] md:text-5xl text-[18px] font-bold md:px-10 px-1 pb-10 relative'>
              What is <span className='bg-black pb-2.5 pr-1.5 shadow-lg relative'>
                <span className='bg-[#E16C00] p-1 z-10'> HACKODISHA?</span>
              </span>
            </h1>
            </div>
          </div>

          <div className='px-5 md:px-16 text-justify pt-10 md:text-[20px]'>
            <p className='text-[#E7E7E7] pb-4'>
              HackOdisha- a thrilling <span className='text-[#E16C00]'>36-hour online hackathon</span> organized by <span className='text-[#E16C00]'>Webwiz, Nit Rourkela</span>— an event dedicated to fostering community collaboration. With an impressive turnout of over 1600 participants across India, this hackathon promises to be a platform where innovation knows no bounds.
            </p>
            <p className='text-[#E7E7E7]'>
              We celebrate the power of technology and the indomitable spirit of our participants. Together, we&apos;re shaping a brighter future through <span className='text-[#E16C00]'>innovation and collaboration.</span>
            </p>
          </div>
        </div>
      </div>
      
    </ParallaxProvider>
  );
}

export default AboutUs;
