'use client';
import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const Collection = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('collection');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] bg-red-400'>
      <h1>Collection</h1>
    </div>
  );
};

export default Collection;
