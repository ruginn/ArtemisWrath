'use client'
import { useState } from "react"
import Image from "next/image"
import AwSet1 from '@/public/Images/Packs/AWset1.jpg'
import AwSet2 from '@/public/Images/Packs/AWset2CS.png'
import AwSet3 from '@/public/Images/Packs/AWset3CS.png'
import { useUser } from "@clerk/nextjs"


const PackSelector = ()=> {
    const [selectedPack, setSelectedPack] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const {user} = useUser()


    const CollectPack = async () => {
        const userInfo = {
            id: user?.id, 
            firstName: user?.firstName, 
            lastName: user?.lastName, 
        }
        const res = await fetch('/api/cardpack/medievalcreatures', {
            method: 'POST', 
            body: JSON.stringify(userInfo),
            headers:{
                'Context-Type': 'application/json'
            },
            cache: 'no-cache'
        })
        // .then((res) => res.json()) 
        const cards = await res.json()
        console.log(cards)
    }


    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px]">Select your daily pack</h1>
            {!selectedPack &&     
            <div className="flex flex-row gap-4 w-full justify-center">
                <Image 
                    src={AwSet1}
                    alt='Medieval Creatures'
                    className="w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer"
                    onClick={CollectPack}
                />
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
            }
            {selectedPack &&     
            <div>
                <h3>You have already selected your pack for the day</h3>
            </div>
            }
        </div>
    )
}

export default PackSelector