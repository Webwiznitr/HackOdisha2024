import React from "react";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import Image from "next/image";

const Title = ({ title }: { title: string }) => {
    return (
        <main
            id="title"
            className="flex items-center pointer-events-none my-20"
        >
            <Image src={leftArrow} alt="" className="sm:h-6 h-4" />

            <div
                id="title-text"
                className="text-2xl custom-355:text-3xl custom-500:text-4xl md:text-5xl font-archivoBlack font-normal text-[#d03441] tracking-wider text-stroke text-shadow-outline"
            >
                {title}
            </div>

            <Image src={rightArrow} alt="" className="sm:h-6 h-4" />
        </main>
    );
};

export default Title;
