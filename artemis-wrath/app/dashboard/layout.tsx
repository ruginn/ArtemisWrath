'use client';
import SideBar from './_components/SideBar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import background from '@/public/Images/backgrounds/background2.png';
import Image from 'next/image';

const layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div className='flex'>
      <SideBar />
      <div
        className='sm:ml-24 lg:ml-64 
      '
      >
        <QueryClientProvider client={queryClient}>
          {/* <div className='bg-[#181818c0] w-[100vw] h-[100vh] fixed -z-10'></div> */}
          <Image
            src={background}
            width={1000}
            height={1000}
            alt='background'
            className='w-[100vw] h-[100vh] object-cover fixed -z-20 blur-sm'
          ></Image>
          <div className='relative'>{children}</div>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default layout;
