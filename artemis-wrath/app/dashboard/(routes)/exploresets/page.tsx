'use client'
import Image, { StaticImageData } from "next/image"
import AwSet1 from '@/public/Images/Packs/AWset1.jpg'
import AwSet2 from '@/public/Images/Packs/AWset2CS.png'
import AwSet3 from '@/public/Images/Packs/AWset3CS.png'
import Link from "next/link"
import MedievalCreaturesSet from "./medievalcreatures/page"
import { useEffect } from "react"
import { useSideBar } from "@/hooks/use-sidebar"


const ExploreSets = () => {
    const activeSidebar = useSideBar()

    useEffect(() => {
        activeSidebar.onChange('explore')
    },[])
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px]">Explore Sets</h1>  
            <div className="flex flex-row gap-4 w-full justify-center">
                <Link href={'/dashboard/exploresets/medievalcreatures'} className="w-[20%] h-auto">
                    <Image 
                        src={AwSet1}
                        alt='Medieval Creatures'
                        className="border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer"
                    />
                </Link>
                <Image 
                    src={AwSet2}
                    alt='Bushido Blades'
                    className="w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer"
                />
                <Image 
                src={AwSet3}
                alt='Desert Past'
                className="w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer"
            />
            </div>
        </div>
    )
}

export default ExploreSets