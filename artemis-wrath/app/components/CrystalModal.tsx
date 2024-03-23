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

const CrystalModal = () => {
  const crystalModal = useCrystalModal();

  const closeModal = () => {
    crystalModal.onClose();
  };

  return (
    <Dialog open={crystalModal.isOpen} onOpenChange={closeModal}>
      <>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congrats on collecting crystals</DialogTitle>
            <DialogDescription>
              <p>You have gained {crystalModal.crystalAmount} crystals</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </>
    </Dialog>
  );
};

export default CrystalModal;
