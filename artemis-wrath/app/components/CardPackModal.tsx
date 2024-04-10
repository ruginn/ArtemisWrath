'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCardPackModal } from '@/hooks/use-cardPackModal';
import { useState, useEffect } from 'react';
import Loader from '../dashboard/_components/Loader';
import { useUser } from '@clerk/nextjs';
import { Card } from '@/types/CardType';
import CardFlipElement from './CardFlip';

const CardPackModal = () => {
  const CardPackModal = useCardPackModal();
  const [confirmed, setConfirmed] = useState<Boolean>();
  const [collecting, setCollecting] = useState<Boolean>(false);
  const { user } = useUser();

  // const [collectedCards, setCollectedCards] = useState<Card[]>([{id: 1, name: 'fsda', description: 'fsda', randomNumber: 1, image: AwSet1}])
  const [collectedCards, setCollectedCards] = useState<Card[]>([]);
  const [getCards, setGetCards] = useState<boolean>(false);
  const [loadingCards, setLoadingCards] = useState<boolean>(false);

  const closeModal = () => {
    CardPackModal.onClose();
  };

  const handleConfirm = (boolean: boolean) => {
    setConfirmed(boolean);
    if (boolean === false) {
      closeModal();
    }
    if (boolean === true) {
      setCollecting(true);
      CollectPack();
    }
  };

  const CollectPack = async () => {
    setLoadingCards(true);
    const userData = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      crystals: 100,
    };
    const res = await fetch('/api/shop/pack', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Context-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const cards: Card[] = await res.json();
    console.log(cards);
    if (typeof cards === 'object') {
      setCollectedCards(cards);
      setGetCards(true);
      setLoadingCards(false);
      console.log(collectedCards);
    } else {
      setGetCards(false);
      setLoadingCards(false);
    }
  };

  return (
    <Dialog open={CardPackModal.isOpen} onOpenChange={closeModal}>
      <>
        <DialogContent className='h-[600px] overflow-y-none'>
          <DialogHeader>
            <DialogTitle>
              {!collecting ? (
                <p>Are you sure you want to collect this pack?</p>
              ) : (
                'Lets see what cards you get!'
              )}
            </DialogTitle>
            <DialogDescription>
              {!collecting && (
                <div className='flex flex-row justify-evenly my-4'>
                  <Button
                    className='w-24'
                    onClick={() => {
                      handleConfirm(true);
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    className='w-24'
                    variant={'secondary'}
                    onClick={() => {
                      handleConfirm(false);
                    }}
                  >
                    No
                  </Button>
                </div>
              )}
              {loadingCards && <Loader />}
              {collectedCards && (
                <div
                  // className='grid grid-cols-4 gap-1 overflow-x-hidden'
                  className='flex flex-col w-full items-center h-[550px] gap-2 overflow-y-scroll'
                >
                  {collectedCards.map((card) => {
                    return <CardFlipElement card={card} key={card.id} />;
                  })}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </>
    </Dialog>
  );
};

export default CardPackModal;
