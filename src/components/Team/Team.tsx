"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Graphic1 from "../Team/Team/Graphic1.png";
import Graphic2 from "../Team/Team/Graphic2.png";
import star1 from "../Team/Team/star1.png";
import star2 from "../Team/Team/star2.png";
import TeamCard from "./TeamCard";
import { TeamMembers } from "./TeamData";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Team: React.FC = () => {
    const isMobile = () => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= 768;
        }
        return false;
    };

    const getParallaxSpeed = () => {
        return isMobile() ? 5 : 10;
    };
    return (
        <ParallaxProvider>
            <div className=" bg-customPink z-40 relative  mb-[-0.8rem] w-full h-full pt-10 lg:pb-0 md:pb-0 pb-10">
                <div className="flex justify-items-center items-center justify-center px-5">
                    <Image
                        className="lg:w-30 lg:h-10 lg:mr-10 md:w-28 md:h-10 md:mr-8 w-12 h-5"
                        src={Graphic1}
                        alt="GRAPHIC1"
                    />
                    <Parallax
                        className="absolute top-0 rotate-star-1 right-5 custom-500:right-10"
                        speed={getParallaxSpeed()}
                        rotate={[0, 360]}
                    >
                        <Image
                            src={star2}
                            alt="Star2"
                            width={50}
                            height={50}
                            className="scale-50 custom-500:scale-75"
                        />
                    </Parallax>

                    <div className="text-orange-500 text-shadow-2">
                        <span
                            className=" text-2xl font-dela-gothic sm:text-3xl md:text-5xl font-normal tracking-widest text-stroke-outline"
                            style={{
                                textShadow: "1px 2px 0px #fff",
                            }}
                        >
                            OUR TEAM
                        </span>
                    </div>
                    <Image
                        className="lg:w-30 lg:h-10 lg:ml-10 md:w-28 md:h-10 md:ml-8 w-12 h-5"
                        src={Graphic2}
                        alt="GRAPHIC2"
                    />
                </div>
                <div className="grid lg:gap-20 md:gap-16 gap-10 lg:grid-cols-3 grid-cols-2 lg:px-24 md:px-20 px-10 justify-items-center justify-center items-center py-28 ">
                    {TeamMembers.map((TeamMember) => (
                        <TeamCard
                            key={TeamMember.id}
                            imgSrc={TeamMember.imgSrc}
                            title={TeamMember.title}
                            position={TeamMember.position}
                        />
                    ))}
                </div>
                <Parallax
                    className="absolute bottom-10 left-10"
                    speed={getParallaxSpeed()}
                    rotate={[0, 360]}
                >
                    <Image
                        src={star2}
                        alt="Star2"
                        width={50}
                        height={50}
                        className="scale-50 custom-500:scale-75"
                    />
                </Parallax>
            </div>
        </ParallaxProvider>
    );
};

export default Team;