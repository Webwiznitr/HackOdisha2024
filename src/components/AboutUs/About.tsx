"use client";
import React from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const AboutUs = () => {
    const isMobile = () => {
        if (typeof window !== "undefined") {
            // Adjust this based on your actual breakpoint for mobile devices
            return window.innerWidth <= 768;
        }
        return false;
    };

    const getParallaxSpeed = () => {
        return isMobile() ? 5 : 10; // Adjust speeds for mobile and desktop
    };
    return (
        <div
            id="aboutus"
            className="bg-[#634752] w-full min-h-screen  z-40 flex flex-col items-center justify-center p-8 md:p-30 lg:p-40 pt-1 lg:pt-10 relative"
        >
            <Parallax
                className="absolute bottom-20 md:left-12 left-5 z-0 rotate-star-1"
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
                className="absolute top-2 md:right-12 right-5 z-0 rotate-star-2"
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

            <div className="">
                <div className="flex flex-col items-start w-screen md:px-20 ">
                    <div className="ml-10 md:ml-32">
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
                                className="font-archivoBlack text-white font-[800] text-xl md:text-3xl lg:text-5xl mt-8 md:mt-12"
                                style={{
                                    transform: "rotate(-2.899deg)",
                                }}
                            >
                                What is
                            </h1>
                            <div className="relative">
                                <div
                                    className="bg-[#E56E00] text-white font-archivoBlack font-[800] text-xl md:text-3xl lg:text-5xl px-2 py-1 mt-2"
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
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
