'use client'
import { useEffect, useState } from "react"

const Timer = () => {
    const [hours, setHour] = useState<number>()
    const [minutes, setMinutes] = useState<number>()
    const [seconds, setSeconds] = useState<number>()

    const getDate = async()=> {
        const today = await fetch('http://worldtimeapi.org/api/timezone/America/New_York').then((res)=> res.json())
        const actualToday = new Date(today.datetime)
        const secondsLeft = 60 - actualToday.getSeconds()
        const minutesLeft = 59 - actualToday.getMinutes()
        const hoursLeft = 23 - actualToday.getHours()
        console.log(hoursLeft, minutesLeft, secondsLeft)
        setHour(hoursLeft)
        setMinutes(minutesLeft)
        setSeconds(secondsLeft)
    }

    useEffect(() => {
        getDate()
    }, [])
    
    
    return (
        <div className="flex flex-row">
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
        </div>
    )
}

export default Timer