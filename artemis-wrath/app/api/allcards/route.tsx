import { NextResponse } from 'next/server';
import { Card } from '@/types/CardType';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  // const Set = await prisma.set.create({
  //   data: {
  //     name: 'Nightmare Requiem',
  //     miniName: 'NR',
  //   },
  // });

  const cards = await prisma.card.findMany({
    include: {
      set: true,
    },
  });

  console.log(cards);

  const createTwo = [2, 3, 4];
  const createThree = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const createTen = [16];
  return NextResponse.json(cards);
}
