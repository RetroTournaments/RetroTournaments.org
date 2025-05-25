import { prisma } from './prisma'

export const getEventLeaderboard = async() => {
    return prisma.event.findMany({
        select: {
            name: true,
            tournaments: true
        }
    });
}

