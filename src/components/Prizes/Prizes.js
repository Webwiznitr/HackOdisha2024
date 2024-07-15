import React from 'react'
import { Frame1, Frame2, LowerLeftLogo, UpperRightLogo, star1, star2 } from "./Data";
import { cardboardTexture } from "../Sponsors/data";

const Prizes = () => {
  return (
    <div>
      <div className="body bg-[#604151] flex justify-center overflow-hidden">


        <div className="logo absolute"> 
        <img src={Frame1} alt="re - render" className=' pt-10 pl-6 pr-6 pb-10 sm:h-32 lg:mt-3 lg:h-[150px]' />
        </div>

        <div className="texture mix-blend-color-burn absolute flex bg-cover ">
        <img src={cardboardTexture} alt="re - render" className='w-screen bg-cover h-[1370px]'/>
        </div>


        <div className="parentBox flex justify-center flex-row-reverse">
          <div className="UpperRightLogo absolute ml-72 mt-24 sm:-mr-72  lg:mr-[-42rem] lg:mt-36 xl:mr-[-55rem] xl:mt-36"><img src={UpperRightLogo} alt="re-render" className='pl-4 lg:h-12'/></div>



        <div className="box pt-20 justify-center">

          <div className="card1 h-36 w-60 bg-[#FFF6E0] mt-14 rounded-[6.54px] hover:scale-105 transition ml-20 sm:ml-56 lg:h-48 lg:w-80 lg:ml-80 lg:mt-28">


            <div className="Frame2"><img src={Frame2} alt="no-render" className='absolute z-40 h-24 w-24 mt-[-30px] ml-[-34px] lg:h-32 lg:w-32 lg:ml-[-46px] lg:mt-[-40px]'/>
            <div className="content absolute z-50 font-dela-gothic font-normal text-white text-[11px] ml-[-21px] lg:text-[14px] lg:ml-[-25px]">Cash Prize <br /> 
            <div className="content2 absolute z-50 font-dela-gothic font-normal text-[#FFC900] text-[16px] ml-[-21px] pl-[38px] text-stroke-outline lg:text-[22px] lg:mr-[-34px]">25k</div></div>
            </div>


            <div className="CardHead w-60  h-6 bg-[#F98C3A] rounded-t-[6.54px] relative z-20 lg:h-8 lg:w-80"></div>
            <div className="cardBody mt-2 h-28 w-60 bg-[#FFF6E0] rounded-[6.54px] relative z-20 flex items-center flex-col lg:h-36 lg:w-80 lg:mt-4">


              <div className="star1 self-start"><img src={star1} alt="no-render" className='absolute mt-7 ml-3 h-5 lg:h-7'/></div>
              <div className="MainContent font-dela-gothic text-[#FFCA04] text-stroke-outline text-4xl lg:text-[52px]">Gold <br /></div>
              <div className="MainContent2 font-dela-gothic text-[#F98C3A] text-sm pt-2 lg:text-lg lg:ml-5 lg:mt-2">Goodies and T-Shirts <br /></div>
              <div className="MainContent3 font-dela-gothic text-[#F98C3A] text-sm pt-1 flex lg:text-lg lg:ml-4">Voucher worth 
              <div className="cash font-dela-gothic text-[#FFD600] text-sm lg:text-lg">50k</div>
              </div>
              <div className="star2 self-end mr-7"><img src={star2} alt="no-render" className='absolute h-5 lg:h-6' /></div>



              </div>
            <div className="outline1 border-white border-[1.96px] mt-[-136px] ml-2 w-60 h-36 rounded-[6.54px] relative z-10 lg:h-[190px] lg:w-80 lg:mt-[-182px]"></div>
          </div>

<div className="box2 ml-20 sm:flex mt-4 lg:mt-12">
          <div className="card2 h-36 w-60 bg-[#FFF6E0] mt-10 rounded-[6.54px] hover:scale-105 transition sm: mr-16 lg:h-48 lg:w-80 lg:mr-24">

            <div className="Frame2"><img src={Frame2} alt="no-render" className='absolute z-40 h-24 w-24 mt-[-30px] ml-[-34px] lg:h-32 lg:w-32 lg:ml-[-46px] lg:mt-[-40px]'/>
            <div className="content absolute z-50 font-dela-gothic font-normal text-white text-[11px] ml-[-21px] lg:text-[14px] lg:ml-[-25px]">Cash Prize <br /> 
            <div className="content2 absolute z-50 font-dela-gothic font-normal text-[#FFC900] text-[16px] ml-[-21px] pl-[38px] text-stroke-outline lg:text-[22px] lg:mr-[-34px]">25k</div></div>
            </div>

            <div className="CardHead w-60  h-6 bg-[#F98C3A] rounded-t-[6.54px] relative z-20 lg:h-8 lg:w-80"></div>
            <div className="cardBody mt-2 h-28 w-60 bg-[#FFF6E0] rounded-[6.54px] relative z-20 flex items-center flex-col lg:h-36 lg:w-80 lg:mt-4">


            <div className="star1 self-start"><img src={star1} alt="no-render" className='absolute mt-7 ml-3 h-5 lg:h-7'/></div>
            <div className="MainContent font-dela-gothic text-[#FFCA04] text-stroke-outline text-3xl lg:text-[50px]">Silver<br /></div>
              <div className="MainContent2 font-dela-gothic text-[#F98C3A] text-sm pt-2 lg:text-lg lg:ml-5 lg:mt-2">Goodies and T-Shirts <br /></div>
              <div className="MainContent3 font-dela-gothic text-[#F98C3A] text-sm pt-1 flex lg:text-lg lg:ml-4">Voucher worth 
              <div className="cash font-dela-gothic text-[#FFD600] text-sm lg:text-lg">50k</div>
              </div>
              <div className="star2 self-end mr-7"><img src={star2} alt="no-render" className='absolute h-5 lg:h-6' /></div>



            </div>
            <div className="outline1 border-white border-[1.96px] mt-[-136px] ml-2 w-60 h-36 rounded-[6.54px] relative z-10 lg:h-[190px] lg:w-80 lg:mt-[-182px]"></div>
          </div>

          
          <div className="card3 h-36 w-60 bg-[#FFF6E0] mt-10 mb-20 rounded-[6.54px] hover:scale-105 transition sm: mr-16 lg:h-48 lg:w-80 lg:ml-24 lg:mb-28">
            <div className="Frame2"><img src={Frame2} alt="no-render" className='absolute z-40 h-24 w-24 mt-[-30px] ml-[-34px] lg:h-32 lg:w-32 lg:ml-[-46px] lg:mt-[-40px]'/>
            <div className="content absolute z-50 font-dela-gothic font-normal text-white text-[11px] ml-[-21px] lg:text-[14px] lg:ml-[-25px]">Cash Prize <br /> 
            <div className="content2 absolute z-50 font-dela-gothic font-normal text-[#FFC900] text-[16px] ml-[-21px] pl-[38px] text-stroke-outline lg:text-[22px] lg:mr-[-34px]">25k</div></div>
            </div>

            <div className="CardHead w-60  h-6 bg-[#F98C3A] rounded-t-[6.54px] relative z-20 lg:h-8 lg:w-80"></div>
            <div className="cardBody mt-2 h-28 w-60 bg-[#FFF6E0] rounded-[6.54px] relative z-20 flex items-center flex-col lg:h-36 lg:w-80 lg:mt-4">


            <div className="star1 self-start"><img src={star1} alt="no-render" className='absolute mt-7 ml-3 h-5 lg:h-7'/></div>
            <div className="MainContent font-dela-gothic text-[#FFCA04] text-stroke-outline text-3xl lg:text-[49px] lg:ml-4">Bronze <br /></div>
              <div className="MainContent2 font-dela-gothic text-[#F98C3A] text-sm pt-2 lg:text-lg lg:ml-5 lg:mt-2">Goodies and T-Shirts <br /></div>
              <div className="MainContent3 font-dela-gothic text-[#F98C3A] text-sm pt-1 flex lg:text-lg lg:ml-4">Voucher worth 
              <div className="cash font-dela-gothic text-[#FFD600] text-sm lg:text-lg">50k</div>
              </div>
              <div className="star2 self-end mr-7"><img src={star2} alt="no-render" className='absolute h-5 lg:h-6' /></div>


            </div>
            <div className="outline1 border-white border-[1.96px] mt-[-136px] ml-2 w-60 h-36 rounded-[6.54px] relative z-10 lg:h-[190px] lg:w-80 lg:mt-[-182px]"></div>
          </div>

</div>

        </div>




        <div className="LowerLeftLogo absolute mt-[658px] mr-72 sm:mt-[32rem] sm:mr-[36rem] lg:mt-[44rem] lg:mr-[62rem] xl:mt-[43rem] xl:mr-[78rem]"><img src={LowerLeftLogo} alt="re-render" className=' lg:h-12'/></div>
        </div>

      </div>
    </div>
  )
}

export default Prizes;
