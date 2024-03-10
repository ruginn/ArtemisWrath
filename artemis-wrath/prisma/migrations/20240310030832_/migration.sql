/*
  Warnings:

  - The `inclination` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rarity` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `inclination` to the `PlayerCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biome` to the `PlayerCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rarity` to the `PlayerCard` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('Common', 'Uncommon', 'Rare', 'SuperRare', 'Nectar');

-- CreateEnum
CREATE TYPE "Inclination" AS ENUM ('Love', 'Wrath', 'Wisdom', 'Pride', 'Mischief', 'Neutral');

-- CreateEnum
CREATE TYPE "Biome" AS ENUM ('Jungle', 'Tundra', 'Alpine', 'Forest', 'Wetland', 'Grassland', 'Aquatic', 'Island', 'Cave', 'Desert');

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "name" DROP NOT NULL,
DROP COLUMN "inclination",
ADD COLUMN     "inclination" "Inclination",
DROP COLUMN "rarity",
ADD COLUMN     "rarity" "Rarity";

-- AlterTable
ALTER TABLE "PlayerCard" ALTER COLUMN "name" DROP NOT NULL,
DROP COLUMN "inclination",
ADD COLUMN     "inclination" "Inclination" NOT NULL,
DROP COLUMN "biome",
ADD COLUMN     "biome" "Biome" NOT NULL,
DROP COLUMN "rarity",
ADD COLUMN     "rarity" "Rarity" NOT NULL;
