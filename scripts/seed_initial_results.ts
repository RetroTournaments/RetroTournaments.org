/*
Script to seed the initial results

Uses the `data/data.sql` file that was exported from the original database

    npx tsx scripts/seed_initial_results.ts
*/

import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

function get_table_values(query) {
  const regex = /INSERT INTO (\w+) VALUES\((.+)\);/;
  const match = query.match(regex);

  if (!match) {
    throw new Error("Invalid query format");
  }

  const table = match[1];
  const valuesString = match[2];

  const values = valuesString.split(",").map((value) => {
    value = value.trim();
    if (value.startsWith("'") && value.endsWith("'")) {
      return value.slice(1, -1).replace(/''/g, "'");
    }
    if (!isNaN(Number(value))) {
      return Number(value);
    }
    return value;
  });

  return { table, values };
}

function to_shortname(name: string) {
  return name.replace(/[\s\-%]/g, "");
}

async function main() {
  let person_id = {};
  let event_id = {};
  let tournament_id = {};
  let tournament_event_id = {};

  const datasql = fs.readFileSync("data/data.sql", "utf-8");
  for (const line of datasql.split("\n")) {
    if (line.length == 0) {
      return;
    }

    const result = get_table_values(line);
    if (result.table == "person") {
      const crgaid = result.values[1];
      let person = await prisma.person.findUnique({
          where: {
              crgaid: crgaid
          }
      });
      if (person === null) {
          person = await prisma.person.create({
            data: {
              alias: result.values[2],
              crgaid: crgaid
            },
          });
      }
      person_id[result.values[0]] = person.id;
      console.log("Add Person: ", person.alias, person.crgaid);
    } else if (result.table == "event") {
      const event = await prisma.event.create({
        data: {
          name: result.values[2],
          shortName: result.values[3],
          uriName: to_shortname(result.values[3]),
        },
      });
      event_id[result.values[0]] = event.id;
      console.log("Add Event: ", event.name, event.shortName);
    } else if (result.table == "tournament") {
      const tourney = await prisma.tournament.create({
        data: {
          name: result.values[3],
          shortName: to_shortname(result.values[3]),
          date: result.values[4] + "T08:00:00Z",
          event_order: result.values[5],
          event: {
            connect: {
              id: event_id[result.values[1]],
            },
          },
        },
      });
      tournament_id[result.values[0]] = tourney.id;
      tournament_event_id[result.values[0]] = event_id[result.values[1]];
      console.log("Add Tournament: ", tourney.name);
    } else if (result.table == "tournament_final_standing") {
      const stnding = await prisma.tournamentFinalStanding.create({
        data: {
          standing: result.values[3],
          person: {
            connect: {
              id: person_id[result.values[2]],
            },
          },
          tournament: {
            connect: {
              id: tournament_id[result.values[1]],
            },
          },
        },
      });
    } else if (result.table == "tournament_round_result") {
      // Transform old result code into new result code to facilitate
      // sorting. Yeah...
      let newresultcode = result.values[4] + 1;
      if (newresultcode == 1) {
        newresultcode = 0;
      } else if (newresultcode == 4) {
        newresultcode = 1;
      }

      const rnd = await prisma.tournamentRoundResult.create({
        data: {
          tournament: {
            connect: {
              id: tournament_id[result.values[1]],
            },
          },
          person: {
            connect: {
              id: person_id[result.values[2]],
            },
          },
          event: {
            connect: {
              id: tournament_event_id[result.values[1]],
            },
          },
          roundNumber: result.values[3],
          resultCode: newresultcode,
          elapsedMilliseconds: result.values[5],
          accruedPoints: result.values[6],
        },
      });
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
