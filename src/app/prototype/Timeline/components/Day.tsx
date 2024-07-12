import React from "react"

const Day = ({ number }: { number: number }) => {
  return (
    <main
      id="day1"
      className="h-12 w-20 shadow-[.2rem_.2rem_orange] shadow-orange-500 border border-black flex justify-center items-center font-archivo text-xl font-bold hover:bg-orange-500 hover:text-white hover:shadow-none hover:border-none hover:-translate-x-[.2rem] hover:translate-y-[.2rem] transition-all duration-200 delay-100"
    >
      DAY {number}
    </main>
  )
}

export default Day
