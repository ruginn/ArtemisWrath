/*
  Warnings:

  - Made the column `name` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `PlayerCard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "PlayerCard" ALTER COLUMN "name" SET NOT NULL;
