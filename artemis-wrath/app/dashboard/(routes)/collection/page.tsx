'use client';
import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { useUser } from '@clerk/nextjs';
import { PlayerCard } from '@/types/PlayerCardType';
import CardElement from '@/app/components/Card';
import CardDetailModal from '@/app/components/CardDetailModal';
import Loader from '../../_components/Loader';

const Collection = () => {
  const activeSidebar = useSideBar();
  const { user } = useUser();
  const [userCards, setUserCards] = useState<PlayerCard[]>();
  const [filtered, setFiltered] = useState(false);
  const [filterCards, setFilterCards] = useState<PlayerCard[]>();
  const [loadingCards, setLoadingCards] = useState<boolean>(false);

  useEffect(() => {
    activeSidebar.onChange('collection');
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    setLoadingCards(true);
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
    setLoadingCards(false);
    setUserCards(usersCards);
  };

  const allCards = () => {
    setFiltered(false);
  };

  const loveFilter = () => {
    const loveCards = userCards?.filter((card) => card.inclination === 'Love');
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Love'
    );

    if (inclination2) {
      const allLoveCards = loveCards?.concat(inclination2);
      allLoveCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(allLoveCards);
    } else {
      loveCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(loveCards);
    }
    setFiltered(true);
  };

  const WisdomFilter = () => {
    const wisdomCards = userCards?.filter(
      (card) => card.inclination === 'Wisdom'
    );
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Wisdom'
    );
    if (inclination2) {
      const allWisdomCards = wisdomCards?.concat(inclination2);
      allWisdomCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(allWisdomCards);
    } else {
      wisdomCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(wisdomCards);
    }
    setFiltered(true);
  };

  const WrathFilter = () => {
    const wrathCards = userCards?.filter(
      (card) => card.inclination === 'Wrath'
    );
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Wrath'
    );
    if (inclination2) {
      const allWrathCards = wrathCards?.concat(inclination2);
      allWrathCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(allWrathCards);
    } else {
      wrathCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(wrathCards);
    }
    setFiltered(true);
  };

  const MischiefFilter = () => {
    const mischiefCards = userCards?.filter(
      (card) => card.inclination === 'Mischief'
    );
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Mischief'
    );
    if (inclination2) {
      const allMischiefCards = mischiefCards?.concat(inclination2);
      allMischiefCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(allMischiefCards);
    } else {
      mischiefCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(mischiefCards);
    }
    setFiltered(true);
  };

  const PrideFilter = () => {
    const prideCards = userCards?.filter(
      (card) => card.inclination === 'Pride'
    );
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Pride'
    );
    if (inclination2) {
      const allPrideCards = prideCards?.concat(inclination2);
      allPrideCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(allPrideCards);
    } else {
      prideCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      setFilterCards(prideCards);
    }
    setFiltered(true);
  };

  const DivineInterventionFilter = () => {
    const DICards = userCards?.filter(
      (card) => card.type === 'Divine Intervention'
    );
    DICards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
    setFilterCards(DICards);
    setFiltered(true);
  };
  const relicFilter = () => {
    const relicCards = userCards?.filter((card) => card.type === 'Relic');
    relicCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
    setFilterCards(relicCards);
    setFiltered(true);
  };

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center'>
      <h1 className='text-5xl'>Collection</h1>
      <div className='mx-[30px]'>
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
      {loadingCards && <Loader />}
      {userCards && !filtered ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10'>
          {userCards.map((card) => {
            return <CardElement card={card} key={card.id} />;
          })}
        </div>
      ) : (
        !filterCards && <h1>no cards</h1>
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
