import { NextResponse } from 'next/server';
import { Card } from '@/types/CardType';
import { prisma } from '@/lib/prisma';

const cardSet: Card[] = [
  {
    id: 1,
    name: 'Atlas',
    description:
      'When you slay an opponents creature, your opponent must discard the top card of their deck into their Hell.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/rMDjZxh/A-powerful-illustration-of-Atlas-the-mythical-T.png',
    inclination: 'Wisdom',
    inclination2: 'Pride',
    effect: '',
    biome: '',
    rarity: 'SuperRare',
    type: 'Immortal',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 6,
    tinyImage: '',
    set: 'Realm of Time',
  },
];

export async function GET(req: Request) {
  // const Set = await prisma.set.create({
  //   data: {
  //     name: 'Nightmare Requiem',
  //     miniName: 'NR',
  //   },
  // });

  // const Set = await prisma.set.findUnique({
  //   where: {
  //     id: '88bb17d2-19d2-4ba6-826f-e743ce265db4',
  //   },
  // });

  const createTwo = [2, 3, 4];
  const createThree = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const createTen = [16];

  // if (Set) {
  //   for (let i = 0; i < cardSet.length; i++) {
  //     // console.log(cardSet[i]);
  //     if (cardSet[i].id === 1) {
  //       const currentCard = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //     }
  //     if (createTwo.includes(Number(cardSet[i].id))) {
  //       const currentCard = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard2 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //     }
  //     if (createThree.includes(Number(cardSet[i].id))) {
  //       const currentCard = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard2 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard3 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //     }
  //     if (createTen.includes(Number(cardSet[i].id))) {
  //       const currentCard = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard2 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard3 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard4 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard5 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard6 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard7 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard8 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard9 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //       const currentCard10 = await prisma.card.create({
  //         data: {
  //           cardSetId: cardSet[i].id.toString(),
  //           name: cardSet[i].name,
  //           description: cardSet[i].description,
  //           randomNumber: cardSet[i].randomNumber,
  //           image: cardSet[i].image,
  //           tinyImage: cardSet[i].tinyImage,
  //           inclination: cardSet[i].inclination,
  //           inclination2: cardSet[i].inclination2,
  //           effect: cardSet[i].effect,
  //           biome: cardSet[i].biome,
  //           rarity: cardSet[i].rarity,
  //           type: cardSet[i].type,
  //           hp: cardSet[i].hp,
  //           cost: cardSet[i].cost,
  //           attackPower: cardSet[i].attackPower,
  //           setId: Set.id,
  //           effectFunction: cardSet[i].effectFunction,
  //         },
  //       });
  //     }
  //   }
  // }

  // console.log(Set);

  // console.log(cardSet.length);
  return NextResponse.json(cardSet);
}
