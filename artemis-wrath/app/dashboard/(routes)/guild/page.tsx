'use client'

import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"


const Guild = () => {
    const activeSidebar = useSideBar()

    useEffect(() => {
        activeSidebar.onChange('guild')
    }, [])
    return (
        <div>
            <h1>Guild</h1>
        </div>
    )
}

export default Guild