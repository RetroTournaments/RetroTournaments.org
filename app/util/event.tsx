import { Link } from "@remix-run/react";
import { prisma } from "./prisma";

export const getEventLeaderboard = async () => {
  return prisma.event.findMany({
    select: {
      name: true,
      tournaments: true,
    },
  });
};

export const getEventsTable = async () => {
  return prisma.event.findMany({
    select: {
      name: true,
      shortName: true,
      uriName: true,
      _count: {
        select: {
          tournaments: true,
          personalBests: true,
          tournamentRoundResults: true,
        },
      },
    },
  });
};

export const getEvent = async (uriname: string) => {
  return prisma.event.findUnique({
    select: {
      name: true,
      uriName: true,
      tournaments: {
        select: {
          name: true,
          date: true,
          shortName: true,
          standings: {
            select: {
              standing: true,
              person: {
                select: {
                  alias: true,
                  crgaid: true,
                },
              },
            },
            where: {
              standing: 1,
            },
          },
          _count: {
            select: {
              standings: true,
              results: true,
            },
          },
        },
      },
      personalBests: {
        select: {
          person: {
            select: {
              alias: true,
              crgaid: true,
            },
          },
          standing: true,
          result: {
            select: {
              elapsedMilliseconds: true,
              roundNumber: true,
            },
          },
          tournament: {
            select: {
              name: true,
              shortName: true,
              date: true,
            },
          },
        },
      },
    },
    where: {
      uriName: uriname,
    },
  });
};

export function eventLink(name: string, uriname: string) {
  return (
    <>
      <Link to={`/events/${uriname}`}>
        {" "}
        <span className="underline"> {name} </span>{" "}
      </Link>
    </>
  );
}
