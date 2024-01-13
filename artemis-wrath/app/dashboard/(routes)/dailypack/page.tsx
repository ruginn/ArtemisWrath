'use client'

import { useEffect, useState } from "react"
import { useSideBar } from "@/hooks/use-sidebar"
import PackSelector from "../../_components/PackSelector"
import Timer from "./_components/Timer"


const DailyPack = () => {
    const activeSidebar = useSideBar()
    const [collectedPack, setCollectedPack] = useState<boolean>(false)


    useEffect(() => {
        activeSidebar.onChange('dailypack')
    },[])


    return (
        <div className="w-[calc(100vw-16rem)] flex flex-col items-center">
            <h1 className="text-8xl">Daily Pack</h1>
            {collectedPack && <PackSelector />}
            {!collectedPack && <Timer />}
        </div>
    )
}

export default DailyPack