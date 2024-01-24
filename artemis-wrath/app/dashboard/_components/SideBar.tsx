'use client';
import { useSideBar } from '@/hooks/use-sidebar';
import {
  Calendar,
  ArrowRightLeft,
  Shield,
  Swords,
  Settings,
  Layers,
  Library,
  Home,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { useUserInfo } from '@/hooks/use-userInfo';

const SideBar = () => {
  const activeSidebar = useSideBar();
  const clickSideTab = (page: string) => {
    activeSidebar.onChange(page);
    if (activeSidebar.mobile === true) {
      activeSidebar.toggleMobileClose();
    }
  };
  const { user } = useUser();
  const userInfo = useUserInfo();

  const userLogin = async () => {
    const userData = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const finRes = await res.json();
    userInfo.UpdateAll(finRes);
  };

  const sideBarRef = useRef<any>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!sideBarRef.current.contains(e.target)) {
        activeSidebar.toggleMobileClose();
      } else {
        console.log('clicked inside');
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    if (user) {
      userLogin();
    }
  }, [user]);

  const closeSideBar = () => {
    if (activeSidebar.mobile === true) {
      activeSidebar.toggleMobileClose();
    }
  };

  return (
    <div
      ref={sideBarRef}
      className={cn(
        'w-64 sm:w-24 lg:w-64 h-[calc(100vh-80px)]  fixed bg-gray-900 text-amber-400 z-[99999]',
        !activeSidebar.mobile && 'hidden sm:block'
      )}
    >
      <Link
        href={'/dashboard'}
        onClick={() => {
          clickSideTab('home');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'home' && 'bg-gray-700'
          )}
        >
          <Home className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Home
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/dailypack'}
        onClick={() => {
          clickSideTab('dailypack');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'dailypack' && 'bg-gray-700'
          )}
        >
          <Calendar className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Daily Pack
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/collection'}
        onClick={() => {
          clickSideTab('collection');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'collection' && 'bg-gray-700'
          )}
        >
          <Layers className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Collection
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/exploresets'}
        onClick={() => {
          clickSideTab('explore');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'explore' && 'bg-gray-700'
          )}
        >
          <Globe className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Explore Sets
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/deckbuilder'}
        onClick={() => {
          clickSideTab('deckbuilder');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'deckbuilder' && 'bg-gray-700'
          )}
        >
          <Library className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Deck Builder
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/tradecenter'}
        onClick={() => {
          clickSideTab('tradecenter');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'tradecenter' && 'bg-gray-700'
          )}
        >
          <ArrowRightLeft className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Trade Center
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/guild'}
        onClick={() => {
          clickSideTab('guild');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'guild' && 'bg-gray-700'
          )}
        >
          <Shield className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Guild
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/battle'}
        onClick={() => {
          clickSideTab('battle');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'battle' && 'bg-gray-700'
          )}
        >
          <Swords className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Battle
          </h3>
        </div>
      </Link>
      <Link
        href={'/dashboard/settings'}
        onClick={() => {
          clickSideTab('settings');
        }}
      >
        <div
          className={cn(
            'w-11/12 flex sm:flex-col flex-row lg:flex-row items-center justify-start sm:justify-center lg:justify-start ml-4 sm:ml-1 lg:ml-4 cursor-pointer rounded-md hover:bg-gray-700 py-1 pl-2 sm:pl-0 lg:pl-2 my-1',
            activeSidebar.selected === 'settings' && 'bg-gray-700'
          )}
        >
          <Settings className='lg:mr-2' />
          <h3 className='text-[18px] ml-3 sm:ml-0 sm:text-[12px] lg:ml-3 lg:text-[18px]'>
            Settings
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
