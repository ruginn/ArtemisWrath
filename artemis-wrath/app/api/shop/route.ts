import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Card } from '@/types/CardType';


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
 
    const cardSet2 = await prisma.card.findMany({
      where: {
        setId: 'fjkdsl',
      },
    });
    console.log('below is cardset2');
    console.log(cardSet2);


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
