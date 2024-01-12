import Image,{StaticImageData} from "next/image"
import { cn } from "@/lib/utils"


interface Card {
    id: number, 
    name: string, 
    description: string, 
    randomNumber: number,
    inclination?: string
    image?: string | StaticImageData, 
}

const CardElement = ({card}:{card:Card}) => {
    return (
        <div className={cn("h-96 w-72 bg-amber-200 flex flex-col rounded-xl items-center border-gray-800 border-8", 
            card.inclination === 'Wrath' && ' bg-gradient-to-bl to-red-600 via-red-800 from-[#75352F]',
            card.inclination === 'Wisdom' && 'bg-[#5876b2]',
            card.inclination === 'Love' && 'bg-[#f58a87]', 
            card.inclination === 'Mischief' && 'bg-[#3f392c]', 
            card.inclination === 'Pride' && 'bg-[#454380]'
        )} key={card.id}>
                <h1 className="text-l self-start ml-2 font-bold">{card.name}</h1>
                {card.image &&
                <Image 
                src={card.image}
                alt=''
                width={256}
                height={256}
                placeholder='empty'
                className='object-cover rounded-lg border-4 border-gray-800'
                // className="w-60 h-auto"
                ></Image>
            }
                <div className="w-[250px] h-[70px] border-2 border-black mt-3 rounded bg-gray-100 opacity-50">
                    <p className="text-[11px] leading-none">{card.description}</p>
                </div>
        </div>
    )
}

export default CardElement