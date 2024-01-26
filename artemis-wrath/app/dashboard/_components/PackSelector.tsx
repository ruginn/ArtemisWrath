'use client';
import { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import AwSet1 from '@/public/Images/Packs/AWset1.jpg';
import AwSet2 from '@/public/Images/Packs/AWset2CS.png';
import AwSet3 from '@/public/Images/Packs/AWset3CS.png';
import { useUser } from '@clerk/nextjs';
import CardElement from '@/app/components/Card';
import { useUserInfo } from '@/hooks/use-userInfo';
import { useCollectedCards } from '@/hooks/use-collectedCards';

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
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare';
  type?: string;
  attackPower?: number;
  hp?: number;
  cost?: number;
}

interface Props {
  todayDate: string;
}

const PackSelector: FC<Props> = (props) => {
  const [selectedPack, setSelectedPack] = useState(false);
  const { user } = useUser();
  const gatheredCards = useCollectedCards();
  // const [collectedCards, setCollectedCards] = useState<Card[]>([{id: 1, name: 'fsda', description: 'fsda', randomNumber: 1, image: AwSet1}])
  const [collectedCards, setCollectedCards] = useState<Card[]>([]);
  const [getCards, setGetCards] = useState<boolean>(false);
  const userInfo = useUserInfo();

  const CollectPack = async () => {
    const userData = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    const res = await fetch('/api/cardpack/medievalcreatures', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Context-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    // .then((res) => res.json())
    const cards: Card[] = await res.json();
    // console.log(typeof cards === 'object')
    if (typeof cards === 'object') {
      setCollectedCards(cards);
      gatheredCards.addCards(cards);
      gatheredCards.setCollected(true);
      setGetCards(true);
      setTimeout(() => {
        userInfo.UpdateLastPack(props.todayDate);
      }, 2000);
      console.log(collectedCards);
    } else {
      setGetCards(false);
      gatheredCards.setCollected(false);
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px]'>
        Select your daily pack
      </h1>
      {!selectedPack && (
        <div className='flex flex-row gap-4 w-full justify-center'>
          <Image
            src={AwSet1}
            alt='Medieval Creatures'
            className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
            onClick={CollectPack}
          />
          <Image
            src={AwSet2}
            alt='Bushido Blades'
            className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
          <Image
            src={AwSet3}
            alt='Desert Past'
            className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
        </div>
      )}
      {selectedPack && (
        <div>
          <h3>You have already selected your pack for the day</h3>
        </div>
      )}
      <div className='grid grid-cols-4 gap-5 m-10'>
        {/* {getCards && 
                    collectedCards.map((card) => {
                        return (
                            // <div className="h-96 w-64 bg-amber-200 flex flex-col rounded-md items-center" key={card.id}>

                            //     <h1 className="text-l self-start">{card.name}</h1>
                            //     {card.image &&
                            //     <Image 
                            //     src={card.image}
                            //     alt=''
                            //     width={256}
                            //     height={800}
                            //     // className="w-60 h-auto"
                            //     ></Image>
                            // }
                            //     <div className="w-[250px] h-[80px] border-2 border-black mt-3 rounded">
                            //         <p className="text-sm leading-none">{card.description}</p>
                            //     </div>
                            // </div>
                            <CardElement card={card} key={card.id}/>
                        )
                    })
                } */}
      </div>
    </div>
  );
};

export default PackSelector;
