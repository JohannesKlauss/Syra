-- CreateTable
CREATE TABLE "VersionInformation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
