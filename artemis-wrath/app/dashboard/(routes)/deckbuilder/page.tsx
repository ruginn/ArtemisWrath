'use client';

import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const DeckBuilder = () => {
  const activeSidebar = useSideBar();
  useEffect(() => {
    activeSidebar.onChange('deckbuilder');
  }, []);
  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] bg-green-400'>
      <h1 className='text-red-500'>Deck Builder</h1>
    </div>
  );
};

export default DeckBuilder;
