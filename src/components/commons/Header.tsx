import React from "react";
import Image from "next/image";
import Graphic1 from "./assets/Graphic1.png";
import Graphic2 from "./assets/Graphic2.png";
export default function Header({ title }: { title: string }) {
    return (
        <div className="flex justify-items-center items-center justify-center px-5 mt-10">
            <Image
                className="lg:w-30 lg:h-10 lg:mr-10 md:w-28 md:h-10 md:mr-8 w-12 h-5"
                src={Graphic1}
                alt="GRAPHIC1"
            />
            <div className="text-orange-500 text-shadow-2">
                <span
                    className=" font-dela-gothic text-3xl md:text-5xl font-normal tracking-widest text-stroke-outline uppercase"
                    style={{
                        textShadow: "1px 2px 0px #fff",
                    }}
                >
                    &nbsp;{title}&nbsp;
                </span>
            </div>
            <Image
                className="lg:w-30 lg:h-10 lg:ml-10 md:w-28 md:h-10 md:ml-8 w-12 h-5"
                src={Graphic2}
                alt="GRAPHIC2"
            />
        </div>
    );
}
