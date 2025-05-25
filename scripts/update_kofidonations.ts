/*
Script to import kofi donation CSV data

To obtain the CSV file:
    1. Visit https://ko-fi.com/Manage/, and select 'Payments & Orders' from sidebar
    2. Download the CSV, and place somewhere relevant

Call this script with that file from the root directory. That is: 
    npx tsx scripts/update_kofidonations.ts Transaction_All.csv

By default the script will not do anything, except say what it would do if you pass the '--commit' flag.
*/

import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import { parse } from 'csv-parse/sync'

const prisma = new PrismaClient()

async function main() {
    if (process.argv.length < 3 || process.argv.length > 4) {
        throw new Error("provide path to kofi csv data, as 'npx tsx scripts/update_kofidonations.ts Transaction_All.csv'")
    }

    const csv_path = process.argv[2]

    let commit = false
    if (process.argv.length == 4) {
        if (process.argv[3] === '--commit') {
            commit = true
        } else {
            throw new Error("unknown argument '" + process.argv[3] + "', expected '--commit'")
        }
    }

    const dat = parse(fs.readFileSync(csv_path, 'utf-8'), {columns: true})
    for (const record of dat) {
        let kofi = await prisma.kofiDonation.findUnique({
            where: {
                kofiTransactionId: record.TransactionId
            }
        })
        if (kofi) {
            continue
        }

        console.log("Add KofiDonation: ", record.From, record.TransactionId, record.Received, record.Currency)
        if (!commit) {
            continue
        }
        let person = await prisma.person.findUnique({
            where: {
                kofiDisplayName: record.From
            }
        })
        if (!person) {
            person = await prisma.person.create({
                data: {
                    alias: record.From,
                    kofiDisplayName: record.From,
                },
            })
        }

        // don't ask
        const unixtime = Date.parse(record[Object.keys(record)[0]])
        const timestamp = new Date(unixtime).toISOString()

        kofi = await prisma.kofiDonation.create({
            data: {
                personId: person.id,
                buyerEmail: record.BuyerEmail,
                from: record.From,
                createdAt: timestamp,
                kofiTransactionId: record.TransactionId,
                amount: record.Received,
                currency: record.Currency,
            },
        });
    }

    if (!commit) {
        console.log("Rerun with '--commit' to perform changes")
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
