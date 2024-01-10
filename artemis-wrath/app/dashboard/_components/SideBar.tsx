'use client'
import  {useSideBar} from '@/hooks/use-sidebar'
import { Calendar, ArrowRightLeft, Shield, Swords, Settings, Layers, Library, Home, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SideBar = () => {
    const activeSidebar2 = useSideBar()
    const [activeSidebar, setActiveSidebar] = useState<string>('home')



    const clickSideTab = (page:string) => {
        activeSidebar2.onChange(page)
    }
  

    return (
        <div className="w-64 h-[calc(100vh-80px)]  fixed bg-gray-900 text-amber-400">
            <Link href={'/dashboard'} onClick={()=>{setActiveSidebar('home')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'home' && 'bg-gray-700')}>
                    <Home className="mr-2"/>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link href={'/dashboard/dailypack'} onClick={()=>{setActiveSidebar('dailypack')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'dailypack' && 'bg-gray-700')}>
                    <Calendar className="mr-2"/>
                    <h3>Daily Pack</h3>
                </div>
            </Link>
            <Link href={'/dashboard/collection'} onClick={()=>{setActiveSidebar('collection')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'collection' && 'bg-gray-700')}>
                    <Layers className="mr-2" />
                    <h3>Collection</h3>
                </div>
            </Link>
            <Link href={'/dashboard/exploresets'} onClick={()=>{setActiveSidebar('explore')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'explore' && 'bg-gray-700')}>
                    <Globe className="mr-2"/>
                    <h3>Explore Sets</h3>
                </div>
            </Link>
            <Link href={'/dashboard/deckbuilder'} onClick={()=>{setActiveSidebar('deckbuilder')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'deckbuilder' && 'bg-gray-700')}>
                    <Library className="mr-2"/>
                    <h3>Deck Builder</h3>
                </div>
            </Link>
            <Link href={'/dashboard/tradecenter'} onClick={()=>{setActiveSidebar('tradecenter')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'tradecenter' && 'bg-gray-700')}>
                    <ArrowRightLeft className="mr-2" />
                    <h3>Trade Center</h3>
                </div>
            </Link>
            <Link href={'/dashboard/guild'} onClick={()=>{setActiveSidebar('guild')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'guild' && 'bg-gray-700')}>    
                    <Shield className="mr-2" />
                    <h3>Guild</h3>
                </div>
            </Link>
            <Link href={'/dashboard/battle'} onClick={()=>{setActiveSidebar('battle')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'battle' && 'bg-gray-700')}>
                    <Swords className="mr-2"/>
                    <h3>Battle</h3>
                </div>
            </Link>
            <Link href={'/dashboard/settings'} onClick={()=>{setActiveSidebar('setting')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar === 'setting' && 'bg-gray-700')}>
                <Settings className="mr-2"/>
                <h3>Settings</h3>
            </div>
            </Link>
        </div>
    )
}

export default SideBar