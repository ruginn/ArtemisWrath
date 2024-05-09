'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/types/CardType';
import CardElement from '@/app/components/Card';
import { useUser } from '@clerk/nextjs';
import Loader from '@/app/dashboard/_components/Loader';
import CardDetailModal from '@/app/components/CardDetailModal';
import CardQuantity from '../_components/CardQuantity';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Trade = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [filterAll, setFilterAll] = useState<Card[]>([]);
  const [filterQueryAll, setFilterQueryAll] = useState<string>('');
  const [loadingAllCards, setLoadingAllCards] = useState<boolean>(true);
  const [yourCards, setYourCards] = useState<Card[]>([]);
  const [filterYour, setFilterYour] = useState<Card[]>([]);
  const [filterQueryYour, setFilterQueryYour] = useState<string>('');
  const [loadingYourCards, setLoadingYourCards] = useState<boolean>(true);
  const { user } = useUser();
  useEffect(() => {
    fetch('');
  }, []);

  // make function that will filterout same card then, pop last, then add back to regular deck

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

  const FilterSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQueryAll(e.target.value);
  };

  const FilterSearchYour = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQueryYour(e.target.value);
  };

  useEffect(() => {
    setFilterAll(
      allCards.filter(
        (cards) =>
          cards.name?.toLowerCase().includes(filterQueryAll.toLowerCase()) ||
          cards.biome?.toLowerCase().includes(filterQueryAll.toLowerCase()) ||
          cards.type?.toLowerCase().includes(filterQueryAll.toLowerCase()) ||
          cards.inclination
            ?.toLowerCase()
            .includes(filterQueryAll.toLowerCase()) ||
          cards.inclination2
            ?.toLowerCase()
            .includes(filterQueryAll.toLowerCase()) ||
          cards.rarity?.toLowerCase().includes(filterQueryAll.toLowerCase())
      )
    );
  }, [filterQueryAll]);

  useEffect(() => {
    setFilterYour(
      yourCards.filter(
        (cards) =>
          cards.name?.toLowerCase().includes(filterQueryYour.toLowerCase()) ||
          cards.biome?.toLowerCase().includes(filterQueryYour.toLowerCase()) ||
          cards.type?.toLowerCase().includes(filterQueryYour.toLowerCase()) ||
          cards.inclination
            ?.toLowerCase()
            .includes(filterQueryYour.toLowerCase()) ||
          cards.inclination2
            ?.toLowerCase()
            .includes(filterQueryYour.toLowerCase()) ||
          cards.rarity?.toLowerCase().includes(filterQueryYour.toLowerCase())
      )
    );
  }, [filterQueryYour]);

  return (
    <div>
      <h1 className='text-4xl'>Open a trade</h1>
      <label htmlFor='allFilter'>Which card(s) are you looking for?</label>
      <input
        type='text'
        className='outline-1 border-2'
        value={filterQueryAll}
        onChange={FilterSearch}
        id='allFilter'
        list='allCards'
      />
      <datalist id='allCards'>
        {allCards.map((card, i) => (
          <option value={card.name ? card.name : ''} key={card.id}>
            {card.name}
          </option>
        ))}
      </datalist>
      <div className='h-[50vh] overflow-y-scroll grid grid-cols-5 content-start sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md justify-center'>
        {loadingAllCards && <Loader />}
        {!loadingAllCards &&
          !filterQueryAll &&
          allCards.map((card) => {
            return (
              <div key={card.id}>
                <CardElement card={card} />
                <CardQuantity card={card} />
              </div>
            );
          })}
        {filterQueryAll &&
          filterAll.map((card) => {
            return (
              <div key={card.id}>
                <CardElement card={card} />
                <CardQuantity card={card} />
              </div>
            );
          })}
      </div>
      <label htmlFor='yourFilter'>Which card(s) are you offering?</label>
      <input
        type='text'
        className='outline-1 border-2'
        value={filterQueryYour}
        onChange={FilterSearchYour}
        id='yourFilter'
        list='yourCards'
      />
      <datalist id='yourCards'>
        {yourCards.map((card, i) => (
          <option value={card.name ? card.name : ''} key={card.id}>
            {card.name}
          </option>
        ))}
      </datalist>
      <div className='h-[50vh] overflow-y-scroll grid content-start  grid-cols-5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-5 m-10 border-gray-800 p-2 border-2 border-solid rounded-md justify-center'>
        {loadingYourCards && <Loader />}
        {!loadingYourCards &&
          !filterQueryYour &&
          yourCards.map((card, i) => {
            return (
              <div key={card.id}>
                {card.tinyImage && (
                  <Image
                    src={card.tinyImage}
                    height={400.5}
                    width={288}
                    alt={card.name ? card.name : 'card'}
                    className='object-contain'
                    onClick={() => console.log(card)}
                  />
                )}
              </div>
            );
          })}
        {filterQueryYour &&
          filterYour.map((card, i) => {
            return (
              <div key={card.id}>
                {card.tinyImage && (
                  <Image
                    src={card.tinyImage}
                    height={400.5}
                    width={288}
                    alt={card.name ? card.name : 'card'}
                    className='object-contain'
                    onClick={() => console.log(card)}
                  />
                )}
              </div>
            );
          })}
      </div>
      <div className='flex flex-col'>
        <label htmlFor='message'>Create a message</label>
        <input type='text' className='mx-8 outline-1 border-2' id='message' />
        <Button className='mx-8 my-3'>Create Trade</Button>
      </div>
      <CardDetailModal />
    </div>
  );
};

// return <div>there are no cards</div>;
export default Trade;
