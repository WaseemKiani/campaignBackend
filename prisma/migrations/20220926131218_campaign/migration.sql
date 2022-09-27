/*
  Warnings:

  - Made the column `status` on table `Campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "isDeleted" BOOLEAN DEFAULT false,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" DROP DEFAULT,
ALTER COLUMN "status" SET DATA TYPE TEXT;
