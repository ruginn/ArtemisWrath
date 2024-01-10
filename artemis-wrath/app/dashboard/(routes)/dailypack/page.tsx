'use client'

import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"
import PackSelector from "../../_components/PackSelector"

const DailyPack = () => {
    const activeSidebar = useSideBar()

    useEffect(() => {
        activeSidebar.onChange('dailypack')
    },[])


    return (
        <div>
            <PackSelector />
        </div>
    )
}

export default DailyPack