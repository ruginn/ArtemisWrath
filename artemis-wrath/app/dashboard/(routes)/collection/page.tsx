'use client';
import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { useUser } from '@clerk/nextjs';
import { PlayerCard } from '@/types/PlayerCardType';
import CardElement from '@/app/components/Card';
import CardDetailModal from '@/app/components/CardDetailModal';

const Collection = () => {
  const activeSidebar = useSideBar();
  const { user } = useUser();
  const [userCards, setUserCards] = useState<PlayerCard[]>();
  const [filtered, setFiltered] = useState(false);
  const [filterCards, setFilterCards] = useState<PlayerCard[]>();
  useEffect(() => {
    activeSidebar.onChange('collection');
  }, []);

  useEffect(() => {
    getCards();
  }, []);

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

  const allCards = () => {
    setFiltered(false);
  };

  const loveFilter = () => {
    const loveCards = userCards?.filter((card) => card.inclination === 'Love');
    setFilterCards(loveCards);
    setFiltered(true);
  };

  const WisdomFilter = () => {
    const wisdomCards = userCards?.filter(
      (card) => card.inclination === 'Wisdom'
    );
    setFilterCards(wisdomCards);
    setFiltered(true);
  };

  const WrathFilter = () => {
    const wrathCards = userCards?.filter(
      (card) => card.inclination === 'Wrath'
    );
    setFilterCards(wrathCards);
    setFiltered(true);
  };

  const MischiefFilter = () => {
    const mischiefCards = userCards?.filter(
      (card) => card.inclination === 'Mischief'
    );
    setFilterCards(mischiefCards);
    setFiltered(true);
  };

  const PrideFilter = () => {
    const prideCards = userCards?.filter(
      (card) => card.inclination === 'Pride'
    );
    setFilterCards(prideCards);
    setFiltered(true);
  };

  const DivineInterventionFilter = () => {
    const DICards = userCards?.filter(
      (card) => card.type === 'Divine Intervention'
    );
    setFilterCards(DICards);
    setFiltered(true);
  };
  const relicFilter = () => {
    const relicCards = userCards?.filter((card) => card.type === 'Relic');
    setFilterCards(relicCards);
    setFiltered(true);
  };

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)]'>
      <h1 className='text-5xl'>Collection</h1>
      <div className='flex-row'>
        <button
          onClick={allCards}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          All Cards
        </button>
        <button
          onClick={loveFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Love
        </button>
        <button
          onClick={WisdomFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Wisdom
        </button>
        <button
          onClick={WrathFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Wrath
        </button>
        <button
          onClick={MischiefFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Mischief
        </button>
        <button
          onClick={PrideFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Pride
        </button>
        <button
          onClick={DivineInterventionFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Divine Interventions
        </button>
        <button
          onClick={relicFilter}
          className='border-4 border-black rounded-xl px-4 cursor-pointer'
        >
          Relic
        </button>
      </div>
      {/* <button onClick={getCards}>click me</button> */}
      {userCards && !filtered ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
          {userCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      ) : (
        <h1>no cards</h1>
      )}
      {filtered && filterCards && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
          {filterCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      )}
      <CardDetailModal />
    </div>
  );
};

export default Collection;
