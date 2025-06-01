-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "crgaid" TEXT,
    "alias" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "discordUsername" TEXT,
    "youtubeId" TEXT,
    "kofiDisplayName" TEXT,
    "speedrunComId" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "topContributor" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "uriName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "event_order" INTEGER NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentFinalStanding" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "personId" TEXT NOT NULL,
    "standing" INTEGER NOT NULL,

    CONSTRAINT "TournamentFinalStanding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentRoundResult" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "personId" TEXT NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "resultCode" INTEGER NOT NULL,
    "elapsedMilliseconds" INTEGER NOT NULL,
    "accruedPoints" INTEGER NOT NULL,

    CONSTRAINT "TournamentRoundResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalBest" (
    "id" SERIAL NOT NULL,
    "personId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "standing" INTEGER NOT NULL,
    "tournamentRoundResultId" INTEGER NOT NULL,

    CONSTRAINT "PersonalBest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimpleELO" (
    "id" SERIAL NOT NULL,
    "personId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "standing" INTEGER NOT NULL,
    "simpleELO" INTEGER NOT NULL,

    CONSTRAINT "SimpleELO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" SERIAL NOT NULL,
    "personId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KofiDonation" (
    "id" SERIAL NOT NULL,
    "personId" TEXT,
    "buyerEmail" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kofiTransactionId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "KofiDonation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperThanks" (
    "id" SERIAL NOT NULL,
    "personId" TEXT,
    "youtubeId" TEXT,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "youtubeCommentId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "SuperThanks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperChat" (
    "id" SERIAL NOT NULL,
    "personId" TEXT,
    "youtubeId" TEXT NOT NULL,
    "youtubeHandle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "youtubeSuperChatId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "SuperChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailingList" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "contactedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MailingList_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentFinalStanding" ADD CONSTRAINT "TournamentFinalStanding_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentFinalStanding" ADD CONSTRAINT "TournamentFinalStanding_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentRoundResult" ADD CONSTRAINT "TournamentRoundResult_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentRoundResult" ADD CONSTRAINT "TournamentRoundResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentRoundResult" ADD CONSTRAINT "TournamentRoundResult_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalBest" ADD CONSTRAINT "PersonalBest_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalBest" ADD CONSTRAINT "PersonalBest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalBest" ADD CONSTRAINT "PersonalBest_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalBest" ADD CONSTRAINT "PersonalBest_tournamentRoundResultId_fkey" FOREIGN KEY ("tournamentRoundResultId") REFERENCES "TournamentRoundResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimpleELO" ADD CONSTRAINT "SimpleELO_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimpleELO" ADD CONSTRAINT "SimpleELO_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KofiDonation" ADD CONSTRAINT "KofiDonation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuperThanks" ADD CONSTRAINT "SuperThanks_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuperChat" ADD CONSTRAINT "SuperChat_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
