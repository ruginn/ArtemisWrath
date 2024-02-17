'use client';

import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import smallChest from '@/public/Images/crystalChests/smallChest.png';
import mediumChest from '@/public/Images/crystalChests/mediumChest.png';
import largeChest from '@/public/Images/crystalChests/largeChest.png';
import Image from 'next/image';

const Settings = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('shop');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center justify-center'>
      <h1 className='text-6xl'>Welcome to the Shop!</h1>
      <div className='flex w-full justify-center gap-[10%] m-8'>
        <div className='cursor-pointer w-1/4 h-[500px] flex flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-500'>
          <h1 className='text-2xl text-amber-400'>Small Chest</h1>
          <Image
            src={smallChest}
            width={256}
            height={256}
            alt='smallChest'
            className='rounded-3xl border-amber-400 border-solid border-8'
          ></Image>
        </div>
        <div className='cursor-pointer w-1/4 h-[500px] flex flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-500'>
          <h1 className='text-2xl text-amber-400'>Medium Chest</h1>
          <Image
            src={mediumChest}
            width={256}
            height={256}
            alt='smallChest'
            className='rounded-3xl border-amber-400 border-solid border-8'
          ></Image>
        </div>
        <div className='cursor-pointer w-1/4 h-[500px] flex flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-500'>
          <h1 className='text-2xl text-amber-400'>Large Chest</h1>
          <Image
            src={largeChest}
            width={256}
            height={256}
            alt='smallChest'
            className='rounded-3xl border-amber-400 border-solid border-8'
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Settings;
