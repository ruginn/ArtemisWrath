export interface Card {
  id?: number | string;
  name: string;
  description?: string | null;
  randomNumber?: number | null;
  image?: string | null;
  tinyImage?: string | null;
  inclination?: 'Love' | 'Wisdom' | 'Wrath' | 'Pride' | 'Mischief' | 'Neutral';
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
  set?: string;
  setId?: string;
}
