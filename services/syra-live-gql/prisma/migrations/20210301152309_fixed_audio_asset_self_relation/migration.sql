/*
  Warnings:

  - You are about to drop the column `audioAssetId` on the `AudioAsset` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AudioAsset" DROP CONSTRAINT "AudioAsset_audioAssetId_fkey";

-- AlterTable
ALTER TABLE "AudioAsset" DROP COLUMN "audioAssetId",
ADD COLUMN     "parentAssetId" TEXT;

-- AddForeignKey
ALTER TABLE "AudioAsset" ADD FOREIGN KEY ("parentAssetId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
