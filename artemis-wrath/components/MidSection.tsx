import Image from "next/image"
import Mountains from '@/public/Images/Mountains.svg'
import CardBack from '@/public/Images/cardback.png'
import { LibraryBig, ArrowRightLeft, Swords } from "lucide-react"

const MidSection = () => {
    return (
        <div className="mt-28 w-full flex flex-col justify-center">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold">Unleash the power of creatures in Artemis&apos; Wrath – Where Strategy Meets Myth!</h1>
                <h3 className="text-2xl">Artemis&apos; Wrath isn&apos;t just a game; it&apos;s a battleground of wits. Craft your deck, anticipate your foes, and ascend to victory.</h3>
            </div>
            <div className="w-full flex justify-evenly p-12 gap-3">
                <div className="w-64 h-72 bg-[#436561] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl">
                    <h3 className="text-5xl font-bold text-white">Trade</h3>
                    <ArrowRightLeft className="w-36 h-36 stroke-white"/>
                </div>  
                <div className="w-64 h-72 bg-[#CCB075] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl">
                    <h3 className="text-5xl font-bold text-white">Battle</h3>
                    <Swords className="w-36 h-36 stroke-white"/>
                </div> 
                <div className="w-64 h-72 bg-[#844C32] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl">
                    <h3 className="text-5xl font-bold text-white">Collect</h3>
                    <LibraryBig className="w-36 h-36 stroke-white"/>
                </div> 
            </div>
            <div className="w-full flex justify-evenly gap-5">
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            </div>
            <Image 
                src={Mountains}
                alt='Mountains'
                className="w-full"
            />
        </div>
    )
}

export default MidSection