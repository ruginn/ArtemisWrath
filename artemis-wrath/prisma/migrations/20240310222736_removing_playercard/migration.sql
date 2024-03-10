/*
  Warnings:

  - You are about to drop the `PlayerCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlayerCard" DROP CONSTRAINT "PlayerCard_userId_fkey";

-- DropTable
DROP TABLE "PlayerCard";
