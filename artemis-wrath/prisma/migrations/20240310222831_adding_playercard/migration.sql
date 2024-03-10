-- CreateTable
CREATE TABLE "PlayerCard" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
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
    "rarity" "Rarity" NOT NULL,
    "type" TEXT,
    "attackPower" INTEGER,
    "hp" INTEGER,
    "cost" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PlayerCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerCard_id_key" ON "PlayerCard"("id");

-- AddForeignKey
ALTER TABLE "PlayerCard" ADD CONSTRAINT "PlayerCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
