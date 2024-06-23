'use client';

import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Loader from '../../_components/Loader';

const House = () => {
  const activeSidebar = useSideBar();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    activeSidebar.onChange('guild');
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      <h1>House</h1>
      <Button>
        <Link href='/dashboard/house/create' onClick={() => setLoading(true)}>
          Create a House
        </Link>
      </Button>
      <Button>
        <Link href='/dashboard/house/browse' onClick={() => setLoading(true)}>
          Browse Houses
        </Link>
      </Button>
    </div>
  );
};

export default House;
