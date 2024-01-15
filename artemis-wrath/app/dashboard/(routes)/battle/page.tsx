'use client';
import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const Battle = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('battle');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] bg-red-400'>
      Battle
    </div>
  );
};

export default Battle;
