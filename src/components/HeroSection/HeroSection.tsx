import React from "react";
import Image from "next/image";
import Herohack from "./Herohack";

export default function HeroSection(){
  return (<div>
        <div className="relative h-[30rem]  md:h-[43rem] 2xl:h-[50rem] bg-white overflow-hidden  mb-[-0.8rem]">
                <Image
                    src="/images/below-2.svg"
                    alt="gradient"
                    layout="fill"
                    className="object-cover z-10  object-bottom scale-125 sm:scale-100"
                />
                <div className=" fixed top-[5rem] z-20 flex justify-center items-center w-full m-auto">
                    <Herohack />
                </div>
            
              <Image src={"/images/Top.svg"} alt="below" width={128} height={128} className="w-full z-30 absolute bottom-0" style={{pointerEvents: "none"}}/>
           
            </div>
</div>)
}