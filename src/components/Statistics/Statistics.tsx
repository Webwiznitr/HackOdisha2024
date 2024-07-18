import React from 'react'
import "./Stats.css"
import Image from 'next/image'
import right from "./images/right.png"
import left from "./images/left.png"
import up from "./images/Brutalist 113.png"
import updown from "./images/Brutalist 114.png"
const Statistics = () => {
  return (
    <main className='Statistics bg-[#FFF6E0]'>
      <div>
        <div className=' flex justify-center items-center '>
          <div className=' mr-2'><Image src={right} alt="right arrow" /></div>
          <div className=' text-[2rem] lg:text-4xl' style={{
            fontWeight: 'bold',
            color: '#BF2E2E',
            textShadow: `
        -0.5px -0.5px 0 #000,
        0.5px -0.5px 0 #000,
        -0.5px 0.5px 0 #000,
        0.5px 0.5px 0 #000,
        1px 2px 0 #FFF6E0,
        2px 3px 0 #131313`
          }}>STATISTICS</div>
          <div className=' ml-2'><Image src={left} alt="left arrow" /></div>
        </div>
        <div className=' relative'>
          <div><Image className=' absolute md:-top-[5%] -top-[20%] w-auto  md:left-[3.5rem] left-[1rem]' src={up} alt="" /></div>
          <div><Image className=' absolute md:top-[85%] top-[105%] w-auto md:right-[2.8rem] right-[1rem]' src={updown} alt="" /></div>
        <div className=' flex-col xl:w-[45%] sm:w-[65%] w-[88%] m-auto flex-wrap justify-center items-center '>
          <div className='flex flex-row justify-between mt-20'>
          <div className=' bg-[#E56E00] box text-white md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center'>
            <h1 className=' font-bold text-4xl'>50+</h1>
            <p>Registrations</p>
          </div>
          <div className='bg-[#E56E00] box text-white   md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem]  flex flex-col justify-center items-center'>
            <h1 className=' font-bold text-4xl'>50+</h1>
            <p className=' '>Registrations</p>
          </div>
          </div>
          <div className='flex flex-row justify-between mt-20 mb-24'>
          <div className='bg-[#E56E00] box text-white   md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center'>
            <h1 className=' font-bold text-4xl'>50+</h1>
            <p>Registrations</p>
          </div>
          <div className='bg-[#E56E00] box text-white  md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center'>
            <h1 className=' font-bold text-4xl'>50+</h1>
            <p>Registrations</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Statistics;
