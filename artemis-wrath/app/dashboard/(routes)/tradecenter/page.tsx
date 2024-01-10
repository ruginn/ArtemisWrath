'use client'
import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"

const TradeCenter = () => {
    const activeSidebar = useSideBar()

    useEffect(() => {
        activeSidebar.onChange('tradecenter')
    },[])
    
    return (
        <div className="w-[calc(100vw-256px)] bg-green-300">
            Trade Center
        </div>
    )
}

export default TradeCenter