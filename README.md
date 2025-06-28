# RetroTournaments.org

Repository for [RetroTournaments.org](https://www.retrotournaments.org/).

## Initial setup (do once)

You will need a suitable development terminal with `docker` `npm` etc.
Then follow the steps below to clone the repository, setup the basic `.env` file, install npm packages, and so on.

```
git clone https://github.com/RetroTournaments/RetroTournaments.org
cd RetroTournaments.org

# Copy the env file. Set the necessary keys if you have them.
cp .env-template .env
# Install the npm packages etc
npm install
# Remove any previous volumes
docker compose down -v
```

Then you need to run the database and initialize it.

```
docker compose up

# and from another terminal
npx prisma migrate dev
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
