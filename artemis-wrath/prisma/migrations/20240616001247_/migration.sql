-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_houseId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "houseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;
