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
        },
        where: {
            active: true,
            results: {
                some: {}
            }
        },
    })
}


