"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./style.css";
import AnkitaBehera from "../Team/Team/AnkitaBehera.png";
import AnweshaPatra from "../Team/Team/AnweshaPatra.png";
import EstherHoward from "../Team/Team/EstherHoward.png";
import Graphic1 from "../Team/Team/Graphic1.png";
import Graphic2 from "../Team/Team/Graphic2.png";
import JaneCooper from "../Team/Team/JaneCooper.png";
import ManagementHead from "../Team/Team/ManagementHead.png";
import SomnathMohanta from "../Team/Team/SomnathMohanta.png";
import star1 from "../Team/Team/star1.png";
import star2 from "../Team/Team/star2.png";

const Team: React.FC = () => {
  const star1Ref = useRef<HTMLDivElement>(null);
  const star2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxAmount1 = scrollPosition * 0.15;
      const parallaxAmount2 = scrollPosition * 0.15;

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
    <body>
      <div className=" bg-customPink w-full h-full pt-10 lg:pb-0 md:pb-0 pb-10">
        <div ref={star2Ref} className="image-colored">
          <Image
            className="star2 absolute lg:size-12 rotate-45 lg:mt-24 ml-auto lg:right-24 md:right-16 md:size-9 md:mt-32 size-5 right-12 mt-16"
            src={star2}
            alt="Star2"
          />
        </div>
        <div>
          <div ref={star1Ref} className="image-colored">
            <Image
              className=" star1 absolute lg:mt-[60rem] rotate-45 lg:size-12 lg:left-10 md:mt-[92rem] md:left-12 md:size-9 size-5 left-5 mt-[118rem]"
              src={star1}
              alt="Star1"
            />
          </div>
        </div>

        <div className="flex justify-items-center justify-center px-5  ">
          <Image
            className="lg:w-30 lg:h-10 lg:mr-10 md:w-28 md:h-10 md:mr-8 w-12 h-5 mr-5 lg:mt-2 md:mt-0 mt-1"
            src={Graphic1}
            alt="GRAPHIC1"
          />
          <p className="team text-center lg:-mt-2 -mt-1 lg:text-7xl md:text-5xl text-2xl font-semibold ">
            OUR TEAM
          </p>
          <Image
            className="lg:w-30 lg:h-10 lg:ml-10 md:w-28 md:h-10 md:ml-8 w-12 h-5 ml-5 lg:mt-2 md:mt-0 mt-1"
            src={Graphic2}
            alt="GRAPHIC2"
          />
        </div>
        <div className="grid lg:gap-20 md:gap-16 gap-10 lg:grid-cols-3  md:grid-cols-2 lg:px-24 md:px-20 px-10 justify-items-center justify-center sm:grid-cols-1 py-28 ">
          <Image
            className="lg:pt-0 lg:-mt-0 md:pt-3 -mt-8"
            src={JaneCooper}
            alt="Jane Cooper"
            width={331.62}
            height={414.31}
          />
          <Image
            className="lg:pt-14 md:pt-11"
            src={SomnathMohanta}
            alt="SomnathMohanta"
            width={397.41}
            height={381.5}
          />
          <Image
            className="lg:-mt-14 md:pt-10"
            src={AnkitaBehera}
            alt="AnkitaBehera"
            width={305.91}
            height={421.12}
          />
          <Image
            className="lg:pt-10 md:pt-20"
            src={AnweshaPatra}
            alt="AnweshaPatra"
            width={303.36}
            height={375.35}
          />
          <Image
            className="lg:pt-0 md:pt-12"
            src={EstherHoward}
            alt="EstherHoward"
            width={331.62}
            height={404.31}
          />
          <Image
            className="lg:pt-14 md:pt-20"
            src={ManagementHead}
            alt="ManagementHead"
            width={397.41}
            height={381.5}
          />
        </div>
      </div>
    </body>
  );
};

export default Team;
