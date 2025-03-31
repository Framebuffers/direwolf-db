/*
  Warnings:

  - The primary key for the `Wolfpack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `changedElements` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `documentCreationId` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `documentName` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `documentSessionId` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `fileOrigin` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `guid` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `results` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to drop the column `testName` on the `Wolfpack` table. All the data in the column will be lost.
  - You are about to alter the column `timeTaken` on the `Wolfpack` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to drop the `DocumentInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocumentWarning` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ElementInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parameters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SiteInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UnitsInformation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Wolfpack` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[wolfpackUniqueId]` on the table `Wolfpack` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "DocumentInformation" DROP CONSTRAINT "DocumentInformation_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentWarning" DROP CONSTRAINT "DocumentWarning_documentId_fkey";

-- DropForeignKey
ALTER TABLE "ElementInformation" DROP CONSTRAINT "ElementInformation_uniqueElementId_fkey";

-- DropForeignKey
ALTER TABLE "Parameters" DROP CONSTRAINT "Parameters_parameterGuid_fkey";

-- DropForeignKey
ALTER TABLE "ProjectInformation" DROP CONSTRAINT "ProjectInformation_projectId_fkey";

-- DropForeignKey
ALTER TABLE "SiteInformation" DROP CONSTRAINT "SiteInformation_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UnitsInformation" DROP CONSTRAINT "UnitsInformation_documentId_fkey";

-- DropIndex
DROP INDEX "Wolfpack_guid_key";

-- AlterTable
ALTER TABLE "Wolfpack" DROP CONSTRAINT "Wolfpack_pkey",
DROP COLUMN "changedElements",
DROP COLUMN "documentCreationId",
DROP COLUMN "documentName",
DROP COLUMN "documentSessionId",
DROP COLUMN "fileOrigin",
DROP COLUMN "guid",
DROP COLUMN "results",
DROP COLUMN "testName",
ADD COLUMN     "name" TEXT DEFAULT 'wolfpack',
ADD COLUMN     "result" JSONB,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "wolfpackUniqueId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
ALTER COLUMN "timeTaken" SET DEFAULT 0,
ALTER COLUMN "timeTaken" SET DATA TYPE BIGINT,
ALTER COLUMN "resultCount" DROP NOT NULL;

-- DropTable
DROP TABLE "DocumentInformation";

-- DropTable
DROP TABLE "DocumentWarning";

-- DropTable
DROP TABLE "ElementInformation";

-- DropTable
DROP TABLE "Parameters";

-- DropTable
DROP TABLE "ProjectInformation";

-- DropTable
DROP TABLE "SiteInformation";

-- DropTable
DROP TABLE "UnitsInformation";

-- CreateTable
CREATE TABLE "DocumentEpisodeRecord" (
    "id" SERIAL NOT NULL,
    "documentEpisodeUniqueId" TEXT NOT NULL,
    "parentWolfpackUniqueId" TEXT NOT NULL,
    "documentMetadataUniqueId" TEXT,
    "documentEpisodeRecordUniqueId" TEXT,
    "documentVersionUniqueId" TEXT,
    "documentCreationId" TEXT,
    "documentSaveId" TEXT,
    "documentSaveCount" INTEGER DEFAULT 0,
    "documentLastSaveDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DocumentRecord" (
    "id" SERIAL NOT NULL,
    "documentRecordUniqueId" TEXT NOT NULL,
    "parentWolfpackUniqueId" TEXT NOT NULL,
    "parentDocumentEpisodeUniqueId" TEXT NOT NULL,
    "documentName" VARCHAR(255),
    "documentPath" VARCHAR(255),
    "projectName" VARCHAR(255),
    "projectClient" VARCHAR(255),
    "projectAddress" VARCHAR(255),
    "projectAuthor" VARCHAR(255),
    "projectBuildingName" VARCHAR(255),
    "projectIssueDate" VARCHAR(255),
    "projectLocation" VARCHAR(255),
    "projectNumber" VARCHAR(255),
    "projectOrganizationDescription" VARCHAR(255),
    "projectOrganizationName" VARCHAR(255),
    "projectStatus" VARCHAR(255),
    "projectPlaceName" VARCHAR(255),
    "projectElevation" BIGINT DEFAULT 0,
    "projectLatitude" BIGINT DEFAULT 0,
    "projectLongitude" BIGINT DEFAULT 0,
    "projectTimeZone" BIGINT DEFAULT 0,
    "projectGeoCoordinateSystemId" VARCHAR(255),
    "projectGeoCoordinateSystemDefinition" VARCHAR(255),
    "projectSpecLength" VARCHAR(255),
    "projectSpecArea" VARCHAR(255),
    "projectSpecAngle" VARCHAR(255),
    "projectSpecCurrency" VARCHAR(255),
    "projectSpecNumber" VARCHAR(255),
    "projectSpecRotationAngle" VARCHAR(255),
    "projectSpecSheetLength" VARCHAR(255),
    "projectSpecSiteAngle" VARCHAR(255),
    "projectSpecSlope" VARCHAR(255),
    "projectSpecSpeed" VARCHAR(255),
    "projectSpecTime" VARCHAR(255),
    "projectSpecVolume" VARCHAR(255),
    "warningCollectionRecordId" INTEGER
);

-- CreateTable
CREATE TABLE "ElementRecord" (
    "id" SERIAL NOT NULL,
    "elementUniqueId" TEXT NOT NULL,
    "parentdocumentUniqueId" TEXT NOT NULL,
    "documentVersionUniqueId" TEXT NOT NULL,
    "elementArePhasesModifiable" BOOLEAN DEFAULT false,
    "elementCanBeLocked" BOOLEAN DEFAULT false,
    "elementCanFlipFacing" BOOLEAN DEFAULT false,
    "elementCanFlipHand" BOOLEAN DEFAULT false,
    "elementCanFlipWorkPlane" BOOLEAN DEFAULT false,
    "elementCanHaveTypeAssigned" BOOLEAN DEFAULT false,
    "elementCanRotate" BOOLEAN DEFAULT false,
    "elementCanSplit" BOOLEAN DEFAULT false,
    "elementIsFacingFlipped" BOOLEAN DEFAULT false,
    "elementIsHandFlipped" BOOLEAN DEFAULT false,
    "elementHasModifiedGeometry" BOOLEAN DEFAULT false,
    "elementHasPhases" BOOLEAN DEFAULT false,
    "elementHasSpatialElementCalculationPoint" BOOLEAN DEFAULT false,
    "elementHasSpatialElementFromToCalculationPoints" BOOLEAN DEFAULT false,
    "elementHasSweptProfile" BOOLEAN DEFAULT false,
    "elementIsExternalFileReference" BOOLEAN DEFAULT false,
    "elementIsMirrored" BOOLEAN DEFAULT false,
    "elementIsMonitoringLinkElement" BOOLEAN DEFAULT false,
    "elementIsMonitoringLocalElement" BOOLEAN DEFAULT false,
    "elementIsPinned" BOOLEAN DEFAULT false,
    "elementIsSlantedColumn" BOOLEAN DEFAULT false,
    "elementIsViewSpecific" BOOLEAN DEFAULT false,
    "elementDoesReferToExternalResourceReferences" BOOLEAN DEFAULT false,
    "elementTransformHasReflection" BOOLEAN DEFAULT false,
    "elementTransformIsConformal" BOOLEAN DEFAULT false,
    "elementIsVisible" BOOLEAN DEFAULT false,
    "elementAnalyticalModelValueId" BIGINT DEFAULT -1,
    "elementCreatedPhaseValueId" BIGINT DEFAULT -1,
    "elementDemolishedPhaseValueId" BIGINT DEFAULT -1,
    "elementHostFaceValueId" BIGINT DEFAULT -1,
    "elementHostParameterValueId" BIGINT DEFAULT -1,
    "elementLevelValueId" BIGINT DEFAULT -1,
    "elementCopingsValueId" BIGINT[],
    "elementDependentElementsValueId" BIGINT[],
    "elementMaterialsValueId" BIGINT[],
    "elementMonitoredLinksValueId" BIGINT[],
    "elementReferencesValueId" BIGINT[],
    "elementSubComponentsValueId" BIGINT[],
    "elementWorksetValueId" BIGINT DEFAULT -1,
    "elementDesignOptionUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementSymbolUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementFromRoomUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementHostUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementPhaseUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementRoomUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementSpaceUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementSuperComponentUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "familyTypeForgeId" VARCHAR(255),
    "familyBuiltInCategoryName" VARCHAR(255),
    "familyName" VARCHAR(255),
    "elementCategoryType" VARCHAR(255),
    "elementTypesCount" VARCHAR(255),
    "elementInstancesCount" VARCHAR(255),
    "elementInstancesUniqueId" VARCHAR(255),
    "elementSpatialElementCalculationPoints" VARCHAR(255),
    "elementPhaseStatus" VARCHAR(255),
    "elementExternalResourceReferences" VARCHAR(255),
    "elementEntitySchemasUniqueId" TEXT DEFAULT '00000000-0000-0000-0000-000000000000',
    "elementTransformHandOrientation" DOUBLE PRECISION[],
    "elementTransformBasis" DOUBLE PRECISION[],
    "elementTransformDeterminant" DOUBLE PRECISION DEFAULT 0,
    "elementTransformIdentityBasis" DOUBLE PRECISION[],
    "elementTransformOrigin" DOUBLE PRECISION[],
    "elementTransformScale" BIGINT DEFAULT 0,
    "elementPointPlacementLocation" VARCHAR(255),
    "elementPointPlacementName" VARCHAR(255),
    "elementPointReference" VARCHAR(255),
    "elementFacingOrientation" DOUBLE PRECISION[],
    "elementStructuralMaterialValueId" BIGINT DEFAULT 0,
    "elementStructuralMaterialType" VARCHAR(255),
    "elementStructuralType" VARCHAR(255),
    "elementStructuralInstanceUsage" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "InstanceRecord" (
    "id" SERIAL NOT NULL,
    "instanceRecordUniqueId" TEXT NOT NULL,
    "instanceCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instanceValueId" BIGINT DEFAULT 0,
    "instanceUniqueId" VARCHAR(255),
    "instanceFamilyName" VARCHAR(255),
    "instanceBuiltInCategory" VARCHAR(255),
    "instanceWorkset" VARCHAR(255),
    "instanceViews" TEXT[],
    "instanceIsGrouped" BOOLEAN DEFAULT false,
    "instanceIsModifiable" BOOLEAN DEFAULT false,
    "instanceIsViewSpecific" BOOLEAN DEFAULT false,
    "instanceIsBuiltInCategory" BOOLEAN DEFAULT false,
    "instanceIsAnnotative" BOOLEAN DEFAULT false,
    "instanceIsModel" BOOLEAN DEFAULT false,
    "instanceIsPinned" BOOLEAN DEFAULT false,
    "instanceIsWorkshared" BOOLEAN DEFAULT false,
    "instanceOwnerViewUniqueId" BIGINT DEFAULT 0,
    "instanceDesignOptionUniqueId" VARCHAR(255),
    "instanceWorksetUniqueId" VARCHAR(255),
    "instanceLevelUniqueId" VARCHAR(255),
    "instanceCreatedPhaseUniqueId" VARCHAR(255),
    "instanceDemolishedPhaseUniqueId" VARCHAR(255),
    "instanceGroupUniqueId" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "ParameterRecord" (
    "id" SERIAL NOT NULL,
    "parameterUniqueId" TEXT NOT NULL,
    "parentInstanceUniqueId" TEXT,
    "parameterCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parameterHasValue" BOOLEAN DEFAULT false,
    "parameterIsReadOnly" BOOLEAN DEFAULT false,
    "parameterIsUserModifiable" BOOLEAN DEFAULT false,
    "parameterIsShared" BOOLEAN DEFAULT false,
    "parameterStorageType" TEXT DEFAULT '',
    "parameterName" VARCHAR(255),
    "parameterValue" VARCHAR(255),
    "parameterForgeTypeId" VARCHAR(255),
    "parameterForgeDataType" VARCHAR(255),
    "parameterForgeGroupTypeId" VARCHAR(255),
    "parameterSharedParameterGuid" TEXT DEFAULT '00000000-0000-0000-0000-000000000000'
);

-- CreateTable
CREATE TABLE "WarningCollectionRecord" (
    "id" SERIAL NOT NULL,
    "warningCollectionRecordUniqueId" TEXT NOT NULL,
    "parentDocumentEpisodeUniqueId" TEXT NOT NULL,
    "warningsCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warningsSeverityLevelNoneCount" INTEGER DEFAULT 0,
    "warningsSeverityLevelWarningCount" INTEGER DEFAULT 0,
    "warningsSeverityLevelErrorCount" INTEGER DEFAULT 0,
    "warningsSeverityLevelDocumentCorruptionError" INTEGER DEFAULT 0,
    "warningsJournalFileName" TEXT
);

-- CreateTable
CREATE TABLE "WarningRecord" (
    "id" SERIAL NOT NULL,
    "warningRecordUniqueId" TEXT NOT NULL,
    "warningMessage" TEXT NOT NULL,
    "warningSeverity" TEXT NOT NULL,
    "warningFailingElementsUniqueId" BIGINT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentEpisodeRecord_id_key" ON "DocumentEpisodeRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentEpisodeRecord_documentEpisodeUniqueId_key" ON "DocumentEpisodeRecord"("documentEpisodeUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentEpisodeRecord_parentWolfpackUniqueId_key" ON "DocumentEpisodeRecord"("parentWolfpackUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentEpisodeRecord_documentEpisodeRecordUniqueId_key" ON "DocumentEpisodeRecord"("documentEpisodeRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentEpisodeRecord_documentSaveId_key" ON "DocumentEpisodeRecord"("documentSaveId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_id_key" ON "DocumentRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_documentRecordUniqueId_key" ON "DocumentRecord"("documentRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_parentWolfpackUniqueId_key" ON "DocumentRecord"("parentWolfpackUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "ElementRecord_id_key" ON "ElementRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ElementRecord_elementUniqueId_key" ON "ElementRecord"("elementUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "InstanceRecord_id_key" ON "InstanceRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InstanceRecord_instanceRecordUniqueId_key" ON "InstanceRecord"("instanceRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "ParameterRecord_id_key" ON "ParameterRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ParameterRecord_parameterUniqueId_key" ON "ParameterRecord"("parameterUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "WarningCollectionRecord_id_key" ON "WarningCollectionRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WarningCollectionRecord_warningCollectionRecordUniqueId_key" ON "WarningCollectionRecord"("warningCollectionRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "WarningCollectionRecord_parentDocumentEpisodeUniqueId_key" ON "WarningCollectionRecord"("parentDocumentEpisodeUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "WarningRecord_id_key" ON "WarningRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WarningRecord_warningRecordUniqueId_key" ON "WarningRecord"("warningRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Wolfpack_id_key" ON "Wolfpack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wolfpack_wolfpackUniqueId_key" ON "Wolfpack"("wolfpackUniqueId");

-- AddForeignKey
ALTER TABLE "DocumentEpisodeRecord" ADD CONSTRAINT "DocumentEpisodeRecord_parentWolfpackUniqueId_fkey" FOREIGN KEY ("parentWolfpackUniqueId") REFERENCES "Wolfpack"("wolfpackUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentEpisodeRecord" ADD CONSTRAINT "DocumentEpisodeRecord_documentMetadataUniqueId_fkey" FOREIGN KEY ("documentMetadataUniqueId") REFERENCES "DocumentRecord"("documentRecordUniqueId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentRecord" ADD CONSTRAINT "DocumentRecord_parentWolfpackUniqueId_fkey" FOREIGN KEY ("parentWolfpackUniqueId") REFERENCES "Wolfpack"("wolfpackUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementRecord" ADD CONSTRAINT "ElementRecord_elementUniqueId_fkey" FOREIGN KEY ("elementUniqueId") REFERENCES "DocumentEpisodeRecord"("documentEpisodeUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstanceRecord" ADD CONSTRAINT "InstanceRecord_instanceRecordUniqueId_fkey" FOREIGN KEY ("instanceRecordUniqueId") REFERENCES "ElementRecord"("elementUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParameterRecord" ADD CONSTRAINT "ParameterRecord_parentInstanceUniqueId_fkey" FOREIGN KEY ("parentInstanceUniqueId") REFERENCES "InstanceRecord"("instanceRecordUniqueId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningCollectionRecord" ADD CONSTRAINT "WarningCollectionRecord_parentDocumentEpisodeUniqueId_fkey" FOREIGN KEY ("parentDocumentEpisodeUniqueId") REFERENCES "DocumentEpisodeRecord"("documentEpisodeUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningRecord" ADD CONSTRAINT "WarningRecord_warningRecordUniqueId_fkey" FOREIGN KEY ("warningRecordUniqueId") REFERENCES "WarningCollectionRecord"("warningCollectionRecordUniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;
