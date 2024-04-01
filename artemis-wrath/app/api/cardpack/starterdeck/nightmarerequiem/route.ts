import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Card } from '@/types/CardType';

// interface Card {
//   id: number;
//   name: string;
//   description: string;
//   randomNumber: number;
//   image?: string;
//   inclination?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
//   inclination2?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
//   effect?: string;
//   biome?:
//     | 'Jungle'
//     | 'Tundra'
//     | 'Alpine'
//     | 'Forest'
//     | 'Wetland'
//     | 'Grassland'
//     | 'Aquatic'
//     | 'Island'
//     | 'Cave'
//     | 'Desert'
//     | '';
//   effectFunction?: string;
//   rarity: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare' | 'Nectar';
//   type?: string;
//   attackPower?: number;
//   hp?: number;
//   cost?: number;
// }

interface userInfo {
  id: string;
  firstName: string;
  lastName: string;
  lastPackDate?: Date;
}

export async function POST(req: Request) {
  const userInfo: userInfo = await req.json();
  let randomCards: Card[] = [];
  const createTwo = [2, 3, 4];
  const createThree = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const createTen = [16];
  const establishedUser = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
  });

  const cardSet = await prisma.card.findMany({
    where: {
      setId: '88bb17d2-19d2-4ba6-826f-e743ce265db4',
    },
  });

  cardSet.sort((a, b) => Number(a.cardSetId) - Number(b.cardSetId));

  if (!establishedUser?.starterDeck) {
    for (let i = 0; i < cardSet.length; i++) {
      const playerCards = await prisma.playerCard.create({
        data: {
          cardId: cardSet[i].id.toString(),
          name: cardSet[i].name,
          description: cardSet[i].description,
          randomNumber: cardSet[i].randomNumber,
          image: cardSet[i].image,
          tinyImage: cardSet[i].tinyImage,
          inclination: cardSet[i].inclination,
          inclination2: cardSet[i].inclination2,
          effect: cardSet[i].effect,
          biome: cardSet[i].biome,
          effectFunction: cardSet[i].effectFunction,
          rarity: cardSet[i].rarity,
          type: cardSet[i].type,
          attackPower: cardSet[i].attackPower,
          hp: cardSet[i].hp,
          cost: cardSet[i].cost,
          userId: userInfo.id,
        },
      });
      randomCards.push(playerCards);
      if (createTwo.includes(Number(cardSet[i].cardSetId))) {
        for (let j = 1; j <= 1; j++) {
          const playerCards = await prisma.playerCard.create({
            data: {
              cardId: cardSet[i].id.toString(),
              name: cardSet[i].name,
              description: cardSet[i].description,
              randomNumber: cardSet[i].randomNumber,
              image: cardSet[i].image,
              tinyImage: cardSet[i].tinyImage,
              inclination: cardSet[i].inclination,
              inclination2: cardSet[i].inclination2,
              effect: cardSet[i].effect,
              biome: cardSet[i].biome,
              effectFunction: cardSet[i].effectFunction,
              rarity: cardSet[i].rarity,
              type: cardSet[i].type,
              attackPower: cardSet[i].attackPower,
              hp: cardSet[i].hp,
              cost: cardSet[i].cost,
              userId: userInfo.id,
            },
          });
        }
        randomCards.push(playerCards);
      }
      if (createThree.includes(Number(cardSet[i].cardSetId))) {
        for (let k = 1; k <= 3; k++) {
          const playerCards = await prisma.playerCard.create({
            data: {
              cardId: cardSet[i].id.toString(),
              name: cardSet[i].name,
              description: cardSet[i].description,
              randomNumber: cardSet[i].randomNumber,
              image: cardSet[i].image,
              tinyImage: cardSet[i].tinyImage,
              inclination: cardSet[i].inclination,
              inclination2: cardSet[i].inclination2,
              effect: cardSet[i].effect,
              biome: cardSet[i].biome,
              effectFunction: cardSet[i].effectFunction,
              rarity: cardSet[i].rarity,
              type: cardSet[i].type,
              attackPower: cardSet[i].attackPower,
              hp: cardSet[i].hp,
              cost: cardSet[i].cost,
              userId: userInfo.id,
            },
          });
        }
        randomCards.push(playerCards);
      }
      if (createTen.includes(Number(cardSet[i].cardSetId))) {
        for (let l = 1; l <= 9; l++) {
          const playerCards = await prisma.playerCard.create({
            data: {
              cardId: cardSet[i].id.toString(),
              name: cardSet[i].name,
              description: cardSet[i].description,
              randomNumber: cardSet[i].randomNumber,
              image: cardSet[i].image,
              tinyImage: cardSet[i].tinyImage,
              inclination: cardSet[i].inclination,
              inclination2: cardSet[i].inclination2,
              effect: cardSet[i].effect,
              biome: cardSet[i].biome,
              effectFunction: cardSet[i].effectFunction,
              rarity: cardSet[i].rarity,
              type: cardSet[i].type,
              attackPower: cardSet[i].attackPower,
              hp: cardSet[i].hp,
              cost: cardSet[i].cost,
              userId: userInfo.id,
            },
          });
        }
        randomCards.push(playerCards);
      }
    }

    await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: {
        starterDeck: true,
      },
    });

    return NextResponse.json(randomCards);
  } else {
    return NextResponse.json('you have already collected your starter deck');
  }
}
