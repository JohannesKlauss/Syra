-- AlterTable
ALTER TABLE "AudioAsset" ADD COLUMN     "audioAssetId" TEXT;

-- AddForeignKey
ALTER TABLE "AudioAsset" ADD FOREIGN KEY ("audioAssetId") REFERENCES "AudioAsset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
