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

    useEffect(() =>{
        setTimeout(() => {
            if (hours && seconds === 0 && minutes ===0){
                setHour(-1)
                setMinutes(59)
            }
            if (minutes && seconds === 0){
                setMinutes(minutes-1)
                setSeconds(59)
            }
            if (seconds){
                setSeconds(seconds -1)
            }
        }, 1000)
    }, [seconds])
    
    
    return (
        <div className="w-full items-center flex flex-col">
            <h1>Its seems like you've already collected your pack for today.</h1>
            <h3>Your next pack will be availible in </h3>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col items-center">
                    <p>{hours && hours.toString().length === 1 ? `0${hours}` : hours}</p>
                    <p>{hours === 1 ? 'Hour' : 'Hours'}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>{minutes && minutes.toString().length === 1 ? `0${minutes}` : minutes}</p>
                    <p>Minutes</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>{seconds && seconds.toString().length === 1 ? `0${seconds}` : seconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Timer