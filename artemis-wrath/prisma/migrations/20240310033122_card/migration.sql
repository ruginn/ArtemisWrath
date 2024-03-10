-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "randomNumber" INTEGER,
    "image" TEXT,
    "tinyImage" TEXT,
    "inclination" "Inclination",
    "inclination2" TEXT,
    "effect" TEXT,
    "biome" TEXT,
    "effectFunction" TEXT,
    "rarity" "Rarity",
    "type" TEXT,
    "attackPower" INTEGER,
    "hp" INTEGER,
    "cost" INTEGER,
    "setId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
