export interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  tinyImage?: string;
  inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief' | 'Neutral';
  inclination2?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
  effect?: string;
  biome?:
    | 'Jungle'
    | 'Tundra'
    | 'Alpine'
    | 'Forest'
    | 'Wetland'
    | 'Grassland'
    | 'Aquatic'
    | 'Island'
    | 'Cave'
    | 'Desert'
    | '';
  effectFunction?: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare' | 'Nectar';
  type?: 'creature' | 'Immortal' | 'Divine Intervention' | 'Relic' | 'Nectar';
  attackPower?: number;
  hp?: number;
  cost?: number;
}
