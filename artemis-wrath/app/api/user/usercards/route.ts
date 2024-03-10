import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Card } from '@/types/CardType';

interface userInfo {
  id: string;
  firstName: string;
  lastName: string;
  lastPackDate?: Date;
}

export async function POST(req: Request) {
  const userInfo: userInfo = await req.json();
  let userCards: Card[] = [];
  const cards = await prisma.playerCard.findMany({
    where: {
      userId: userInfo.id,
    },
  });

  if (cards) {
    return NextResponse.json(cards);
  }

  return NextResponse.json('testing');
}
