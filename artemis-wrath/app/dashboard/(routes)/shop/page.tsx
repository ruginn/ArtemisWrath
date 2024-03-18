'use client';

import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import smallChest from '@/public/Images/crystalChests/smallChest.png';
import mediumChest from '@/public/Images/crystalChests/mediumChest.png';
import largeChest from '@/public/Images/crystalChests/largeChest.png';
import Image from 'next/image';
import Crystals from './_components/Crystals';
import ShopPacks from './_components/Packs';
import ShopDecks from './_components/Decks';
import Bundles from './_components/Bundles';

const Settings = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('shop');
  }, []);

  const [shopPanel, setShopPanel] = useState<String>('Pack');

  const crystalPanel = () => {
    setShopPanel('Crystal');
  };

  const PackPanel = () => {
    setShopPanel('Pack');
  };
  const BundlePanel = () => {
    setShopPanel('Bundle');
  };
  const DeckPanel = () => {
    setShopPanel('Deck');
  };

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center justify-center'>
      <h1 className='text-6xl'>Welcome to the Shop!</h1>
      <div className='flex gap-8 cursor-pointer text-2xl'>
        <p className='hover:scale-110 select-none' onClick={PackPanel}>
          Packs
        </p>
        <p className='hover:scale-110 select-none' onClick={DeckPanel}>
          Decks
        </p>
        <p className='hover:scale-110 select-none' onClick={crystalPanel}>
          Crystals
        </p>
        <p className='hover:scale-110 select-none' onClick={BundlePanel}>
          Bundles
        </p>
      </div>
      {shopPanel === 'Crystal' && <Crystals />}
      {shopPanel === 'Pack' && <ShopPacks />}
      {shopPanel === 'Bundle' && <Bundles />}
      {shopPanel === 'Deck' && <ShopDecks />}
    </div>
  );
};

export default Settings;
