import { NextResponse } from 'next/server';
import { Card } from '@/types/CardType';
import { prisma } from '@/lib/prisma';

const cardSet: Card[] = [
  {
    id: 1,
    name: 'Atlas',
    description:
      'When you have 2 or less divine essence, you may discard a card from your hand to your hell then increase the Attakc of one of your creatures by 300.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/rMDjZxh/A-powerful-illustration-of-Atlas-the-mythical-T.png',
    inclination: 'Wrath',
    inclination2: 'Wisdom',
    effect:
      'When you have 2 or less divine essence, you may discard a card from your hand to your hell then increase the Attakc of one of your creatures by 300.',
    biome: '',
    rarity: 'SuperRare',
    type: 'Immortal',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 6,
    tinyImage: 'https://i.ibb.co/0yzcKxS/Atlas.png',
    set: 'Realm of Time',
  },
  {
    id: 2,
    name: 'Abyssal Drake',
    description:
      "Slumbering in the depths of the cosmic abyss, the abyssal drake's scales absorb the darkness of the void, its ancient presence shrouded in mystery as it emerges from the shadows to traverse the infinite depths of space and time.",
    randomNumber: 321,
    image:
      'https://i.ibb.co/G9nM5w6/an-awe-inspiring-illustration-of-an-abyssal-drake-15-S2-Ixo-BTru-Vy-MZqn-Pa-g-A-Sdg2w-H2t-Rv2-lh3ckl.png',
    inclination: 'Wrath',
    effect:
      'Increase the attack of this creature by 100 for every relic in your hell.',
    biome: 'Dimensional',
    rarity: 'SuperRare',
    type: 'creature',
    effectFunction: '',
    attackPower: 700,
    hp: 500,
    cost: 7,
    tinyImage: 'https://i.ibb.co/qBYs995/Abyssal-drake.png',
    set: 'Realm of Time',
  },
  {
    id: 3,
    name: 'Luminous Leviathan',
    description:
      "Dwelling in the deepest reaches of the cosmic ocean, the luminous leviathan's scales emit an otherworldly glow, illuminating the abyssal depths with radiant bioluminescence as it navigates the mysteries of the cosmic deep.",
    randomNumber: 321,
    image:
      'https://i.ibb.co/9y81644/luminous-leviathan-dwelling-in-the-deepest-reaches-6-5-Zh-HMr-Qo-WLdi8-CC466-IQ-yc-H6u2x-TT6-S0-7-I6.png',
    inclination: 'Wrath',
    effect:
      'On play search your deck for a relic card add the card to your hand, then shuffle your deck.',
    biome: 'Cave',
    rarity: 'Rare',
    type: 'creature',
    effectFunction: '',
    attackPower: 200,
    hp: 300,
    cost: 2,
    tinyImage: 'https://i.ibb.co/8KjRbBY/luminous-leviathan.png',
    set: 'Realm of Time',
  },
  {
    id: 4,
    name: 'Eclipse Owl',
    description:
      'Nesting amidst the shadowy branches of the cosmic forest, the eclipse owl emerges under the veiled light of lunar and solar eclipses, its eyes gleaming with the secrets of the celestial dance between sun and moon.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/ZWvsYPR/a-stunning-illustration-of-an-eclipse-owl-nestled-g-Uv-Maj7x-Qwu-Ia4ih-Msx-K2g-aw-O7-Iug-Qau-TUh-O0z.png',
    inclination: 'Wrath',
    effect: '',
    biome: 'Forest',
    rarity: 'Common',
    type: 'creature',
    effectFunction: '',
    attackPower: 300,
    hp: 200,
    cost: 2,
    tinyImage: 'https://i.ibb.co/mSZHFYJ/eclipse-owl.png',
    set: 'Realm of Time',
  },
  {
    id: 5,
    name: 'Stormbringer Stallion',
    description:
      'Across the windswept plains of the interface of space-time, the stormbringer stallion gallops with primal fury, its mane and tail trailing storm clouds, a manifestation of raw elemental power.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/myPL0CF/a-stunning-otherworldly-illustration-of-the-stormb-HQm-Dy-GCq-S-e-S8m2f-g-Wz-GA-m-XBf9llf-SSa-H7-Flr.png',
    inclination: 'Wrath',
    effect:
      'When this card is on play, this is the only creature that be targeted on your side of the field.',
    biome: 'Grassland',
    rarity: 'Common',
    type: 'creature',
    effectFunction: '',
    attackPower: 400,
    hp: 400,
    cost: 4,
    tinyImage: 'https://i.ibb.co/fHnSkcJ/stormbringer-stallion.png',
    set: 'Realm of Time',
  },
  {
    id: 6,
    name: 'Crystal Serpent',
    description:
      'Within the crystalline depths of the interface of space-time, the crystal serpent slithers with serenity, its transparent scales refracting light into a kaleidoscope of colors, a keeper of ancient wisdom.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/z4YbpYz/crystal-serpent-within-the-crystalline-depths-of-t-IWaodd03-QRiy-MSg-Q9-Td-JGg-84n-Ns-Sv-US8-K7qf-KF.png',
    inclination: 'Wrath',
    effect: 'On play discard 2 cards, then draw 2 cards.',
    biome: 'Cave',
    rarity: 'Uncommon',
    type: 'creature',
    effectFunction: '',
    attackPower: 200,
    hp: 200,
    cost: 2,
    tinyImage: 'https://i.ibb.co/1MNL1FN/crystal-serpent.png',
    set: 'Realm of Time',
  },
  {
    id: 7,
    name: 'Eclipse Dragon',
    description:
      'At the nexus of cosmic alignments in the interface of space-time, the eclipse dragon unfurls its wings with celestial majesty, its presence heralding the convergence of sun and moon, a symbol of balance and harmony.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/Br3VNM1/eclipse-dragon-at-the-nexus-of-cosmic-alignments-i-U3f-NZSUu-Qcaeo-Td-Ys4-SVd-A-72-Sp-Nh-r-R1-S4y-Av.png',
    inclination: 'Wisdom',
    effect:
      'When this card is played you may play another creature with the biome of dimensional with a cost of 4 or less',
    biome: 'Dimensional',
    rarity: 'SuperRare',
    type: 'creature',
    effectFunction: '',
    attackPower: 600,
    hp: 600,
    cost: 6,
    tinyImage: 'https://i.ibb.co/MsmN0Jb/eclipse-dragon.png',
    set: 'Realm of Time',
  },
  {
    id: 8,
    name: 'Stellar Gryphon',
    description:
      "Soaring across the celestial expanse of the interface of space-time, the stellar gryphon's wings span the breadth of galaxies, its majestic form radiating the brilliance of a thousand stars, a celestial sentinel guarding the cosmic realm.",
    randomNumber: 321,
    image:
      'https://i.ibb.co/t25195V/stellar-gryphon-soaring-across-the-celestial-expan-PJcin0j8-S46-Tg-RRi6m-NSh-Q-Dlnt-C2-Lc-T1-KHX6p-G.png',
    inclination: 'Wisdom',
    effect:
      'On play, draw 5 cards from the top of your deck, you may add a card with the biome Dimensional into your hand and place the rest of the cards in your hell or to the bottom of your deck.',
    biome: 'Dimensional',
    rarity: 'Rare',
    type: 'creature',
    effectFunction: '',
    attackPower: 300,
    hp: 500,
    cost: 4,
    tinyImage: 'https://i.ibb.co/xGjRH9M/stellar-gryphon.png',
    set: 'Realm of Time',
  },
  {
    id: 9,
    name: 'Thunderclap Falcon',
    description:
      'Soaring through the stormy skies of the interface of space-time, the thunderclap falcon unleashes sonic booms with every beat of its wings.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/w0FVdy1/a-breathtaking-illustration-of-the-thunderclap-fal-USTt-VC3-ISZm-PNHi-Dh-9trg-SHtm-LTg-ESYu-Y78k-0bg.png',
    inclination: 'Wisdom',
    effect: '',
    biome: 'Dimensional',
    rarity: 'Uncommon',
    type: 'creature',
    effectFunction: '',
    attackPower: 500,
    hp: 400,
    cost: 3,
    tinyImage: 'https://i.ibb.co/RY5cbpz/thunderclap-falcon.png',
    set: 'Realm of Time',
  },
  {
    id: 10,
    name: 'Nebula Jaguar',
    description:
      "Prowling through the cosmic jungles of the interface of space-time, the nebula jaguar's fur shimmers with the vibrant hues of distant nebulae, its primal instincts honed by the enigmatic energies of the celestial wilderness.",
    randomNumber: 321,
    image:
      'https://i.ibb.co/nb4GY8G/nebula-jaguar-prowling-through-the-cosmic-jungles-Z2p6z-H-LQXWZs-IVa-k-Rtg-9wg-TQ2-T8-Qz-OYFgg-Cg-Be.png',
    inclination: 'Wisdom',
    effect: 'This creature can attack twice in one turn.',
    biome: 'Jungle',
    rarity: 'Common',
    type: 'creature',
    effectFunction: '',
    attackPower: 400,
    hp: 400,
    cost: 4,
    tinyImage: 'https://i.ibb.co/gzkFgWv/nebula-jaguar.png',
    set: 'Realm of Time',
  },
  {
    id: 11,
    name: 'Frostbite Phoenix',
    description:
      'Within the icy heart of the interface of space-time, the frostbite phoenix spreads its wings with regal beauty, its feathers sparkling with frost, a symbol of resilience in the face of adversity.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/6gVwcvp/frostbite-phoenix-within-the-icy-heart-of-the-inte-ds-K62-53-R1-GQLyy-EP-ls-FQ-Tl-ZU4m-H3-THSYfnbx-Y.png',
    inclination: 'Wisdom',
    effect:
      'On play send a creature on your opponents field to their hand with a cost of 3 or less.',
    biome: 'Tundra',
    rarity: 'Uncommon',
    type: 'creature',
    effectFunction: '',
    attackPower: 200,
    hp: 200,
    cost: 3,
    tinyImage: 'https://i.ibb.co/nj44dJh/frostbite-phoenix.png',
    set: 'Realm of Time',
  },
  {
    id: 12,
    name: 'Celestial Kraken',
    description:
      'Within the depths of the cosmic ocean in the interface of space-time, the celestial kraken lurks with enigmatic wisdom, its tentacles adorned with constellations, a guardian of the cosmic seas.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/djVPKs4/celestial-kraken-within-the-depths-of-the-cosmic-o-at-Pq-Q1-Qw-Rviod-R4hns-JS2-A-Xofh-Aig-YQVGgaf-HF.png',
    inclination: 'Wisdom',
    effect: '',
    biome: 'Aquatic',
    rarity: 'SuperRare',
    type: 'creature',
    effectFunction: '',
    attackPower: 300,
    hp: 200,
    cost: 2,
    tinyImage: 'https://i.ibb.co/VY1JVDH/celestial-kraken.png',
    set: 'Realm of Time',
  },
  {
    id: 13,
    name: "Atlas' Domain",
    description: 'Discard 3 cards to send an attacking creature to hell.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/X4cVQRQ/a-breathtakingly-intricate-illustration-of-atlas-t-gx-P1-Pc-Z9-SOi-Up-Uxnme-EOEw-ex5r9-WHGSX2yva-V97.png',
    inclination: 'Pride',
    effect: '',
    biome: '',
    rarity: 'SuperRare',
    type: 'Divine Intervention',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 3,
    tinyImage: 'https://i.ibb.co/HFXJ3qf/atlas-domain.png',
    set: 'Realm of Time',
  },
  {
    id: 14,
    name: "Atlas' Hammer",
    description: 'Increase the attack of the attached creature by 200.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/Pz6SKBg/a-powerful-illustration-of-the-a-huge-ancient-intr-6-El-XF42-VRQGp-Pjxj9e-BE-Q-y-XL7-MO7-KRWi-YJ5a-R.png',
    inclination: 'Pride',
    effect: '',
    biome: '',
    rarity: 'SuperRare',
    type: 'Relic',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 2,
    tinyImage: 'https://i.ibb.co/Pm5fQGg/atlas-hammer.png',
    set: 'Realm of Time',
  },
  {
    id: 15,
    name: "Atlas' Shield",
    description: 'Increase the life of the attached creature by 200.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/5czjqvr/a-breathtakingly-detailed-illustration-of-an-enorm-uz-Jc-Ci8-UQwe0e1-SJljj-XRw-O4-Fz7-Iq-UTBu-Po-Mo.png',
    inclination: 'Pride',
    effect: '',
    biome: '',
    rarity: 'SuperRare',
    type: 'Relic',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 2,
    tinyImage: 'https://i.ibb.co/fnhPwMS/atlas-shield.png',
    set: 'Realm of Time',
  },
  {
    id: 16,
    name: "Atlas' Cloak",
    description:
      'Attach this to a creature for a turn, this creature can attack twice',
    randomNumber: 321,
    image:
      'https://i.ibb.co/r7kLKjd/a-powerful-illustration-of-the-a-huge-ancient-intr-kojcy-s-MT1iwy-LSh94p-RAg-nq-Wm-NYDu-RT29hx-OCh1.png',
    inclination: 'Pride',
    effect: '',
    biome: '',
    rarity: 'Rare',
    type: 'Relic',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 4,
    tinyImage: 'https://i.ibb.co/dtzWkL7/atlas-cloak.png',
    set: 'Realm of Time',
  },
  {
    id: 17,
    name: 'Mixed Nectar',
    description:
      'You may only have 4 mixed nectar in your deck. This nectar can be used twice in one turn for Wrath or Wisdom.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/tXd5mz1/a-mesmerizing-3d-render-of-a-beautifully-crafted-g-lk-Otu-Xme-QLy-N6qa4x-o-E9g-hj-Km-Y467-Tf-Okio-M.png',
    inclination: 'Wisdom',
    inclination2: 'Wrath',
    effect: '',
    biome: '',
    rarity: 'Uncommon',
    type: 'Immortal',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 2,
    tinyImage: 'https://i.ibb.co/ZMB3YWG/Mixed-Nectart.png',
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
