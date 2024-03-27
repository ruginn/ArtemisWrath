'use client';
import SideBar from './_components/SideBar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

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
          {children}
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default layout;
