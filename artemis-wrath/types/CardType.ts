export interface Card {
  id: number;
  name: string;
  description: string;
  randomNumber: number;
  image?: string;
  inclination: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief';
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
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare';
  type?: string;
  attackPower?: number;
  hp?: number;
  cost?: number;
}
