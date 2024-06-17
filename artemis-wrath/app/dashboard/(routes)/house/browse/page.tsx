'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface House {
  id: string;
  name: string;
  description?: string;
  members: [];
}

const BrowseHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const getHouses = async () => {
    const res = await fetch('/api/house', { cache: 'no-cache' })
      .then((houses) => houses.json())
      .then((stuff) => setHouses(stuff));
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div>
      <h1>Check out some of these houses</h1>
      {houses.map((house) => {
        return (
          <div key={house.id}>
            <h1>{house.name}</h1>
            <p>{house.description}</p>
            <p>Members: {house.members.length}</p>
            <Link href={`/dashboard/house/${house.id}`}>View more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BrowseHouses;
