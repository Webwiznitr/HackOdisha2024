import React from "react";
import Image from "next/image";
import up from "./images/Brutalist 113.png";
import updown from "./images/Brutalist 114.png";
import Title from "../Timeline/components/Title";

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

                <div className="relative">
                    <div>
                        <Image
                            className="absolute md:-top-[5%] -top-[40%] w-auto md:left-[3.5rem] left-[1rem]"
                            src={up}
                            alt="up"
                        />
                    </div>
                    <div>
                        <Image
                            className="absolute md:top-[85%] top-[120%] w-auto md:right-[2.8rem] right-[1rem]"
                            src={updown}
                            alt="updown"
                        />
                    </div>
                    <div className="flex flex-col xl:w-[45%] sm:w-[65%] w-[88%] m-auto flex-wrap justify-center items-center px-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 mb-24">
                            {statsData.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="bg-[#E56E00] stats-box text-white md:w-[14rem] md:h-[12rem] sm:w-[10rem] sm:h-[8rem] w-[8rem] h-[6rem] flex flex-col justify-center items-center"
                                >
                                    <h1 className="font-bold text-4xl">
                                        {stat.value}
                                    </h1>
                                    <p>{stat.label}</p>
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
