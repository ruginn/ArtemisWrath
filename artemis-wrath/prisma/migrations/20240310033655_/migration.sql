/*
  Warnings:

  - Made the column `rarity` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "rarity" SET NOT NULL;
