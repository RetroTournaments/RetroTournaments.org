Web stuff sucks.
In my real work I get to use c and c++ - so this is awful.
However, another area of my work uses Remix / Typescript so I should at least become marginally familiar.
Thus the first couple decisions are easy, and based on the ulterior goal of becoming more familiar with these items.

- [Remix](https://remix.run/) as the main app framework.
- [Typescript](https://www.typescriptlang.org/) as the main programming language.


## Setup
Followed the main [Remix Quickstart](https://remix.run/docs/en/main/start/quickstart) guide, kinda roughly.
First priority is to have `npm start dev` launch something that I can quickly iterate with (live reload!).

## Database stuff
Going to use Prisma (another transfer from work) and start with sqlite because I've been using sqlite previously. :|

```
npm install prisma
npx prisma init --datasource-provider sqlite
```

At times to maintain schema format
```
npx prisma format
```

After the schema is written

```
npx prisma migrate dev --name init
```

## Tailwind
Tailwind gives me lots of css stuff.
Seems pretty standard?
Followed instructions [here](https://tailwindcss.com/docs/guides/remix)

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init --ts -p
```

## daisyUI
This is where I think things go off the rails.
It's very difficult to choose a UI library it seems.
And well, We'll try this one for now, but I don't think I'm happy with any of them.
Followed instructions [here](https://daisyui.com/docs/install/)

```
npm i -D daisyui@latest
vim tailwind.config.js
```

## postmark
For delivering emails.
Initial decision because something was needed and this is what work uses!


## AGGrid
Because headless stuff required me to DO STUFF that I don't know how to do.
