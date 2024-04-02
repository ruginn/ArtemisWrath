'use client';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useUserInfo } from '@/hooks/use-userInfo';
import StarterDeckModal from '../components/StarterDeckModal';
import { useStarterDeck } from '@/hooks/use-starterDeck';

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const userInfo = useUserInfo();
  const starterDeck = useStarterDeck();
  const [collectedSD, setCollectedSD] = useState<boolean>(true);

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
    console.log(isLoaded, userInfo.starterDeck);
    if (userInfo.starterDeck) {
      ('it is false');
      setCollectedSD(false);
    }
    if (!collectedSD) {
      console.log('it is true');
      starterDeck.onOpen();
    }
  }, [userInfo]);

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center'>
      <h1 className='text-7xl'>Welcome {userInfo?.name.split(' ')[0]}!</h1>
      {!collectedSD && <StarterDeckModal />}
    </div>
  );
};

export default Dashboard;
