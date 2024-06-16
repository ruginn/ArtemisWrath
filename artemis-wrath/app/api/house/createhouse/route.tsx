import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface HouseInfo {
  houseName: string;
  houseSummary?: string;
  userId: string;
}

export async function POST(req: Request) {
  const houseInfo: HouseInfo = await req.json();
  console.log(houseInfo);

  const createdHouse = await prisma.house.create({
    data: {
      name: houseInfo.houseName,
      description: houseInfo.houseSummary,
    },
  });
  console.log(createdHouse);

  // const Set = await prisma.set.create({
  //   data: {
  //     name: 'Medieval Creatfdsafures',
  //     miniName: 'MC',
  //   },
  // });

  //   console.log(createdHouse);

  const establishedUser = await prisma.user.update({
    where: {
      id: houseInfo.userId,
    },
    data: { houseId: createdHouse.id },
  });

  //   if (!establishedUser) {
  //     const user = await prisma.user.create({
  //       data: {
  //         id: userInfo.id,
  //         name: userInfo.firstName + ' ' + userInfo.lastName,
  //       },
  //     });
  //     return NextResponse.json(user);
  //   }
  //   console.log(establishedUser);
  return NextResponse.json(createdHouse);
}
