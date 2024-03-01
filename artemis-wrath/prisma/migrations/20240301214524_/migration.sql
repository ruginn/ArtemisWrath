-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "inclination2" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "randomNumber" DROP NOT NULL,
ALTER COLUMN "inclination" DROP NOT NULL;
