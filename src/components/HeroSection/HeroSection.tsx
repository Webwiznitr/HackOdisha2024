"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Herohack from "./Herohack";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
        setViewportHeight(window.innerHeight);
    }, []);

    const y1 = useTransform(scrollY, [0, viewportHeight], [0, -100]);
    const y2 = useTransform(scrollY, [0, viewportHeight], [0, 50]);

    return (
        <div>
            <div className="relative h-[30rem] md:h-[43rem] 2xl:h-[50rem] bg-white overflow-hidden mb-[-0.8rem]">
                <motion.div
                    style={{ y: y1, zIndex: 10 }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src="/images/below.png"
                        alt="gradient"
                        layout="fill"
                        className="object-cover z-10 object-bottom scale-125 sm:scale-100"
                    />
                </motion.div>
                <div
                    style={{
                        zIndex: 20,
                    }}
                    className="fixed top-[5rem] z-20 flex justify-center items-center w-screen"
                >
                    <Herohack />
                </div>
                <motion.div
                    style={{ y: y2, zIndex: 30 }}
                    className="absolute w-full bottom-0"
                >
                    <Image
                        src={"/images/Top.svg"}
                        alt="below"
                        width={128}
                        height={128}
                        className="w-full z-30"
                        style={{ pointerEvents: "none" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
