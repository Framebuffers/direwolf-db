/*
  Warnings:

  - You are about to drop the column `builtInCategory` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `createPhaseId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `demolishedPhaseId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `designOption` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `documentOwner` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `elementInfoId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `elementUniqueId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `groupPhaseId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isAnnotative` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isBuiltInCategory` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isGrouped` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isModel` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isModifiable` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isPinned` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isViewSpecific` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `isWorkshared` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `levelId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `ownerViewId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `workset` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `worksetId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `workshareId` on the `ElementInformation` table. All the data in the column will be lost.
  - You are about to drop the column `parameterIdValue` on the `Parameters` table. All the data in the column will be lost.
  - You are about to drop the column `documentName` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `documentVersion` on the `Wolfpack` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uniqueElementId]` on the table `ElementInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ElementInformation" DROP CONSTRAINT "ElementInformation_elementInfoId_fkey";

-- DropForeignKey
ALTER TABLE "Parameters" DROP CONSTRAINT "Parameters_documentOwner_fkey";

-- DropForeignKey
ALTER TABLE "Parameters" DROP CONSTRAINT "Parameters_parameterGuid_fkey";

-- DropIndex
DROP INDEX "ElementInformation_elementUniqueId_key";

-- AlterTable
ALTER TABLE "ElementInformation" DROP COLUMN "builtInCategory",
DROP COLUMN "category",
DROP COLUMN "createPhaseId",
DROP COLUMN "demolishedPhaseId",
DROP COLUMN "designOption",
DROP COLUMN "documentOwner",
DROP COLUMN "elementInfoId",
DROP COLUMN "elementUniqueId",
DROP COLUMN "groupPhaseId",
DROP COLUMN "isAnnotative",
DROP COLUMN "isBuiltInCategory",
DROP COLUMN "isGrouped",
DROP COLUMN "isModel",
DROP COLUMN "isModifiable",
DROP COLUMN "isPinned",
DROP COLUMN "isViewSpecific",
DROP COLUMN "isWorkshared",
DROP COLUMN "levelId",
DROP COLUMN "ownerViewId",
DROP COLUMN "views",
DROP COLUMN "workset",
DROP COLUMN "worksetId",
DROP COLUMN "workshareId",
ALTER COLUMN "uniqueElementId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Parameters" DROP COLUMN "parameterIdValue",
ADD COLUMN     "dataType" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "groupTypeId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sharedParameterGuid" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
ADD COLUMN     "typeId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "value" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "documentOwner" SET DEFAULT '00000000-0000-0000-0000-000000000000';

-- AlterTable
ALTER TABLE "Wolfpack" DROP COLUMN "documentName",
DROP COLUMN "documentVersion";

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "documentSessionId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    "documentCreationId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    "changedElements" BIGINT[],

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectInformation" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "projectName" VARCHAR(255) NOT NULL DEFAULT '',
    "client" VARCHAR(255) NOT NULL DEFAULT '',
    "address" VARCHAR(255) NOT NULL DEFAULT '',
    "author" VARCHAR(255) NOT NULL DEFAULT '',
    "buildingName" VARCHAR(255) NOT NULL DEFAULT '',
    "issueDate" VARCHAR(255) NOT NULL DEFAULT '',
    "location" VARCHAR(255) NOT NULL DEFAULT '',
    "projectNumber" VARCHAR(255) NOT NULL DEFAULT '',
    "organizationDescription" VARCHAR(255) NOT NULL DEFAULT '',
    "organizationName" VARCHAR(255) NOT NULL DEFAULT '',
    "status" VARCHAR(255) NOT NULL DEFAULT '',

    CONSTRAINT "ProjectInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentInformation" (
    "id" SERIAL NOT NULL,
    "documentId" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL DEFAULT '',
    "path" VARCHAR(255) NOT NULL DEFAULT '',
    "uuid" TEXT NOT NULL DEFAULT '',
    "saveCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "DocumentInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentWarning" (
    "id" SERIAL NOT NULL,
    "documentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "severity" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "DocumentWarning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteInformation" (
    "id" SERIAL NOT NULL,
    "documentId" TEXT NOT NULL,
    "placeName" TEXT NOT NULL DEFAULT '',
    "elevation" BIGINT NOT NULL DEFAULT 0,
    "latitude" BIGINT NOT NULL DEFAULT 0,
    "longitude" BIGINT NOT NULL DEFAULT 0,
    "timeZone" BIGINT NOT NULL DEFAULT 0,
    "coordinateSystemId" TEXT NOT NULL DEFAULT '',
    "coordinateSystemDefinition" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "SiteInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitsInformation" (
    "id" SERIAL NOT NULL,
    "documentId" TEXT NOT NULL,
    "lengthUnits" VARCHAR(255) NOT NULL DEFAULT '',
    "areaUnits" VARCHAR(255) NOT NULL DEFAULT '',
    "angle" VARCHAR(255) NOT NULL DEFAULT '',
    "currency" VARCHAR(255) NOT NULL DEFAULT '',
    "number" VARCHAR(255) NOT NULL DEFAULT '',
    "rotationAngle" VARCHAR(255) NOT NULL DEFAULT '',
    "sheetLength" VARCHAR(255) NOT NULL DEFAULT '',
    "slope" VARCHAR(255) NOT NULL DEFAULT '',
    "speed" VARCHAR(255) NOT NULL DEFAULT '',
    "time" VARCHAR(255) NOT NULL DEFAULT '',
    "volume" VARCHAR(255) NOT NULL DEFAULT '',

    CONSTRAINT "UnitsInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_uniqueId_key" ON "Document"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectInformation_projectId_key" ON "ProjectInformation"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentInformation_documentId_key" ON "DocumentInformation"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentWarning_documentId_key" ON "DocumentWarning"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "SiteInformation_documentId_key" ON "SiteInformation"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitsInformation_documentId_key" ON "UnitsInformation"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "ElementInformation_uniqueElementId_key" ON "ElementInformation"("uniqueElementId");

-- AddForeignKey
ALTER TABLE "ElementInformation" ADD CONSTRAINT "ElementInformation_uniqueElementId_fkey" FOREIGN KEY ("uniqueElementId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameters" ADD CONSTRAINT "Parameters_parameterGuid_fkey" FOREIGN KEY ("parameterGuid") REFERENCES "ElementInformation"("uniqueElementId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameters" ADD CONSTRAINT "Parameters_documentOwner_fkey" FOREIGN KEY ("documentOwner") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_uniqueId_fkey" FOREIGN KEY ("uniqueId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectInformation" ADD CONSTRAINT "ProjectInformation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentInformation" ADD CONSTRAINT "DocumentInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentWarning" ADD CONSTRAINT "DocumentWarning_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteInformation" ADD CONSTRAINT "SiteInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitsInformation" ADD CONSTRAINT "UnitsInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;
