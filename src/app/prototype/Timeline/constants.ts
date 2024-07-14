interface Event {
  time: string
  event: string
}

interface Day {
  date: string
  events: Array<Event>
}

//day 1 events
const day1: Day = {
  date: "September 06, 2024",
  events: [
    {
      time: "7:30 AM",
      event: "Check in starts",
    },
    {
      time: "7:30 AM",
      event: "Doors open for participants",
    },
    {
      time: "8:00 AM",
      event: "opening ceremony",
    },
    {
      time: "8:30 AM",
      event: "hacking starts",
    },
    {
      time: "9:00 AM",
      event: "team building event",
    },
    {
      time: "12:00 PM",
      event: "hacker hangout",
    },
    {
      time: "3:30 PM",
      event: "mlh mini event",
    },
    {
      time: "5:00 PM",
      event: "workshop",
    },
    {
      time: "8:00 PM",
      event: "fun events",
    },
  ],
}

// day2 events
const day2 = {
  date: "September 07, 2024",
  events: [
    {
      time: "12:00 AM",
      event: "Discord catch-up sesssion",
    },
    {
      time: "12:00 PM",
      event: "lunch break",
    },
    {
      time: "2:00 PM",
      event: "fun events",
    },
    {
      time: "6:00 PM",
      event: "initial submission due",
    },
    {
      time: "9:00 PM",
      event: "hacking ends (submission hard deadline)",
    },
    {
      time: "9:20 PM",
      event: "closing ceremony",
    },
    {
      time: "10:00 PM",
      event: "demo starts",
    },
    {
      time: "10:30 PM",
      event: "demo ends",
    },
    {
      time: "11:00 PM",
      event: "event ends",
    },
  ],
}

const DaysArray: Array<Day> = [day1, day2]

export default DaysArray
