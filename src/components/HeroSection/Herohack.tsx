import React from 'react'

const Herohack = () => {
  return (<div>
      <div className='text-[#D03441] h-full w-full max-[400px]:text-lg text-xl sm:text-3xl md:text-5xl lg:text-7xl md:tracking-[27.735px] tracking-[10.735px]  font-bold font-cabin' style={{textShadow: "5px 2px 0px #000"}}>
          HACKODISHA
      </div>
      {/* <div className='text-[#D03441] h-full w-full text-xl sm:text-3xl md:text-5xl lg:text-7xl tracking-[27.735px] font-bold font-cabin' style={{textShadow: "5px 2px 0px #000"}}>
          HACKODISHA
      </div> */}
      <div className='text-[#D03441] h-full w-full max-[400px]:text-sm text-lg sm:text-2xl md:text-2xl lg:text-3xl text-center sm:py-[5px] md:pt-8 font-bold'>
        6th to 7th September
      </div>
      <div className='flex justify-center items-center pt-2 md:pt-8'>
        <button
          type="button"
          className="rounded-[13px] max-[400px]:text-sm sm:text-xl md:text-2xl font-medium border-solid border-opacity-70 md:px-[20px] md:py-[10px] py-[5px] px-[10px] max-[400px]:py-[2.5px] max-[400px]:px-[5px] text-center me-2 mb-2 bg-orange-500 text-white font-oxanium"
          style={{ 
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.75)',
            border: '3px solid rgba(0, 0, 0, 0.70)' 
          }}
        >
          Apply on Devfolio
        </button>
      </div>
    </div> )
}

export default Herohack