/*
  Warnings:

  - Made the column `userId` on table `Issue` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Issue" ALTER COLUMN "userId" SET NOT NULL;
