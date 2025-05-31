import { prisma } from './prisma'

export const getTournamentsTable = async () => {
    return prisma.tournament.findMany({
        select: {
            name: true,
            shortName: true,
            date: true,
            event: true,
            event_order: true,
            _count: {
                select: {
                    standings: true,
                }
            },
        }
    })
}

export const getTournament = async(shortname : string) => {
    return prisma.tournament.findUnique({
        select: {
            name: true,
            event: true,
            shortName: true,
            date: true,
            standings: {
                select: {
                    standing: true,
                    person: {
                        select: {
                            alias: true,
                            crgaid: true
                        }
                    }
                }
            },
            results: {
                select: {
                    roundNumber: true,
                    person: {
                        select: {
                            alias: true,
                            crgaid: true
                        }
                    },
                    elapsedMilliseconds: true,
                    resultCode: true,
                    accruedPoints: true,
                }
            },
        },
        where: {
            shortName: shortname
        },
    })
}

export function tournamentComparator(valueA, valueB, nodeA, nodeB, isInverted) {
    const dateA = new Date(nodeA.data.isodate).getTime();
    const dateB = new Date(nodeB.data.isodate).getTime();
    if (dateA == dateB) {
      if (nodeA.data.event_order < nodeB.data.event_order) {
          return -1;
      } else {
          return 1;
      }
    }
    if (dateA < dateB) {
        return -1;
    } else {
        return 1;
    }
}
