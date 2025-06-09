"use client";
import React from "react";
import Image from "next/image";
import Herohack from "./Herohack";

export default function HeroSection() {
    return (
        <div>
            <div className="relative h-[30rem] smd:h-[43rem] 2xl:h-[50rem] bg-white overflow-hidden mb-[-0.8rem]">
                <div className="absolute w-full h-full">
                    <Image
                        src="/images/below.png"
                        alt="gradient"
                        layout="fill"
                        className="object-cover z-10 object-bottom scale-125 sm:scale-100"
                    />
                </div>
                <div
                    style={{
                        zIndex: 99999999,
                    }}
                    className="relative top-[8rem] z-20 flex justify-center items-center w-screen"
                >
                    <Herohack />
                </div>
                <div className="bg-[#DFAA7A] absolute w-full bottom-0 h-52"></div>
                <div className="absolute w-full bottom-0 z-30">
                    <Image
                        src={"/images/Top.svg"}
                        alt="below"
                        width={128}
                        height={128}
                        className="w-full z-30"
                        style={{ pointerEvents: "none" }}
                    />
                </div>
            </div>
        </div>
    );
}
