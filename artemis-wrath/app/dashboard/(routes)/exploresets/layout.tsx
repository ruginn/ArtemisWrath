'use client'
import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"

function layout({children}: {children: React.ReactNode}) {
    const activeSidebar = useSideBar()
    
    useEffect(() => {
        activeSidebar.onChange('explore')
    },[])

  return (
    <>{children}</>
  )
}

export default layout