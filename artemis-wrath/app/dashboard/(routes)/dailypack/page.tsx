'use client'

import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"
import PackSelector from "../../_components/PackSelector"
import Timer from "./_components/Timer"


const DailyPack = () => {
    const activeSidebar = useSideBar()

    useEffect(() => {
        activeSidebar.onChange('dailypack')
    },[])


    return (
        <div>
            <PackSelector />
            <Timer />
        </div>
    )
}

export default DailyPack