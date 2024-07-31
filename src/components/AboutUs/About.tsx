"use client";
import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const AboutUs = () => {
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
        <div
            id="aboutus"
            className="bg-[#634752] w-full min-h-screen  z-40 flex flex-col items-center justify-center px-5 custom-330:p-8 md:p-30 lg:p-40 pt-1 lg:pt-10 relative"
        >
            <Parallax
                className="absolute bottom-20 md:left-12 left-0 custom-535:left-5 z-0 rotate-star-1"
                speed={getParallaxSpeed()}
                rotate={[0, 360]}
            >
                <Image
                    src="/images/aboutus-bottom-star.png"
                    alt="Star-1"
                    height={45}
                    width={50}
                    className="size-[2rem] md:size-[4rem]"
                />
            </Parallax>

            <Parallax
                className="absolute top-2 md:right-12 right-0 custom-535right-5 z-0 rotate-star-2"
                speed={-7}
                rotate={[0, 360]}
            >
                <Image
                    src="/images/aboutus-top-star.png"
                    alt="Star-2"
                    height={45}
                    width={50}
                    className="size-[2rem] md:size-[4rem]"
                />
            </Parallax>

            <div className="custom-430:px-5 custom-540:px-10 custom-1090:px-20 flex items-center justify-center w-full">
                <div className="flex flex-col items-start justify-center w-screen ">
                    <div>
                        <h1
                            className="font-bebas text-[#FEDAC4] text-xl md:text-2xl lg:text-3xl"
                            style={{
                                transform: "rotate(-3.748deg)",
                            }}
                        >
                            SO YOU MIGHT BE THINKING...
                        </h1>

                        <div className="flex items-center mt-2 md:mt-8 gap-5">
                            <h1
                                className="font-archivoBlack text-white font-[800] text-lg custom-345:text-xl custom-390:text-2xl custom-540:text-3xl lg:text-5xl mt-8 md:mt-12 break-inside-avoid"
                                style={{
                                    transform: "rotate(-2.899deg)",
                                }}
                            >
                                What is
                            </h1>
                            <div className="relative">
                                <div
                                    className="bg-[#E56E00] text-white font-archivoBlack font-[800] text-lg custom-345:text-xl custom-390:text-2xl custom-540:text-3xl lg:text-5xl px-2 py-1 mt-2"
                                    style={{
                                        boxShadow:
                                            "10.513px 12.265px 0px 0px #1E1E1E",
                                        transform: "rotate(-3.405deg)",
                                    }}
                                >
                                    <h1>HACKODISHA</h1>
                                </div>
                                <div className="absolute inset-0 -z-10">
                                    <Image
                                        src="/images/aboutus-crack-wall.png"
                                        alt="logo"
                                        layout="fill"
                                        objectFit="cover"
                                        style={{
                                            mixBlendMode: "multiply",
                                            transform: "rotate(0deg)",
                                            scale: "1.5",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm custom-390:text-base md:text-lg custom-1090:text-xl text-[#E7E7E7] font-archivo leading-[-0.6px] max-w-5xl mt-14 custom-430:mt-20 flex flex-col w-full items-center">
                        <p
                            style={{
                                lineHeight: "180%",
                            }}
                        >
                            HackOdisha a thrilling&nbsp;
                            <span className="text-[#E16C00] ">
                                &nbsp;36-hour online hackathon&nbsp;
                            </span>
                            organized by
                            <span className="text-[#E16c00]">
                                &nbsp;Webwiz, Nit Rourkela&nbsp;
                            </span>
                            an event dedicated to fostering community
                            collaboration. With an impressive turnout of over
                            1600 participants across India, this hackathon
                            promises to be a platform where innovation knows no
                            bounds
                        </p>
                        <p
                            className="mt-5 custom-430:mt-10"
                            style={{
                                lineHeight: "180%",
                            }}
                        >
                            We celebrate the power of technology and the
                            indomitable spirit of our participants. Together,
                            we're shaping a brighter future through innovation
                            and collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
