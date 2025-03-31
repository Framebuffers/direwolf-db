/*
  Warnings:

  - You are about to drop the `DocumentEpisodeRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocumentRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ElementRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InstanceRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParameterRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WarningCollectionRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WarningRecord` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `resultCount` on table `Wolfpack` required. This step will fail if there are existing NULL values in that column.
  - Made the column `result` on table `Wolfpack` required. This step will fail if there are existing NULL values in that column.
  - Made the column `source` on table `Wolfpack` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "DocumentEpisodeRecord" DROP CONSTRAINT "DocumentEpisodeRecord_documentMetadataUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentEpisodeRecord" DROP CONSTRAINT "DocumentEpisodeRecord_parentWolfpackUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentRecord" DROP CONSTRAINT "DocumentRecord_id_fkey";

-- DropForeignKey
ALTER TABLE "ElementRecord" DROP CONSTRAINT "ElementRecord_id_fkey";

-- DropForeignKey
ALTER TABLE "InstanceRecord" DROP CONSTRAINT "InstanceRecord_id_fkey";

-- DropForeignKey
ALTER TABLE "ParameterRecord" DROP CONSTRAINT "ParameterRecord_id_fkey";

-- DropForeignKey
ALTER TABLE "WarningCollectionRecord" DROP CONSTRAINT "WarningCollectionRecord_id_fkey";

-- DropForeignKey
ALTER TABLE "WarningRecord" DROP CONSTRAINT "WarningRecord_id_fkey";

-- AlterTable
ALTER TABLE "Wolfpack" ADD COLUMN     "document" JSONB,
ADD COLUMN     "elements" JSONB,
ADD COLUMN     "episode" JSONB,
ADD COLUMN     "warnings" JSONB,
ALTER COLUMN "resultCount" SET NOT NULL,
ALTER COLUMN "result" SET NOT NULL,
ALTER COLUMN "source" SET NOT NULL;

-- DropTable
DROP TABLE "DocumentEpisodeRecord";

-- DropTable
DROP TABLE "DocumentRecord";

-- DropTable
DROP TABLE "ElementRecord";

-- DropTable
DROP TABLE "InstanceRecord";

-- DropTable
DROP TABLE "ParameterRecord";

-- DropTable
DROP TABLE "WarningCollectionRecord";

-- DropTable
DROP TABLE "WarningRecord";
