"use client"
import React, { useState } from "react"
import "./Timeline.css"
import Title from "./components/Title"
import Day from "./components/Day"
import Schedule from "./components/Schedule"
import days from "./constants"
import Image from "next/image"
import decor1 from "./assets/decor1.svg"
import decor2 from "./assets/decor2.svg"
import decor3 from "./assets/decor3.svg"

const numbersArray = Array.from(
  { length: days.length },
  (_, index) => index + 1
)

const Timeline = () => {
  const [day, setDay] = useState(0)

  return (
    <main
      className="relative flex flex-col items-center bg-[#FFF6E0] z-10 pb-12 overflow-x-hidden"
      id="timeline-main"
    >
      <div id="timeline-main-background"></div>

      <Title title="TIMELINE" />

      <div id="day" className="h-16 flex justify-center gap-16 mb-8">
        {numbersArray.map((item, idx) => {
          return (
            <div
              className=" cursor-pointer"
              key={idx}
              onClick={() => {
                setDay(idx)
              }}
            >
              <Day number={item} active={day==idx?true:false} />
            </div>
          )
        })}
      </div>

      <div id="schedule-container" className="flex w-screen justify-evenly px-6">
        <div
          id="left"
          className="flex-col justify-between w-1/6 items-center hidden sm:flex pointer-events-none"
        >
          <div id="decor1" className="w-12 md:w-24">
            <Image src={decor1} alt="" />
          </div>

          <div id="decor2" className="md:w-24 w-12">
            <Image src={decor2} alt="" />
          </div>
        </div>

        <Schedule date={days[day].date} events={days[day].events} />

        <div
          id="right"
          className="justify-center items-center w-1/6 hidden sm:flex pointer-events-none"
        >
          <div id="decor3" className="md:w-16 w-12">
            <Image src={decor3} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Timeline
