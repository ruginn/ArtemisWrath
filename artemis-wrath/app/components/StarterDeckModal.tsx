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

const StarterDeckModal = () => {
  const starterDeckModal = useStarterDeck();

  const closeModal = () => {
    starterDeckModal.onClose();
  };

  return (
    <Dialog open={starterDeckModal.isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a starter deck!</DialogTitle>
          <DialogDescription>
            <p>Seem like you haven't choosen a starter deck.</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StarterDeckModal;
