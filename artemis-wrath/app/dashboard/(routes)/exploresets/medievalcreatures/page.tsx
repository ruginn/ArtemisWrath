'use client'
import Image, { StaticImageData } from 'next/image'
import {useState, useEffect} from 'react'



interface Card {
    id: number, 
    name: string, 
    description: string, 
    randomNumber: number,
    image?: string | StaticImageData, 
}

const MedievalCreaturesSet = () => {
    const [cardSet, setCardSet] = useState<Card[]>([])
    const [cardsLoaded, setCardsLoaded] = useState(false)
    

    useEffect(()=> {   

        const getCards = async () => {
            const res : Card[] = await fetch('/api/sets/medievalcreatures', {
                cache: 'no-cache'
            }).then((res) => res.json())
            console.log(res)
            setCardSet(res)
            setCardsLoaded(true)
        }
        getCards()

    }, [])



    return (
        <div>
            <h1>Medieval Creatures</h1>
            <div className="grid grid-cols-5 gap-5 m-10">
            {cardsLoaded &&
                cardSet.map((card) => {
                    return (
                        <div className="h-96 w-72 bg-amber-200 flex flex-col rounded-md items-center border-gray-800 border-8" key={card.id}>
                                <h1 className="text-l self-start ml-2">{card.name}</h1>
                                {card.image &&
                                <Image 
                                src={card.image}
                                alt=''
                                width={256}
                                height={256}
                                placeholder='empty'
                                className='object-cover rounded-lg'
                                // className="w-60 h-auto"
                                ></Image>
                            }
                                <div className="w-[250px] h-[70px] border-2 border-black mt-3 rounded">
                                    <p className="text-[11px] leading-none">{card.description}</p>
                                </div>
                            </div>
                    )
                })
                
            }
            </div>
        </div>
    )
}

export default MedievalCreaturesSet