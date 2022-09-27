-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "campaignName" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "expectedRevinue" INTEGER NOT NULL,
    "ActualCost" INTEGER NOT NULL,
    "numberSent" INTEGER NOT NULL,
    "budgetedCost" INTEGER NOT NULL,
    "expectedCost" INTEGER NOT NULL,
    "assignedBD" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);
