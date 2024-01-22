'use client';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import CardElement from '@/app/components/Card';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  effect?: string;
  biome?: string;
  effectFunction?: string;
  rarity?: string;
  type?: string;
}

const MedievalCreaturesSet = () => {
  const [cardSet, setCardSet] = useState<Card[]>([]);
  const [cardsLoaded, setCardsLoaded] = useState(false);
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('explore');
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const res: Card[] = await fetch('/api/sets/medievalcreatures', {
        cache: 'no-cache',
      }).then((res) => res.json());
      // console.log(res)
      setCardSet(res);
      console.log(res);
      setCardsLoaded(true);
    };
    getCards();
  }, []);

  // useEffect(() => {
  //     const inclinations = ['Love', 'Pride', 'Wisdom', 'Mischief', 'Wrath']
  //     cardSet.map((card)=> {
  //         const randomNumber = Math.floor(Math.random() * 6)
  //         card.inclination = inclinations[randomNumber]
  //     })
  //     console.log(cardSet)
  // },[cardsLoaded])

  return (
    <div className='flex flex-col items-center'>
      <h1 className='ml-12 self-start'>Medieval Creatures</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
        {cardsLoaded &&
          cardSet.map((card) => {
            return (
              // <div className={cn("h-96 w-72 bg-amber-200 flex flex-col rounded-md items-center border-gray-800 border-8",
              //     card.inclination === 'Wrath' && 'bg-red-800',
              //     card.inclination === 'Wisdom' && 'bg-blue-400',
              //     card.inclination === 'Love' && 'bg-pink-300',
              //     card.inclination === 'Mischief' && 'bg-gray-600',
              //     card.inclination === 'Pride' && 'bg-purple-600'
              // )} key={card.id}>
              //         <h1 className="text-l self-start ml-2">{card.name}</h1>
              //         {card.image &&
              //         <Image
              //         src={card.image}
              //         alt=''
              //         width={256}
              //         height={256}
              //         placeholder='empty'
              //         className='object-cover rounded-lg'
              //         // className="w-60 h-auto"
              //         ></Image>
              //     }
              //         <div className="w-[250px] h-[70px] border-2 border-black mt-3 rounded bg-gray-100 opacity-50">
              //             <p className="text-[11px] leading-none">{card.description}</p>
              //         </div>
              //     </div>
              <CardElement card={card} key={card.id} />
            );
          })}
      </div>
    </div>
  );
};

export default MedievalCreaturesSet;
