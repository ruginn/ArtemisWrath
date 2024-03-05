-- CreateTable
CREATE TABLE "PlayerCard" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "randomNumber" INTEGER,
    "image" TEXT,
    "tinyImage" TEXT,
    "inclination" TEXT,
    "inclination2" TEXT,
    "effect" TEXT,
    "biome" TEXT,
    "effectFunction" TEXT,
    "rarity" TEXT,
    "type" TEXT,
    "attackPower" INTEGER,
    "hp" INTEGER,
    "cost" INTEGER,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCard_id_key" ON "PlayerCard"("id");

-- AddForeignKey
ALTER TABLE "PlayerCard" ADD CONSTRAINT "PlayerCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
