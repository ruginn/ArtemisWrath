/*
  Warnings:

  - You are about to drop the column `set` on the `Card` table. All the data in the column will be lost.
  - Added the required column `setId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "set",
ADD COLUMN     "setId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "test" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Set_id_key" ON "Set"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
