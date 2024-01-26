import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
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
        'h-96 w-72 bg-amber-200 flex flex-col rounded-xl items-center border-gray-800 border-8 relative',
        card.inclination === 'Wrath' &&
          ' bg-gradient-to-bl to-red-600 via-red-800 from-[#75352F]',
        card.inclination === 'Wisdom' &&
          'bg-gradient-to-r via-[#5876b2] from-blue-800 to-cyan-900',
        card.inclination === 'Love' &&
          'bg-gradient-to-r from-[#f58a87] to-pink-700 via-[#f58a87]',
        card.inclination === 'Mischief' &&
          'bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600',
        card.inclination === 'Pride' &&
          'bg-gradient-to-bl from-purple-600 to-indigo-500 via-[#454380]'
      )}
      key={card.id}
    >
      {/* <div className='flex w-full flex-row justify-between'> */}
      {/* <h1 className='text-l self-start ml-2 font-extrabold'>{card.name}</h1> */}
      {/* <p className='mr-2'>{card.id}</p> */}
      {/* </div> */}
      <div className='absolute rounded-full bg-amber-200 text-black w-10 h-10 flex justify-center items-center right-0.5 top-0.5 border-4 border-gray-800 font-serif'>
        {card.cost}
      </div>
      {card.image && (
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
      <div className='flex w-full flex-row justify-between items-center'>
        <h1 className='text-sm self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          {card.name}
        </h1>
        <p className='text-[11px] mr-2  text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          {card.biome}
        </p>
      </div>
      <div className='w-[260px] h-[70px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50'>
        <p className='text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
          {card.description}
        </p>
      </div>
      <div className='flex flex-row w-full justify-between items-center'>
        <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
          MC-{card.id}/126
        </p>
        <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
          {card.rarity?.split('')[0]}
        </p>
      </div>
    </div>
  );
};

export default CardElement;
