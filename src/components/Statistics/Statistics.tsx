import React from 'react'
import "./Stats.css"
import Image from 'next/image'
import right from "./images/right.png"
import left from "./images/left.png"
import up from "./images/Brutalist 113.png"
import updown from "./images/Brutalist 114.png"
const Statistics = () => {
  return (
    <div className='Statistics'>
      <div className='flex top 2xl:ml-[42vw] xl:ml-[36vw] lg:ml-[34vw] md:ml-[30vw] sm:ml-[24vw]'>
        <div className='img mt-12'>
          <Image src={right} width={78} height={28} alt="" />
        </div>
        <div className='heading mt-8 ml-4 mr-4'>
          <h1>STATISTICS</h1>
        </div>
        <div className='img mt-12'>
          <Image src={left} width={78} height={28} alt="" />
        </div>
      </div>
      <div className='container grid grid-flow-col grid-rows-2 2xl:ml-[28vw] 2xl:mr-[24vw] xl:ml-[15vw] xl:mr-[10vw] xl:mt-10 lg:ml-[8%] lg:mr-24 md:ml-[12%] md:mr-24 md:mt-16 sm:ml-16 sm:mt-16 sm:mr-12'>
        <div className='box'>
          <h1 className='big-text'>50+</h1>
          <p className='small-text'>Registrations</p>
        </div>
        <div className='box'>
          <h1 className='big-text'>50+</h1>
          <p className='small-text'>Registrations</p>
        </div>
        <div className='box'>
          <h1 className='big-text'>50+</h1>
          <p className='small-text'>Registrations</p>
        </div>
        <div className='box'>
          <h1 className='big-text'>50+</h1>
          <p className='small-text'>Registrations</p>
        </div>
      </div>
      <div className='up'><Image src={up} alt="" /></div>
      <div className='updown'><Image src={updown} alt="" /></div>
    </div>
  )
}

export default Statistics;
