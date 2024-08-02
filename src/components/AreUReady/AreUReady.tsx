"use client";
import Image from "next/image";
import React from "react";
import { arrow } from "./data";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AreUReady = () => {
    const { ref: arrowRef1, inView: inView1 } = useInView({
        triggerOnce: true,
    });
    const { ref: arrowRef2, inView: inView2 } = useInView({
        triggerOnce: true,
    });

    return (
        <section className="bg-[#634752] relative z-40 pt-4 mb-[-0.8rem]">
            <div className="flex flex-col items-center justify-center pt-[6rem] pb-[7rem] md:py-[6rem] lg:py-[8rem]">
                <Parallax
                    className="lg:pb-10 lg:ml-20 absolute top-6 right-4 sm:block lg:mr-20 md:pt-4"
                    speed={10}
                >
                    <motion.div
                        ref={arrowRef1}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView1 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Image
                            src={arrow}
                            width={60}
                            height={60}
                            alt="video"
                            className="w-[2rem] md:w-[5rem]"
                        />
                    </motion.div>
                </Parallax>

                <h2 className="text-white text-lg sm:text-2xl lg:text-4xl font-archivoBlack">
                    ARE YOU READY?
                </h2>
                <p
                    className="font-dela-gothic text-white text-center sm:leading-[3.5rem] lg:leading-[4rem] px-[1rem] 
      text-xl pt-[3rem] sm:pt-[4rem] sm:text-3xl lg:text-4xl max-w-[30rem] sm:max-w-[40rem] lg:max-w-[45rem]"
                    style={{
                        textShadow: "4px 4px 0 #000",
                        WebkitTextStroke: "1px #000",
                    }}
                >
                    TO <span className="text-yellow-400">CHANGE THE WORLD</span>{" "}
                    WITH YOUR INNOVATIVE SOLUTIONS?
                </p>
                <Parallax
                    className="absolute bottom-6 left-4 sm:block lg:pb-10 lg:ml-20"
                    speed={8}
                >
                    <motion.div
                        ref={arrowRef2}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView2 ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Image
                            src={arrow}
                            width={60}
                            height={60}
                            alt="video"
                            className="w-[2rem] md:w-[5rem]"
                        />
                    </motion.div>
                </Parallax>
            </div>
        </section>
    );
};

export default AreUReady;
