import { prisma } from './prisma'

export const getPersonsTable = async () => {
    return prisma.person.findMany({
        orderBy: [
            {
                alias: 'asc',
            },
        ],
        select: {
            alias: true,
            crgaid: true,
            _count: {
                select: {
                    standings: true,
                    results: true,
                }
            },
        },
        where: {
            active: true,
            crgaid: { not: null }
        },
    })
}


