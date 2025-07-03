/*
Script to update personal bests, which only change after new tournament results
are added. It will be necessary to automate calling these scripts when the time
comes.

    npx tsx scripts/update_personal_bests.ts
*/

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // This is almost there, but due to:
  //  https://github.com/prisma/prisma/discussions/6517
  // I don't think I can actually do it.
  //const results = await prisma.tournamentRoundResult.groupBy({
  //    by: ['eventId', 'personId'],
  //    _min: {
  //        elapsedMilliseconds: true,
  //    },
  //    where: {
  //        resultCode: 0
  //    },
  //})
  await prisma.personalBest.deleteMany({})
  const results = await prisma.tournamentRoundResult.findMany({
    select: {
      id: true,
      tournamentId: true,
      eventId: true,
      personId: true,
      elapsedMilliseconds: true,
    },
    where: {
      resultCode: 0,
    },
  });

  let personBests = {};
  for (let result of results) {
    if (result.personId in personBests) {
      if (result.eventId in personBests[result.personId]) {
        if (
          result.elapsedMilliseconds <
          personBests[result.personId][result.eventId].elapsedMilliseconds
        ) {
          personBests[result.personId][result.eventId] = result;
        }
      } else {
        personBests[result.personId][result.eventId] = result;
      }
    } else {
      personBests[result.personId] = {};
      personBests[result.personId][result.eventId] = result;
    }
  }

  let records = [];
  for (let q of Object.values(personBests)) {
    for (let v of Object.values(q)) {
      records.push(v);
    }
  }

  records = records.sort((a, b) => {
    if (a.eventId == b.eventId) {
      return a.elapsedMilliseconds - b.elapsedMilliseconds;
    }
    return a.eventId - b.eventId;
  });

  let lastEvent = undefined;

  let standing = 0;
  let standinginc = 1;
  let lastElapsed = undefined;
  for (let rec of records) {
    if (rec.eventId != lastEvent) {
      lastEvent = rec.eventId;

      standing = 1;
      standinginc = 1;
      lastElapsed = undefined;
    }

    let v = await prisma.personalBest.create({
      data: {
        person: {
          connect: {
            id: rec.personId,
          },
        },
        event: {
          connect: {
            id: rec.eventId,
          },
        },
        tournament: {
          connect: {
            id: rec.tournamentId,
          },
        },
        result: {
          connect: {
            id: rec.id,
          },
        },
        standing: standing,
      },
    });

    if (rec.elapsedMilliseconds == lastElapsed) {
      standinginc += 1;
    } else {
      standing += standinginc;
      standinginc = 1;
      lastElapsed = rec.elapsedMilliseconds;
    }
  }
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
