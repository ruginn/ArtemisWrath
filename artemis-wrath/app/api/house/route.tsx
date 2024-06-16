import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const houses = await prisma.house.findMany({
    include: { members: true },
  });
  console.log(houses);
  return NextResponse.json(houses);
}
