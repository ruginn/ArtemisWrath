'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CreateHouse = () => {
  const [houseName, setHouseName] = useState('');
  const [houseSummary, setHouseSummary] = useState('');

  const handleHouseName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHouseName(e.target.value);
  };

  const handleSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHouseSummary(e.target.value);
  };

  const onSubmit = () => {
    console.log(houseName, houseSummary);
  };

  return (
    <div>
      <h1>Create a House</h1>
      <form action='' className='flex flex-col'>
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
      </form>
      <Button onClick={onSubmit}>Create House</Button>
    </div>
  );
};

export default CreateHouse;
