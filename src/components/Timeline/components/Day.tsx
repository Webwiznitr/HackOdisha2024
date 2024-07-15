import React from "react"

const Day = ({ number,active=false }: { number: number,active:boolean }) => {
  return (
    <main
      id="day1"
      className={`h-12 w-20 flex justify-center items-center font-archivo text-xl font-bold  ${
        active
          ? "drop-shadow-xl bg-orange-500 text-white shadow-[.2rem_.2rem] shadow-black border-black border"
          : "shadow-[.2rem_.2rem] shadow-orange-500 border border-black hover:bg-orange-500 hover:text-white hover:shadow-none hover:-translate-x-[.2rem] hover:translate-y-[.2rem]"
      } transition-all duration-200 delay-100`}
    >
      DAY {number}
    </main>
  )
}

export default Day
