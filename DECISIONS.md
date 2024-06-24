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


