import { Card } from '@/types/CardType';
import { Info, PlusCircle, MinusCircle } from 'lucide-react';
import { useState } from 'react';

const CardQuantity = ({ card }: { card: Card }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    setQuantity((prev) => prev + 1);
    console.log(card);
  };

  const decrement = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prev) => prev - 1);
    console.log(card);
  };

  

  return (
    <div className='grid grid-cols-3 lg:mt-2 '>
      <MinusCircle
        className='hover:scale-110 cursor-pointer place-self-center w-4 sm:w-5'
        onClick={decrement}
      />
      <div className='hover:scale-110 cursor-pointer place-self-center select-none'>
        {quantity}
      </div>
      <PlusCircle
        className='hover:scale-110 cursor-pointer place-self-center w-4 sm:w-5'
        onClick={increment}
      />
    </div>
  );
};

export default CardQuantity;
