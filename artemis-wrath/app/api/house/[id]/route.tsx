import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const slug = params.id;
  console.log(slug + 'fsdafsdfsdjjjjjj');
  // const houses = await prisma.house.findMany({
  //   include: { members: true },
  // });
  // console.log(houses);
  return NextResponse.json('helllllll');
}
