-- DropForeignKey
ALTER TABLE "AudioAsset" DROP CONSTRAINT "AudioAsset_parentAssetId_fkey";

-- AddForeignKey
ALTER TABLE "AudioAsset" ADD FOREIGN KEY ("parentAssetId") REFERENCES "AudioAsset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
