#rm -f prisma/dev.db
#rm -rf prisma/migrations/
#
npx prisma migrate dev --name init
npx prisma generate

# npx tsx scripts/update_kofidonations.ts ../RTO-Admin/data/2024_06_24_kofi.csv --commit
# npx tsx scripts/update_superthanks.ts ../RTO-Admin/data/2024_06_24_superthanks.json --commit
npx tsx scripts/seed_initial_results.ts
npx tsx scripts/update_personal_bests.ts
#npx tsx scripts/update_person_rankings.ts
npx tsx scripts/seed_socal.ts
