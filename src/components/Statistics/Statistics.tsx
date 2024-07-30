import React from "react";
import "./Stats.css";
import Image from "next/image";
import up from "./images/Brutalist 113.png";
import updown from "./images/Brutalist 114.png";
import Title from "../Timeline/components/Title";
const Statistics = () => {
    return (
        <main className="bg-[#FFF6E0] z-40 relative">
            <div className="stats-bg"></div>
            <div>
                <div className="flex items-center justify-center w-full">
                    <Title title="STATISTICS" />
                </div>

                <div className=" relative">
                    <div>
                        <Image
                            className=" absolute md:-top-[5%] -top-[40%] w-auto  md:left-[3.5rem] left-[1rem]"
                            src={up}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className=" absolute md:top-[85%] top-[120%] w-auto md:right-[2.8rem] right-[1rem]"
                            src={updown}
                            alt=""
                        />
                    </div>
                    <div className=" flex-col xl:w-[45%] sm:w-[65%] w-[88%] m-auto flex-wrap justify-center items-center px-3">
                        <div className="flex flex-row justify-between mt-20">
                            <div className=" bg-[#E56E00] stats-box text-white md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center">
                                <h1 className=" font-bold text-4xl">50+</h1>
                                <p>Registrations</p>
                            </div>
                            <div className="bg-[#E56E00] stats-box text-white   md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem]  flex flex-col justify-center items-center">
                                <h1 className=" font-bold text-4xl">50+</h1>
                                <p className=" ">Registrations</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-20 mb-24">
                            <div className="bg-[#E56E00] stats-box text-white   md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center">
                                <h1 className=" font-bold text-4xl">50+</h1>
                                <p>Registrations</p>
                            </div>
                            <div className="bg-[#E56E00] stats-box text-white  md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center">
                                <h1 className=" font-bold text-4xl">50+</h1>
                                <p>Registrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Statistics;
