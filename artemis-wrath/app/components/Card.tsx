import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { useCardModal } from '@/hooks/use-cardModal';
import CardDetailModal from './CardDetailModal';
import { useCardSet } from '@/hooks/use-cardSets';
import { Card } from '@/types/CardType';
import { motion } from 'framer-motion';

const CardElement = ({ card }: { card: Card }) => {
  const CardModal = useCardModal();

  const globalCardSet = useCardSet();

  const onOpenModal = () => {
    globalCardSet.addCards([card]);
    console.log(globalCardSet.cards);
    CardModal.onOpen();
    // console.log(CardModal);
  };

  if (card.tinyImage) {
    return (
      <motion.div
        whileHover={{
          translateY: -8,
          transition: { duration: 0.1 },
        }}
      >
        <Image
          src={card.tinyImage}
          height={400.5}
          width={288}
          alt={card.name ? card.name : 'card'}
          className='object-contain cursor-pointer'
          onClick={onOpenModal}
        ></Image>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        'h-[400.5px] w-72 bg-amber-200 flex flex-col rounded-xl items-center border-gray-800 border-8 relative cursor-pointer',
        card.inclination === 'Wrath' &&
          ' bg-gradient-to-bl to-[#814242] via-red-800 from-[#75352F]',
        card.inclination === 'Wisdom' &&
          'bg-gradient-to-bl via-[#5876b2] from-blue-800 to-cyan-900',
        card.inclination === 'Love' &&
          'bg-gradient-to-bl from-[#f58a87] via-[#B3989F] to-[#f58a87]',
        card.inclination === 'Mischief' &&
          'bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600',
        card.inclination === 'Pride' &&
          // 'bg-gradient-to-bl from-[#686A81] to-indigo-900 via-[#454380]',
          'bg-gradient-to-bl from-amber-600 to-[#e0c05e]',
        card.type === 'Divine Intervention' &&
          // 'bg-gradient-to-bl from-green-900 to-emerald-800 via-teal-700',
          'bg-gradient-bl from-[#8d6f57] to-[#7a5135] via-[#654729]',
        card.type === 'Relic' &&
          'bg-gradient-to-bl from-[#515031] to-[#929876] via-[#879464]',
        card.inclination2 === 'Love' && 'to-[#f58a87]',
        card.inclination2 === 'Wisdom' && 'to-[#5876b2]',
        card.inclination2 === 'Wrath' && 'to-[#814242]',
        card.inclination2 === 'Mischief' && 'to-[#3f392c]',
        card.inclination2 === 'Pride' && 'to-[#e0c05e]'
      )}
      key={card.id}
      onClick={onOpenModal}
    >
      {/* <div className='flex w-full flex-row justify-between'> */}
      {/* <h1 className='text-l self-start ml-2 font-extrabold'>{card.name}</h1> */}
      {/* <p className='mr-2'>{card.id}</p> */}
      {/* </div> */}
      {card.type === 'creature' && (
        <div className='absolute rounded-full bg-amber-200 text-black w-10 h-10 flex justify-center items-center right-0.5 top-0.5 border-4 border-gray-800 font-serif text-2xl'>
          <p className='font-bold'>{card.cost}</p>
        </div>
      )}
      {card.type === 'Divine Intervention' && (
        <div className='absolute rounded-full bg-amber-200 text-black w-10 h-10 flex justify-center items-center right-0.5 top-0.5 border-4 border-gray-800 font-serif text-2xl'>
          <p className='font-bold'>{card.cost}</p>
        </div>
      )}
      {card.type === 'Relic' && (
        <div className='absolute rounded-full bg-amber-200 text-black w-10 h-10 flex justify-center items-center right-0.5 top-0.5 border-4 border-gray-800 font-serif text-2xl'>
          <p className='font-bold'>{card.cost}</p>
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
      {card.image && card.type === 'Divine Intervention' && (
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
      {card.image && card.type === 'Relic' && (
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
      {card.image && card.type === 'Nectar' && (
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
      {card.type === 'Divine Intervention' && (
        <div className='flex w-full flex-row justify-between items-center'>
          <h1 className='text-sm self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.name}
          </h1>
        </div>
      )}
      {card.type === 'Relic' && (
        <div className='flex w-full flex-row justify-between items-center'>
          <h1 className='text-sm self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.name}
          </h1>
        </div>
      )}
      {card.type === 'creature' && (
        <div className='flex flex-col w-[260px] h-[90px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50 justify-between items-center'>
          {card.effect && (
            <p className='px-1 pt-[2px] text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
              <span className='font-black'>Effect: </span>
              {card.effect}
            </p>
          )}
          <p className='px-1 pt-[2px] text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {!card.effect ? card.description : ''}
          </p>
          <div className='w-[98%] flex flex-row text-base justify-between px-3 mb-1'>
            <div className='flex flex-row'>
              <p className='font-extrabold mr-1'>Life:</p>
              <p>{card.hp}</p>
            </div>
            <div className='flex flex-row'>
              <p className='font-extrabold mr-1'>Attack:</p>
              <p>{card.attackPower}</p>
            </div>
          </div>
        </div>
      )}
      {card.type === 'Divine Intervention' && (
        <div className='flex flex-col w-[260px] h-[90px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50 justify-between items-center'>
          <p className='px-1 pt-[2px] text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.description}
          </p>
        </div>
      )}
      {card.type === 'Relic' && (
        <div className='flex flex-col w-[260px] h-[90px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50 justify-between items-start'>
          <p className='px-1 pt-[2px] text-[11px] leading-none  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.description}
          </p>
        </div>
      )}
      {card.type === 'creature' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            ROT-{card.id}/16
          </p>
          <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.rarity?.split('')[0]}
          </p>
        </div>
      )}
      {card.type === 'Immortal' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            ROT-{card.id}/16
          </p>
          <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.rarity?.split('')[0]}
          </p>
        </div>
      )}
      {card.type === 'Divine Intervention' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            ROT-{card.id}/16
          </p>
          <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.rarity?.split('')[0]}
          </p>
        </div>
      )}
      {card.type === 'Relic' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            ROT-{card.id}/16
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
          <p className='pl-3 text-[10px] leading-none text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.description}
          </p>
        </div>
      )}
      {card.type === 'Nectar' && (
        <div className='absolute bottom-2 w-[255px] h-[30px] border-2 border-black mt-1 rounded bg-gray-100 z-0 opacity-50'></div>
      )}
      {card.type === 'Nectar' && (
        <div className='absolute bottom-2 w-[255px] h-[30px] border-2 border-black mt-1 rounded flex justify-center items-center'>
          <h1 className='text-xl self-start ml-2 font-extrabold text-amber-200 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {card.name}
          </h1>
        </div>
      )}
      {card.type === 'Nectar' && (
        <div className='flex flex-row w-full justify-between items-center'>
          <p className='leading-none ml-1 text-[8px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)] font-sans'>
            ROT-{card.id}/16
          </p>
          <p className='leading-none mr-1 text-[10px] font-bold  text-black drop-shadow-[1.2px_1.2px_1.2px_rgba(255,255,255,0.8)]'>
            {card.rarity?.split('')[0]}
          </p>
        </div>
      )}
      {/* <CardDetailModal /> */}
    </div>
  );
};

export default CardElement;
