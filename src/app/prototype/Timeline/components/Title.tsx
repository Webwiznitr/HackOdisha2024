import React from "react"
import leftArrow from "../assets/left-arrow.svg"
import rightArrow from "../assets/right-arrow.svg"
import Image from "next/image"

const Title = ({title}:{title:string}) => {
  return (
    <main id="title" className="relative flex h-8 items-center m-8 pointer-events-none">
      <Image src={leftArrow} alt="" className="sm:h-6 h-4" />

      <div id="title-text" className="relative">
        <div
          id="title-text"
          className="font-black text-stroke sm:text-4xl text-3xl text-[#D03441] font-archivoBlack absolute z-5 tracking-wider"
        >
          {title}
        </div>
        <div className="text-stroke text-transparent font-archivoBlack ml-[0.2rem] mt-[0.15rem] sm:text-4xl text-3xl tracking-wider">
          {title}
        </div>
      </div>

      <Image src={rightArrow} alt="" className="sm:h-6 h-4" />
    </main>
  )
}

export default Title
