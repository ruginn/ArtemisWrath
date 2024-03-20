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

  console.log(userInfo);
  const establishedUser = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
  });

  if (establishedUser && establishedUser.crystals) {
    const updatedUser = await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: { crystals: establishedUser.crystals + userInfo.crystals },
    });
    return NextResponse.json(updatedUser);
  } else {
    return NextResponse.json(establishedUser);
  }
}
