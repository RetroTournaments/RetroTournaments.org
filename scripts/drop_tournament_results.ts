/*
    Script to drop all tournament information

        Event
        Tournament
        TournamentFinalStanding
        TournamentRoundResult
        PersonalBest
        SimpleELO

    I am still cleaning up the old record keeping methods from before the
    website and the new approach with a database, and there was some results
    generated in the in between times.. so there is a lot to do to make this
    better eventually, at which point this script can be removed.

    npx tsx scripts/drop_tournament_results.ts
*/

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.personalBest.deleteMany({})
  await prisma.simpleELO.deleteMany({})
  await prisma.tournamentFinalStanding.deleteMany({})
  await prisma.tournamentRoundResult.deleteMany({})
  await prisma.tournament.deleteMany({})
  await prisma.event.deleteMany({})
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
