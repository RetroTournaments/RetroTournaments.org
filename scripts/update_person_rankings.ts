/*
Script to update person rankings, which only change after new tournament
results are added. It will be necessary to automate calling these scripts when
the time comes.

We are currently using the Simple multiplayer ELO method from Tom Kerrigan:
    http://www.tckerrigan.com/Misc/Multiplayer_Elo/

But with a slight modification for draws / DNFs - which I am NOT confident
about.

This was originally implemented by Slither (Thanks!)

    npx tsx scripts/update_person_rankings.ts
*/

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

function process_round(rnd, rankings) {
    rnd.results = rnd.results.sort((a, b) => {
        if (a.resultCode == b.resultCode) {
            return a.elapsedMilliseconds - b.elapsedMilliseconds
        }
        return a.resultCode - b.resultCode;
    });

    did_not_finishers = []
    grouped_finishers = []

    let last_result = undefined;
    for (let result of rnd.results) {
        console.log(" ", result.personId, result.resultCode, result.elapsedMilliseconds)

        last_result = result;
    }


    //console.log(rnd.tournamentId, rnd.roundNumber, rnd.eventId, rnd.results.length);
}

async function main() {
    const results = await prisma.tournamentRoundResult.findMany({
        select: {
            tournamentId: true,
            eventId: true,
            personId: true,
            resultCode: true,
            elapsedMilliseconds: true,
            roundNumber: true,
        },
        orderBy: [
            {tournamentId: 'asc'},
            {roundNumber: 'asc'},
        ],
        where: {
            NOT: {
                resultCode: 3
            }
        },
    });

    let rankings = {}

    let this_round = {
        tournamentId: null,
        roundNumber: null,
        eventId: null,
        results: [],
    };
    for (let result of results) {
        if (result.tournamentId == this_round.tournamentId &&
            result.roundNumber == this_round.roundNumber) {
            this_round.results.push(result);
        } else {
            if (this_round.tournamentId != null) {
                process_round(this_round, rankings);
            }
            this_round = {
                tournamentId: result.tournamentId,
                roundNumber: result.roundNumber,
                eventId: result.eventId,
                results: [result],
            };
        }
    }
    process_round(this_round, rankings);

    console.log(rankings)



}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
