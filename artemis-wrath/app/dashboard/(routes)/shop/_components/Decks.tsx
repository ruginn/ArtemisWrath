import Image from 'next/image';
import NightmareRequiem from '@/public/Images/starterDecks/nightmareRequiem.png';
import RealmOfTime from '@/public/Images/starterDecks/realmOfTime.png';

const ShopDecks = () => {
  return (
    <div className='flex flex-col md:flex-row gap-9 my-8 '>
      <div className='bg-gray-300 p-9 rounded-lg hover:scale-105 '>
        <Image
          src={NightmareRequiem}
          height={450}
          alt={'ST-01'}
          className='cursor-pointer rounded-sm'
        ></Image>
        <h1 className='text-xl'>Artemis Wrath</h1>
        <h3 className='text-l'>Starter Deck 01: Nightmare Requiem</h3>
        <p>300 Crystals</p>
      </div>
      <div className='bg-gray-300 p-9 rounded-lg hover:scale-105 '>
        <Image
          src={RealmOfTime}
          height={450}
          alt={'ST-02'}
          className='cursor-pointer rounded-sm'
        ></Image>
        <h1 className='text-xl'>Artemis Wrath</h1>
        <h3 className='text-l'>Starter Deck 02: Realm of Time</h3>
        <p>300 Crystals</p>
      </div>
    </div>
  );
};

export default ShopDecks;
