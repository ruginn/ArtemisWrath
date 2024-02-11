'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCardModal } from '@/hooks/use-cardModal';
import { useCardSet } from '@/hooks/use-cardSets';
import Image from 'next/image';

const CardDetailModal = () => {
  const cardModal = useCardModal();
  const globalCardSet = useCardSet();
  const currentCard = globalCardSet.cards[0];

  const closeModal = () => {
    cardModal.onClose();
  };

  return (
    <Dialog open={cardModal.isOpen} onOpenChange={closeModal}>
      {currentCard && (
        <>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{currentCard.name}</DialogTitle>
              <DialogDescription>
                <div className=''>
                  {currentCard.image && (
                    <Image
                      src={currentCard.image}
                      width={500}
                      height={500}
                      alt={currentCard.name}
                      // className='w-[200px] h-[200px] object-cover'
                    ></Image>
                  )}
                  <h1>{currentCard.name}</h1>
                  <p>{currentCard.description}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default CardDetailModal;
