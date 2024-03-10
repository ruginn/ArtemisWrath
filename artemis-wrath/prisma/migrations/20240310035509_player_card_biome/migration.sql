/*
  Warnings:

  - The `biome` column on the `PlayerCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "PlayerCard" DROP COLUMN "biome",
ADD COLUMN     "biome" TEXT;
