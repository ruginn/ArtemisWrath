/*
  Warnings:

  - Added the required column `cardSetId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `miniName` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Biomoe" AS ENUM ('Jungle', 'Tundra', 'Alpine', 'Forest', 'Wetland', 'Grassland', 'Aquatic', 'Island', 'Cave', 'Desert');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardSetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "miniName" TEXT NOT NULL;
