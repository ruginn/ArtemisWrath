'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/types/CardType';
import CardElement from '@/app/components/Card';
import { useUser } from '@clerk/nextjs';

const Trade = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [yourCards, setYourCards] = useState<Card[]>([]);
  const { user } = useUser();
  useEffect(() => {
    fetch('');
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const res: Card[] = await fetch('/api/allcards', {
        cache: 'no-cache',
      }).then((res) => res.json());
      console.log(res);
      setAllCards(res);
    };
    const userData = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    const GetYourCards = async () => {
      const res: Card[] = await fetch('/api/user/usercards', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Context-Type': 'application/json',
        },
        cache: 'no-cache',
      }).then((res) => res.json());
      console.log(res);
      setYourCards(res);
    };
    getCards();
    GetYourCards();
  }, []);

  if (allCards.length > 1) {
    return (
      <div>
        <h1>Which card(s) are you looking for?</h1>
        <label>Filter Cards</label>
        <input type='text' className='outline-1 border-2' />
        <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md'>
          {allCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
        <h1>Which card(s) are you offering?</h1>
        <label>Filter Cards</label>
        <input type='text' className='outline-1 border-2' />
        <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md'>
          {yourCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }

  return <div>there are no cards</div>;
};

export default Trade;
