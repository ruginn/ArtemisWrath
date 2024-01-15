'use client';

import { useEffect } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';

const Settings = () => {
  const activeSidebar = useSideBar();

  useEffect(() => {
    activeSidebar.onChange('settings');
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      Settings
    </div>
  );
};

export default Settings;
