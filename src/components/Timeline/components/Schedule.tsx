import React from "react"
import Event from "./Event"
import Image from "next/image"
import dash from "../assets/dash.svg"

interface Event {
  time: string
  event: string
}

const Schedule = ({ date, events }: { date: string; events: Array<Event> }) => {
  return (
    <main className="relative z-10">
      <div
        id="offset"
        className="h-full w-full -top-2 -left-2 bg-white border-black border-2 md:px-16 pt-8 pb-12"
      >
        <h1 className="font-archivo font-bold text-xl tracking-wider mx-8 mb-8">
          {date.toUpperCase()}
        </h1>

        <div className="relative flex flex-col gap-4">
          <div
            id="dashed"
            className="absolute left-8 top-10 h-full overflow-hidden"
          >
            <Image src={dash} alt="" />
          </div>

          {events.map((item, idx) => {
            return <Event time={item.time} event={item.event} key={idx} />
          })}
        </div>
      </div>
      <div className="border-2 border-black h-full w-full absolute top-2 left-2 z-[-5]"></div>
    </main>
  )
}

export default Schedule
