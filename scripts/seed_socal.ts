/*
Script to seed the initial results

Uses the `data/data.sql` file that was exported from the original database

    npx tsx scripts/seed_initial_results.ts
*/

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const t1 = await prisma.tournament.create({
        data: {
            name: "Warpzone Invitational 2025 - SMB1 Any% Qualifiers",
            shortName: "WarpzoneInvitational2025AnyQualifiers",
            date: "2025-06-06T14:00:00Z",
            event_order: 1,
            event: {
                connect: {
                    id: 1
                }
            }
        }
    })
    const t2 = await prisma.tournament.create({
        data: {
            name: "Warpzone Invitational 2025 - SMB1 Warpless Qualifiers",
            shortName: "WarpzoneInvitational2025WarplessQualifiers",
            date: "2025-06-06T14:00:00Z",
            event_order: 2,
            event: {
                connect: {
                    id: 2
                }
            }
        }
    })
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
