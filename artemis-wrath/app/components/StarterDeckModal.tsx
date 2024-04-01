'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useStarterDeck } from '@/hooks/use-starterDeck';
import Image from 'next/image';
import NightmareRequiem from '../../public/Images/starterDecks/nightmareRequiem.png';
import Loader from '../dashboard/_components/Loader';
import { useState, useEffect } from 'react';
import { useUserInfo } from '@/hooks/use-userInfo';
import { Card } from '@/types/CardType';

const StarterDeckModal = () => {
  const starterDeckModal = useStarterDeck();
  const user = useUserInfo();
  const [loadingCards, setLoadingCards] = useState<boolean>(false);

  const CollectPack = async () => {
    setLoadingCards(true);
    const userData = {
      id: user.userId,
    };
    const res = await fetch('/api/cardpack/starterdeck/nightmarerequiem', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Context-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    // .then((res) => res.json())
    const cards: Card[] = await res.json();
    // console.log(typeof cards === 'object')
    console.log(cards);
  };

  const closeModal = () => {
    starterDeckModal.onClose();
  };

  return (
    <Dialog open={starterDeckModal.isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose your free starter deck!</DialogTitle>
          <DialogDescription>
            <p>Seem like you haven&apos;t choosen a starter deck.</p>
            <div className='bg-gray-900 p-9 rounded-lg hover:scale-105 text-amber-400 flex flex-col items-center my-4'>
              <Image
                src={NightmareRequiem}
                height={450}
                alt={'ST-01'}
                className='cursor-pointer rounded-sm border-amber-400 border-2'
                onClick={CollectPack}
              ></Image>
              <h1 className='text-xl'>Artemis Wrath</h1>
              <h3 className='text-l'>Starter Deck 01: Nightmare Requiem</h3>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StarterDeckModal;
