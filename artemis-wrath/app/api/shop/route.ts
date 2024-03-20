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

  const getCards = async () => {
    // for (let i = 0; i < 10; i++) {
    //   let cardCount = cardSet.length - i;
    //   let randomNumber = Math.floor(Math.random() * (cardCount + 1));
    //   const newCard = cardSet.splice(randomNumber, 1);
    //   console.log(randomNumber);
    //   console.log(cardSet[randomNumber]);
    //   // randomCards.push(cardSet[randomNumber])
    //   randomCards.push(newCard[0]);
    // }

    const cardSet2 = await prisma.card.findMany({
      where: {
        setId: 'fjkdsl',
      },
    });
    console.log('below is cardset2');
    console.log(cardSet2);

    // need to fix null from inclination 2

    // Maybe i should just filter out different rarities first then while loop
    const CommonCards = cardSet2.filter((card) => card.rarity === 'Common');
    const UncommonCards = cardSet2.filter((card) => card.rarity === 'Uncommon');
    const RareCards = cardSet2.filter(
      (card) => card.rarity === 'Rare' || card.rarity === 'SuperRare'
    );
    const nectarCards = cardSet2.filter((card) => card.rarity === 'Nectar');
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
  };
  // console.log(
  //   establishedUser?.lastPackDate?.toString(),
  //   realDateStart.toString()
  // );

  return NextResponse.json(randomCards);
}
