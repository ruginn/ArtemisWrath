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
      <div className='flex w-full justify-center gap-[10%] mt-8'>
        <div className='cursor-pointer'>
          <Image
            src={smallChest}
            width={256}
            height={256}
            alt='smallChest'
            className='rounded-3xl border-amber-400 border-solid border-8'
          ></Image>
        </div>
        <div className='cursor-pointer'>
          <Image
            src={mediumChest}
            width={256}
            height={256}
            alt='smallChest'
            className='rounded-3xl border-amber-400 border-solid border-8'
          ></Image>
        </div>
        <div className='cursor-pointer'>
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
