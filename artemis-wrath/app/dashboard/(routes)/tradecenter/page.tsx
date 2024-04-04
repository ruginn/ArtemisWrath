'use client';
import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TradeCenter = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('tradecenter');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] bg-slate-300'>
      <h1>Trade Center</h1>
      <div className='flex flex-row w-full justify-center gap-1 sm:gap-8'>
        <Button>
          <Link href={'tradecenter/active'}>View Active Trades</Link>
        </Button>
        <Button>Open a Trade</Button>
        <Button>
          <Link href={'tradecenter/history'}>View Trade History</Link>
        </Button>
      </div>
    </div>
  );
};

export default TradeCenter;
