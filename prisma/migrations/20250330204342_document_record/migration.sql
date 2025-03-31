-- CreateTable
CREATE TABLE "DocumentRecord" (
    "id" SERIAL NOT NULL,
    "documentRecordUniqueId" TEXT NOT NULL,
    "parentWolfpackUniqueId" TEXT NOT NULL,
    "documentCreationId" TEXT,
    "documentSaveId" TEXT,
    "documentSaveCount" INTEGER DEFAULT 0,
    "documentLastSaveDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "projectSpecVolume" VARCHAR(255)
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_id_key" ON "DocumentRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_documentRecordUniqueId_key" ON "DocumentRecord"("documentRecordUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_parentWolfpackUniqueId_key" ON "DocumentRecord"("parentWolfpackUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentRecord_documentSaveId_key" ON "DocumentRecord"("documentSaveId");
