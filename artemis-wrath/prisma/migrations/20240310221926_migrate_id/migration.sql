-- DropIndex
DROP INDEX "PlayerCard_id_key";

-- AlterTable
ALTER TABLE "PlayerCard" ADD CONSTRAINT "PlayerCard_pkey" PRIMARY KEY ("id");
