'use client'
import  {useSideBar} from '@/hooks/use-sidebar'
import { Calendar, ArrowRightLeft, Shield, Swords, Settings, Layers, Library, Home, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SideBar = () => {
    const activeSidebar = useSideBar()


    const clickSideTab = (page:string) => {
        activeSidebar.onChange(page)
    }
  
    

    return (
        <div className="w-64 h-[calc(100vh-80px)]  fixed bg-gray-900 text-amber-400">
            <Link href={'/dashboard'} onClick={()=>{clickSideTab('home')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'home' && 'bg-gray-700')}>
                    <Home className="mr-2"/>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link href={'/dashboard/dailypack'} onClick={()=>{clickSideTab('dailypack')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'dailypack' && 'bg-gray-700')}>
                    <Calendar className="mr-2"/>
                    <h3>Daily Pack</h3>
                </div>
            </Link>
            <Link href={'/dashboard/collection'} onClick={()=>{clickSideTab('collection')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'collection' && 'bg-gray-700')}>
                    <Layers className="mr-2" />
                    <h3>Collection</h3>
                </div>
            </Link>
            <Link href={'/dashboard/exploresets'} onClick={()=>{clickSideTab('explore')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'explore' && 'bg-gray-700')}>
                    <Globe className="mr-2"/>
                    <h3>Explore Sets</h3>
                </div>
            </Link>
            <Link href={'/dashboard/deckbuilder'} onClick={()=>{clickSideTab('deckbuilder')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'deckbuilder' && 'bg-gray-700')}>
                    <Library className="mr-2"/>
                    <h3>Deck Builder</h3>
                </div>
            </Link>
            <Link href={'/dashboard/tradecenter'} onClick={()=>{clickSideTab('tradecenter')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'tradecenter' && 'bg-gray-700')}>
                    <ArrowRightLeft className="mr-2" />
                    <h3>Trade Center</h3>
                </div>
            </Link>
            <Link href={'/dashboard/guild'} onClick={()=>{clickSideTab('guild')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'guild' && 'bg-gray-700')}>    
                    <Shield className="mr-2" />
                    <h3>Guild</h3>
                </div>
            </Link>
            <Link href={'/dashboard/battle'} onClick={()=>{clickSideTab('battle')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'battle' && 'bg-gray-700')}>
                    <Swords className="mr-2"/>
                    <h3>Battle</h3>
                </div>
            </Link>
            <Link href={'/dashboard/settings'} onClick={()=>{clickSideTab('settings')}}>
                <div className={cn('w-11/12 flex flex-row items-center ml-4 text-xl cursor-pointer rounded-md hover:bg-gray-700', activeSidebar.selected === 'settings' && 'bg-gray-700')}>
                <Settings className="mr-2"/>
                <h3>Settings</h3>
            </div>
            </Link>
        </div>
    )
}

export default SideBar