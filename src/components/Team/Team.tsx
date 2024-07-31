"use client";
import Image from "next/image";
import "./style.css";
import Graphic1 from "../Team/Team/Graphic1.png";
import Graphic2 from "../Team/Team/Graphic2.png";
import star2 from "../Team/Team/star2.png";
import TeamCard from "./TeamCard";
import { TeamMembers } from "./TeamData";
import { Parallax } from "react-scroll-parallax";
import { cardboardTexture } from "../Sponsors/constants";
import Header from "../commons/Header";

const Team: React.FC = () => {
    return (
        <div className=" bg-[#604151] z-40 relative  mb-[-0.8rem] w-full h-full lg:pb-0 md:pb-0 pb-10">
            <div className="texture mix-blend-color-burn absolute flex bg-cover ">
                <img
                    src={cardboardTexture}
                    alt="re - render"
                    className="w-screen bg-cover h-[1370px]"
                />
            </div>
            <div className="flex justify-items-center items-center justify-center px-5 mt-10">
                <Parallax
                    className="absolute top-0 rotate-star-1 right-5 custom-500:right-10"
                    speed={-5}
                    rotate={[0, 360]}
                >
                    <Image
                        src={star2}
                        alt="Star2"
                        width={50}
                        height={50}
                        className="scale-50 custom-500:scale-75"
                    />
                </Parallax>
                <Header title="OUR TEAM" />
            </div>
            <div className="grid lg:gap-20 md:gap-16 gap-10 lg:grid-cols-3 grid-cols-2 lg:px-24 md:px-20 px-10 justify-items-center justify-center py-28 ">
                {TeamMembers.map((TeamMember) => (
                    <TeamCard
                        key={TeamMember.id}
                        imgSrc={TeamMember.imgSrc}
                        title={TeamMember.title}
                        position={TeamMember.position}
                    />
                ))}
            </div>
            <Parallax
                className="absolute bottom-10 left-10"
                speed={8}
                rotate={[0, 360]}
            >
                <Image
                    src={star2}
                    alt="Star2"
                    width={50}
                    height={50}
                    className="scale-50 custom-500:scale-75"
                />
            </Parallax>
        </div>
    );
};

export default Team;
