'use client';
import { useEffect, useState } from 'react';
import { useSideBar } from '@/hooks/use-sidebar';
import { useUser } from '@clerk/nextjs';
import { PlayerCard } from '@/types/PlayerCardType';
import CardElement from '@/app/components/Card';
import CardDetailModal from '@/app/components/CardDetailModal';
import Loader from '../../_components/Loader';
import StackCard from '@/app/components/StackCard';

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

  const multipleCards = (list: PlayerCard[] | undefined) => {
    console.log(list);
    if (list) {
      const cardQty: PlayerCard[] = [];
      list.map((card: PlayerCard) => {
        if (cardQty[cardQty.length - 1]?.name === card.name) {
          // const popped = cardQty.pop();
          const arrayLength = cardQty.length - 1;
          if (cardQty[cardQty.length - 1].qty) {
            cardQty[arrayLength].qty = Number(cardQty[arrayLength].qty) + 1;
            console.log('it was true');
          }
        } else {
          cardQty.push({
            ...card,
            qty: 1,
          });
        }
      });
      console.log(cardQty);
      setFilterCards(cardQty);
    }
  };

  const loveFilter = () => {
    const loveCards = userCards?.filter((card) => card.inclination === 'Love');
    const inclination2 = userCards?.filter(
      (card) => card.inclination2 === 'Love'
    );

    if (inclination2) {
      const allLoveCards = loveCards?.concat(inclination2);
      allLoveCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      // setFilterCards(allLoveCards);
      multipleCards(allLoveCards);
    } else {
      loveCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      // setFilterCards(loveCards);
      multipleCards(loveCards);
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
      multipleCards(allWisdomCards);
    } else {
      wisdomCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      multipleCards(wisdomCards);
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
      multipleCards(allWrathCards);
    } else {
      wrathCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      multipleCards(wrathCards);
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
      multipleCards(allMischiefCards);
    } else {
      mischiefCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      multipleCards(mischiefCards);
      console.log(mischiefCards);
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
      multipleCards(allPrideCards);
    } else {
      prideCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
      multipleCards(prideCards);
    }
    setFiltered(true);
  };

  const DivineInterventionFilter = () => {
    const DICards = userCards?.filter(
      (card) => card.type === 'Divine Intervention'
    );
    DICards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
    multipleCards(DICards);
    setFiltered(true);
  };
  const relicFilter = () => {
    const relicCards = userCards?.filter((card) => card.type === 'Relic');
    relicCards?.sort((a, b) => Number(a.cardId) - Number(b.cardId));
    multipleCards(relicCards);
    setFiltered(true);
  };

  return (
    <div className='w-screen sm:w-[calc(100vw-96px)] lg:w-[calc(100vw-256px)] flex flex-col items-center'>
      <h1 className='text-5xl'>Collection</h1>
      <div className='mx-8 md:mx-24 w-screen md:w-[80vw] flex justify-center items-center flex-wrap gap-2'>
        <button
          onClick={allCards}
          className='border-2 border-black rounded-xl px-4 cursor-pointer'
        >
          All Cards
        </button>
        <button
          onClick={loveFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#f58a87] via-[#B3989F] to-[#f58a87]'
        >
          Love
        </button>
        <button
          onClick={WisdomFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl via-[#5876b2] from-blue-800 to-cyan-900'
        >
          Wisdom
        </button>
        <button
          onClick={WrathFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl to-[#814242] via-red-800 from-[#75352F]'
        >
          Wrath
        </button>
        <button
          onClick={MischiefFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl via-[#3f392c] to-gray-700 from-slate-600'
        >
          Mischief
        </button>
        <button
          onClick={PrideFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-amber-600 to-[#e0c05e]'
        >
          Pride
        </button>
        <button
          onClick={DivineInterventionFilter}
          className=' text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#8d6f57] to-[#7a5135] via-[#654729]'
        >
          Divine Interventions
        </button>
        <button
          onClick={relicFilter}
          className='text-white border-2 border-black rounded-xl px-4 cursor-pointer bg-gradient-to-bl from-[#515031] to-[#929876] via-[#879464]'
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
            // return <CardElement card={card} key={card.id} />;
            return <StackCard card={card} key={card.id} />;
          })}
        </div>
      )}
      <CardDetailModal />
    </div>
  );
};

export default Collection;
