# RetroTournaments.org

Repository for [RetroTournaments.org](https://www.retrotournaments.org/), the home of the **CRGA** - Competitive Retro Gaming Association and **ARGOS** the technology stack for simultaneous time attack tournaments.

## Setup

Clone the repository and install necessary utilities.
```
git clone https://github.com/RetroTournaments/RetroTournaments.org
cd RetroTournaments.org
```

## Development

To compile the static website run the make script [python3 make.py](./make.py).
This will process the necessary markdown files and assets in [src](./src) into the untracked 'public' folder which is ultimately deployed as a static website.

It may be useful to serve the website locally during development.
One option to allow for live-reloading (which permits not having to press the refresh button in your browser after calling make.py) is to use [live-server.](https://www.npmjs.com/package/live-server)

```
pacman -S npm
npm i -g live-server

cd public
live-server
```

This is all very much in progress.
