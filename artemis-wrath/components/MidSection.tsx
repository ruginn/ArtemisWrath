import Image from "next/image"
import Mountains from '/public/Images/Mountains.svg'
import CardBack from '@/public/Images/cardback.png'
import BattleGold from '@/public/Images/backgrounds/BattleGold.png'
import CollectRed from '@/public/Images/backgrounds/CollectRed.jpeg'
import TradeSage from '@/public/Images/backgrounds/TradeSage.jpeg'
import { LibraryBig, ArrowRightLeft, Swords } from "lucide-react"

const MidSection = () => {
    return (
        <div className="mt-28 w-full flex flex-col justify-center">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center">Unleash the power of creatures in Artemis&apos; Wrath – Where Strategy Meets Myth!</h1>
                <h3 className="text-2xl text-center">Artemis&apos; Wrath isn&apos;t just a game; it&apos;s a battleground of wits. Craft your deck, anticipate your foes, and ascend to victory.</h3>
            </div>
            <div className="w-full flex justify-evenly p-12 gap-3">
                <div className="w-64 h-72 bg-[#436561] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl relative">
                    <Image 
                        src={TradeSage}
                        alt=""
                        className="w-full h-full absolute rounded-xl -z-10 blur-[2px]"
                    />
                    <h3 className="text-5xl font-bold text-black">Trade</h3>
                    <ArrowRightLeft className="w-36 h-36 stroke-black"/>
                </div>  
                <div className="w-64 h-72 bg-[#CCB075] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl relative">
                <Image 
                        src={BattleGold}
                        alt=""
                        className="w-full h-full absolute rounded-xl -z-10 blur-[2px]"
                    />
                    <h3 className="text-5xl font-bold text-black">Battle</h3>
                    <Swords className="w-36 h-36 stroke-black"/>
                </div> 
                <div className="w-64 h-72 bg-[#844C32] rounded-xl flex flex-col items-center justify-center drop-shadow-2xl relative">
                    <Image 
                            src={CollectRed}
                            alt=""
                            className="w-full h-full absolute rounded-xl -z-10 blur-[2px]"
                        />
                    <h3 className="text-5xl font-bold text-black">Collect</h3>
                    <LibraryBig className="w-36 h-36 stroke-black"/>
                </div> 
            </div>
            {/* <div className="w-full flex justify-evenly gap-5">
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            <Image src={CardBack} alt='CardBack' className="w-64 h-auto rounded-xl border-[#436561] border-8"/>
            </div> */}
            <Image 
                src={Mountains}
                alt='Mountains'
                className="w-full"
            />
        </div>
    )
}

export default MidSection