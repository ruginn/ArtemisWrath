'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/types/CardType';
import CardElement from '@/app/components/Card';
import { useUser } from '@clerk/nextjs';
import Loader from '@/app/dashboard/_components/Loader';

const Trade = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [loadingAllCards, setLoadingAllCards] = useState<boolean>(true);
  const [yourCards, setYourCards] = useState<Card[]>([]);
  const [loadingYourCards, setLoadingYourCards] = useState<boolean>(true);
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
      setLoadingAllCards(false);
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
      setLoadingYourCards(false);
    };
    getCards();
    GetYourCards();
  }, []);

  return (
    <div>
      <h1>Which card(s) are you looking for?</h1>
      <label>Filter Cards</label>
      <input type='text' className='outline-1 border-2' />
      <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md justify-center items-center'>
        {loadingAllCards && <Loader />}
        {!loadingAllCards &&
          allCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
      </div>
      <h1>Which card(s) are you offering?</h1>
      <label>Filter Cards</label>
      <input type='text' className='outline-1 border-2' />
      <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md justify-center items-center'>
        {loadingYourCards && <Loader />}
        {!loadingYourCards &&
          yourCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
      </div>
    </div>
  );
};

// return <div>there are no cards</div>;
export default Trade;
