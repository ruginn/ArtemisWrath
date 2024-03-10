/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `PlayerCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlayerCard_id_key" ON "PlayerCard"("id");
