import React from "react";
import SponserLogo from "./SponserLogo";
import { wavyLine } from "./data";
import Image from "next/image";

interface SponsorProps {
    type: string;
    sponsorsList: {
        name: string;
        logo: string;
    }[];
}

export default function Sponsor({ type, sponsorsList }: SponsorProps) {
    return (
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
            <div className="text-orange-500 text-shadow-2">
                <span
                    className="font-dela-gothic text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-stroke-outline uppercase"
                    style={{
                        textShadow: "2px 2px 0px #000",
                    }}
                >
                    {type}
                </span>
            </div>
            <div className="mt-8 sm:mt-10 md:mt-14 mb-12 sm:mb-16 md:mb-24 lg:mb-32">
                <Image
                    src={wavyLine}
                    alt="Wavy Line"
                    width={1000}
                    height={5}
                    className="w-full"
                />
            </div>
            <div className="grid grid-cols-1 xsm:grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-16 xl:grid-cols-5 xl:gap-24 2xl:gap-[130px]">
                {sponsorsList.map((sponsor, index) => (
                    <SponserLogo
                        key={index}
                        sponserLogo={sponsor.logo}
                        alt={sponsor.name}
                    />
                ))}
            </div>
            <div className="mb-8 sm:mb-10 md:mb-14 mt-12 sm:mt-14 md:mt-24 lg:mt-32">
                <Image
                    src={wavyLine}
                    alt="Wavy Line"
                    width={1000}
                    height={5}
                    className="w-full"
                />
            </div>
        </div>
    );
}
