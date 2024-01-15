'use client';
import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const TradeCenter = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('tradecenter');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] bg-green-300'>
      <h1>Trade Center</h1>
    </div>
  );
};

export default TradeCenter;
