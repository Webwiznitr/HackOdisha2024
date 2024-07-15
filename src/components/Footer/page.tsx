import Image from 'next/image';
import React from 'react'
import { ho4logo, mountains, pinetrees, rightarrowicon,socialmediaicons} from './constants';

const Footer = () => {
  return (
    <>
      <section className='bg-[#F9F0DB] h-[375px] sm:h-[550px] 2xl:h-[620px] border-t-2 border-black border-solid pt-[24px] sm:pt-10 md:pt-8 lg:pt-14'>
      <div className="sponsorandsitemap w-[100%] flex justify-between">
      <div className="becomeasponsor ml-[20px] md:ml-[50px] sm:ml-[35px] 2xl:ml-[115px] flex flex-col justify-start
       sm:gap-7 md:gap-6 gap-[20px] 2xl:gap-10 max-w-[455px]">
        <Image
          src={ho4logo}
          alt="logo"
          width={80}
          height={80}
          className=' sm:w-[171px]'
        />
        <p className='text-[#454545] text-[15px] sm:text-[20px] md:text-[25px] 2xl:text-[32px] font-[600] font-oxanium'>
          Want to become a sponsor of<br></br> Hackodisha 4.0 ?</p>
        <button type="button" className='bg-[#E16C00] py-[8px] px-[16px] sm:py-5 md:px-8 sm:px-6 2xl:px-10 2xl:py-5
         rounded-[6px] sm:rounded-xl text-[#FFFFFF] 
        font-oxanium font-bold text-[13px] sm:text-[17px] md:text-[21px] 2xl:text-[28px] w-3/4 border-[3px]
         border-black border-solid shadow-[4px_4px_0_0_rgba(0,0,0,0.75)]'>
          Become a sponser
        </button>
      </div>
      <div className="site mr-[19px] sm:mr-[26px] md:mr-[80px] 2xl:mr-[268px]">
        <h1 className='font-archivoBlack font-normal text-[16px] sm:text-[25px] 2xl:text-[32px]'>Site map</h1>
        <ul className='mt-5'>
          {
            ['About us','Prizes','Contact us','Sponsers','FAQs'].map((item, index) => {
                return <li key={index} className='text-[12px] sm:text-[20px] 2xl:text-[25px] font-archivo font-semibold mb-2 flex items-center gap-3'>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                  <Image
                    src={rightarrowicon}
                    alt="icon"
                    width={8}
                    height={8}
                    className='sm:w-[18px]'
                  />
                </li>
                })
          }
        </ul>
      </div>
      </div>
      <div className="socialmedia flex gap-[9px] sm:gap-2 md:gap-7 mt-10 max-w-fit mx-auto mb-10 lg:hidden">
          {
            socialmediaicons.map((value,index)=>{
              return <a href={value.link} key={index} className='flex items-center'>
              <Image
              src={value.Image}
              alt="icon"
              width={20}
              height={20}
              className='sm:w-[40px] sm:h-[40px]'
              /></a>
            })
          }
      </div>
      <div className="images flex justify-between items-center lg:mt-16">
        <span className='mountains lg:mt-10'>
        <Image
          src={mountains}
          alt="picture"
          width={189}
          height={189}
          className='sm:w-[330px] 2xl:w-[450px]'
        />
        </span>
        <div className="socialmedia items-center gap-[26.567px] max-w-fit mr-10 hidden lg:flex">
          {
            socialmediaicons.map((value,index)=>{
              return <a href={value.link} key={index}>
              <Image
              src={value.Image}
              alt="icon"
              width={40}
              height={40}
              /></a>
            })
          }
        </div>
        <span className='pinetrees'>
        <Image
        src={pinetrees}
        alt="photo"
        width={125}
        height={125}
        className='sm:w-[250px] 2xl:w-[310px]'
        />
        </span>
      </div>
    </section>
    <div className="blackcontainer bg-black max-w-full py-[10px] px-[22px] sm:py-3 sm:px-24 2xl:px-24">
      <p className='font-oxanium font-semibold text-[10px] sm:text-[15px] md:text-[20px] 2xl:text-[25px]
       text-[#F3EBD6] flex justify-center items-center'>Hackodisha 4.0 2024. Powered by Webwiz, NIT Rourkela.</p>
    </div>
    </>
  )
}

export default Footer;
