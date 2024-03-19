import Image from 'next/image';

import AwSet1 from '@/public/Images/Packs/AWset1.jpg';
import AwSet2 from '@/public/Images/Packs/AWset2CS.png';
import AwSet3 from '@/public/Images/Packs/AWset3CS.png';

const ShopPacks = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Shop Packs</h1>
      <div className='flex flex-row gap-4 w-full justify-center'>
        <Image
          src={AwSet1}
          alt='Medieval Creatures'
          className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
        />

        <Image
          src={AwSet2}
          alt='Bushido Blades'
          className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
        />
        <Image
          src={AwSet3}
          alt='Desert Past'
          className='w-[20%] h-auto border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default ShopPacks;
