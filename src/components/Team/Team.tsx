"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Graphic1 from "../Team/Team/Graphic1.png";
import Graphic2 from "../Team/Team/Graphic2.png";
import star1 from "../Team/Team/star1.png";
import star2 from "../Team/Team/star2.png";
import TeamCard from "./TeamCard";
import { TeamMembers } from "./TeamData";

const Team: React.FC = () => {
  const star1Ref = useRef<HTMLDivElement>(null);
  const star2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxAmount1 = scrollPosition * 0.3;
      const parallaxAmount2 = scrollPosition * 0.3;

      if (star1Ref.current) {
        star1Ref.current.style.transform = `translateY(${parallaxAmount1}px)`;
      }
      if (star2Ref.current) {
        star2Ref.current.style.transform = `translateY(${parallaxAmount2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" bg-customPink w-full h-full pt-10 lg:pb-0 md:pb-0 pb-10">
      <div ref={star2Ref} className="image-colored">
        <Image
          className="star2 absolute lg:size-12 rotate-45 lg:mt-24 ml-auto lg:right-24 custom-345:size-6 md:right-16 md:mt-32 size-8 right-12 mt-16"
          src={star2}
          alt="Star2"
        />
      </div>
      <div>
        <div ref={star1Ref} className="image-colored">
          <Image
            className=" star1 absolute custom-1080:mt-[55rem] custom-940:mt-[70rem] custom-850:mt-[60rem] custom-767:mt-[155rem] custom-590:mt-[150rem] custom-560:mt-[150rem] custom-560:left-5 custom-500:mt-[130rem] custom-420:mt-[110rem]  custom-420:left-5  custom-320:mt-[90rem] custom-320:size-7 custom-320:left-4 rotate-45 lg:size-12 lg:left-10 left-10 size-8 "
            src={star1}
            alt="Star1"
          />
        </div>
      </div>

      <div className="flex justify-items-center items-center justify-center px-5  ">
        <Image
          className="lg:w-30 lg:h-10 lg:mr-10 md:w-28 md:h-10 md:mr-8 w-12 h-5"
          src={Graphic1}
          alt="GRAPHIC1"
        />
        <div className="text-orange-500 text-shadow-2">
          <span
            className=" text-2xl font-dela-gothic sm:text-3xl md:text-5xl font-normal tracking-widest text-stroke-outline"
            style={{
              textShadow: "1px 2px 0px #fff",
            }}
          >
            OUR TEAM
          </span>
        </div>
        <Image
          className="lg:w-30 lg:h-10 lg:ml-10 md:w-28 md:h-10 md:ml-8 w-12 h-5"
          src={Graphic2}
          alt="GRAPHIC2"
        />
      </div>
      <div className="grid lg:gap-20 md:gap-16 gap-10 lg:grid-cols-3  md:grid-cols-2 lg:px-24 md:px-20 px-10 justify-items-center justify-center sm:grid-cols-1 py-28 ">
        {TeamMembers.map((TeamMember) => (
          <TeamCard
            imgSrc={TeamMember.imgSrc}
            title={TeamMember.title}
            position={TeamMember.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
