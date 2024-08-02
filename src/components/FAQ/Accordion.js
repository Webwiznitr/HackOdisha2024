"use client";
import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";

export default function Accordion(props) {
    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        if (props.isOpen) {
            setBgColor("bg-black");
        } else {
            setBgColor("");
        }
    }, [props.isOpen]);

    return (
        <div className={` w-full   mt-4 mb-4 font-archivo `}>
            <div className=" flex w-full ">
                <div className="nig border border-black bg-white relative w-full  ">
                    <div
                        className="title w-full bg-white flex justify-between items-center cursor-pointer p-4"
                        onClick={props.toggleAccordion}
                    >
                        <div className="flex items-center w-auto">
                            <p className="text-base custom-540:text-lg md:text-xl font-[600]">
                                {props.question}
                            </p>
                        </div>
                        <span className="cursor-pointer flex justify-center items-center text-4xl font-bold">
                            {props.isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    width="20"
                                >
                                    <g>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                            stroke="grey"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="6"
                                            y1="18"
                                            x2="18"
                                            y2="6"
                                            stroke="grey"
                                            strokeWidth="2"
                                        />
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    width="20"
                                >
                                    <g>
                                        <line
                                            x1="12"
                                            y1="5"
                                            x2="12"
                                            y2="19"
                                            stroke="grey"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="5"
                                            y1="12"
                                            x2="19"
                                            y2="12"
                                            stroke="grey"
                                            strokeWidth="2"
                                        />
                                    </g>
                                </svg>
                            )}
                        </span>
                    </div>
                    <Collapse isOpened={props.isOpen}>
                        <div className="accordion-content overflow-hidden transition-max-height duration-300 ease-in-out text-sm sm:text-xl font-[500] leading-relaxed pr-4 pl-8 py-8">
                            {props.answer}
                        </div>
                    </Collapse>
                </div>
                <div className="right w-[9px] h-30 pt-4">
                    <div
                        className={`sub-top border border-black relative w-full h-full ${bgColor}`}
                    ></div>
                </div>
            </div>

            <div className="bottom pl-3 relative h-2 w-full ">
                <div
                    className={`sub-bottom border border-black relative ${bgColor} h-full`}
                ></div>
            </div>
        </div>
    );
}
