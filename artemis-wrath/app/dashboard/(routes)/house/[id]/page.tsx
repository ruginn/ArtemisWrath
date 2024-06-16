'use client';
import { useEffect } from 'react';

const HousePage = ({ params }: any) => {
  const fetcher = async () => {
    const res = await fetch(`/api/house/${params.id}`, {
      cache: 'no-cache',
    }).then((hello) => hello.json());
    console.log(res);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <h1>this is the house page</h1>
    </div>
  );
};

export default HousePage;
