/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_uniqueId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentInformation" DROP CONSTRAINT "DocumentInformation_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentWarning" DROP CONSTRAINT "DocumentWarning_documentId_fkey";

-- DropForeignKey
ALTER TABLE "Parameters" DROP CONSTRAINT "Parameters_documentOwner_fkey";

-- DropForeignKey
ALTER TABLE "ProjectInformation" DROP CONSTRAINT "ProjectInformation_projectId_fkey";

-- DropForeignKey
ALTER TABLE "SiteInformation" DROP CONSTRAINT "SiteInformation_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UnitsInformation" DROP CONSTRAINT "UnitsInformation_documentId_fkey";

-- AlterTable
ALTER TABLE "Wolfpack" ADD COLUMN     "changedElements" BIGINT[],
ADD COLUMN     "documentCreationId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
ADD COLUMN     "documentSessionId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';

-- DropTable
DROP TABLE "Document";

-- AddForeignKey
ALTER TABLE "ProjectInformation" ADD CONSTRAINT "ProjectInformation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentInformation" ADD CONSTRAINT "DocumentInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentWarning" ADD CONSTRAINT "DocumentWarning_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteInformation" ADD CONSTRAINT "SiteInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitsInformation" ADD CONSTRAINT "UnitsInformation_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Wolfpack"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;
