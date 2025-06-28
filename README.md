# RetroTournaments.org

Repository for [RetroTournaments.org](https://www.retrotournaments.org/).

## Initial setup (do once)

Clone the repository.

```
git clone https://github.com/RetroTournaments/RetroTournaments.org
cd RetroTournaments.org
```

Copy the env file. Set the necessary keys if you have them.
```
cp .env-template .env
```

## Development

Start the database
```
docker compose up
```

Run the development server
```
npm run dev
```

Connect to `http://localhost:5173`

## To perform a database migration
```
npx prisma migrate dev --name init
```
