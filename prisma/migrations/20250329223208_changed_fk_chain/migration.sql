-- DropForeignKey
ALTER TABLE "DocumentRecord" DROP CONSTRAINT "DocumentRecord_parentWolfpackUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "ElementRecord" DROP CONSTRAINT "ElementRecord_elementUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "InstanceRecord" DROP CONSTRAINT "InstanceRecord_instanceRecordUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "ParameterRecord" DROP CONSTRAINT "ParameterRecord_parentInstanceUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "WarningCollectionRecord" DROP CONSTRAINT "WarningCollectionRecord_parentDocumentEpisodeUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "WarningRecord" DROP CONSTRAINT "WarningRecord_warningRecordUniqueId_fkey";

-- AddForeignKey
ALTER TABLE "DocumentRecord" ADD CONSTRAINT "DocumentRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "Wolfpack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElementRecord" ADD CONSTRAINT "ElementRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "DocumentEpisodeRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstanceRecord" ADD CONSTRAINT "InstanceRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "ElementRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParameterRecord" ADD CONSTRAINT "ParameterRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "InstanceRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningCollectionRecord" ADD CONSTRAINT "WarningCollectionRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "DocumentEpisodeRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningRecord" ADD CONSTRAINT "WarningRecord_id_fkey" FOREIGN KEY ("id") REFERENCES "WarningCollectionRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
