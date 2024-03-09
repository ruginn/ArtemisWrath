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
      <div className='flex flex-col md:flex-row w-full justify-center gap-8 m-8'>
        <div className='cursor-pointer w-full md:w-1/4 h-48 md:h-[650px] flex md:flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-300 hover:scale-105'>
          <div className='flex flex-col justify-center items-center ml-4 md:ml-0'>
            <h1 className='text-lg md:text-2xl text-amber-400'>Small Chest</h1>
            <Image
              src={smallChest}
              width={256}
              height={256}
              alt='smallChest'
              className='rounded-3xl border-amber-400 border-solid border-2 h-36 w-36 md:h-64 md:w-64'
            ></Image>
          </div>
          <div className='ml-5 sm:ml-0 flex flex-col justify-center items-center'>
            <h3 className='text-md text-amber-400'>500 Crystals</h3>
            <h3 className='text-md text-amber-400'>$4.99</h3>
          </div>
        </div>
        <div className='cursor-pointer w-full md:w-1/4 h-48 md:h-[650px] flex md:flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-300 hover:scale-105'>
          <div className='flex flex-col justify-center items-center ml-4 md:ml-0'>
            <h1 className='text-lg md:text-2xl text-amber-400'>Medium Chest</h1>
            <Image
              src={mediumChest}
              width={256}
              height={256}
              alt='smallChest'
              className='rounded-3xl border-amber-400 border-solid border-2 h-36 w-36 md:h-64 md:w-64'
            ></Image>
          </div>
          <div className='ml-5 sm:ml-0 flex flex-col justify-center items-center'>
            <h3 className='text-md text-amber-400'>1200 Crystals</h3>
            <h3 className='text-md text-amber-400'>$9.99</h3>
          </div>
        </div>
        <div className='cursor-pointer w-full md:w-1/4 h-48 md:h-[650px] flex md:flex-col items-center bg-gray-900 rounded-3xl border-4 border-gray-300 hover:scale-105'>
          <div className='flex flex-col justify-center items-center ml-4 md:ml-0'>
            <h1 className='text-lg md:text-2xl text-amber-400'>Large Chest</h1>
            <Image
              src={largeChest}
              width={256}
              height={256}
              alt='smallChest'
              className='rounded-3xl border-amber-400 border-solid border-2 h-36 w-36 md:h-64 md:w-64'
            ></Image>
          </div>
          <div className='ml-5 sm:ml-0 flex flex-col justify-center items-center'>
            <h3 className='text-md text-amber-400'>2500 Crystals</h3>
            <h3 className='text-md text-amber-400'>$19.99</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
