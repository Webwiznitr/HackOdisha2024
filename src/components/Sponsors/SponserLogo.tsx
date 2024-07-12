import React from "react";
import Image from "next/image";
interface SponserLogoProps {
    sponserLogo: string;
    alt: string;
}
export default function SponserLogo({ sponserLogo, alt }: SponserLogoProps) {
    return (
        <div className="w-full flex lg:block justify-center">
            <div className="flex flex-col justify-center items-center gap-[21.966px] size-[120px] sm:size-[162.547px] p-5 rounded-full border border-black bg-white shadow-[3px_3px_0px_0px_#000]">
                <Image
                    src={sponserLogo}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain p-2 sm:p-5"
                />
            </div>
        </div>
    );
}
