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
  let randomCards: Card[] = [];
  const establishedUser = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
  });

  const setTotal = {
    Common: 5,
    Uncommon: 3,
    Rare: 2,
  };

  const cardSet = await prisma.card.findMany({
    where: {
      setId: '33f05826-b052-4fe4-9c89-4bf4b469bfe7',
    },
  });

  // need to fix null from inclination 2

  // Maybe i should just filter out different rarities first then while loop
  const CommonCards = cardSet.filter((card) => card.rarity === 'Common');
  const UncommonCards = cardSet.filter((card) => card.rarity === 'Uncommon');
  const RareCards = cardSet.filter(
    (card) => card.rarity === 'Rare' || card.rarity === 'SuperRare'
  );
  const nectarCards = cardSet.filter((card) => card.rarity === 'Nectar');
  // const SuperCards = cardSet.filter((card) => card.rarity === 'SuperRare');
  let randomNectarNum = Math.floor(Math.random() * nectarCards.length);
  randomCards.push(nectarCards[randomNectarNum]);
  while (setTotal.Common > 0) {
    let randomNumber = Math.floor(Math.random() * CommonCards.length);
    const newCard = CommonCards.splice(randomNumber, 1);
    randomCards.push(newCard[0]);
    setTotal.Common -= 1;
  }
  while (setTotal.Uncommon > 0) {
    let randomNumber = Math.floor(Math.random() * UncommonCards.length);
    const newCard = UncommonCards.splice(randomNumber, 1);
    randomCards.push(newCard[0]);
    setTotal.Uncommon -= 1;
  }
  while (setTotal.Rare > 0) {
    let randomNumber = Math.floor(Math.random() * RareCards.length);
    const newCard = RareCards.splice(randomNumber, 1);
    randomCards.push(newCard[0]);
    setTotal.Rare -= 1;
  }

  for (let i = 0; i < randomCards.length; i++) {
    const playerCards = await prisma.playerCard.create({
      data: {
        cardId: randomCards[i].id.toString(),
        name: randomCards[i].name,
        description: randomCards[i].description,
        randomNumber: randomCards[i].randomNumber,
        image: randomCards[i].image,
        tinyImage: randomCards[i].tinyImage,
        inclination: randomCards[i].inclination,
        inclination2: randomCards[i].inclination2,
        effect: randomCards[i].effect,
        biome: randomCards[i].biome,
        effectFunction: randomCards[i].effectFunction,
        rarity: randomCards[i].rarity,
        type: randomCards[i].type,
        attackPower: randomCards[i].attackPower,
        hp: randomCards[i].hp,
        cost: randomCards[i].cost,
        userId: userInfo.id,
      },
    });
  }

  if (establishedUser && establishedUser.crystals) {
    const updatedUser = await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: { crystals: establishedUser.crystals - userInfo.crystals },
    });
  }
  // if (randomCards.length > 1) {
  //   return NextResponse.json(randomCards);
  // }
  return NextResponse.json(randomCards);
}
