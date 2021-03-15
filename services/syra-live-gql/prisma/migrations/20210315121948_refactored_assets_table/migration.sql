/*
  Warnings:

  - You are about to drop the column `audioAssetId` on the `Mixdown` table. All the data in the column will be lost.
  - You are about to drop the `AudioAsset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AudioAssetsOnProjects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `assetId` to the `Mixdown` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AudioAsset" DROP CONSTRAINT "AudioAsset_parentAssetId_fkey";

-- DropForeignKey
ALTER TABLE "AudioAsset" DROP CONSTRAINT "AudioAsset_userId_fkey";

-- DropForeignKey
ALTER TABLE "AudioAssetsOnProjects" DROP CONSTRAINT "AudioAssetsOnProjects_audioAssetId_fkey";

-- DropForeignKey
ALTER TABLE "AudioAssetsOnProjects" DROP CONSTRAINT "AudioAssetsOnProjects_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Mixdown" DROP CONSTRAINT "Mixdown_audioAssetId_fkey";

-- AlterTable
ALTER TABLE "Mixdown" DROP COLUMN "audioAssetId",
ADD COLUMN     "assetId" TEXT NOT NULL;

-- DropTable
DROP TABLE "AudioAsset";

-- DropTable
DROP TABLE "AudioAssetsOnProjects";

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPublic" BOOLEAN DEFAULT false,
    "userId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetsOnProjects" (
    "assetId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("assetId","projectId")
);

-- AddForeignKey
ALTER TABLE "Asset" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsOnProjects" ADD FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsOnProjects" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mixdown" ADD FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
