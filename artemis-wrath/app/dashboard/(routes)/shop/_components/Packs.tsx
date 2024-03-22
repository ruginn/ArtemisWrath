import Image from 'next/image';

import AwSet1 from '@/public/Images/Packs/AWset1.jpg';
import AwSet2 from '@/public/Images/Packs/AWset2CS.png';
import AwSet3 from '@/public/Images/Packs/AWset3CS.png';

const ShopPacks = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Shop Packs</h1>
      <div className='flex flex-col md:flex-row gap-4 w-full justify-center items-center my-8'>
        <div className='flex flex-col bg-gray-300 p-6 rounded-lg hover:scale-105 cursor-pointer'>
          <Image
            src={AwSet1}
            alt='Medieval Creatures'
            height={450}
            className=' border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
          <h1 className='text-xl'>Artemis Wrath</h1>
          <h3 className='text-l'>Medieval Creatures</h3>
          <p>100 Crystals</p>
        </div>
        <div className='flex flex-col bg-gray-300 p-6 rounded-lg hover:scale-105 cursor-pointer'>
          <Image
            src={AwSet2}
            alt='Bushido Blades'
            height={450}
            className='border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
          <h1 className='text-xl'>Artemis Wrath</h1>
          <h3 className='text-l'>Bushido Blades</h3>
          <p>100 Crystals</p>
        </div>
        <div className='flex flex-col bg-gray-300 p-6 rounded-lg hover:scale-105 cursor-pointer'>
          <Image
            src={AwSet3}
            alt='Desert Past'
            height={450}
            className='border-t-[12px] border-b-[12px] border-gray-400 cursor-pointer'
          />
          <h1 className='text-xl'>Artemis Wrath</h1>
          <h3 className='text-l'>Desert Past</h3>
          <p>100 Crystals</p>
        </div>
      </div>
    </div>
  );
};

export default ShopPacks;
