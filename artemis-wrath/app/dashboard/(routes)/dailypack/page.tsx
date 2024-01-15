'use client'

import { useEffect, useState } from "react"
import { useSideBar } from "@/hooks/use-sidebar"
import PackSelector from "../../_components/PackSelector"
import Timer from "./_components/Timer"
import { useUserInfo } from "@/hooks/use-userInfo"
import { useCollectedCards } from "@/hooks/use-collectedCards"
import CollectedDailyPack from "./_components/CollectedDailyPack"


const DailyPack = () => {
    const userInfo = useUserInfo()
    const activeSidebar = useSideBar()
    const [collectedPack, setCollectedPack] = useState<boolean>(true)
    const [today, setToday] = useState<Date>()
    const collectedCards = useCollectedCards()


    useEffect(() => {
        activeSidebar.onChange('dailypack')
    },[])

    const getDate = async ()=> {       
        const currentDate = await fetch('https://worldtimeapi.org/api/timezone/America/New_York').then((res) => res.json())
        // needs to be converted into date
        const dayStart = new Date(currentDate.datetime)
        // need to set everything to zero
        const todayYear = dayStart.getFullYear()
        const todayDate = dayStart.getDate() 
        const todayMonth = dayStart.getMonth()
        // create new date to set time to zero 
        const realDateStart = new Date(todayYear, todayMonth, todayDate, 0, 0, 0, 0)
        setToday(realDateStart)
        console.log(realDateStart)
        console.log(userInfo)
        console.log(new Date())
        console.log(33, today?.toString(), today)
        return realDateStart
    }


    useEffect(() => {
        const res =  getDate().then((act) => {
            if (act?.toString() === new Date(userInfo?.lastPackDate).toString()){
                console.log('hello')
                setCollectedPack(true)
            }else{
                console.log('testing')
                const todayString = act?.toString()
                if (typeof todayString ==='string') {
                }
                setCollectedPack(false)
            }
        })
    }, [userInfo])



    return (
        <div className="w-[calc(100vw-16rem)] flex flex-col items-center">
            <h1 className="text-7xl">Daily Pack</h1>
            {!collectedPack && today && <PackSelector todayDate={today?.toString()}/>}
            {collectedPack && <Timer />}
            {collectedCards.collected && <CollectedDailyPack />}
        </div>
    )
}

export default DailyPack