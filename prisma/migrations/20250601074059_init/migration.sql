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
    "speedrunComId" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "topContributor" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "uriName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eventId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "event_order" INTEGER NOT NULL,
    CONSTRAINT "Tournament_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TournamentFinalStanding" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tournamentId" INTEGER NOT NULL,
    "personId" TEXT NOT NULL,
    "standing" INTEGER NOT NULL,
    CONSTRAINT "TournamentFinalStanding_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TournamentFinalStanding_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TournamentRoundResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tournamentId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "personId" TEXT NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "resultCode" INTEGER NOT NULL,
    "elapsedMilliseconds" INTEGER NOT NULL,
    "accruedPoints" INTEGER NOT NULL,
    CONSTRAINT "TournamentRoundResult_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TournamentRoundResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TournamentRoundResult_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonalBest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "standing" INTEGER NOT NULL,
    "tournamentRoundResultId" INTEGER NOT NULL,
    CONSTRAINT "PersonalBest_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonalBest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonalBest_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonalBest_tournamentRoundResultId_fkey" FOREIGN KEY ("tournamentRoundResultId") REFERENCES "TournamentRoundResult" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SimpleELO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "standing" INTEGER NOT NULL,
    "simpleELO" INTEGER NOT NULL,
    CONSTRAINT "SimpleELO_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SimpleELO_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    CONSTRAINT "Contribution_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KofiDonation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT,
    "buyerEmail" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kofiTransactionId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    CONSTRAINT "KofiDonation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SuperThanks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT,
    "youtubeId" TEXT,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "youtubeCommentId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    CONSTRAINT "SuperThanks_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SuperChat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" TEXT,
    "youtubeId" TEXT NOT NULL,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "youtubeSuperChatId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    CONSTRAINT "SuperChat_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MailingList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "contactedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
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

-- CreateIndex
CREATE UNIQUE INDEX "Person_speedrunComId_key" ON "Person"("speedrunComId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_uriName_key" ON "Event"("uriName");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_shortName_key" ON "Tournament"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "KofiDonation_kofiTransactionId_key" ON "KofiDonation"("kofiTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "SuperThanks_youtubeCommentId_key" ON "SuperThanks"("youtubeCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "SuperChat_youtubeSuperChatId_key" ON "SuperChat"("youtubeSuperChatId");

-- CreateIndex
CREATE UNIQUE INDEX "MailingList_email_key" ON "MailingList"("email");
