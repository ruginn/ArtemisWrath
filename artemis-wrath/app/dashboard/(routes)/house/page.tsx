'use client';

import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const House = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('guild');
  }, []);
  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      <h1>House</h1>
      <Button>
        <Link href='/dashboard/house/create'>Create a House</Link>
      </Button>
      <Button>
        <Link href='/dashboard/house/browse'>Browse Houses</Link>
      </Button>
    </div>
  );
};

export default House;
