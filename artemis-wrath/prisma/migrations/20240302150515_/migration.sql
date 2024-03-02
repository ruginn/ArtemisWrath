/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Jefftron" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "test" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Jefftron_id_key" ON "Jefftron"("id");
