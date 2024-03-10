'use client';
import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { useUser } from '@clerk/nextjs';
import { PlayerCard } from '@/types/PlayerCardType';
import CardElement from '@/app/components/Card';

const Collection = () => {
  const activeSidebar = useSideBar();
  const { user } = useUser();
  const [userCards, setUserCards] = useState<PlayerCard[]>();
  useEffect(() => {
    activeSidebar.onChange('collection');
  }, []);

  useEffect(() => {
    getCards();
  });

  const getCards = async () => {
    const userData = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    const res = await fetch('/api/user/usercards', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Context-Type': 'application/json',
      },
      cache: 'no-cache',
    });

    const usersCards = await res.json();
    setUserCards(usersCards);
  };

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      <h1 className='text-5xl'>Collection</h1>
      {/* <button onClick={getCards}>click me</button> */}
      {userCards ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
          {userCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      ) : (
        <h1>no cards</h1>
      )}
    </div>
  );
};

export default Collection;
