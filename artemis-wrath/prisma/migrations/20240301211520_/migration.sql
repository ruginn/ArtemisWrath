-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "randomNumber" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "tinyImage" TEXT NOT NULL,
    "inclination" TEXT NOT NULL,
    "inclination2" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "biome" TEXT NOT NULL,
    "effectFunction" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attackPower" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "set" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");
