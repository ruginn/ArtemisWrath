'use client';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import CardElement from '@/app/components/Card';
import CardDetailModal from '@/app/components/CardDetailModal';
import { useCardSet } from '@/hooks/use-cardSets';
import { Card } from '@/types/CardType';
import { PlayerCard } from '@/types/PlayerCardType';

// interface Card {
//   id: number;
//   name: string;
//   description: string;
//   randomNumber: number;
//   image?: string;
//   inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
//   effect?: string;
//   biome?:
//     | 'Jungle'
//     | 'Tundra'
//     | 'Alpine'
//     | 'Forest'
//     | 'Wetland'
//     | 'Grassland'
//     | 'Aquatic'
//     | 'Island'
//     | 'Cave'
//     | 'Desert'
//     | '';
//   effectFunction?: string;
//   rarity: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare';
//   type?: string;
//   attackPower?: number;
//   hp?: number;
//   cost?: number;
// }

const MedievalCreaturesSet = () => {
  const globalCardSet = useCardSet();
  const [cardSet, setCardSet] = useState<Card[]>([]);
  const [filteredCards, setFilterCards] = useState<Card[]>([]);
  const [useFilter, setUseFilter] = useState<boolean>(false);
  const [cardsLoaded, setCardsLoaded] = useState(false);
  const activeSidebar = useSideBar();

  const [range, setRange] = useState('1');
  const [toggledGrid, setToggledGrid] = useState(false);
  const [gridValue, setGridValue] = useState('');

  const toggleGrid = (range: string) => {
    setToggledGrid(true);
    setGridValue(`grid-cols-${range}`);
  };

  useEffect(() => {
    console.log(range);
    const ranger = range;
    toggleGrid(range);
  }, [range]);

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
      // need to set card set as global state
      // globalCardSet.addCards(res);
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

  const filterCards = (inclination: string) => {
    const cards = cardSet.filter((card) => {
      return (
        card.inclination === inclination || card.inclination2 === inclination
      );
    });
    setFilterCards(cards);
    setUseFilter(true);
  };

  const filterCardTypes = (type: string) => {
    const cards = cardSet.filter((card) => {
      return card.type === type;
    });
    setFilterCards(cards);
    setUseFilter(true);
  };

  const toggleFilter = () => {
    setUseFilter(false);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='ml-12 self-start'>Medieval Creatures</h1>
      <div className='mx-8 md:mx-24 w-screen md:w-[80vw] flex justify-center items-center flex-wrap gap-2'>
        <button
          className='border-2 border-black rounded-xl px-4 cursor-pointer'
          onClick={toggleFilter}
        >
          All Cards
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#f58a87] via-[#B3989F] to-[#f58a87]'
          onClick={() => filterCards('Love')}
        >
          Love
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl via-[#5876b2] from-blue-800 to-cyan-900'
          onClick={() => filterCards('Wisdom')}
        >
          Wisdom
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl to-[#814242] via-red-800 from-[#75352F]'
          onClick={() => filterCards('Wrath')}
        >
          Wrath
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600'
          onClick={() => filterCards('Mischief')}
        >
          Mischief
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-amber-600 to-[#e0c05e]'
          onClick={() => filterCards('Pride')}
        >
          Pride
        </button>
        <button
          className=' text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#8d6f57] to-[#7a5135] via-[#654729]'
          onClick={() => filterCardTypes('Divine Intervention')}
        >
          Divine Interventions
        </button>
        <button
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#515031] to-[#929876] via-[#879464]'
          onClick={() => filterCardTypes('Relic')}
        >
          Relic
        </button>
      </div>
      {/* <div className='self-end mr-10'>
        <label htmlFor=''>Test</label>
        <input
          type='range'
          min='1'
          max='2'
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </div> */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 m-10`}
      >
        {cardsLoaded &&
          !useFilter &&
          cardSet.map((card, i) => {
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
        {filteredCards &&
          useFilter &&
          filteredCards.map((card, i) => {
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
      <CardDetailModal />
    </div>
  );
};

export default MedievalCreaturesSet;
