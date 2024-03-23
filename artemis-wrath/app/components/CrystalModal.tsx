'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCrystalModal } from '@/hooks/use-crystalModal';
import { useCardSet } from '@/hooks/use-cardSets';
import Image from 'next/image';

const CrystalModal = () => {
  const crystalModal = useCrystalModal();
  const globalCardSet = useCardSet();
  const currentCard = globalCardSet.cards[0];

  const closeModal = () => {
    crystalModal.onClose();
  };

  return (
    <Dialog open={crystalModal.isOpen} onOpenChange={closeModal}>
      {currentCard && (
        <>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Congrats on collecting crystals</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default CrystalModal;
