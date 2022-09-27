/*
  Warnings:

  - Made the column `endDate` on table `Campaign` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isDeleted` on table `Campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campaign" ALTER COLUMN "assignedBD" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET NOT NULL,
ALTER COLUMN "isDeleted" SET NOT NULL;
