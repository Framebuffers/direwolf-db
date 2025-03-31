/*
  Warnings:

  - You are about to drop the column `document` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `elements` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `episode` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `warnings` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `wolfpackUniqueId` on the `Wolfpack` table. All the data in the column will be lost.
  - Added the required column `documentName` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentVersion` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileOrigin` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guid` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testId` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testName` to the `Wolfpack` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Wolfpack_wolfpackUniqueId_key";

-- AlterTable
ALTER TABLE "Wolfpack" DROP COLUMN "document",
DROP COLUMN "elements",
DROP COLUMN "episode",
DROP COLUMN "name",
DROP COLUMN "result",
DROP COLUMN "source",
DROP COLUMN "warnings",
DROP COLUMN "wolfpackUniqueId",
ADD COLUMN     "documentName" VARCHAR(255) NOT NULL,
ADD COLUMN     "documentVersion" TEXT NOT NULL,
ADD COLUMN     "fileOrigin" VARCHAR(255) NOT NULL,
ADD COLUMN     "guid" TEXT NOT NULL,
ADD COLUMN     "results" JSON,
ADD COLUMN     "testId" INTEGER NOT NULL,
ADD COLUMN     "testName" VARCHAR(255) NOT NULL,
ALTER COLUMN "timeTaken" SET DEFAULT 0,
ALTER COLUMN "timeTaken" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Wolfpack_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Wolfpack_id_key";

-- DropEnum
DROP TYPE "StorageType";
