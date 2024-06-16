'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useUserInfo } from '@/hooks/use-userInfo';

const CreateHouse = () => {
  const user = useUserInfo();
  const [houseName, setHouseName] = useState('');
  const [houseSummary, setHouseSummary] = useState('');

  const handleHouseName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHouseName(e.target.value);
  };

  const handleSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHouseSummary(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const houseInfo = {
      userId: user.userId,
      houseName,
      houseSummary,
    };
    const res = await fetch('/api/house/createhouse', {
      method: 'POST',
      body: JSON.stringify(houseInfo),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const test = await res.json();
    console.log(test);
  };

  return (
    <div>
      <h1>Create a House</h1>
      <form onSubmit={onSubmit} className='flex flex-col'>
        <label htmlFor='houseName'>What will be the name of the House?</label>
        <input
          id='houseName'
          type='text'
          className='border-black border'
          value={houseName}
          onChange={handleHouseName}
        />
        <label htmlFor='houseSummary'>Add a description to this House.</label>
        <input
          id='houseSummary'
          value={houseSummary}
          onChange={handleSummary}
          type='text'
          className='border-black border'
        />
        <Button>Create House</Button>
      </form>
    </div>
  );
};

export default CreateHouse;
