
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.WolfpackScalarFieldEnum = {
  id: 'id',
  documentName: 'documentName',
  fileOrigin: 'fileOrigin',
  documentVersion: 'documentVersion',
  wasCompleted: 'wasCompleted',
  timeTaken: 'timeTaken',
  createdAt: 'createdAt',
  guid: 'guid',
  resultCount: 'resultCount',
  testName: 'testName',
  results: 'results'
};

exports.Prisma.DocumentRecordScalarFieldEnum = {
  id: 'id',
  documentRecordUniqueId: 'documentRecordUniqueId',
  parentWolfpackUniqueId: 'parentWolfpackUniqueId',
  documentCreationId: 'documentCreationId',
  documentSaveId: 'documentSaveId',
  documentSaveCount: 'documentSaveCount',
  documentLastSaveDateTime: 'documentLastSaveDateTime',
  parentDocumentEpisodeUniqueId: 'parentDocumentEpisodeUniqueId',
  documentName: 'documentName',
  documentPath: 'documentPath',
  projectName: 'projectName',
  projectClient: 'projectClient',
  projectAddress: 'projectAddress',
  projectAuthor: 'projectAuthor',
  projectBuildingName: 'projectBuildingName',
  projectIssueDate: 'projectIssueDate',
  projectLocation: 'projectLocation',
  projectNumber: 'projectNumber',
  projectOrganizationDescription: 'projectOrganizationDescription',
  projectOrganizationName: 'projectOrganizationName',
  projectStatus: 'projectStatus',
  projectPlaceName: 'projectPlaceName',
  projectElevation: 'projectElevation',
  projectLatitude: 'projectLatitude',
  projectLongitude: 'projectLongitude',
  projectTimeZone: 'projectTimeZone',
  projectGeoCoordinateSystemId: 'projectGeoCoordinateSystemId',
  projectGeoCoordinateSystemDefinition: 'projectGeoCoordinateSystemDefinition',
  projectSpecLength: 'projectSpecLength',
  projectSpecArea: 'projectSpecArea',
  projectSpecAngle: 'projectSpecAngle',
  projectSpecCurrency: 'projectSpecCurrency',
  projectSpecNumber: 'projectSpecNumber',
  projectSpecRotationAngle: 'projectSpecRotationAngle',
  projectSpecSheetLength: 'projectSpecSheetLength',
  projectSpecSiteAngle: 'projectSpecSiteAngle',
  projectSpecSlope: 'projectSpecSlope',
  projectSpecSpeed: 'projectSpecSpeed',
  projectSpecTime: 'projectSpecTime',
  projectSpecVolume: 'projectSpecVolume'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Wolfpack: 'Wolfpack',
  DocumentRecord: 'DocumentRecord'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/usr/src/app/generated/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/usr/src/app/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma-client\"\n}\n\nmodel Wolfpack {\n  id              Int      @id @default(autoincrement())\n  documentName    String   @db.VarChar(255)\n  fileOrigin      String   @db.VarChar(255)\n  documentVersion String\n  wasCompleted    Boolean  @default(false)\n  timeTaken       Float    @default(0)\n  createdAt       DateTime @default(now())\n  guid            String\n  resultCount     Int      @default(0)\n  testName        String   @db.VarChar(255)\n  results         Json?    @db.Json\n}\n\n// model Wolfpack {\n//   id               Int      @unique @default(autoincrement())\n//   wolfpackUniqueId String   @unique @default(cuid())\n//   createdAt        DateTime @default(now())\n//   name             String?  @default(\"wolfpack\")\n//   timeTaken        BigInt   @default(0)\n//   source           String\n//   wasCompleted     Boolean  @default(false)\n//   resultCount      Int      @default(0)\n//   result           Json\n//   document         Json?\n//   episode          Json?\n//   elements         Json?\n//   warnings         Json?\n// }\n\n// model DocumentEpisodeRecord {\n//   id                            Int                      @unique @default(autoincrement())\n//   documentEpisodeUniqueId       String                   @unique @default(uuid())\n//   parentWolfpackFK              Wolfpack                 @relation(fields: [parentWolfpackUniqueId], references: [wolfpackUniqueId])\n//   parentWolfpackUniqueId        String                   @unique\n//   documentFK                    DocumentRecord?          @relation(fields: [documentMetadataUniqueId], references: [documentRecordUniqueId])\n//   documentMetadataUniqueId      String?\n//   documentEpisodeRecordUniqueId String?                  @unique @default(uuid())\n//   documentVersionUniqueId       String?                  @default(uuid())\n//   documentCreationId            String?\n//   documentSaveId                String?                  @unique\n//   documentSaveCount             Int?                     @default(0)\n//   documentLastSaveDateTime      DateTime                 @default(now())\n//   ElementRecord                 ElementRecord?\n//   WarningCollectionRecord       WarningCollectionRecord?\n// }\n\nmodel DocumentRecord {\n  id                                   Int      @unique @default(autoincrement())\n  documentRecordUniqueId               String   @unique\n  parentWolfpackUniqueId               String   @unique\n  documentCreationId                   String?\n  documentSaveId                       String?  @unique\n  documentSaveCount                    Int?     @default(0)\n  documentLastSaveDateTime             DateTime @default(now())\n  parentDocumentEpisodeUniqueId        String\n  documentName                         String?  @db.VarChar(255)\n  documentPath                         String?  @db.VarChar(255)\n  projectName                          String?  @db.VarChar(255)\n  projectClient                        String?  @db.VarChar(255)\n  projectAddress                       String?  @db.VarChar(255)\n  projectAuthor                        String?  @db.VarChar(255)\n  projectBuildingName                  String?  @db.VarChar(255)\n  projectIssueDate                     String?  @db.VarChar(255)\n  projectLocation                      String?  @db.VarChar(255)\n  projectNumber                        String?  @db.VarChar(255)\n  projectOrganizationDescription       String?  @db.VarChar(255)\n  projectOrganizationName              String?  @db.VarChar(255)\n  projectStatus                        String?  @db.VarChar(255)\n  projectPlaceName                     String?  @db.VarChar(255)\n  projectElevation                     BigInt?  @default(0)\n  projectLatitude                      BigInt?  @default(0)\n  projectLongitude                     BigInt?  @default(0)\n  projectTimeZone                      BigInt?  @default(0)\n  projectGeoCoordinateSystemId         String?  @db.VarChar(255)\n  projectGeoCoordinateSystemDefinition String?  @db.VarChar(255)\n  projectSpecLength                    String?  @db.VarChar(255)\n  projectSpecArea                      String?  @db.VarChar(255)\n  projectSpecAngle                     String?  @db.VarChar(255)\n  projectSpecCurrency                  String?  @db.VarChar(255)\n  projectSpecNumber                    String?  @db.VarChar(255)\n  projectSpecRotationAngle             String?  @db.VarChar(255)\n  projectSpecSheetLength               String?  @db.VarChar(255)\n  projectSpecSiteAngle                 String?  @db.VarChar(255)\n  projectSpecSlope                     String?  @db.VarChar(255)\n  projectSpecSpeed                     String?  @db.VarChar(255)\n  projectSpecTime                      String?  @db.VarChar(255)\n  projectSpecVolume                    String?  @db.VarChar(255)\n}\n\n// model ElementRecord {\n//   id                                              Int                   @unique @default(autoincrement())\n//   elementUniqueId                                 String                @unique @default(uuid())\n//   parentDocumentFK                                DocumentEpisodeRecord @relation(fields: [id], references: [id])\n//   parentdocumentUniqueId                          String\n//   documentVersionUniqueId                         String\n//   elementArePhasesModifiable                      Boolean?              @default(false)\n//   elementCanBeLocked                              Boolean?              @default(false)\n//   elementCanFlipFacing                            Boolean?              @default(false)\n//   elementCanFlipHand                              Boolean?              @default(false)\n//   elementCanFlipWorkPlane                         Boolean?              @default(false)\n//   elementCanHaveTypeAssigned                      Boolean?              @default(false)\n//   elementCanRotate                                Boolean?              @default(false)\n//   elementCanSplit                                 Boolean?              @default(false)\n//   elementIsFacingFlipped                          Boolean?              @default(false)\n//   elementIsHandFlipped                            Boolean?              @default(false)\n//   elementHasModifiedGeometry                      Boolean?              @default(false)\n//   elementHasPhases                                Boolean?              @default(false)\n//   elementHasSpatialElementCalculationPoint        Boolean?              @default(false)\n//   elementHasSpatialElementFromToCalculationPoints Boolean?              @default(false)\n//   elementHasSweptProfile                          Boolean?              @default(false)\n//   elementIsExternalFileReference                  Boolean?              @default(false)\n//   elementIsMirrored                               Boolean?              @default(false)\n//   elementIsMonitoringLinkElement                  Boolean?              @default(false)\n//   elementIsMonitoringLocalElement                 Boolean?              @default(false)\n//   elementIsPinned                                 Boolean?              @default(false)\n//   elementIsSlantedColumn                          Boolean?              @default(false)\n//   elementIsViewSpecific                           Boolean?              @default(false)\n//   elementDoesReferToExternalResourceReferences    Boolean?              @default(false)\n//   elementTransformHasReflection                   Boolean?              @default(false)\n//   elementTransformIsConformal                     Boolean?              @default(false)\n//   elementIsVisible                                Boolean?              @default(false)\n//   elementAnalyticalModelValueId                   BigInt?               @default(-1)\n//   elementCreatedPhaseValueId                      BigInt?               @default(-1)\n//   elementDemolishedPhaseValueId                   BigInt?               @default(-1)\n//   elementHostFaceValueId                          BigInt?               @default(-1)\n//   elementHostParameterValueId                     BigInt?               @default(-1)\n//   elementLevelValueId                             BigInt?               @default(-1)\n//   elementCopingsValueId                           BigInt[]\n//   elementDependentElementsValueId                 BigInt[]\n//   elementMaterialsValueId                         BigInt[]\n//   elementMonitoredLinksValueId                    BigInt[]\n//   elementReferencesValueId                        BigInt[]\n//   elementSubComponentsValueId                     BigInt[]\n//   elementWorksetValueId                           BigInt?               @default(-1)\n//   elementDesignOptionUniqueId                     String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementSymbolUniqueId                           String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementFromRoomUniqueId                         String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementHostUniqueId                             String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementPhaseUniqueId                            String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementRoomUniqueId                             String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementSpaceUniqueId                            String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementSuperComponentUniqueId                   String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   familyTypeForgeId                               String?               @db.VarChar(255)\n//   familyBuiltInCategoryName                       String?               @db.VarChar(255)\n//   familyName                                      String?               @db.VarChar(255)\n//   elementCategoryType                             String?               @db.VarChar(255)\n//   elementTypesCount                               String?               @db.VarChar(255)\n//   elementInstancesCount                           String?               @db.VarChar(255)\n//   elementInstancesUniqueId                        String?               @db.VarChar(255)\n//   elementSpatialElementCalculationPoints          String?               @db.VarChar(255)\n//   elementPhaseStatus                              String?               @db.VarChar(255)\n//   elementExternalResourceReferences               String?               @db.VarChar(255)\n//   elementEntitySchemasUniqueId                    String?               @default(\"00000000-0000-0000-0000-000000000000\")\n//   elementTransformHandOrientation                 Float[]\n//   elementTransformBasis                           Float[]\n//   elementTransformDeterminant                     Float?                @default(0)\n//   elementTransformIdentityBasis                   Float[]\n//   elementTransformOrigin                          Float[]\n//   elementTransformScale                           BigInt?               @default(0)\n//   elementPointPlacementLocation                   String?               @db.VarChar(255)\n//   elementPointPlacementName                       String?               @db.VarChar(255)\n//   elementPointReference                           String?               @db.VarChar(255)\n//   elementFacingOrientation                        Float[]\n//   elementStructuralMaterialValueId                BigInt?               @default(0)\n//   elementStructuralMaterialType                   String?               @db.VarChar(255)\n//   elementStructuralType                           String?               @db.VarChar(255)\n//   elementStructuralInstanceUsage                  String?               @db.VarChar(255)\n//   elementInstances                                InstanceRecord[]\n// }\n\n// // Parameters *cannot* be orphaned. Therefore, they're tied to an specific Document's episode (documentUniqueID + documentSaveCount + documentVersionUniqueId)\n// model InstanceRecord {\n//   id                              Int               @unique @default(autoincrement())\n//   instanceRecordUniqueId          String            @unique @default(uuid())\n//   parentElementFK                 ElementRecord     @relation(fields: [id], references: [id])\n//   instanceCreatedAt               DateTime          @default(now())\n//   instanceValueId                 BigInt?           @default(0)\n//   instanceUniqueId                String?           @db.VarChar(255)\n//   instanceFamilyName              String?           @db.VarChar(255)\n//   instanceBuiltInCategory         String?           @db.VarChar(255)\n//   instanceWorkset                 String?           @db.VarChar(255)\n//   instanceViews                   String[]\n//   instanceIsGrouped               Boolean?          @default(false)\n//   instanceIsModifiable            Boolean?          @default(false)\n//   instanceIsViewSpecific          Boolean?          @default(false)\n//   instanceIsBuiltInCategory       Boolean?          @default(false)\n//   instanceIsAnnotative            Boolean?          @default(false)\n//   instanceIsModel                 Boolean?          @default(false)\n//   instanceIsPinned                Boolean?          @default(false)\n//   instanceIsWorkshared            Boolean?          @default(false)\n//   instanceOwnerViewUniqueId       BigInt?           @default(0)\n//   instanceDesignOptionUniqueId    String?           @db.VarChar(255)\n//   instanceWorksetUniqueId         String?           @db.VarChar(255)\n//   instanceLevelUniqueId           String?           @db.VarChar(255)\n//   instanceCreatedPhaseUniqueId    String?           @db.VarChar(255)\n//   instanceDemolishedPhaseUniqueId String?           @db.VarChar(255)\n//   instanceGroupUniqueId           String?           @db.VarChar(255)\n//   instanceParameters              ParameterRecord[]\n// }\n\n// // Parameters *cannot* be orphaned. Therefore, they're tied to an specific Document's episode (documentUniqueID + documentSaveCount + documentVersionUniqueId)\n// model ParameterRecord {\n//   id                           Int             @unique @default(autoincrement())\n//   parameterUniqueId            String          @unique @default(uuid())\n//   parentInstanceFK             InstanceRecord? @relation(fields: [id], references: [id])\n//   parentInstanceUniqueId       String?\n//   parameterCreatedAt           DateTime        @default(now())\n//   parameterHasValue            Boolean?        @default(false)\n//   parameterIsReadOnly          Boolean?        @default(false)\n//   parameterIsUserModifiable    Boolean?        @default(false)\n//   parameterIsShared            Boolean?        @default(false)\n//   parameterStorageType         String?    @default(\"\")\n//   parameterName                String?         @db.VarChar(255)\n//   parameterValue               String?         @db.VarChar(255)\n//   parameterForgeTypeId         String?         @db.VarChar(255)\n//   parameterForgeDataType       String?         @db.VarChar(255)\n//   parameterForgeGroupTypeId    String?         @db.VarChar(255)\n//   parameterSharedParameterGuid String?         @default(\"00000000-0000-0000-0000-000000000000\")\n// }\n\n// model WarningCollectionRecord {\n//   id                                           Int                    @unique @default(autoincrement())\n//   warningCollectionRecordUniqueId              String                 @unique @default(uuid())\n//   parentDocumentFK                             DocumentEpisodeRecord? @relation(fields: [id], references: [id])\n//   parentDocumentEpisodeUniqueId                String                 @unique\n//   warningsCreatedAt                            DateTime               @default(now())\n//   warningsSeverityLevelNoneCount               Int?                   @default(0)\n//   warningsSeverityLevelWarningCount            Int?                   @default(0)\n//   warningsSeverityLevelErrorCount              Int?                   @default(0)\n//   warningsSeverityLevelDocumentCorruptionError Int?                   @default(0)\n//   warningsJournalFileName                      String?\n//   warnings                                     WarningRecord[]\n// }\n\n// model WarningRecord {\n//   id                             Int                      @unique @default(autoincrement())\n//   warningRecordUniqueId          String                   @unique @default(uuid())\n//   parentWarningCollectionFK      WarningCollectionRecord? @relation(fields: [id], references: [id])\n//   warningMessage                 String\n//   warningSeverity                String\n//   warningFailingElementsUniqueId BigInt[]\n// }\n\n// model Wolfpack {\n//   id                  Int                  @id @default(autoincrement())\n//   projectInformation  ProjectInformation?\n//   documentInformation DocumentInformation?\n//   siteInformation     SiteInformation?\n//   unitsInformation    UnitsInformation?\n//   warnings            DocumentWarning[]\n//   documentName String @default(\"\")\n//   documentSessionId   String               @default(\"00000000-0000-0000-0000-000000000000\")\n//   documentCreationId  String               @default(\"00000000-0000-0000-0000-000000000000\")\n//   changedElements     BigInt[]\n//   fileOrigin          String               @db.VarChar(255)\n//   wasCompleted        Boolean              @default(false)\n//   timeTaken           Float                @default(0)\n//   createdAt           DateTime             @default(now())\n//   guid                String               @unique\n//   resultCount         Int                  @default(0)\n//   testName            String               @db.VarChar(255)\n//   results             Json?                @db.Json\n//   elementInfo         ElementInformation[]\n// }\n\n// model ProjectInformation {\n//   id                      Int      @id @default(autoincrement())\n//   projectId               String   @unique\n//   document                Wolfpack @relation(fields: [projectId], references: [guid])\n//   projectName             String   @db.VarChar(255)\n//   client                  String   @db.VarChar(255)\n//   address                 String   @db.VarChar(255)\n//   author                  String   @db.VarChar(255)\n//   buildingName            String   @db.VarChar(255)\n//   issueDate               String   @db.VarChar(255)\n//   location                String   @db.VarChar(255)\n//   projectNumber           String   @db.VarChar(255)\n//   organizationDescription String   @db.VarChar(255)\n//   organizationName        String   @db.VarChar(255)\n//   status                  String   @db.VarChar(255)\n// }\n\n// model ElementInformation {\n//   id               Int          @id @default(autoincrement())\n//   uniqueElementId  String       @unique\n//   wolfpackId       Wolfpack     @relation(fields: [uniqueElementId], references: [guid])\n//   idValue          BigInt\n//   elementVersionId String       @default(\"00000000-0000-0000-0000-000000000000\")\n//   familyName       String       @default(\"\")\n//   builtInCategory  String       @default(\"\")\n//   name             String       @default(\"\")\n//   Parameters       Parameters[]\n// }\n\n// model Parameters {\n//   id                  Int                @id @default(autoincrement())\n//   createdAt           DateTime           @default(now())\n//   parameterGuid       String             @unique\n//   documentOwner       String             @default(\"00000000-0000-0000-0000-000000000000\")\n//   parentElementInfo   ElementInformation @relation(fields: [parameterGuid], references: [uniqueElementId])\n//   storageType         StorageType        @default(INVALID)\n//   name                String             @default(\"\")\n//   value               String             @default(\"\")\n//   isReadOnly          Boolean            @default(false)\n//   typeId              String             @default(\"\")\n//   dataType            String             @default(\"\")\n//   groupTypeId         String             @default(\"\")\n//   hasValue            Boolean            @default(false)\n//   isShared            Boolean            @default(false)\n//   isUserModifiable    Boolean            @default(false)\n//   sharedParameterGuid String             @default(\"00000000-0000-0000-0000-000000000000\")\n// }\n\n// model DocumentInformation {\n//   id         Int      @id @default(autoincrement())\n//   documentId String   @unique\n//   document   Wolfpack @relation(fields: [documentId], references: [guid])\n//   documentName       String   @db.VarChar(255)\n//   documentPath       String   @db.VarChar(255)\n//   documentUniqueId       String   @default(\"\")\n//   documentVersionId String @default(\"\")\n//   documentSaveCount  Int      @default(0)\n//   documentProjectName String @default(\"\")\n// @default(\"00000000-0000-0000-0000-000000000000\")\n\n// }\n\n// model DocumentWarning {\n//   id               Int      @id @default(autoincrement())\n//   documentId       String   @unique\n//   document         Wolfpack @relation(fields: [documentId], references: [guid])\n//   createdAt        DateTime\n//   severity         String\n//   message          String\n//   failingElementId BigInt[]\n// }\n\n// model SiteInformation {\n//   id                         Int      @id @default(autoincrement())\n//   documentId                 String   @unique\n//   document                   Wolfpack @relation(fields: [documentId], references: [guid])\n//   placeName                  String   @default(\"\")\n//   elevation                  BigInt   @default(0)\n//   latitude                   BigInt   @default(0)\n//   longitude                  BigInt   @default(0)\n//   timeZone                   BigInt   @default(0)\n//   coordinateSystemId         String   @default(\"\")\n//   coordinateSystemDefinition String   @default(\"\")\n// }\n\n// model UnitsInformation {\n//   id            Int      @id @default(autoincrement())\n//   documentId    String   @unique\n//   document      Wolfpack @relation(fields: [documentId], references: [guid])\n//   lengthUnits   String   @db.VarChar(255)\n//   areaUnits     String   @db.VarChar(255)\n//   angle         String   @db.VarChar(255)\n//   currency      String   @db.VarChar(255)\n//   number        String   @db.VarChar(255)\n//   rotationAngle String   @db.VarChar(255)\n//   sheetLength   String   @db.VarChar(255)\n//   slope         String   @db.VarChar(255)\n//   speed         String   @db.VarChar(255)\n//   time          String   @db.VarChar(255)\n//   volume        String   @db.VarChar(255)\n// }\n// id                              Int               @unique @default(autoincrement())\n// RecordUniqueId                  String            @unique @default(\"00000000-0000-0000-0000-000000000000\")\n// DocumentOwnerUniqueId           String            @default(\"00000000-0000-0000-0000-000000000000\")\n// DocumentVersionUniqueId         String            @db.VarChar(255)\n// InstanceCreatedAt               DateTime          @default(now())\n// InstanceValueId                 BigInt?           @default(0)\n// InstanceUniqueId                String?           @db.VarChar(255)\n// InstanceFamilyName              String?           @db.VarChar(255)\n// InstanceBuiltInCategory         String?           @db.VarChar(255)\n// InstanceWorkset                 String?           @db.VarChar(255)\n// InstanceViews                   String[]\n// InstanceDesignOptionUniqueId    String?           @db.VarChar(255)\n// InstanceOwnerViewUniqueId       BigInt?           @default(0)\n// InstanceWorksetUniqueId         String?           @db.VarChar(255)\n// InstanceLevelUniqueId           String?           @db.VarChar(255)\n// InstanceCreatedPhaseUniqueId    String?           @db.VarChar(255)\n// InstanceDemolishedPhaseUniqueId String?           @db.VarChar(255)\n// InstanceGroupUniqueId           String?           @db.VarChar(255)\n// InstanceIsGrouped               Boolean?          @default(false)\n// InstanceIsModifiable            Boolean?          @default(false)\n// InstanceIsViewSpecific          Boolean?          @default(false)\n// InstanceIsBuiltInCategory       Boolean?          @default(false)\n// InstanceIsAnnotative            Boolean?          @default(false)\n// InstanceIsModel                 Boolean?          @default(false)\n// InstanceIsPinned                Boolean?          @default(false)\n// InstanceIsWorkshared            Boolean?          @default(false)\n// InstanceParameters              ParameterRecord[]\n\n// RecordUniqueId                                  String   @unique @default(\"00000000-0000-0000-0000-000000000000\")\n// DocumentUniqueId                                String   @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementArePhasesModifiable                      Boolean? @default(false)\n// ElementCanBeLocked                              Boolean? @default(false)\n// ElementCanFlipFacing                            Boolean? @default(false)\n// ElementCanFlipHand                              Boolean? @default(false)\n// ElementCanFlipWorkPlane                         Boolean? @default(false)\n// ElementCanHaveTypeAssigned                      Boolean? @default(false)\n// ElementCanRotate                                Boolean? @default(false)\n// ElementCanSplit                                 Boolean? @default(false)\n// ElementIsFacingFlipped                          Boolean? @default(false)\n// ElementIsHandFlipped                            Boolean? @default(false)\n// ElementHasModifiedGeometry                      Boolean? @default(false)\n// ElementHasPhases                                Boolean? @default(false)\n// ElementHasSpatialElementCalculationPoint        Boolean? @default(false)\n// ElementHasSpatialElementFromToCalculationPoints Boolean? @default(false)\n// ElementHasSweptProfile                          Boolean? @default(false)\n// ElementIsExternalFileReference                  Boolean? @default(false)\n// ElementIsMirrored                               Boolean? @default(false)\n// ElementIsMonitoringLinkElement                  Boolean? @default(false)\n// ElementIsMonitoringLocalElement                 Boolean? @default(false)\n// ElementIsPinned                                 Boolean? @default(false)\n// ElementIsSlantedColumn                          Boolean? @default(false)\n// ElementIsViewSpecific                           Boolean? @default(false)\n// ElementDoesReferToExternalResourceReferences    Boolean? @default(false)\n// ElementTransformHasReflection                   Boolean? @default(false)\n// ElementTransformIsConformal                     Boolean? @default(false)\n// ElementIsVisible                                Boolean? @default(false)\n// ElementAnalyticalModelValueId                   BigInt?  @default(0)\n// ElementCreatedPhaseValueId                      BigInt?  @default(0)\n// ElementDemolishedPhaseValueId                   BigInt?  @default(0)\n// ElementHostFaceValueId                          BigInt?  @default(0)\n// ElementHostParameterValueId                     BigInt?  @default(0)\n// ElementLevelValueId                             BigInt?  @default(0)\n// ElementCopingsValueId                           BigInt[]\n// ElementDependentElementsValueId                 BigInt[]\n// ElementMaterialsValueId                         BigInt[]\n// ElementMonitoredLinksValueId                    BigInt[]\n// ElementReferencesValueId                        BigInt[]\n// ElementSubComponentsValueId                     BigInt[]\n// ElementWorksetValueId                           BigInt?  @default(0)\n// ElementDesignOptionUniqueId                     String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementSymbolUniqueId                           String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementFromRoomUniqueId                         String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementHostUniqueId                             String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementPhaseUniqueId                            String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementRoomUniqueId                             String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementSpaceUniqueId                            String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementSuperComponentUniqueId                   String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// FamilyTypeForgeId                               String?  @db.VarChar(255)\n// FamilyBuiltInCategoryName                       String?  @db.VarChar(255)\n// FamilyName                                      String?  @db.VarChar(255)\n// ElementCategoryType                             String?  @db.VarChar(255)\n// ElementTypesCount                               String?  @db.VarChar(255)\n// ElementInstancesCount                           String?  @db.VarChar(255)\n// ElementInstancesUniqueId                        String?  @db.VarChar(255)\n// ElementSpatialElementCalculationPoints          String?  @db.VarChar(255)\n// ElementPhaseStatus                              String?  @db.VarChar(255)\n// ElementExternalResourceReferences               String?  @db.VarChar(255)\n// ElementEntitySchemasUniqueId                    String?  @default(\"00000000-0000-0000-0000-000000000000\")\n// ElementTransformHandOrientation                 Float[]\n// ElementTransformBasis                           Float[]\n// ElementTransformDeterminant                     Float?   @default(0)\n// ElementTransformIdentityBasis                   Float[]\n// ElementTransformOrigin                          Float[]\n// ElementTransformScale                           BigInt?  @default(0)\n// ElementPointPlacementLocation                   String?  @db.VarChar(255)\n// ElementPointPlacementName                       String?  @db.VarChar(255)\n// ElementPointReference                           String?  @db.VarChar(255)\n// ElementFacingOrientation                        Float[]\n// ElementStructuralMaterialValueId                BigInt?  @default(0)\n// ElementStructuralMaterialType                   String?  @db.VarChar(255)\n// ElementStructuralType                           String?  @db.VarChar(255)\n// ElementStructuralInstanceUsage                  String?  @db.VarChar(255)\n",
  "inlineSchemaHash": "81ff63fccfc117f8f49c0200cdf7b400913da978e41c3d1df76f88d6daa5d93e",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma-client",
    "prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Wolfpack\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileOrigin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeTaken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"results\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":[\"Json\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DocumentRecord\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentRecordUniqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentWolfpackUniqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentCreationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentSaveId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentSaveCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentLastSaveDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentDocumentEpisodeUniqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentPath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectClient\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectAuthor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectBuildingName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectIssueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectLocation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectOrganizationDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectOrganizationName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectPlaceName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectElevation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectLatitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectLongitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectTimeZone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectGeoCoordinateSystemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectGeoCoordinateSystemDefinition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecLength\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecArea\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecAngle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecRotationAngle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecSheetLength\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecSiteAngle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecSlope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectSpecVolume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/prisma-client/libquery_engine-linux-musl-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma-client/schema.prisma")
