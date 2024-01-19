import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface userInfo {
  id: string;
  firstName: string;
  lastName: string;
}

export async function POST(req: Request) {
  const userInfo: userInfo = await req.json();
  const establishedUser = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
  });

  if (!establishedUser) {
    const user = await prisma.user.create({
      data: {
        id: userInfo.id,
        name: userInfo.firstName + ' ' + userInfo.lastName,
      },
    });
    console.log(user);
    return NextResponse.json(user);
  }
  console.log(establishedUser);
  return NextResponse.json(establishedUser);
}
