import React from "react"

const Event = ({
  time = "7:30",
  event = "check in starts",
}: {
  time: string
  event: string
}) => {
  const eventName = event.toUpperCase()
  return (
    <main className="flex items-center gap-2 px-4 tracking-wide">

      <div id="circle-point" className="border-2 border-orange-500 p-2 rounded-full w-fit">
        <div id="circle-filled" className="bg-orange-500 rounded-full h-4 w-4">
        </div>
      </div>

      <div id="event-details" className="flex gap-4 border-[3px] border-orange-500 rounded-xl w-full h-full py-2 px-4 md:px-8 items-center">

        <div id="event-time" className="font-archivo font-bold sm:text-xl text-sm sm:min-w-24 min-w-fit text-end">
          {time}
        </div>

        <div id="event-name" className="font-archivo font-bold sm:text-xl text-sm">
          {eventName}
        </div>

      </div>

    </main>
  )
}

export default Event
