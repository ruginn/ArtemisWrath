'use client';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useUserInfo } from '@/hooks/use-userInfo';
import StarterDeckModal from '../components/StarterDeckModal';
import { useStarterDeck } from '@/hooks/use-starterDeck';

const Dashboard = () => {
  const { user } = useUser();
  const userInfo = useUserInfo();
  const starterDeck = useStarterDeck();

  // const userLogin = async () => {
  //     const userData = {
  //         id: user?.id,
  //         firstName: user?.firstName,
  //         lastName: user?.lastName,
  //     }
  //     const res = await fetch('api/auth', {
  //         method: 'POST',
  //         body: JSON.stringify(userData),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         cache: 'no-cache'
  //     })
  //     const finRes = await res.json()
  //     userInfo.UpdateAll(finRes)
  // }

  // useEffect(() => {
  //     if (user) {
  //         userLogin()
  //     }
  // },[user])

  useEffect(() => {
    if (!userInfo.starterDeck) {
      starterDeck.onOpen();
    }
  }, []);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center'>
      <h1 className='text-7xl'>Welcome {userInfo?.name.split(' ')[0]}!</h1>
      {!userInfo.starterDeck && <StarterDeckModal />}
    </div>
  );
};

export default Dashboard;
