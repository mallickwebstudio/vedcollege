"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const getTimeLeft = () => {
  const deadline = new Date("2025-06-30T23:59:59")
  const now = new Date()
  const total = deadline.getTime() - now.getTime()

  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / 1000 / 60 / 60) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}

export default function AdmissionCountdown({ className }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTimeLeft()
      if (newTime.total <= 0) {
        clearInterval(timer)
      }
      setTimeLeft(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={cn("p-4 bg-background rounded-md overflow-hidden w-fit", className)}>
      <div className="text-sm capitalize tracking-wider font-bold text-primary">Admission Open</div>
      <div className="mt-2 text-black font-bold text-2xl">
        <div>
          <span className="text-primary">{timeLeft.days}</span>{" "}
          <span className="font-bold text-lg">Days</span>
        </div>
        <div className="flex gap-2 items-center mt-1">
          <div className="bg-secondary rounded-sm px-2">{String(timeLeft.hours).padStart(2, "0")}</div>
          :
          <div className="bg-secondary rounded-sm px-2">{String(timeLeft.minutes).padStart(2, "0")}</div>
          :
          <div className="bg-secondary rounded-sm px-2">{String(timeLeft.seconds).padStart(2, "0")}</div>
        </div>
      </div>
    </div>
  )
}
