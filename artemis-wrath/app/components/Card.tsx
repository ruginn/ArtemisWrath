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
}

const CardElement = ({ card }: { card: Card }) => {
  return (
    <div
      className={cn(
        'h-96 w-72 bg-amber-200 flex flex-col rounded-xl items-center border-gray-800 border-8',
        card.inclination === 'Wrath' &&
          ' bg-gradient-to-bl to-red-600 via-red-800 from-[#75352F]',
        card.inclination === 'Wisdom' &&
          'bg-gradient-to-r via-[#5876b2] from-blue-800 to-cyan-900',
        card.inclination === 'Love' &&
          'bg-gradient-to-r from-pink-200 to-pink-400 bg-[#f58a87]',
        card.inclination === 'Mischief' &&
          'bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600',
        card.inclination === 'Pride' &&
          'bg-gradient-to-bl from-purple-600 to-indigo-500 via-[#454380]'
      )}
      key={card.id}
    >
      <div className='flex w-full flex-row justify-between'>
        <h1 className='text-l self-start ml-2 font-bold'>{card.name}</h1>
        <p className='mr-2'>{card.id}</p>
      </div>
      {card.image && (
        <Image
          src={card.image}
          alt=''
          width={256}
          height={256}
          placeholder='empty'
          className='object-cover rounded-lg border-4 border-gray-800'
          // className="w-60 h-auto"
        ></Image>
      )}
      <div className='w-[250px] h-[70px] border-2 border-black mt-3 rounded bg-gray-100 z-0 opacity-50'>
        <p className='text-[11px] leading-none'>{card.description}</p>
      </div>
    </div>
  );
};

export default CardElement;
