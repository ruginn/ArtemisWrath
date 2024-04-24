import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Card } from '@/types/CardType';

interface userInfo {
  id: string;
  firstName: string;
  lastName: string;
  lastPackDate?: Date;
  crystals: number;
}

export async function POST(req: Request) {
  const userInfo: userInfo = await req.json();
  const establishedUser = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
  });

  return NextResponse.json(establishedUser);
}
