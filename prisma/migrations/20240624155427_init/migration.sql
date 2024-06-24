-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "crgaid" TEXT,
    "alias" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT,
    "discordUsername" TEXT,
    "youtubeId" TEXT,
    "kofiDisplayName" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "topContributor" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    CONSTRAINT "Contribution_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KofiDonation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerEmail" TEXT,
    "from" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kofiTransactionId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "personId" TEXT,
    CONSTRAINT "KofiDonation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SuperThanks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "youtubeId" TEXT,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "youtubeCommentId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "personId" TEXT,
    CONSTRAINT "SuperThanks_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SuperChat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "youtubeId" TEXT NOT NULL,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "youtubeSuperChatId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "personId" TEXT,
    CONSTRAINT "SuperChat_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_crgaid_key" ON "Person"("crgaid");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Person_discordUsername_key" ON "Person"("discordUsername");

-- CreateIndex
CREATE UNIQUE INDEX "Person_youtubeId_key" ON "Person"("youtubeId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_kofiDisplayName_key" ON "Person"("kofiDisplayName");
