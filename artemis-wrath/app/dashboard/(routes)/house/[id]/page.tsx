'use client';
import { useEffect, useState } from 'react';
import Loader from '@/app/dashboard/_components/Loader';

interface House {
  id: string;
  name: string;
  description?: string;
  members: [];
}

const HousePage = ({ params }: any) => {
  const [houseInfo, setHouseInfo] = useState<House>();
  const fetcher = async () => {
    const res = await fetch(`/api/house/${params.id}`, {
      cache: 'no-cache',
    })
      .then((hello) => hello.json())
      .then((info) => setHouseInfo(info));
    console.log(res);
  };

  useEffect(() => {
    fetcher();
  }, []);

  if (houseInfo) {
    console.log(houseInfo);
    return (
      <div>
        <h1>{houseInfo.name}</h1>
        <p>{houseInfo.description}</p>
        <p>Members: {houseInfo.members.length}</p>
      </div>
    );
  }
  return <Loader />;
};

export default HousePage;
