export interface Card {
  id: number | string;
  cardSetId?: string;
  name: string | null;
  description?: string | null;
  randomNumber?: number | null;
  image?: string | null;
  tinyImage?: string | null;
  inclination:
    | 'Love'
    | 'Wisdom'
    | 'Wrath'
    | 'Pride'
    | 'Mischief'
    | 'Neutral'
    | null;
  inclination2?:
    | 'Love'
    | 'Wisdom'
    | 'Wrath'
    | 'Pride'
    | 'Mischief'
    | null
    | string;
  effect?: string | null;
  // need to remove or string
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
    | ''
    | null
    | string;
  effectFunction?: string | null;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'SuperRare' | 'Nectar';
  // need to remove or string
  type?:
    | 'creature'
    | 'Immortal'
    | 'Divine Intervention'
    | 'Relic'
    | 'Nectar'
    | null
    | string;
  attackPower?: number | null;
  hp?: number | null;
  cost?: number | null;
  set?: string | null;
  setId?: string | null;
}
