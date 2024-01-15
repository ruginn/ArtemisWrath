'use client';

import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const Guild = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('guild');
  }, []);
  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      <h1>Guild</h1>
    </div>
  );
};

export default Guild;
