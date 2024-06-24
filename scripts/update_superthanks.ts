/*
Script to import super thanks JSON data

To obtain the JSON file:
    1. Turn on the developer tools in FireFox ('Ctrl Shift I')
    1. Visit https://studio.youtube.com/, and select 'comments' from the sidebar
    2. Enable the 'From Super Thanks' Filter
    3. In the Developer tools 'Network' tab:
        Filter for 'get_comments'
        Select the largest one
        Click 'Response' enable 'Raw'
        Copy Paste to something like: 'get_comments.json'

Call this script with that file from the root directory. That is: 
    npx tsx scripts/update_superthanks.ts get_comments.json

By default the script will not do anything, except say what it would do if you pass the '--commit' flag
*/

/*
A better idea would be to have this script look at the comment threads on youtube and finds super thanks directly (instead of requiring the above steps to get a json file via clicking).
This is close:
 https://developers.google.com/youtube/v3/docs/commentThreads/list
However after a ton of searching through the api and google etc I eventually found this:
 https://issuetracker.google.com/issues/347509732
Bruh.
*/

import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

async function add_superthanks(youtubeHandle: string, commentId: string, amount: string, commit: bool) {
    // Function to add a super thanks record with the given arguments, if it doesn't already exist
    // Note that this leaves certain relevant fields null, which will have to be handled elsewhere.
    const superThanks = await prisma.superThanks.findUnique({
        where: {
            youtubeCommentId: commentId
        }
    })
    if (superThanks) {
        console.log("Skip: ", commentId)
        if (youtubeHandle != superThanks.youtubeHandle) {
            console.log(" Warning: youtube handle in JSON of ", youtubeHandle, " does not equal the one in the database: ", superThanks.youtubeHandle)
        }
        if (amount != superThanks.amount) {
            console.log(" Warning: amount in JSON of ", amount, " does not equal the one in the database: ", superThanks.amount)
        }
        return
    }

    console.log("Add SuperThanks: ", youtubeHandle, commentId, amount)
    if (commit) {
        const user = await prisma.superThanks.create({
            data: {
                youtubeHandle: youtubeHandle,
                youtubeCommentId: commentId,
                amount: amount
            },
        })
    }
}

async function update_superthanks_via_youtube(commit: bool) {
    const thanksNeedingUpdates = await prisma.superThanks.findMany({
        where: {
            youtubeId: null
        }
    });

    let commentIds = []
    for (const superThanks of thanksNeedingUpdates) {
        commentIds.push(superThanks.youtubeCommentId);
    }

    // https://developers.google.com/youtube/v3/docs/comments/list
    let id = commentIds.join(",")
    console.log("Query youtube api for: ", id)
}

async function main() {
    if (process.argv.length < 3 || process.argv.length > 4) {
        throw new Error("provide path to youtube json data, as 'npx tsx scripts/update_superthanks.ts get_comments.json'")
    }

    const json_path = process.argv[2]
    const data = JSON.parse(fs.readFileSync(json_path, 'utf-8'))

    let commit = false
    if (process.argv.length == 4) {
        if (process.argv[3] === '--commit') {
            commit = true
        } else {
            throw new Error("unknown argument '" + process.argv[3] + "', expected '--commit'")
        }
    }

    // This is brittle, but youtube doesn't give me a proper API!
    for (let comment of data.contents.itemSectionRenderer.contents) {
        if (comment.hasOwnProperty('messageRenderer')) {
            continue
        }

        comment = comment.commentThreadRenderer.comment.commentRenderer

        const youtubeHandle = comment.authorText.simpleText
        const commentId = comment.commentId
        const amount = comment.paidCommentChipRenderer.pdgCommentChipRenderer.chipText.simpleText

        await add_superthanks(youtubeHandle, commentId, amount, commit)
        break
    }

    update_superthanks_via_youtube(commit)
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
