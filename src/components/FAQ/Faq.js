"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import "./Faq.css";
import Image from "next/image";
import bottom from "./assets/bottom.svg";
import right2 from "./assets/right2.svg";
import top from "./assets/top.svg";
import banner from "./assets/banner.svg";
import { accordionData, cardboardTexture } from "./contants";
import Title from "../Timeline/components/Title";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            id="faqs"
            className="bg-[#FFF6E0] relative flex justify-between z-40 pb-20"
        >
            <div
                className="fqs-bg"
                style={{
                    background: `url(${cardboardTexture})`,
                }}
            ></div>
            <div className="w-1/6 md:h-[82rem] sm:h-[80rem]  flex flex-col justify-between mb-10">
                <div className="w-full flex justify-center mt-32">
                    <Image
                        src={top}
                        alt="top"
                        height={100}
                        width={100}
                        className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
                    />
                </div>
                <div className="w-full flex justify-center items-end">
                    <Image
                        src={bottom}
                        alt="bottom"
                        height={100}
                        width={100}
                        className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
                    />
                </div>
            </div>

            <div className="  w-4/6 h-full flex flex-col   ">
                <div className="accordion  w-full flex flex-col ">
                    <div className="w-full flex items-center justify-center">
                        <Title title="FAQS" />
                    </div>
                    <div className="w-full h-6"></div>
                    <div className=" prob ">
                        {accordionData.map((data, index) => (
                            <Accordion
                                key={index}
                                question={data.question}
                                isOpen={openIndex === index}
                                toggleAccordion={() => toggleAccordion(index)}
                                answer={data.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-1/6 md:h-[82rem] sm:h-[80rem] flex flex-col justify-center items-center ">
                <Image
                    src={right2}
                    alt="right"
                    height={100}
                    width={100}
                    className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
                />
            </div>
        </div>
    );
}
