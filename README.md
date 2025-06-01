# RetroTournaments.org

Repository for [RetroTournaments.org](https://www.retrotournaments.org/).

## Setup

Clone the repository.

```
git clone https://github.com/RetroTournaments/RetroTournaments.org
cd RetroTournaments.org
```

## Development

Initial setup

```
cp env-template .env
# Fill out the relevant keys

npx prisma migrate dev --name init
```

```
npm run dev
```
