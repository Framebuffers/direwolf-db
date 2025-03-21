/*
  Warnings:

  - You are about to drop the column `testId` on the `Wolfpack` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[guid]` on the table `Wolfpack` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "StorageType" AS ENUM ('INTEGER', 'DOUBLE', 'STRING', 'ELEMENTID', 'INVALID');

-- AlterTable
ALTER TABLE "Wolfpack" DROP COLUMN "testId";

-- CreateTable
CREATE TABLE "ElementInformation" (
    "id" SERIAL NOT NULL,
    "uniqueElementId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementInfoId" INTEGER NOT NULL DEFAULT 0,
    "idValue" BIGINT NOT NULL,
    "elementUniqueId" TEXT NOT NULL DEFAULT '',
    "elementVersionId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    "familyName" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "builtInCategory" TEXT NOT NULL DEFAULT '',
    "workset" TEXT NOT NULL DEFAULT '',
    "views" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "designOption" TEXT NOT NULL DEFAULT '',
    "documentOwner" TEXT NOT NULL DEFAULT '',
    "ownerViewId" TEXT NOT NULL DEFAULT '',
    "worksetId" TEXT NOT NULL DEFAULT '',
    "levelId" TEXT NOT NULL DEFAULT '',
    "createPhaseId" TEXT NOT NULL DEFAULT '',
    "demolishedPhaseId" TEXT NOT NULL DEFAULT '',
    "groupPhaseId" TEXT NOT NULL DEFAULT '',
    "workshareId" TEXT NOT NULL DEFAULT '',
    "isGrouped" BOOLEAN NOT NULL DEFAULT false,
    "isModifiable" BOOLEAN NOT NULL DEFAULT false,
    "isViewSpecific" BOOLEAN NOT NULL DEFAULT false,
    "isBuiltInCategory" BOOLEAN NOT NULL DEFAULT false,
    "isAnnotative" BOOLEAN NOT NULL DEFAULT false,
    "isModel" BOOLEAN NOT NULL DEFAULT false,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "isWorkshared" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ElementInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parameters" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parameterGuid" TEXT NOT NULL,
    "documentOwner" TEXT NOT NULL DEFAULT '',
    "storageType" "StorageType" NOT NULL DEFAULT 'INVALID',
    "hasValue" BOOLEAN NOT NULL DEFAULT false,
    "parameterIdValue" BIGINT NOT NULL,
    "isReadOnly" BOOLEAN NOT NULL DEFAULT false,
    "isShared" BOOLEAN NOT NULL DEFAULT false,
    "isUserModifiable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Parameters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ElementInformation_elementUniqueId_key" ON "ElementInformation"("elementUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Parameters_parameterGuid_key" ON "Parameters"("parameterGuid");

-- CreateIndex
CREATE UNIQUE INDEX "Wolfpack_guid_key" ON "Wolfpack"("guid");

-- AddForeignKey
ALTER TABLE "ElementInformation" ADD CONSTRAINT "ElementInformation_elementInfoId_fkey" FOREIGN KEY ("elementInfoId") REFERENCES "Wolfpack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameters" ADD CONSTRAINT "Parameters_parameterGuid_fkey" FOREIGN KEY ("parameterGuid") REFERENCES "ElementInformation"("elementUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameters" ADD CONSTRAINT "Parameters_documentOwner_fkey" FOREIGN KEY ("documentOwner") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;
