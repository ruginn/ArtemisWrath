import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Divide } from 'lucide-react';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  inclination2?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  effect?: string;
  biome?:
    | 'Jungle'
    | 'Tundra'
    | 'Alpine'
    | 'Forest'
    | 'Wetland'
    | 'Grassland'
    | 'Aquatic'
    | 'Island'
    | 'Cave'
    | 'Desert'
    | '';
  effectFunction?: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare';
  type?: string;
  attackPower?: number;
  hp?: number;
  cost?: number;
}

const CardElement = ({ card }: { card: Card }) => {
  return (
    <div
      className={cn(
        'h-[400.5px] w-72 bg-amber-200 flex flex-col rounded-xl items-center border-gray-800 border-8 relative',
        card.inclination === 'Wrath' &&
          ' bg-gradient-to-bl to-[#814242] via-red-800 from-[#75352F]',
        card.inclination === 'Wisdom' &&
          'bg-gradient-to-bl via-[#5876b2] from-blue-800 to-cyan-900',
        card.inclination === 'Love' &&
          'bg-gradient-to-bl from-[#f58a87] via-[#B3989F] to-[#f58a87]',
        card.inclination === 'Mischief' &&
          'bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600',
        card.inclination === 'Pride' &&
          'bg-gradient-to-bl from-[#686A81] to-indigo-900 via-[#454380]',
        card.inclination2 === 'Love' && 'to-[#f58a87]',
        card.inclination2 === 'Wisdom' && 'to-[#5876b2]',
        card.inclination2 === 'Wrath' && 'to-[#814242]',
        card.inclination2 === 'Mischief' && 'to-[#3f392c]',
        card.inclination2 === 'Pride' && 'to-[#454380]'
      )}
      key={card.id}
    >
      {/* <div className='flex w-full flex-row justify-between'> */}
      {/* <h1 className='text-l self-start ml-2 font-extrabold'>{card.name}</h1> */}
      {/* <p className='mr-2'>{card.id}</p> */}
      {/* </div> */}
      {card.type === 'creature' && (
        <div className='absolute rounded-full bg-amber-200 text-black w-10 h-10 flex justify-center items-center right-0.5 top-0.5 border-4 border-gray-800 font-serif'>
          {card.cost}
        </div>
      )}
      {card.image && card.type === 'creature' && (
        <Image
          src={card.image}
          alt=''
          width={256}
          height={256}
          placeholder='empty'
          className='object-cover rounded-lg border-4 border-gray-800 mt-2'
          // className="w-60 h-auto"
        ></Image>
      )}
      {card.image && card.type === 'Immortal' && (
        <Image
          src={card.image}
          alt=''
          width={256}
          height={256}
          placeholder='empty'
          className='object-cover h-[368px] rounded-lg border-4 border-gray-800 mt-2'
          // className="w-60 h-auto"
        ></Image>
      )}
      {card.type === 'creature' && (
        <div className='flex w-full flex-row justify-between items-center'>
          <h1 className='text-sm self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.name}
          </h1>
          <p className='text-[11px] mr-2  text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.biome}
          </p>
        </div>
      )}
      {card.type === 'creature' && (
        <div className='w-[260px] h-[90px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50 '>
          <p className='px-1 pt-1 text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.description}
          </p>
        </div>
      )}
      {card.type === 'creature' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            MC-{card.id}/126
          </p>
          <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.rarity?.split('')[0]}
          </p>
        </div>
      )}
      {card.type === 'Immortal' && (
        <div className='absolute bottom-2 w-[255px] h-[90px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50 '></div>
      )}
      {card.type === 'Immortal' && (
        <div className='absolute bottom-2 w-[255px] h-[90px] border-2 border-black mt-1 rounded'>
          <h1 className='text-base self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.name}
          </h1>
          <p className='pl-3 text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardElement;
