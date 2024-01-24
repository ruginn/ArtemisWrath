'use client';
import Logo from '@/public/Images/AWLOGO2.png';
import WordLogo from '@/public/Images/WordLogo.png';
import Image from 'next/image';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { useSideBar } from '@/hooks/use-sidebar';

const NavBar = () => {
  const sidebar = useSideBar();

  const toggleSidebar = () => {
    if (sidebar.mobile === false) {
      sidebar.toggleMobileOpen();
      console.log('open', sidebar.mobile);
    } else {
      sidebar.toggleMobileClose();
      console.log('close', sidebar.mobile);
    }
  };

  return (
    // <nav className='h-24 flex items-center bg-gradient-to-r from-sky-950 via-cyan-950 to-gray-900'>
    <nav className='h-20 flex items-center bg-gray-900 justify-between fixed z-[99999] w-full -mt-20'>
      {/* <p className='from-sky-950 via-cyan-950 to-gray-900'></p> */}
      <div className='flex flex-row items-center sm:ml-5 ml-3'>
        <SignedIn>
          <Menu
            onClick={toggleSidebar}
            className='sm:hidden text-amber-400 w-8 h-8 mr-3 cursor-pointer'
          />
        </SignedIn>
        <Image src={Logo} alt='Logo' className='w-14 h-14 sm:w-16 sm:h-16' />
        <Image
          src={WordLogo}
          alt="Artemis' Wrath"
          className='h-8 w-56 ml-1 sm:h-10 sm:w-64 sm:ml-3'
        />
        {/* <h1 className="text-white ml-2">Artemis&apos; Wrath</h1> */}
      </div>
      <div>
        <button className='text-lg text-amber-400 sm:mr-5 mr-2'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal' />
          </SignedOut>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
