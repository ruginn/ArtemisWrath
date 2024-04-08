import { Info, PlusCircle, MinusCircle } from 'lucide-react';

const CardQuantity = () => {
  return (
    <div className='grid grid-cols-3 lg:mt-2'>
      <MinusCircle className='hover:scale-110 cursor-pointer place-self-center w-4 sm:w-5' />
      <div className='hover:scale-110 cursor-pointer place-self-center'>0</div>
      <PlusCircle className='hover:scale-110 cursor-pointer place-self-center w-4 sm:w-5' />
    </div>
  );
};

export default CardQuantity;
