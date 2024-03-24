import { NextResponse } from 'next/server';
import { Card } from '@/types/CardType';

const cardSet: Card[] = [
  {
    id: 1,
    name: 'Achlys',
    description:
      'When you slay an opponents creature, your opponent must discard the top card of their deck into their Hell.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/NW5BxB4/Achlys-a-veiled-woman-draped-in-flowing-robes-a.png',
    inclination: 'Mischief',
    effect: '',
    biome: '',
    rarity: 'SuperRare',
    type: 'Immortal',
    effectFunction: '',
    attackPower: 0,
    hp: 0,
    cost: 6,
    tinyImage: '',
    set: 'Nightmare Requiem',
  },
  {
    id: 1,
    name: 'Shadow Wyvern',
    description:
      'A wyvern with wings cloaked in darkness, gliding silently through the twilight of a medieval canyon, its piercing gaze striking fear into the hearts of adventurers.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/NrnrLzn/Shadow-Wyvern-Picture-a-shadow-wyvern-with-wing.png',
    inclination: 'Mischief',
    effect:
      'On play, when this creature is summoned by creature drain, your opponent send the top card of their deck to their Hell.',
    biome: '',
    rarity: 'SuperRare',
    type: 'creature',
    effectFunction: '',
    attackPower: 700,
    hp: 500,
    cost: 6,
    tinyImage: '',
    set: 'Nightmare Requiem',
  },
  {
    id: 1,
    name: 'Shadow Wyvern',
    description:
      'A wyvern with wings cloaked in darkness, gliding silently through the twilight of a medieval canyon, its piercing gaze striking fear into the hearts of adventurers.',
    randomNumber: 321,
    image:
      'https://i.ibb.co/NrnrLzn/Shadow-Wyvern-Picture-a-shadow-wyvern-with-wing.png',
    inclination: 'Mischief',
    effect:
      'On play, when this creature is played by creature drain, your opponent send the top card of their deck to their Hell.',
    biome: '',
    rarity: 'SuperRare',
    type: 'creature',
    effectFunction: '',
    attackPower: 700,
    hp: 500,
    cost: 6,
    tinyImage: '',
    set: 'Nightmare Requiem',
  },
];

export async function GET(req: Request) {
  return NextResponse.json(cardSet);
}
