"use client";
import React from "react";
import "./Herohack.css";
import Image from "next/image";
const Herohack = () => {
  <style></style>;
  return (
    <div>
      <div className="text-[rgb(208,52,65)] h-full w-full text-[3.8rem] tracking-[0.5rem] sm:tracking-[1.2rem] lg:tracking-[0.15] sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[180px] 2xl:text-[210px] lg:text-8xl font-bold leading-7 font-brandon 2xl:mt-16 xl:mt-16 lg:mt-12 md:mt-12 sm:mt-4 mt-24 shadow border-none">
        HACKODISHA
      </div>
      <div className="text-[#D03441] h-full w-full text-[0.8rem] sm:text-2xl md:text-2xl lg:text-3xl text-center font-bold font-ARP 2xl:mt-12 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-12 mt-12">
        19th - 20th Oct
      </div>
      <div className="flex justify-center items-center 2xl:mt-20 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-12 mt-8 relative ">
        <button
          type="button"
          className="md:rounded-[18px] sm:rounded-[13px] rounded-[10px] text-xl sm:text-3xl md:text-3xl 2xl:text-5xl xl:text-4xl font-medium border-solid border-opacity-70 md:px-[20px] md:py-[10px] lg:px-[30px] lg:py-[15px] py-[5px] px-[10px] text-center me-2 mb-2 bg-[#E16C00] text-white font-oxanium"
          style={{
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.75)",
            border: "3px solid rgba(0, 0, 0, 0.70)",
            transition: "transform 0.1s, box-shadow 0.1s",
          }}
          onClick={() => {
            location.href = "https://www.hackquest.io/en/hackathon/explore/HackOdisha-40";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(2px)";
            e.currentTarget.style.boxShadow =
              "2px 2px 0px 0px rgba(0, 0, 0, 0.75)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0px 0px rgba(0, 0, 0, 0.75)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0px 0px rgba(0, 0, 0, 0.75)";
          }}
        >
          Apply on HackQuest
        </button>

        <div className=" top-[10%] right-[15%] sm:top-[10%] sm:right-[16%] md:top-[10%] md:right-[25%] lg:top-[10%] lg:right-[26%] xl:top-[11%] xl:right-[26%] 2xl:top-[13%] 2xl:right-[22%] absolute">
          <Image
            src={"./images/stroke.svg"}
            width={24}
            height={24}
            alt="stroke"
          />
        </div>
      </div>
    </div>
  );
};

export default Herohack;
