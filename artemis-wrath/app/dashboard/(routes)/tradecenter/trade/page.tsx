'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/types/CardType';
import CardElement from '@/app/components/Card';

const Trade = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);
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
    getCards();
  }, []);

  if (allCards.length > 1) {
    return (
      <div>
        <h1>Which card(s) are you looking for?</h1>
        <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10'>
          {allCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }

  return <div>there are no cards</div>;
};

export default Trade;
