"use client"
import Countdown from "react-countdown"

const endingDate = new Date("2024-07-30")
const CountDown = () => {
  return (
    <div className="font-bold text-5xl text-yellow-300" suppressHydrationWarning>
        <Countdown date={endingDate} />
    </div>
  )
}

export default CountDown
