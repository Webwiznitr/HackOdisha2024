import React from "react";
import Image from "next/image";
import up from "./images/Brutalist 113.png";
import updown from "./images/Brutalist 114.png";
import Title from "../Timeline/components/Title";
import "./stats.styles.css";
import { Parallax } from "react-scroll-parallax";

const statsData = [
    { id: 1, value: "50+", label: "Registrations" },
    { id: 2, value: "50+", label: "Registrations" },
    { id: 3, value: "50+", label: "Registrations" },
    { id: 4, value: "50+", label: "Registrations" },
];

const Statistics = () => {
    return (
        <main className="bg-[#FFF6E0] z-40 relative">
            <div className="stats-bg"></div>
            <div>
                <div className="flex items-center justify-center w-full">
                    <Title title="STATISTICS" />
                </div>

                <div>
                    <Parallax
                        className="absolute top-[5rem] md:left-[3.5rem] left-[1rem]"
                        speed={5}
                    >
                        <Image
                            className="size-14"
                            height={50}
                            width={50}
                            src={up}
                            alt="up"
                        />
                    </Parallax>

                    <div></div>
                    <Parallax
                        className="absolute md:top-[85%] top-[120%] w-auto md:right-[2.8rem] right-[1rem]"
                        speed={5}
                        rotate={[-90, 90]}
                    >
                        <Image
                            className="size-14"
                            height={50}
                            width={50}
                            src={updown}
                            alt="updown"
                        />
                    </Parallax>
                    <div className="flex flex-col xl:w-[45%] sm:w-[65%] w-[88%] m-auto flex-wrap justify-center items-center px-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-52 gap-y-20 mt-20 mb-24">
                            {statsData.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="bg-[#E56E00] stats-box text-white md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center italic"
                                >
                                    <h1 className="font-bold text-4xl stroke-stats font-archivoBlack">
                                        {stat.value}
                                    </h1>
                                    <p className="font-archivoBlack">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Statistics;
