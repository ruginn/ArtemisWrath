'use client'
import  {useSideBar} from '@/hooks/use-sidebar'
import { Calendar, ArrowRightLeft, Shield, Swords, Settings, Layers, Library, Home, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect } from 'react'

const SideBar = () => {
    const activeSidebar = useSideBar()

    const clickSideTab = () => {
        activeSidebar.onChange('stringer')
    }
  

    return (
        <div className="w-64 h-[calc(100vh-80px)]  fixed bg-gray-900 text-amber-400">
            <Link href={'/dashboard'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Home className="mr-2"/>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link href={'/dashboard/dailypack'} onClick={clickSideTab}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Calendar className="mr-2"/>
                    <h3>Daily Pack</h3>
                </div>
            </Link>
            <Link href={'/dashboard/collection'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Layers className="mr-2" />
                    <h3>Collection</h3>
                </div>
            </Link>
            <Link href={'/dashboard/exploresets'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Globe className="mr-2"/>
                    <h3>Explore Sets</h3>
                </div>
            </Link>
            <Link href={'/dashboard/deckbuilder'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Library className="mr-2"/>
                    <h3>Deck Builder</h3>
                </div>
            </Link>
            <Link href={'/dashboard/tradecenter'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <ArrowRightLeft className="mr-2" />
                    <h3>Trade Center</h3>
                </div>
            </Link>
            <Link href={'/dashboard/guild'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Shield className="mr-2" />
                    <h3>Guild</h3>
                </div>
            </Link>
            <Link href={'/dashboard/battle'}>
                <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                    <Swords className="mr-2"/>
                    <h3>Battle</h3>
                </div>
            </Link>
            <Link href={'/dashboard/settings'}>
            <div className="flex flex-row items-center ml-4 text-xl cursor-pointer">
                <Settings className="mr-2"/>
                <h3>Settings</h3>
            </div>
            </Link>
        </div>
    )
}

export default SideBar