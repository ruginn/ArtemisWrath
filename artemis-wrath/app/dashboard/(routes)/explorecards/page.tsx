'use client';
import Image, { StaticImageData } from 'next/image';
import AwSet1 from '@/public/Images/Packs/AWset1.jpg';
import AwSet2 from '@/public/Images/Packs/AWset2CS.png';
import AwSet3 from '@/public/Images/Packs/AWset3CS.png';
import NightmareRequiem from '@/public/Images/starterDecks/nightmareRequiem.png';
import RealmOfTime from '@/public/Images/starterDecks/realmOfTime.png';
import Link from 'next/link';
import MedievalCreaturesSet from './medievalcreatures/page';
import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const ExploreSets = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('explore');
  }, []);
  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center'>
      <h1 className='text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px]'>
        Explore Cards
      </h1>
      <h1 className='text-2xl'>Starter Decks</h1>
      <div className='flex flex-col sm:flex-row gap-4 w-full justify-center items-center my-4'>
        <Link
          href={'/dashboard/explorecards/nightmarerequiem'}
          className='w-10/12 sm:w-[20%] h-auto hover:scale-105'
        >
          <Image
            src={NightmareRequiem}
            alt='Nightmare Requiem'
            className='border-4 border-amber-400 cursor-pointer rounded-md'
          />
        </Link>
        <Link
          href={'/dashboard/explorecards/realmoftime'}
          className='w-10/12 sm:w-[20%] h-auto hover:scale-105'
        >
          <Image
            src={RealmOfTime}
            alt='Realm of Time'
            className='border-4 border-amber-400 cursor-pointer rounded-md'
          />
        </Link>
      </div>
      <h1 className='text-2xl'>Card Sets</h1>
      <div className='flex flex-col sm:flex-row gap-4 w-full justify-center items-center my-4'>
        <Link
          href={'/dashboard/explorecards/medievalcreatures'}
          className='w-10/12 sm:w-[20%] h-auto hover:scale-105'
        >
          <Image
            src={AwSet1}
            alt='Medieval Creatures'
            className='border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
        </Link>
        <Image
          src={AwSet2}
          alt='Bushido Blades'
          className='w-10/12 sm:w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer  hover:scale-105'
        />
        <Image
          src={AwSet3}
          alt='Desert Past'
          className='w-10/12 sm:w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer  hover:scale-105'
        />
      </div>
    </div>
  );
};

export default ExploreSets;
